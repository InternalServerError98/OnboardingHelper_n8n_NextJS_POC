import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.FIREBASE_CONFIG_apiKey as string,
  authDomain: process.env.FIREBASE_CONFIG_authDomain as string,
  projectId: process.env.FIREBASE_CONFIG_projectId as string,
  storageBucket: process.env.FIREBASE_CONFIG_storageBucket as string,
  messagingSenderId: process.env.FIREBASE_CONFIG_messagingSenderId as string,
  appId: process.env.FIREBASE_CONFIG_appId as string,
  measurementId: process.env.FIREBASE_CONFIG_measurementId as string
};


const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);


export {db};



