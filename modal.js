// Get the modal
function modal(element) {
    modalId = element + 'Modal'

    var modal = document.getElementById(modalId);

    // Get the button that opens the modal
    var btn = document.getElementById(element);
    modal.style.display = "block";

    // Get the <span> element that closes the modal
    close = element + 'Close'
    var span = document.getElementsByClassName(close)[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}