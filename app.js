// Movement Animation to happen

const card = document.querySelector(".card");
const container = document.querySelector(".container");

// Title 
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

// moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) /10;
  let yAxis = (window.innerHeight / 2 - e.pageY) /10;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
// Animate in
container.addEventListener("mouseenter", (e) =>{
card.style.transition = "none"; 
title.style.transform = "translateZ(100px)";
sneaker.style.transform = "translateZ(120px) rotateZ(-25deg)";
purchase.style.transform = "translateZ(100px)"
description.style.transform = "translateZ(120px)"
sizes.style.transform = "translateZ(50px)"
});
// Animate out
container.addEventListener("mouseleave", (e) => {
  card.style.transform = "rotateY(0deg) rotateX(0deg)";
  card.style.transition = "all .5s ease"; 
  title.style.transform = "translateZ(0px)"
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)"
  purchase.style.transform = "translateZ(0px)"
  description.style.transform = "translateZ(0px)"
sizes.style.transform = "translateZ(0px)"
});
