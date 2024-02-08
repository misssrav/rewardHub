import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // Your Firebase config here
    apiKey: "AIzaSyDr5Kj4bmo6nDCLYV8rT9s7Yf1D9flavZM",
    authDomain: "rewardhub-9fe56.firebaseapp.com",
    projectId: "rewardhub-9fe56",
    storageBucket: "rewardhub-9fe56.appspot.com",
    messagingSenderId: "722550771934",
    appId: "1:722550771934:web:bc3b9a7ac04b4ea4fd324f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

// // import * as firebase from "firebase/app";
// import { initializeApp } from 'firebase/app';

// import firebase from 'firebase'
// require('firebase/auth')

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDr5Kj4bmo6nDCLYV8rT9s7Yf1D9flavZM",
//   authDomain: "rewardhub-9fe56.firebaseapp.com",
//   projectId: "rewardhub-9fe56",
//   storageBucket: "rewardhub-9fe56.appspot.com",
//   messagingSenderId: "722550771934",
//   appId: "1:722550771934:web:bc3b9a7ac04b4ea4fd324f"
// };

// // Initialize Firebase
// // let app;
// // if (firebase.apps.length === 0) {
// //     app = firebase.initializeApp({});
// // }
// // // if(firebase.apps.length === 0){
// // //     app = firebase.initializeApp(firebaseConfig);
// // else{
// //     app = firebase.app()
// // }

// const app = initializeApp(firebaseConfig);
// const auth = firebase.auth()
// export {auth};

