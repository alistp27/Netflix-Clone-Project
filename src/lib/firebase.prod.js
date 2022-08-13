// import { seedDatabase } from "../seed";
import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCleXXZBsO16OwpmEXCt8DrXRf25w2e-3c",
    authDomain: "netflix-clone-d57d4.firebaseapp.com",
    projectId: "netflix-clone-d57d4",
    storageBucket: "netflix-clone-d57d4.appspot.com",
    messagingSenderId: "982512094355",
    appId: "1:982512094355:web:bcd1977fa193d34898d166"
};

// Initialize Firebase
const firebase = Firebase.initializeApp(firebaseConfig);
// seedDatabase(firebase)
export { firebase }