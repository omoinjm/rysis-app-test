// 3.1 get Full Name from User Interface
import User from "./userClass.js"

const Username = document.getElementById("username")
const Password = document.getElementById("password")

// get Data from UI
function getFullName() {
    return document.querySelector("input").value
}

// set data in the Ussername and Password variables
document.querySelector("button").onclick = function() {  
    const user = new User(getFullName())
    Username.innerHTML = "USERNAME: " + user.username()
    Password.innerHTML = "PASSWORD: " + user.password()
}