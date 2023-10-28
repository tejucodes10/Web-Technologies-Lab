let userName=document.getElementById("txtUserName");
let email=document.getElementById("txtEmail");
let phn = document.getElementById("txtPhn");
let gen = document.getElementById("txtGen");
let loc = document.getElementById("txtLoc");
let pwd=document.getElementById("txtPwd");
let conPwd=document.getElementById("txtConPwd");
let form=document.querySelector("form");

function validateInput(){
    //check username is empty 
    if(userName.value.trim()===""){
       onError(userName,"*User Name cannot be empty");
    }else{
        onSuccess(userName);
    }
    if(email.value.trim()===""){
        onError(email,"*Email cannot be empty");
    }else{
        if(!isValidEmail(email.value.trim())){
            onError(email,"*Email is not valid");
        }else{
            onSuccess(email);
        }
    }
    // Phone Number
    if (txtPhone.value.trim() === "") {
        onError(txtPhone, "*Phone Number cannot be empty");
    } else {
        if (!isValidPhoneNumber(txtPhone.value.trim())) {
            onError(txtPhone, "*Invalid Phone Number");
        } else {
            onSuccess(txtPhone);
        }
    }

    // Gender
    if (ddlGender.value === "") {
        onError(ddlGender, "*Please select a gender");
    } else {
        onSuccess(ddlGender);
    }

    // Location
    if (txtLocation.value.trim() === "") {
        onError(txtLocation, "*Location cannot be empty");
    } else {
        onSuccess(txtLocation);
    }

    // Password
if (pwd.value.trim() === "") {
    onError(pwd, "*Password cannot be empty");
} else if (!isValidPassword(pwd.value.trim())) {
    onError(pwd, "*Password- at least 6 characters with at least 1capital letter & 1special character");
} else {
    onSuccess(pwd);
}

if (conPwd.value.trim() === "") {
    onError(conPwd, "*Confirm Password cannot be empty");
} else if (pwd.value.trim() !== conPwd.value.trim()) {
    onError(conPwd, "*Password & Confirm Password do not match");
} else {
    onSuccess(conPwd);
}

function isValidPassword(password) {
    // Password should be at least 6 characters, have at least one capital letter, and one special character
    // You can modify this regular expression based on your specific password requirements
    return /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password);
}

     if (
        userName.parentElement.classList.contains("success") &&
        email.parentElement.classList.contains("success") &&
        txtPhone.parentElement.classList.contains("success") &&
        ddlGender.parentElement.classList.contains("success") &&
        txtLocation.parentElement.classList.contains("success") &&
        pwd.parentElement.classList.contains("success") &&
        conPwd.parentElement.classList.contains("success")
      ) {
        submitForm();
      }

}

document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault();
    validateInput();
});

function onSuccess(input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden"; 
    parent.classList.remove("error");
    parent.classList.add("success");  
}

function onError(input,message){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;  
    parent.classList.add("error");
    parent.classList.remove("success");

}

function isValidEmail(email){
   return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isValidPhoneNumber(phn) {
    // You can add your own validation logic for phone numbers
    // This is just a simple example
    return /^[0-9]{10}$/.test(phn);
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    validateInput();
});

function onSuccess(input) {
    let parent = input.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility = "hidden";
    parent.classList.remove("error");
    parent.classList.add("success");
}

function onError(input, message) {
    let parent = input.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility = "visible";
    messageEle.innerText = message;
    parent.classList.add("error");
    parent.classList.remove("success");
}

function submitForm() {
    // Your form submission logic here, e.g., using AJAX to send the form data to the server.
    // For the sake of this example, we will show an alert when the form is submitted.
    alert("Form submitted successfully!");
  }

form.addEventListener("submit", function (event) {
    event.preventDefault();
    validateInput();
  });


