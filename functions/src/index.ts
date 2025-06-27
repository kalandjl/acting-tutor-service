// // Import necessary Firebase functions
// import * as functions from 'firebase-functions';
// import * as admin from 'firebase-admin';
// import { onDocumentWritten } from 'firebase-functions/firestore';

// const logger = functions.logger

// // Initialize Firebase Admin SDK
// // This allows the Cloud Function to interact with Firestore and other Firebase services
// admin.initializeApp();

// // Get a reference to the Firestore database
// const db = admin.firestore();

// /**
//  * Interface for the data expected from the client-side booking form.
//  * This provides type safety for the incoming data.
//  */
// interface BookingFormData {
//   name: string;
//   email: string;
//   phone?: string; // Optional field
//   preferredDateTime?: string; // Optional field
//   message: string;
//   website?: string; // Honeypot field, optional as it should be hidden
//   recaptchaToken?: string; // Uncomment if you integrate reCAPTCHA
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
//   status: 'pending' | 'confirmed' | 'cancelled'; // Example statuses
//   // recaptchaScore?: number; // Uncomment if you store reCAPTCHA score
// }

// /**
//  * Firebase Cloud Function to handle booking form submissions.
//  * This function is an HTTPS callable function, meaning it can be invoked directly from your client-side code.
//  *
//  * @param {functions.https.CallableRequest<BookingFormData>} request - The CallableRequest object containing data from the client.
//  * @param {functions.https.CallableContext} context - The context of the function call (e.g., authentication info, invocation ID).
//  */
// exports.submitBooking = functions.https.onCall(async (request: functions.https.CallableRequest<BookingFormData>, context) => {
//   // Access the actual form data from the 'data' property of the request object
//   const formData = request.data;

//   // Check if required fields are present and not empty.
//   // This is a minimal check; you'd want more robust validation (e.g., email format, phone number regex).
//   const { name, email, phone, preferredDateTime, message, website } = formData; // 'website' is the honeypot field

//   if (!name || !email || !message) {
//     console.error('Missing required fields:', { name, email, message });
//     throw new functions.https.HttpsError(
//       'invalid-argument',
//       'Please fill in all required fields (Name, Email, Message).'
//     );
//   }

//   // --- 2. Honeypot Check (Server-Side) ---
//   // If the honeypot field 'website' has any value, it's likely a bot.
//   if (website) {
//     console.warn('Honeypot field was filled. Likely a bot submission. Data:', formData);
//     throw new functions.https.HttpsError(
//       'permission-denied', // Using permission-denied to indicate an unauthorized/suspicious request
//       'Submission rejected: suspicious activity detected.'
//     );
//   }

//   // reCAPTCHA verification
//   const recaptchaToken = formData.recaptchaToken;
//   if (!recaptchaToken) {
//     throw new functions.https.HttpsError('unauthenticated', 'reCAPTCHA token missing.');
//   }
  
//   try {
//     // Use environment variable for the secret
//     const secretValue = process.env.RECAPTCHA_SECRET;
//     if (!secretValue) {
//       throw new functions.https.HttpsError('internal', 'reCAPTCHA secret not configured.');
//     }
    
//     const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//       body: `secret=${secretValue}&response=${recaptchaToken}`
//     });
//     const recaptchaJson = await recaptchaResponse.json();
//     if (!recaptchaJson.success || recaptchaJson.score < 0.5) { // Adjust score threshold as needed
//       console.warn('reCAPTCHA verification failed or score too low:', recaptchaJson);
//       throw new functions.https.HttpsError('permission-denied', 'reCAPTCHA verification failed.');
//     }
//   } catch (error) {
//     console.error('Error verifying reCAPTCHA:', error);
//     throw new functions.https.HttpsError('internal', 'Could not verify reCAPTCHA.');
//   }

//   // --- 5. Prepare Data for Firestore ---
//   const timestamp = admin.firestore.FieldValue.serverTimestamp(); // Get server-side timestamp
//   const bookingData: FirestoreBookingData = {
//     name: name,
//     email: email,
//     phone: phone || null, // Store as null if not provided
//     preferredDateTime: preferredDateTime || null,
//     message: message,
//     submittedAt: timestamp,
//     // Add any other relevant metadata
//     status: 'pending', // Initial status
//     // You might want to store the reCAPTCHA score if you use it
//   };

//   try {
//     // --- 6. Write Data to Firestore ---
//     // We'll store bookings in a collection named 'bookingRequests'.
//     // The add() method adds a new document with an auto-generated ID.
//     const docRef = await db.collection('contact').add(bookingData);
//     console.log('Booking request successfully added with ID:', docRef.id);

//     // --- 7. Return Success Response ---
//     return { success: true, message: 'Your booking inquiry has been sent successfully! Nicole will get back to you soon.', docId: docRef.id };

//   } catch (error: any) { // Use 'any' or more specific type if known for error object
//     console.error('Error adding booking request to Firestore:', error);
//     // Throw an HttpsError to send a structured error message back to the client
//     throw new functions.https.HttpsError(
//       'internal',
//       'Failed to submit booking request. Please try again later.',
//       error.message // Optional: include original error message for debugging
//     );
//   }
// });

// exports.twillioFirestoreReroute = onDocumentWritten("contact/{docId}", async (event) => {
//   const change: any = event.data;

//   if (!change) {
//     logger.error("No change data found.");
//     return;
//   }

//   const afterDoc = change.after;

//   if (afterDoc.exists) {
//     const messageData = afterDoc.data();

//     if (messageData) {
//       try {
//         const smsRef1 = admin.firestore().collection("sms").doc();
//         const smsRef2 = admin.firestore().collection("sms").doc();

//         // First SMS
//         await smsRef1.set({
//           ...messageData,
//           createdAt: admin.firestore.FieldValue.serverTimestamp(),
//           to: "+12366680975",
//           body: 
//           `New message from "${messageData.name}", "${messageData.email}" Message: "${messageData.message}"`
//         });

//         // Second SMS (note: you have an empty "to" field here - you might want to fix this)
//         await smsRef2.set({
//           ...messageData,
//           createdAt: admin.firestore.FieldValue.serverTimestamp(),
//           to: "", // This is empty - you might want to add a phone number here
//           body: 
//           `New message from "${messageData.name}", "${messageData.email}" Message: "${messageData.message}"`
//         });

//         logger.info(
//           `Documents added to 'sms' collection with IDs: ${smsRef1.id}, ${smsRef2.id}`
//         );
//       } catch (error) {
//         logger.error("Error adding document to 'sms' collection:", error);
//       }
//     }
//   } else {
//     logger.info("Document was deleted or does not exist after the change.");
//   }
// });