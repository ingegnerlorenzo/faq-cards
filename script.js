const box = document.querySelectorAll(".faq-box")

box.forEach(box => {
    box.addEventListener("click", () => {
        removeActive()
        box.classList.add("active")
    })
})

function removeActive() {
    box.forEach(box => {
            box.classList.remove("active")
        })
}