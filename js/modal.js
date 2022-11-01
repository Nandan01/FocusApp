// Get the modal
function modal(element) {
    modalId = element + 'Modal'

    var modal = document.getElementById(modalId);

    var btn = document.getElementById(element);
    modal.style.display = "block";

    close = element + 'Close'
    var span = document.getElementsByClassName(close)[0];

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}