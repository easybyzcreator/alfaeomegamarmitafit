import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdjLrnifYJpNAX44kSdIhWJ3G97H6DNF0",
  authDomain: "app-alfa-e-omega.firebaseapp.com",
  projectId: "app-alfa-e-omega",
  storageBucket: "app-alfa-e-omega.firebasestorage.app",
  messagingSenderId: "544237630903",
  appId: "1:544237630903:web:c4c1032c288c3ffee46432",
  measurementId: "G-9475V3EDGC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export let analytics: any = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      try {
        analytics = getAnalytics(app);
      } catch (e) {
        console.warn("Analytics not initialized:", e);
      }
    }
  }).catch(() => {});
}

