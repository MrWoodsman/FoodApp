// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getDatabase, ref, onValue, set, query, onChildAdded, onChildChanged, onChildRemoved } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA71QuzTtYpfSDqzFHLshI6wUGQ8LpJseI",
    authDomain: "myapp-44c66.firebaseapp.com",
    databaseURL: "https://myapp-44c66-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "myapp-44c66",
    storageBucket: "myapp-44c66.appspot.com",
    messagingSenderId: "359396357809",
    appId: "1:359396357809:web:c1690eb1d56dd5041d9490"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase();
const commentsRef = query(ref(db, 'food'));
// const settingsRef = query(ref(db, 'settings'));
// GET SETTINGS
// onChildAdded(settingsRef, (data) => {
//     console.log('test: '+data.val()['NewTime'])
//     document.getElementById('settings').children[0].textContent = data.val()['NewTime']
// });
// Dodawanie Kart na początku
const starCountRef = ref(db, 'settings');
onValue(starCountRef, (snapshot) => {
    // const data = 
    document.getElementById('settings').children[0].textContent = snapshot.val()['NewTime'];
});

onChildAdded(commentsRef, (data) => {
    const CardTime = data.val()['Date']
    // console.log(TimeTo(CardTime))
    CreateCard(data.val()['Name'],data.val()['Country'],data.val()['ImgUrl'],data.val()['Description'],data.key,TimeTo(CardTime),data.val()['Author'])
    // console.log(new Date(ActualTime-CardTime).getSeconds())
});

function TimeTo(Time) {
    const ActualTime = new Date();
    const CardTime = new Date(Time);
    const LeftTime = CardTime.getTime() - ActualTime.getTime();

    const s = LeftTime / 1000;
    const min = s / 60;

    return min;
}

// Aktualizacja Danych W czasie rzeczyswistym
onChildChanged(commentsRef, (data) => {
    UpdateCard(data.val()['Name'],data.val()['Country'],data.val()['ImgUrl'],data.val()['Description'],data.key)
    // UpdateCard(data.val()['ID'],FoodName,FoodCountry,ImgUrl,FoodDescription)
});
// Usuwanie Kart w czasie rzeczywistym
onChildRemoved(commentsRef, (data) => {
    DelateCard(data.key)
});
