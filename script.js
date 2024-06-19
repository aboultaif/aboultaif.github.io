let profile = document.getElementById("logo")
let portfolio = document.getElementById("portfolio")
let body = document.querySelector("body")
let resume = document.getElementById("then-appear")

const hidePortfolio = () => {
    portfolio.style.display = "none";
    resume.style.display = "block"
    body.style.backgroundColor = "darkred"
    
    
    
}   

profile.addEventListener("click", hidePortfolio)
