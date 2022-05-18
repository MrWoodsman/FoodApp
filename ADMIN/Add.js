import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";

function writeUserData(DbName, FoodName, FoodCountry, FoodImgUrl, FoodDescription) {
    const db = getDatabase();
    const d = new Date();
    d.getTime();
    set(ref(db, 'food/'+DbName), {
        Name: FoodName,
        Country: FoodCountry,
        ImgUrl: FoodImgUrl,
        Description : FoodDescription,
        Date: d.getTime()
    });
}



// writeUserData('Test2', 'Polska', 'https://ocdn.eu/pulscms-transforms/1/OkPk9kpTURBXy84OTA5ODQ2N2NkYzI0YTcyMzdhNDdlY2JkNzI2ZDZiNC5qcGeTlQMAzQF7zRXwzQxZkwXNAxTNAbyTCaYyODJlYWIGgaEwAQ/pierogi-z-miesem.jpg','Opis pierogów') 