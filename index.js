const ViewFoodGrid = document.getElementById('BodyFoodGridCard')
const ViewFoodCard = document.getElementById('BodyFoodCard')

function BackToGrid() {
  ViewFoodGrid.style.animationName = 'Rin'
  ViewFoodCard.style.animationName = 'Lout'
  ViewFoodGrid.style.display = 'block'
  setTimeout(() => {
    ViewFoodCard.style.display = 'fixed'
  }, 950);
}
function BackToCard() {
  ViewFoodGrid.style.animationName = 'Rout'
  ViewFoodCard.style.animationName = 'Lin'
  ViewFoodCard.style.display = 'block'
  setTimeout(() => {
    ViewFoodGrid.style.display = 'none'
  }, 950);
}

function CreateCard(FoodID,FoodName,FoodCountry,ImgUrl,FoodDescription) {
  const atag = document.createElement("a")
      atag.setAttribute('onclick', 'CardClick(this),BackToCard()');
      atag.setAttribute('class', 'card');
      document.getElementById('FoodGrid').appendChild(atag)
      // CREATE DIV WITH BACKGROUND-IMAGE
      const divImg = document.createElement('div')
      divImg.setAttribute('class','image')
      divImg.style.backgroundImage = "url('"+ImgUrl+"')"
      atag.appendChild(divImg)
      // CREATE H3
      const h3 = document.createElement('h3')
      atag.appendChild(h3)
      // CREATE SPAN 'NAME'
      const spanName = document.createElement('span')
      spanName.setAttribute('class', 'CardFoodName');
      spanName.textContent = FoodName
      h3.appendChild(spanName)
      // CREATE BR
      const br = document.createElement('br')
      h3.appendChild(br)
      // CREATE SPAN 'COUNTRY'
      const spanCountry = document.createElement('span')
      spanCountry.setAttribute('class', 'CardFoodCountry');
      spanCountry.textContent = FoodCountry
      h3.appendChild(spanCountry)
      // CREATE SPAN 'DESCRIPTION'
      const spanDescription = document.createElement('span')
      spanDescription.setAttribute('class', 'hide CardFoodDescription');
      spanDescription.textContent = FoodDescription
      h3.appendChild(spanDescription)
      // CREATE SPAN 'ID'
      const spanId = document.createElement('span')
      spanId.setAttribute('class', 'hide CardFoodId');
      spanId.textContent = FoodID
      h3.appendChild(spanId)
}

function CardClick(object) {
  // GET FOOD DESCRIPTION
  const FName = object.children[1].children[0].textContent
  const FCountry = object.children[1].children[2].textContent
  const FDescription = object.children[1].children[3].textContent
  // GET IMG URL FROM STYLES
  const FImage = object.children[0]
  const styles = window.getComputedStyle(FImage);
  const image = styles.backgroundImage;
  // SET CARD TEXT IN ViewFoodCard
  ViewFoodCard.children[1].style.backgroundImage = image
  ViewFoodCard.children[2].children[0].children[0].children[0].textContent = FName
  ViewFoodCard.children[2].children[0].children[0].children[1].textContent = FCountry
  ViewFoodCard.children[2].children[0].children[1].textContent = FDescription
}

// const req = new XMLHttpRequest();
// req.open("GET",'food.json',true)
// req.send()
// req.onload = function() {
//   const json = JSON.parse(req.responseText)

//   json.forEach((food) => {
//     let keys = Object.keys(food)
//     // console.log(keys)
//     // CREATE A MAIN BOX
//     if (food[keys[5]] == 'true') {
//       // Odwołanie do funkcji [ Tworzenie karty jedzenia ]
//       CreateCard(food[keys[0]],food[keys[1]],food[keys[2]],food[keys[3]],food[keys[4]])
//     } else if(food[keys[5]] == 'false') {
//       console.log("Wyłączone")
//     }
//   })
// }