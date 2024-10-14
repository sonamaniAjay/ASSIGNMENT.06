const menuIcon = document.querySelector("#menu-icon")
const navLinks = document.querySelector(".nav-links")
let menuClicked = false

menuIcon.addEventListener('click', (e) => {
    e.stopPropagation()  
    if (!menuClicked) {
        navLinks.style.display = "block"
        menuClicked = true
    } else {
        navLinks.style.display = "none"
        menuClicked = false
    }
})

window.addEventListener('click', () => {
    if (menuClicked) {
        navLinks.style.display = "none"
        menuClicked = false
    }
})

navLinks.addEventListener('click', (e) => {
    e.stopPropagation()
})

let weatherLink=document.querySelector(".weather-link")
let weatherSite=document.querySelector(".weather-site")
weatherLink.addEventListener("click",()=>{
    window.open("https://github.com/sonamaniAjay/weather")
})
weatherSite.addEventListener('click',()=>{
    window.open("https://sonamaniajay.github.io/weather/")
})
let tictactoeLink=document.querySelector(".tic-tac-toe-link")
let tictactoeSite=document.querySelector(".tic-tac-toe-site")
tictactoeSite.addEventListener('click',()=>{
    window.open("https://sonamaniajay.github.io/tic_tac_toe/")
})
tictactoeLink.addEventListener("click",()=>{
    window.open("https://github.com/sonamaniAjay/tic_tac_toe")
})
let contact=document.querySelector(".contact-link")
contact.addEventListener('click',(e)=>{
    e.preventDefault();
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth' 
    })
})
let visitGithub_1=document.querySelector(".visit-btn")
visitGithub_1.addEventListener('click',()=>{
    window.open("https://github.com/sonamaniAjay")
})
let visitGithub_2=document.querySelector(".fa-github")
visitGithub_2.addEventListener('click',()=>{
    window.open("https://github.com/sonamaniAjay")
})
