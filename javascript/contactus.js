"use strict";
const $ = selector => document.querySelector(selector);
const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

const checkIfExists = (text,name) => {
    if(!text){
        switch(name){
            case "email":
                throw new Error ("Email Required");       
        }
    }
    return text;
}

const checkIfValid = () =>{
    let isValid = true;

    try{
        const email = $("#email_input").value;
        checkIfExists(email,"email")
        if(!emailPattern.test(email)){
            isValid = false;
            throw new Error ("Enter a valid Email!!")
        }
        else{
            $("#emailError").textContent = "";
        }
    }
    catch(error){
        $("#emailError").textContent = error.message;
        isValid = false;
    }

}

document.addEventListener("DOMContentLoaded", () => {

    $("#signup").addEventListener("click",checkIfValid);
    
});