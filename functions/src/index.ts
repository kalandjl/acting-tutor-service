// // Import v2 functions and parameter types
// import { onCall, HttpsError } from "firebase-functions/v2/https";
// import { onDocumentWritten } from "firebase-functions/v2/firestore";
// import { defineString } from "firebase-functions/params";
// import * as admin from "firebase-admin";
// import * as logger from "firebase-functions/logger";
// import fetch from "node-fetch"; // You might need to install this: npm install node-fetch

// // Initialize Firebase Admin SDK
// admin.initializeApp();
// const db = admin.firestore();

// // --- V2 SECRET/PARAMETER DEFINITION ---
// // Define your secrets here. When you deploy, Firebase will prompt you to enter these values.
// // For local testing, you will create a .env file.
// const recaptchaSecret = defineString("RECAPTCHA_SECRET");
// const twilioAccountSid = defineString("TWILIO_ACCOUNT_SID");
// const twilioAuthToken = defineString("TWILIO_AUTH_TOKEN");
// const twilioPhoneNumber = defineString("TWILIO_PHONE_NUMBER");

// // Twilio client initialization
// const twilio = require("twilio");
// // The client is initialized inside the function now to access the secret values
// // let twilioClient; // It's better to initialize it inside the function where it's used.

// /**
//  * Interface for the data expected from the client-side booking form.
//  */
// interface BookingFormData {
//   name: string;
//   email: string;
//   phone?: string;
//   preferredDateTime?: string;
//   message: string;
//   website?: string; // Honeypot
//   recaptchaToken?: string;
// }

// /**
//  * Interface for the data structure to be stored in Firestore.
//  */
// interface FirestoreBookingData {
//   name: string;
//   email: string;
//   phone: string | null;
//   preferredDateTime: string | null;
//   message: string;
//   submittedAt: admin.firestore.FieldValue;
//   status: 'pending' | 'confirmed' | 'cancelled';
// }

// /**
//  * V2 HTTPS Callable Function to handle booking form submissions.
//  */
// export const submitBooking = onCall<BookingFormData>(async (request) => {
//   const { name, email, phone, preferredDateTime, message, website, recaptchaToken } = request.data;

//   // 1. Validation
//   if (!name || !email || !message) {
//     logger.error('Missing required fields:', { name, email, message });
//     throw new HttpsError('invalid-argument', 'Please fill in all required fields (Name, Email, Message).');
//   }

//   // 2. Honeypot Check
//   if (website) {
//     logger.warn('Honeypot field was filled. Likely a bot.', { data: request.data });
//     throw new HttpsError('permission-denied', 'Submission rejected: suspicious activity detected.');
//   }

//   // 3. reCAPTCHA Verification
//   if (!recaptchaToken) {
//     throw new HttpsError('unauthenticated', 'reCAPTCHA token missing.');
//   }

//   try {
//     // Access the secret using .value()
//     const secretValue = recaptchaSecret.value();
//     const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//       body: `secret=${secretValue}&response=${recaptchaToken}`
//     });
//     const recaptchaJson: any = await recaptchaResponse.json();

//     if (!recaptchaJson.success || recaptchaJson.score < 0.5) {
//       logger.warn('reCAPTCHA verification failed or score too low:', recaptchaJson);
//       throw new HttpsError('permission-denied', 'reCAPTCHA verification failed.');
//     }
//   } catch (error) {
//     logger.error('Error verifying reCAPTCHA:', error);
//     throw new HttpsError('internal', 'Could not verify reCAPTCHA.');
//   }

//   // 4. Prepare Data for Firestore
//   const bookingData: FirestoreBookingData = {
//     name,
//     email,
//     phone: phone || null,
//     preferredDateTime: preferredDateTime || null,
//     message,
//     submittedAt: admin.firestore.FieldValue.serverTimestamp(),
//     status: 'pending',
//   };

//   // 5. Write Data to Firestore
//   try {
//     const docRef = await db.collection('contact').add(bookingData);
//     logger.log('Booking request successfully added with ID:', docRef.id);
//     return { success: true, message: 'Your booking inquiry has been sent successfully!', docId: docRef.id };
//   } catch (error: any) {
//     logger.error('Error adding booking request to Firestore:', error);
//     throw new HttpsError('internal', 'Failed to submit booking request.', error.message);
//   }
// });


// /**
//  * V2 Firestore Trigger to send SMS via Twilio.
//  */
// export const twillioFirestoreReroute = onDocumentWritten("contact/{docId}", async (event) => {
//   // Only proceed if a new document was created
//   if (!event.data?.after.exists || event.data?.before.exists) {
//     logger.log("Not a new document creation, exiting.");
//     return;
//   }
  
//   const messageData = event.data.after.data();
//   if (!messageData) {
//       logger.error("No data found in new document.");
//       return;
//   }

//   try {
//     // Initialize the client here using the secret values
//     const twilioClient = twilio(twilioAccountSid.value(), twilioAuthToken.value());

//     const messageBody = `Booking from "${messageData.name}", "${messageData.email}"${messageData.phone ? `, "${messageData.phone}"` : ''}. MESSAGE: "${messageData.message}. PREFERED DATE: "${messageData.preferredDateTime}""`;    const fromNumber = twilioPhoneNumber.value();

//     // Define recipient numbers
//     const recipientNumbers = ["+12366680975", "+12366680975"]; // Replace with your actual numbers

//     const smsPromises = recipientNumbers.map(toNumber => {
//         return twilioClient.messages.create({
//             body: messageBody,
//             from: fromNumber,
//             to: toNumber
//         }).then((message: any) => {
//             logger.info(`SMS sent successfully to ${toNumber}. SID: ${message.sid}`);
//             // Optional: Log to Firestore
//             return db.collection("sms_logs").add({
//               ...messageData,
//               twilioSid: message.sid,
//               sentAt: admin.firestore.FieldValue.serverTimestamp(),
//               to: toNumber,
//               status: message.status,
//               body: messageBody
//             });
//         });
//     });

//     await Promise.all(smsPromises);
//     logger.info("All SMS messages processed.");

//   } catch (error) {
//     logger.error("Error sending SMS via Twilio:", error);
//   }
// });