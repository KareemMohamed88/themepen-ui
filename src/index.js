import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import projectReducer, { projectsFetch } from "./projects/projectSlice";
import likeReducer from "./projects/likeSlice"
import { projectsApi } from "./projects/projectApi";
import wishListReducer, { getTotal } from "./projects/wishListSlice";
import firebase from "firebase/compat/app"
import { HelmetProvider } from 'react-helmet-async';

const firebaseConfig = {
  apiKey: "AIzaSyCKcLB-VLcaEBS8SDx07YgBRV3L8rkvDbA",
  authDomain: "users-images-1ea72.firebaseapp.com",
  projectId: "users-images-1ea72",
  storageBucket: "users-images-1ea72.appspot.com",
  messagingSenderId: "452209923747",
  appId: "1:452209923747:web:e34c22c01380b1f6a75116",
  measurementId: "G-9LYM1JJCRW"
};
firebase.initializeApp(firebaseConfig)

const store = configureStore({
  reducer: {
    projects: projectReducer,
    wishList: wishListReducer,
    likedItems: likeReducer,
    [projectsApi.reducerPath]: projectsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(projectsApi.middleware),
});
store.dispatch(projectsFetch());
store.dispatch(getTotal())
const helmetContext = {};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider context={helmetContext}>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </HelmetProvider>
);
serviceWorkerRegistration.register();
reportWebVitals();
