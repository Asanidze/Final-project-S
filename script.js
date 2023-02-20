let navigationElement = document.getElementById("navBar")
let burgerElement = document.getElementById("burgerBar")

burgerElement.addEventListener("click" , function(){
    navigationElement.classList.toggle("activeNav")
})



document.getElementById("subMe").addEventListener("click", function() {
    alert("Thanks for Sub")
})