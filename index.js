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