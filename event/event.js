eventDetails = [
    {
        event:'possessing your possession conference',
        venue:`victory blessed ministry<span><i class="fa fa-map-marker"></i>`,
        date:'7th january 2025'
    },
    {
        event:'caring about the community and serving',
        venue:`victory blessed ministry<span><i class="fa fa-map-marker"></i>`,
        date:'27th march 2025'
    },
    {
        event:'spiritual reborn and healthy lives',
        venue:`gusii stadium<span><i class="fa fa-map-marker"></i>`,
        date:'10th april 2025'
    },
    {
        event:'couples and singles revival conference',
        venue:`dan's hotel<span><i class="fa fa-map-marker"></i>`,
        date:'2nd june 2025'
    },
    {
        event:'women and youths conference',
        venue:`victory blessed ministry<span><i class="fa fa-map-marker"></i>`,
        date:'8th august 2025'
    }
]

const eventTitle = document.getElementById('event')
const venue = document.getElementById('venue')
const date = document.getElementById('date')

const prevBtn = document.getElementById('prev-btn')
const nextBtn = document.getElementById('next-btn')


let currentItem = 0

window.addEventListener('DOMContentLoaded', ()=>{
   showEvent()
})

function showEvent(){
   const item = eventDetails[currentItem]
   eventTitle.textContent = item.event
   venue.innerHTML = item.venue
   date.textContent = item.date
}

// next button
nextBtn.addEventListener('click', ()=>{
    currentItem++
    if(currentItem > eventDetails.length -1){
        currentItem = 0
    }
    showEvent()
})

// prev button
prevBtn.addEventListener('click', ()=>{
    currentItem--
    if(currentItem < 0){
        currentItem = eventDetails.length - 1
    }
    showEvent()
})