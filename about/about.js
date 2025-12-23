const about = [
    {
        img:'/images/C-101.jpg',
        name: 'richard ahinga',
        title:'senior pastor'
    },
    {
        img:'/images/C-51.jpg',
        name: 'mama jennifer',
        title:'assistant pastor'
    },
    {
        img:'/images/C-61.jpg',
        name: 'levin joshua',
        title:'assistant pastor'
    },
    {
        img:'/images/C-81.jpg',
        name: 'pastor mary',
        title:'assistant pastor'
    },
    {
        img:'/images/C-91.jpg',
        name: 'worship ministry',
        title:'church choir'
    }
]

const image = document.getElementById('person-img')
const personName = document.getElementById('name')
const personTitle = document.getElementById('title')

const prevBtn = document.getElementById('prev-btn')
const nextBtn = document.getElementById('next-btn')


let currentItem = 0
// load the person
window.addEventListener('DOMContentLoaded', ()=>{
    showPerson()
})

function showPerson(){
    const item = about[currentItem]
    image.src = item.img
    personName.textContent = item.name
    personTitle.textContent = item.title
}

// Next Person
nextBtn.addEventListener('click', ()=>{
    currentItem++
    if(currentItem > about.length -1){
        currentItem = 0
    }
    showPerson()
})

// Prev person
prevBtn.addEventListener('click', ()=>{
    currentItem--
    if(currentItem < 0){
        currentItem = about.length -1
    }
    showPerson()
})