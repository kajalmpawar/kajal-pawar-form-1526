let fn = document.getElementById("fname");
let email = document.getElementById("email");
let message = document.getElementById("msg");
let button = document.getElementById("btn");

function formValidator(){
    
    let data = {};
    let err = [];
    if (fn.value !== ""){
        data.fname = fn.value;
    }else {
        err.push("<p>Please provide your full name </p>");
    }
    
    if (email.value !== ""){
        data.email = email.value;
    }else {
        err.push("<p>Please provide your email </p>");
    }
    
    if (message.value !== ""){
        data.msg = message.value;
    }else {
        err.push("<p>Please provide your message. </p>");
    }
    
  /*  if (err.length === 0){
        console.log(data);
    } else {
        console.log(err);
    }    */  
    
    console.log(data, err);
}

button.addEventListener('click', formValidator);