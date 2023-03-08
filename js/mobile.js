const mainCmobile=document.querySelector('.mainCatgory-mobile')
const mobilemenu=document.querySelector('.also-mobilemenu')

mainCmobile.addEventListener('click',()=>{
    if (mobilemenu.style.display === "block") {
        mobilemenu.style.display = "none";
      } else {
        mobilemenu.style.display = "block";
        alsoCartMobile.style.display = "none";
    }
    
})
const cartMobile=document.querySelector('.cart-mobile')
const  alsoCartMobile=document.querySelector('.also-cart-mobile')
cartMobile.addEventListener('click',()=>{
    if (alsoCartMobile.style.display === "block") {
        alsoCartMobile.style.display = "none";

      } else {
        alsoCartMobile.style.display = "block";
        mobilemenu.style.display = "none";
    }
    
})


