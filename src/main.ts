import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

if (environment.production) {
  enableProdMode();
}
 
 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyCdQRq2Hzl2t3xYC8YfGb2H7yFqfDgIah0",
   authDomain: "portfolio-v1-a2bab.firebaseapp.com",
   databaseURL: "https://portfolio-v1-a2bab-default-rtdb.firebaseio.com",
   projectId: "portfolio-v1-a2bab",
   storageBucket: "portfolio-v1-a2bab.appspot.com",
   messagingSenderId: "909239833409",
   appId: "1:909239833409:web:8da1514d2f9657f91307c0"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 // Initialize Realtime Database and get a reference to the service
 const database = getDatabase(app);
 
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
