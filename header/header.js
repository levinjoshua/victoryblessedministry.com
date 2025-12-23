const navbar = document.getElementById('fixed-nav')
const scrollNav = document.getElementById('scroll-up')


window.addEventListener('scroll', ()=>{
    const scrollHeight = window.scrollY
    // console.log(scrollHeight)
    const navHeight = navbar.getBoundingClientRect().height
    if(scrollHeight > navHeight){
        navbar.classList.add('show-header')
        scrollNav.classList.add('show-scroll')
    }else{
        navbar.classList.remove('show-header')
        scrollNav.classList.remove('show-scroll')
    }
})