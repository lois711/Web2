// S AND M
var modal = document.getElementById('pop');

// Get the button that opens the modal
var btn = document.getElementById("but");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("cerrar")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




