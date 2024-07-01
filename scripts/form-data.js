let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let msg = document.getElementById("msg");

window.addEventListener("load", (e) => {
    fname.innerHTML = localStorage.getItem("firstname")
    lname.innerHTML = localStorage.getItem("lastname")
    email.innerHTML = localStorage.getItem("email")
    msg.innerHTML = localStorage.getItem("message")
});