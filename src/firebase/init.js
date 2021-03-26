import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: 'AIzaSyA6O58--laSGhdD3q80ls09TZXeO8h4VCM',
  authDomain: 'super-effective-eea44.firebaseapp.com',
  projectId: 'super-effective-eea44',
  storageBucket: 'super-effective-eea44.appspot.com',
  messagingSenderId: '542180392518',
  appId: '1:542180392518:web:d711eeb66744cba0199447',
  measurementId: 'G-NZ6Y37QFYM'
}

firebase.initializeApp(config)
