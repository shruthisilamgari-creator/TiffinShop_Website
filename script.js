//menu cards
const menuCards = document.querySelectorAll(".menu-card")
menuCards.forEach(card => 
    {
    card.addEventListener("mouseenter", () => 
        {
        card.style.transform = "scale(1.05)"
        card.style.transition = "0.3s"
    })
    card.addEventListener("mouseleave", () => 
        {
        card.style.transform = "scale(1)"
    })
})

//feedback
const form = document.querySelector(".catering-form")
if (form) 
    {
    form.addEventListener("submit", function(e)
     {
        e.preventDefault()
        alert("Thank you! Your catering request has been received.")
        form.reset()
    })
}