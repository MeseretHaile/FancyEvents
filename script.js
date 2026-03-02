"use strict";
/*
    Fancy Event - JavaScript File
    Author: Meseret Haile
*/

/*
    SERVICES SECTION SWITCHING FUNCTIONALITY
*/
document.addEventListener("DOMContentLoaded", loadedHandler);

function loadedHandler(){
    let tabs = document.querySelectorAll(".tab");
    
    // Add click event to each tab
    for(let i = 0; i < tabs.length; i++){
        tabs[i].addEventListener("click", changeService);
    }
}

// Handles tab switching logic
function changeService(event){
    event.preventDefault();
  
    let tabs = document.querySelectorAll(".tab");
    let services = document.querySelectorAll(".serviceList");
  
    // Remove "active" styles from all services
    for(let i = 0; i < services.length; i++){
      services[i].classList.remove("active");
    }
  
    // Add "active" class to the selected service
    for(let i = 0; i < tabs.length; i++){
      if(tabs[i] === event.target){
        services[i].classList.add("active");
      }
    }
}

/* 
    PLAY AND WIN GAME SECTION
*/
document.addEventListener("DOMContentLoaded", playWin);

function playWin(){
    let play = document.getElementById("play");
    play.addEventListener("click", matchNumber);
}

// Generates random number and compare with user input
function matchNumber(e) {
    e.preventDefault(); 
    const randomNum = Math.floor(Math.random() * 9) + 1;
    const numInput = parseFloat(document.getElementById("number").value.trim());

    if(numInput === randomNum){
        document.getElementById("winningNumber").innerHTML = `<strong>Your Number: </strong>${numInput}<br><strong>Winning Number: </strong>${randomNum}<br><strong>Congratulations You Win!</strong>`
    }
    else if(numInput !== "" && numInput !== randomNum){
        document.getElementById("winningNumber").innerHTML = `<strong>Your Number: </strong>${numInput}<br><strong>Winning Number: </strong>${randomNum}<br><strong>Sorry Try Again!</strong>`
    }
}

/*
    FORM VALIDATION SECTION
*/
document.addEventListener("DOMContentLoaded", formValidCheck);

function formValidCheck(){
    let submit = document.getElementById("submit");
    submit.addEventListener("click", validCheck);
}

// Main validation function
function validCheck(e){
    e.preventDefault();

    let fName = document.getElementById("fName");
    let eMessage = document.getElementsByClassName("eMessage");
    let comment = document.getElementById("comment");
    let isValid = true;

    // Reset error messages
    eMessage[0].classList.remove("error");
    eMessage[3].classList.remove("error");

    // Validate full name
    if(fName.value.trim().length <= 1){
        eMessage[0].classList.add("error");
        isValid = false;
    }

    // Validate comment
    if(comment.value.trim() === ""){
        eMessage[3].classList.add("error");
        isValid = false;
    }
    
    let emailInput = document.getElementById("email");
    let phoneNumber = document.getElementById("phoneNumber");
    let emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;

    // Reset contact error message
    eMessage[1].classList.remove("error");
    eMessage[2].classList.remove("error");
    let PhoneNumberReg = /^\d{10}$/;

    let emailRadio = document.getElementById("p-email");
    let phoneRadio = document.getElementById("p-phone");

    // Validate based on preferred contact method
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

    // If form is valid, display confirmation
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

        //Reset form fields
        document.querySelector(".quoteForm").reset();
    }
}   

/*
    DARK MODE TOGGLE
*/
document.addEventListener("DOMContentLoaded", darkMode);

function darkMode(){
    let darkMode = document.getElementById("darkMode");
    darkMode.addEventListener("click", changeDarkMode);
}

// Toggle dark theme
function changeDarkMode(){
    document.body.classList.toggle("dark");
}









