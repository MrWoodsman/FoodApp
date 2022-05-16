import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA71QuzTtYpfSDqzFHLshI6wUGQ8LpJseI",
    authDomain: "myapp-44c66.firebaseapp.com",
    databaseURL: "https://myapp-44c66-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "myapp-44c66",
    storageBucket: "myapp-44c66.appspot.com",
    messagingSenderId: "359396357809",
    appId: "1:359396357809:web:c1690eb1d56dd5041d9490",
    measurementId: "G-GJNX177MC2"
};
const app = initializeApp(firebaseConfig);


function writeUserData(FoodName, FoodCountry, FoodImgUrl, FoodDescription) {
    const db = getDatabase();
    const d = new Date();
    d.getTime();
    set(ref(db, 'food/'+FoodName), {
        Name: FoodName,
        Country: FoodCountry,
        ImgUrl: FoodImgUrl,
        Description : FoodDescription,
        Date: d.getTime()
    });
  }



// writeUserData('Test2', 'Polska', 'https://ocdn.eu/pulscms-transforms/1/OkPk9kpTURBXy84OTA5ODQ2N2NkYzI0YTcyMzdhNDdlY2JkNzI2ZDZiNC5qcGeTlQMAzQF7zRXwzQxZkwXNAxTNAbyTCaYyODJlYWIGgaEwAQ/pierogi-z-miesem.jpg','Opis pierogów') 