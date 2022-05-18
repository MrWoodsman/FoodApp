const MainTable = document.getElementById('ItemList')
// Tworzenie Tabelki
function CreateNewTable(DbName,FoodName,FoodCountry,FoodDescription,FoodImage) {
    // 
    const div = document.createElement('div')
    div.setAttribute('class','RecordCard')
    MainTable.appendChild(div)
    // 
    const h1 = document.createElement('h4')
    h1.textContent = 'DB Name: '+DbName
    div.appendChild(h1)
    // 
    const h2 = document.createElement('h4')
    h2.textContent = 'Name: '+FoodName
    div.appendChild(h2)
    // 
    const h3 = document.createElement('h4')
    h3.textContent = 'Country: '+FoodCountry
    div.appendChild(h3)
    // 
    const h4 = document.createElement('h4')
    h4.textContent = FoodDescription
    div.appendChild(h4)
    // 
    const h5 = document.createElement('h4')
    div.appendChild(h5)
    // 
    const img = document.createElement('img')
    img.setAttribute('src',FoodImage)
    div.appendChild(img)
}

function EditRecord() {
    console.warn('EDIT RECORD');

}
