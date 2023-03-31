import { initializeApp } from 'firebase/app';

import { 
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch
} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyColZGBOV5AaTSKrLb14wKukiZIPspDJdA",
    authDomain: "wurdywrites.firebaseapp.com",
    projectId: "wurdywrites",
    storageBucket: "wurdywrites.appspot.com",
    messagingSenderId: "974324322231",
    appId: "1:974324322231:web:df5c45a79cda0f124b2232",
    measurementId: "G-RFDX7JC6H9"
};

const firebase = initializeApp(firebaseConfig);

export const db = getFirestore(firebase);
export const seeDocument = async (documentKey) => {
    const docRef = doc(db, 'Subscribers', documentKey);
    const docSnap = await getDoc(docRef);
    console.log(docSnap);
}
export const addDocument = async (email) => {
    await setDoc(doc(db, 'Subscribers1', email), {
        'e-mail': email
    })

}

export default firebase;
