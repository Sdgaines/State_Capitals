const toggle = document.querySelectorAll('.tog-faq');

toggle.forEach(tog => {
    tog.addEventListener('click', () => {
        tog.parentNode.classList.toggle('active')
    })
})