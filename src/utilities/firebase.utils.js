import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDQpkHFSW9w0OfEpTvwHL7LMTHRv1VexNs",
  authDomain: "e-commerce-site-fb6e3.firebaseapp.com",
  projectId: "e-commerce-site-fb6e3",
  storageBucket: "e-commerce-site-fb6e3.appspot.com",  ////given directly from firebase
  messagingSenderId: "535965629358",
  appId: "1:535965629358:web:371d2d5a7bb96e54f4e63f"
};


const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account"
})


//creating an auth instance
export const auth = getAuth();
auth.useDeviceLanguage();

//setting up auth providers
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithFacebookPopup = () => signInWithPopup(auth, facebookProvider);
export const signInWithGitHubPopup = () => signInWithPopup(auth, githubProvider);

//creating a firestore db instance
export const db = getFirestore();


export const createUserDocFromAuth = async (user) => {

  //doc() takes in the firestore instance, 'const db', from above
  //then a 'collection' name (essentially a table name in SQL)
  //then a 'path segment'. Here it is user.uid. The user param is
  //coming from signInWithPopup() which returns the signed
  //in user along with the provider's credential
  //** user, if I was signing in, would be Paul Sisson
  //and then google's version of me. (email, my uid in their system, etc)**
  const userDocRef = doc(db, 'users', user.uid)
  
  //so basically userDocRef ^^^ is a query statement and it returns 
  //what you've asked for from the location you specify
  //in our case:
  // -- db (our Firestore database from our getFirestore() call)
  // -- 'users' (the SQL equivalent of table name)
  // -- user.uid (the SQL equivalent of WHERE id = user.id)

  //getDoc() is basically a query to the database to see
  //if a user with that uid exists already
  //if not, the function returns an error
  const userSnapshot = await getDoc(userDocRef);

  //here we are saying if userSnapshot returns an error
  //create a new user in our database from the information
  if(!userSnapshot.exists()) {
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName: displayName,
        email: email,
        createdAt: createdAt
      });
    } catch (err) {
      console.error('error creating user' , err.message)
    }
  }

  return userDocRef;
}







