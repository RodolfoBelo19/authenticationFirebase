import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBIPOxSVCN75yukpaPkxphLB54U--PChr4",
    authDomain: "authenticationfirebase-98f19.firebaseapp.com",
    projectId: "authenticationfirebase-98f19",
    storageBucket: "authenticationfirebase-98f19.appspot.com",
    messagingSenderId: "327713334013",
    appId: "1:327713334013:web:cfbd78c7e4bbebe3479494",
    measurementId: "G-TCPN3BD4WB"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const providerGoogle = new GoogleAuthProvider();
providerGoogle.setCustomParameters({ prompt: 'select_account' });
