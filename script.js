const menuIcon=document.querySelector("#menu-icon")
const navlinks=document.querySelector(".nav-links")
menuIcon.onClick=()=>{
    navlinks.classList.toggle('active')
}
let weatherLink=document.querySelector(".weather-link")
let weatherSite=document.querySelector(".weather-site")
weatherLink.addEventListener("click",()=>{
    window.open("https://github.com/sonamaniAjay/web_dev_project_tic_tac_toe")
})
weatherSite.addEventListener('click',()=>{
    window.open("https://sonamaniajay.github.io//")
})
let tictactoeLink=document.querySelector(".tic-tac-toe-link")
let tictactoeSite=document.querySelector(".tic-tac-toe-site")
tictactoeLink.addEventListener('click',()=>{
    window.open("https://github.com/sonamaniAjay/web_dev_project_tic_tac_toe")
})
tictactoeSite.addEventListener('click',()=>{
    window.open("https://sonamaniajay.github.io//")
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
