console.log("script loaded");   

const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    // Toggle the open class
    dropDownMenu.classList.toggle('open');
    
    // Check if dropdown is open
    const isOpen = dropDownMenu.classList.contains('open');
    
    // Change icon based on dropdown state
    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
};



//button
var shoes = document.getElementById("shoes");
var tshirt = document.getElementById("btn-tshirt");
var short = document.getElementById("btn-short");
var comparts = document.getElementById("btn-com");

//style
var divShoes = document.getElementById("shoesDiv");
var divTshirt = document.getElementById("tshirtsDiv");
var divShort = document.getElementById("shortDiv");
var divCom = document.getElementById("compartDiv");

shoes.addEventListener("click", function() {
    divShoes.style.display = "block";
    divTshirt.style.display = "none";
    divShort.style.display = "none";
    divCom.style.display = "none";
});

tshirt.addEventListener("click", function() {
    divShoes.style.display = "none";
    divTshirt.style.display = "block";
    divShort.style.display = "none";
    divCom.style.display = "none";
});

short.addEventListener("click", function() {
    divShoes.style.display = "none";
    divTshirt.style.display = "none";
    divShort.style.display = "block";
    divCom.style.display = "none";
});

comparts.addEventListener("click", function() {
    divShoes.style.display = "none";
    divTshirt.style.display = "none";
    divShort.style.display = "none";
    divCom.style.display = "block";
});