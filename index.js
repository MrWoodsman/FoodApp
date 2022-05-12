const ViewFoodGrid = document.getElementById('BodyFoodGridCard')
const ViewFoodCard = document.getElementById('BodyFoodCard')

function BackToGrid() {
  ViewFoodGrid.style.animationName = 'Rin'
  ViewFoodCard.style.animationName = 'Lout'
  ViewFoodGrid.style.display = 'block'
  // ViewFoodCard.style.position = 'fixed'
  setTimeout(() => {
    ViewFoodCard.style.display = 'fixed'
  }, 950);
}
function BackToCard() {
  // window.scroll(0,0)
  ViewFoodGrid.style.animationName = 'Rout'
  ViewFoodCard.style.animationName = 'Lin'
  ViewFoodCard.style.display = 'block'
  setTimeout(() => {
    // ViewFoodCard.style.position = 'absolute'
    ViewFoodGrid.style.display = 'none'
  }, 950);
}

function CardClick(object) {
  // GET FOOD DESCRIPTION
  const FName = object.children[1].children[0].textContent
  const FCountry = object.children[1].children[2].textContent
  const FDescription = object.children[1].children[3].textContent
  const FImage = object.children[0]

  const styles = window.getComputedStyle(FImage);
  const image = styles.backgroundImage;

  // SET CARD
  ViewFoodCard.children[1].style.backgroundImage = image
  ViewFoodCard.children[2].children[0].children[0].children[0].textContent = FName
  ViewFoodCard.children[2].children[0].children[0].children[1].textContent = FCountry
  ViewFoodCard.children[2].children[0].children[1].textContent = FDescription
  
  // console.log(FName+' : '+FCountry+' : '+image)
  // VIEW
  // BackToCard()
}

const req = new XMLHttpRequest();
req.open("GET",'food.json',true)
req.send()
req.onload = function() {
  const json = JSON.parse(req.responseText)
  let html = ""

  json.forEach((food) => {
    html += "<div class='test'></div>"
    let keys = Object.keys(food)
    console.log(keys)

    const atag = document.createElement("a")
    atag.setAttribute('onclick', 'CardClick(this),BackToCard()');
    atag.setAttribute('class', 'card');
    document.getElementById('FoodGrid').appendChild(atag)
    const divImg = document.createElement('div')
    divImg.setAttribute('class','image')
    divImg.style.backgroundImage = "url('"+food[keys[3]]+"')"
    atag.appendChild(divImg)
    const h3 = document.createElement('h3')
    atag.appendChild(h3)
    // 
    const spanName = document.createElement('span')
    spanName.setAttribute('class', 'CardFoodName');
    spanName.textContent = food[keys[1]]
    h3.appendChild(spanName)
    const br = document.createElement('br')
    h3.appendChild(br)
    const spanCountry = document.createElement('span')
    spanCountry.setAttribute('class', 'CardFoodCountry');
    spanCountry.textContent = food[keys[2]]
    h3.appendChild(spanCountry)
    const spanDescription = document.createElement('span')
    spanDescription.setAttribute('class', 'hide CardFoodDescription');
    spanDescription.textContent = food[keys[4]]
    h3.appendChild(spanDescription)
    const spanId = document.createElement('span')
    spanId.setAttribute('class', 'hide CardFoodId');
    spanId.textContent = food[keys[0]]
    h3.appendChild(spanId)
    


  })
}