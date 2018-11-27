import firebase from "firebase";

/**
 * @description Configures store with all the reducers
 * @returns {object} creates and returns store
 */
export default function configureFirebase() {
    const config = {
        apiKey: "AIzaSyCuNofa9LGMb_Wt22BNn6czboC0j0UZTr0",
        authDomain: "react-fest.firebaseapp.com",
        databaseURL: "https://react-fest.firebaseio.com",
        projectId: "react-fest",
        storageBucket: "react-fest.appspot.com",
        messagingSenderId: "163419432957"
      };
      firebase.initializeApp(config);
}