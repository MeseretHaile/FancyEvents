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
    eMessage[0].classList.remove("error");
    eMessage[3].classList.remove("error");

    if(fName.value.trim().length <= 1){
        eMessage[0].classList.add("error");
        isValid = false;

    }
    if(comment.value.trim() === ""){
        eMessage[3].classList.add("error");
        isValid = false;
    }
    
    let emailInput = document.getElementById("email");
    let phoneNumber = document.getElementById("phoneNumber");
    let emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;

    eMessage[1].classList.remove("error");
    eMessage[2].classList.remove("error");
    let PhoneNumberReg = /^\d{9}$/;

    let emailRadio = document.getElementById("p-email");
    let phoneRadio = document.getElementById("p-phone");

    if(emailRadio.checked){
        if(emailInput.value.trim() === "" || !emailReg.test(emailInput.value.trim())){
            eMessage[2].classList.add("error");
            isValid = false;
        }
    } 
    else if(phoneRadio.checked){
        if(phoneNumber.value.trim() === "" || !PhoneNumberReg.test(phoneNumber.value.trim())){
            eMessage[1].classList.add("error");
            isValid = false;
        }
    }

    if(isValid){
        let customer = {
            fullName : fName.value.trim(),
            phone: phoneNumber.value.trim(),
            email: emailInput.value.trim(),
            comments: comment.value.trim(),
            preferredContact: emailRadio.checked ? "Email" : "Phone"
        };

        document.querySelector("#success").classList.remove("hide");
        document.querySelector("#success").classList.add("show");

        document.getElementById("formSub").innerHTML = `<strong>User Name: </strong>${customer.fullName}<br><strong>Preferred contact: </strong>${customer.preferredContact}<br><strong>Contact Information: </strong>${emailRadio.checked ? customer.email : customer.phone}<br><strong>Comment: </strong>${customer.comments}`;

        document.getElementsByClassName("quoteForm").reset();
    }
}   
   


//email input from form 








