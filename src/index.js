import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBvCU1_fr3HAE2mkAcQ80gEzVJ3QXxVo9Q",
  authDomain: "robbert-kooiman.firebaseapp.com",
  projectId: "robbert-kooiman",
  storageBucket: "robbert-kooiman.appspot.com",
  messagingSenderId: "417147010073",
  appId: "1:417147010073:web:ba499c1de40bcecd9bfe88",
  measurementId: "G-RFE7DYQ42M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
