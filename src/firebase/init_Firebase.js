import { initializeApp } from 'firebase/app'
// import { getDatabase } from 'firebase/database'

const apiKey = import.meta.env.VITE_REACT_PUBLIC_FIREBASE_API_KEY
const projectId = import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID
const messagingSenderId = import.meta.env
  .VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID
const appId = import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID
const measurementId = import.meta.env.VITE_REACT_APP_FIREBASE_MEASUREMENT_ID

const firebaseConfig = {
  apiKey,
  authDomain: `${projectId}.firebaseapp.com`,
  databaseURL: `https://${projectId}-default-rtdb.europe-west1.firebasedatabase.app`,
  projectId,
  storageBucket: `${projectId}.appspot.com`,
  messagingSenderId,
  appId,
  measurementId,
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
// const db = getDatabase(app)

// export { db }
