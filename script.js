const menuIcon=document.querySelector("#menu-icon")
const navlinks=document.querySelector(".nav-links")
menuIcon.onClick=()=>{
    navlinks.classList.toggle('active')
}
let weatherLink=document.querySelector(".weather-link")
weatherLink.addEventListener("click",()=>{
    window.open("https://github.com/sonamaniAjay/web_dev_project_tic_tac_toe")
})
let tictactoeLink=document.querySelector(".tic-tac-toe-link")
tictactoeLink.addEventListener('click',()=>{
    window.open("https://github.com/sonamaniAjay/web_dev_project_tic_tac_toe")
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