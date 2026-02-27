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

//validate form section
//register a handler for the form
document.addEventListener("DOMContentLoaded", formValidCheck);

function formValidCheck(){
    let submit = document.getElementById("submit");
    submit.addEventListener("click", validCheck);
}

function validCheck(e){
    e.preventDefault();

    let fName = document.getElementById("fName");
    let eMessage = document.getElementsByClassName("eMessage");
    let comment = document.getElementById("comment");
    let isValid = true;
    
    if(fName.value.trim().length <= 1){
        eMessage[0].classList.add("error");
        isValid = false;

    }
    if(comment.value.trim() === ""){
        eMessage[3].classList.add("error");
        isValid = false;
    }
    
    let emailInput = document.getElementById("email");
    let PhoneNumber = document.getElementById("PhoneNumber");
    let emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;

    emailInput.classList.remove("error");
    let PhoneNumberReg = /^\d{5}$/;

    let emailRadio = document.getElementById("p-email");
    let phoneRadio = document.getElementById("p-phone");

    if(emailRadio.checked && emailInput.value.trim() === "" || !emailReg.test(emailInput.value.trim())){
        eMessage[2].classList.add("error");
        isValid = false;
    }
}   
   


//email input from form 
let emailInput = document.getElementById("email");
let PhoneNumber = document.getElementById("PhoneNumber");

let emailRe = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
let form = document.getElementsByClassName("quoteForm");







