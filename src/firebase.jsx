

import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyDd0_zMvzyi7TTV_ERQdh9GSKdJE9FT7wQ",
  authDomain: "mytime-client.firebaseapp.com",
  databaseURL: "https://mytime-client.firebaseio.com",
  projectId: "mytime-client",
  storageBucket: "mytime-client.appspot.com",
  messagingSenderId: "903370992041",
  appId: "1:903370992041:web:42a0b196938ee29030bcb8",
  measurementId: "G-3X27VK8LLS"
})

export const auth = app.auth()
export default app