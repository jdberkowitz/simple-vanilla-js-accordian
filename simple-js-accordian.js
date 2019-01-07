/*
* @param clickSelector @type css class - the class of the item to be used as the accordian button
* @param contentSelector @type css class - the class of the content to show when the selector is clicked.
* @param classToToggle @type css class - the class to toggle based upon the toggle. 
* will add display:none to hide and display:block to show
* Hides or shows teh next element sibling of the selected class
*/


function accordian(clickSelector, classToToggle){
    var accordian = document.getElementsByClassName(clickSelector);    
    var accs;            
    for (accs = 0; accs < accordian.length; accs++) {
        accordian[accs].addEventListener("click", function() {
            this.classList.toggle(classToToggle);
            var panel = this.nextElementSibling;
            if (panel.style.display === "none") {
                panel.style.display = "block";
            } else {
                panel.style.display = "none";
            };
        });
    };

};    
