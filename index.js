const ViewFoodGrid = document.getElementById('BodyFoodGridCard')
const ViewFoodCard = document.getElementById('BodyFoodCard')

function BackToGrid() {
  var int = getCookie("ScrollTop")
  ViewFoodGrid.style.animationName = 'Rin'
  ViewFoodCard.style.animationName = 'Lout'
  ViewFoodGrid.style.display = 'block'
  setTimeout(() => {
    window.scrollTo({
      top: int,
      left: 0,
      behavior: 'auto'
    });
  }, 100);
  setTimeout(() => {
    ViewFoodCard.style.visibility = 'hidden'
    ViewFoodCard.style.display = 'fixed'
    window.scrollTo({
      top: int,
      left: 0,
      behavior: 'auto'
    });
  }, 950);
}
function BackToCard() {
  ViewFoodCard.style.visibility = 'visible'
  setCookie("ScrollTop", document.documentElement.scrollTop)
  ViewFoodGrid.style.animationName = 'Rout'
  ViewFoodCard.style.animationName = 'Lin'
  ViewFoodCard.style.display = 'block'
  setTimeout(() => {
    ViewFoodGrid.style.display = 'none'
  }, 950);
}

function CreateCard(FoodName,FoodCountry,ImgUrl,FoodDescription,DbName) {
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
      if(FoodName == null || FoodName == ''){
        spanName.textContent = "Brak Nazwy"
        spanName.setAttribute('class', 'brak');
      } else {
        spanName.textContent = FoodName
        spanName.setAttribute('class', 'CardFoodName');
      }
      h3.appendChild(spanName)
      // CREATE BR
      const br = document.createElement('br')
      h3.appendChild(br)
      // CREATE SPAN 'COUNTRY'
      const spanCountry = document.createElement('span')
      spanCountry.setAttribute('class', 'CardFoodCountry');
      if(FoodCountry == null || FoodCountry == '' ){
        spanCountry.textContent = "Brak państwa"
        spanCountry.setAttribute('class', 'brak');
      } else {
        spanCountry.textContent = FoodCountry
        spanCountry.setAttribute('class', 'CardFoodCountry');
      }
      h3.appendChild(spanCountry)
      // CREATE SPAN 'DESCRIPTION'
      const spanDescription = document.createElement('span')
      spanDescription.setAttribute('class', 'hide CardFoodDescription');
      spanDescription.textContent = FoodDescription
      h3.appendChild(spanDescription)
      // CREATE SPAN 'ID'
      // const spanId = document.createElement('span')
      // spanId.setAttribute('class', 'hide CardFoodId');
      // spanId.textContent = FoodID
      // h3.appendChild(spanId)
      const spanDbName = document.createElement('span')
      spanDbName.setAttribute('class', 'hide DbName');
      spanDbName.textContent = DbName
      h3.appendChild(spanDbName)
}

function UpdateCard(FoodName,FoodCountry,ImgUrl,FoodDescription,DbName) {
  console.log('Aktalizowanie danych karty o id: '+FoodName)
  const CardList = document.querySelectorAll('.card')

  for (i=0;i<CardList.length;i++) {
    // console.log(CardList[i].children[1].children[4].textContent)
    if(DbName == CardList[i].children[1].children[4].textContent) {
      CardList[i].children[0].style.backgroundImage = "url('"+ImgUrl+"')"
      if(FoodName == null || FoodName == ''){
        CardList[i].children[1].children[0].textContent = "Brak Nazwy"
        CardList[i].children[1].children[0].setAttribute('class', 'brak');
      } else {
        CardList[i].children[1].children[0].textContent = FoodName
        CardList[i].children[1].children[0].setAttribute('class', 'CardFoodName');
      }
      if(FoodCountry == null || FoodCountry == ''){
        CardList[i].children[1].children[2].textContent = "Brak państwa"
        CardList[i].children[1].children[2].setAttribute('class', 'brak');
      } else {
        CardList[i].children[1].children[2].textContent = FoodCountry
        CardList[i].children[1].children[2].setAttribute('class', 'CardFoodCountry');
      }
      CardList[i].children[1].children[3].textContent = FoodDescription
      CardList[i].children[1].children[4].textContent = DbName
    }
  }
}

function DelateCard(FoodID) {
  console.log('Usuwanie karty o id: '+FoodID)
  const CardList = document.querySelectorAll('.card')

  for (i=0;i<CardList.length;i++) {
    // console.log(CardList[i].children[1].children[4].textContent)
    if(FoodID == CardList[i].children[1].children[4].textContent) {
      CardList[i].remove()
    }
  }
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

// document.documentElement.scrollTop