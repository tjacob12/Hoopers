import firebase from 'firebase';
import 'firebase/firestore';

class Firebase {
  static self;
  static instance() {
    if (!Firebase.self) { Firebase.self = new Firebase(); }
    return Firebase.self;
  }

  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyC374Y_ZhejmTzgFE5A2u-fEY_K93b4Wb4",
      authDomain: "hoopers-84e31.firebaseapp.com",
      projectId: "hoopers-84e31",
      storageBucket: "hoopers-84e31.appspot.com",
      messagingSenderId: "923179323239",
      appId: "1:923179323239:web:ae9ca5bf21dec1fea4a9c2",
      measurementId: "G-EFWL4G2E7D"
    };
    this.firebase = firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    this.db = this.firebase.firestore();
    this.storage = this.firebase.storage();
  }
}

export default Firebase;


