'use strict'

// place-list slide
const placeList = document.querySelector("#place-list");
const placeListImg = placeList.querySelectorAll("li");
const upBtn = document.querySelector(".fa-sort-up ");
const downBtn = document.querySelector(".fa-sort-down ");
let counter = 4;

upBtn.addEventListener('click',()=>{
    if(counter<=2) return;
    counter--;
    placeList.style.transition = 'transform 0.3s ease-in-out';
    placeList.style.transform = 'translateY('+counter*(-150)+'px)';
});

downBtn.addEventListener('click',()=>{
    if(counter>=14) return;
    counter++;
    placeList.style.transition = 'transform 0.3s ease-in-out';
    placeList.style.transform = 'translateY('+counter*(-150)+'px)';
});

placeList.addEventListener('transitionend',()=>{
    if(placeListImg[counter].id ==='last-clone'){
        counter = counter+9;
        placeList.style.transition = 'none';
        placeList.style.transform = 'translateY('+counter*(-150)+'px)';
    }
})
placeList.addEventListener('transitionend',()=>{
    if(placeListImg[counter].id ==='first-clone'){
        counter = counter-9;
        placeList.style.transition = 'none';
        placeList.style.transform = 'translateY('+counter*(-150)+'px)';
    }
})

// content-list slide
const infoContainer = document.querySelector("#info-container");
const infoList = document.querySelector("#info-list");
const infoContent = infoList.querySelectorAll('.content-container');

let contentCounter = 4;

upBtn.addEventListener('click',()=>{
    if(contentCounter<0) return;
    contentCounter--;
    infoList.style.transition = 'transform 0.3s ease-in-out';
    infoList.style.transform = 'translateY('+contentCounter*(-150)+'px)';
});

downBtn.addEventListener('click',()=>{
    if(contentCounter>10) return;
    contentCounter++;
    infoList.style.transition = 'transform 0.3s ease-in-out';
    infoList.style.transform = 'translateY('+contentCounter*(-150)+'px)';
});

infoList.addEventListener('transitionend',()=>{
    if(infoContent[contentCounter].id ==='first-content-clone'){
        contentCounter = contentCounter-9;
        infoList.style.transition = 'none';
        infoList.style.transform = 'translateY('+contentCounter*(-150)+'px)';
    }
});

infoList.addEventListener('transitionend',()=>{
    if(infoContent[contentCounter].id ==='last-content-clone'){
        contentCounter = 9;
        infoList.style.transition = 'none';
        infoList.style.transform = 'translateY('+contentCounter*(-150)+'px)';
    }
});

// big-img change
// main-modal
// content-modal