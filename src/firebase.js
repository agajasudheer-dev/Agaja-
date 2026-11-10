// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAp6GFR9D_6yicOtIvX_8-e4PJt5L9Dqw",
  authDomain: "agaja-ts.firebaseapp.com",
  projectId: "agaja-ts",
  storageBucket: "agaja-ts.firebasestorage.app",
  messagingSenderId: "791986234096",
  appId: "1:791986234096:web:43c2ba22813665b67fd835",
  measurementId: "G-HHVQG2J3DW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Analytics conditionally
export let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  }).catch(() => {
    // Analytics not supported in this environment
  });
}
