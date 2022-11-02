const toggle_buttons = document.querySelectorAll('.faq-toggle')

toggle_buttons.forEach(toggle_buttons => {
    toggle_buttons.addEventListener('click', () => {
        toggle_buttons.parentNode.classList.toggle('active')
    })
})