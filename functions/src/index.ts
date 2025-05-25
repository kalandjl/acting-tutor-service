// import {onDocumentWritten} from "firebase-functions/v2/firestore";
// import * as admin from "firebase-admin";
// import {logger} from "firebase-functions";

// // Initialize Firebase Admin SDK
// admin.initializeApp();

// exports.twillioFirestoreReroute = onDocumentWritten("messages/{docId}", async (event) => {
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
//         const smsRef = admin.firestore().collection("sms").doc();

//         await smsRef.set({
//           ...messageData,
//           createdAt: admin.firestore.FieldValue.serverTimestamp(),
//           to: "+12366680975",
//           body: 
//           `New message from "${messageData.name}", "${messageData.email}" Message: "${messageData.message}"`
//         });
//         await smsRef.set({
//           ...messageData,
//           createdAt: admin.firestore.FieldValue.serverTimestamp(),
//           to: "",
//           body: 
//           `New message from "${messageData.name}", "${messageData.email}"Message: "${messageData.message}"`
//         });

//         logger.info(
//           `Document added to 'sms' collection with ID: ${smsRef.id}`
//         );
//       } catch (error) {
//         logger.error("Error adding document to 'sms' collection:", error);
//       }
//     }
//   } else {
//     logger.info("Document was deleted or does not exist after the change.");
//   }
// });


