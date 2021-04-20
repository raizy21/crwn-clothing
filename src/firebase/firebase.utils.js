import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCgVJHHEI15ZsqrvwwFaWsTshy5xaV_NcQ",
    authDomain: "crwn-db-7a9b3.firebaseapp.com",
    projectId: "crwn-db-7a9b3",
    storageBucket: "crwn-db-7a9b3.appspot.com",
    messagingSenderId: "614779938826",
    appId: "1:614779938826:web:105936dc7ebb76a893d7f3",
    measurementId: "G-1YF0LXX00Z"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if ( !userAuth ) return;

  const userRef= firestore.doc(`user/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const  {displayName, email} = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email, 
        createAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message);
    }   
  }

  return userRef;
};

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promp: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
