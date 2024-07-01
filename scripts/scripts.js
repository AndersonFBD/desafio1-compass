let fname = document.getElementById("first-name-input")
let lname = document.getElementById("last-name-input")
let email = document.getElementById("email-input")
let message = document.getElementById("message-input")
let formbtn = document.getElementById("form-submit-button")
const mailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
const nameRegex = /^[a-zA-Z]+$/


const form = document.getElementById("contact-form")

form.addEventListener("change", (e)=>{
    if (fname.value.length > 0 && email.value.length > 0 && lname.value.length > 0 && email.value.length > 0 && message.value.length > 0 ){
        formbtn.disabled = false;
    }
    else{
        formbtn.disabled = true;
    }
})

function validarForm(){
    if(!nameRegex.test(fname.value)){
       let errmsg = document.getElementById("first-name-error")
       mostrarErro(errmsg);
    }
    else if(!nameRegex.test(lname.value)){
        let errmsg = document.getElementById("last-name-error")
        mostrarErro(errmsg);
    }
    else if(!mailRegex.test(email.value)){
        let errmsg = document.getElementById("email-error")
        mostrarErro(errmsg);
    }
    else if(message.value.trim().length < 10){
        let errmsg = document.getElementById("message-box-error")
        mostrarErro(errmsg);
    }
    else{
        console.log("passou");
        armazenar(fname, lname, email, message);
        window.location.href ="./success.html";
    }
}

function mostrarErro(msg){
    msg.style.display = "block"
    setInterval(function(){
        msg.style.display = "none"
    }, 5000)
}

async function armazenar(fname, lname, email, message){
    localStorage.setItem("firstname", fname.value);
    localStorage.setItem("lastname", lname.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("message", message.value);
} 