"use strict";
document.addEventListener("DOMContentLoaded", loadedHandler);

function loadedHandler(){
  let tabs = document.querySelectorAll(".tab");
 
  // 

  for(let i = 0; i < tabs.length; i++){
    tabs[i].addEventListener("click", changeService);
  }
}

function changeService(event){
    event.preventDefault();
  
    let tabs = document.querySelectorAll(".tab");
    let services = document.querySelectorAll(".serviceList");
  
    // remove active styles from all services
    for(let i = 0; i < services.length; i++){
      services[i].classList.remove("active");
    }
  
    // find clicked tab index
    for(let i = 0; i < tabs.length; i++){
      if(tabs[i] === event.target){
        services[i].classList.add("active");
       
      }
    }
}


