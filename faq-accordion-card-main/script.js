const box = document.querySelectorAll(".faq-box")

box.forEach(box => {
    box.addEventListener("click", () => {
        box.classList.toggle("active")
    })
})
