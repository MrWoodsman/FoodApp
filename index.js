const ViewFoodGrid = document.getElementById('BodyFoodGridCard')
const ViewFoodCard = document.getElementById('BodyFoodCard')

function BackToGrid() {
  ViewFoodGrid.style.animationName = 'Rin'
  ViewFoodCard.style.animationName = 'Lout'
  // ViewFoodGrid.style.display = 'block'
  // setTimeout(() => {
  //   ViewFoodCard.style.display = 'none'
  // }, 950);
}
function BackToCard() {
  ViewFoodGrid.style.animationName = 'Rout'
  ViewFoodCard.style.animationName = 'Lin'
  // ViewFoodCard.style.display = 'block'
  // setTimeout(() => {
  //   ViewFoodGrid.style.display = 'none'
  // }, 950);
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
  BackToCard()
}