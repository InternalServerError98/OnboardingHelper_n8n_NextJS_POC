import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA6WjLa6JXASWEXHoJd_KUgMky669CAzX8",
  authDomain: "onboardinghelper-b4281.firebaseapp.com",
  projectId: "onboardinghelper-b4281",
  storageBucket: "onboardinghelper-b4281.firebasestorage.app",
  messagingSenderId: "451483337667",
  appId: "1:451483337667:web:2c0df1ba465e78f946f376",
  measurementId: "G-CXW8MXWRV8"
};


const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);


export {db};



