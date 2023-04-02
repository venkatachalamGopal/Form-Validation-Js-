const form=document.querySelector('#form');
const username=document.querySelector('#username');
const email=document.querySelector('#Email');
const password=document.querySelector('#password');
const confirm_password=document.querySelector('#confirm_password');

// Password shows function ....

let Btn=document.querySelector('.passwordShow')

Btn.addEventListener("click",function(e){
    e.preventDefault();
    let att=password.getAttribute("type")
    if(att=="password"){
        password.setAttribute('type',"text")
    }else{
        password.setAttribute('type',"password")
    }

})
let Btn1=document.querySelector('.eye-2')
Btn1.addEventListener("click",function(e){
    e.preventDefault();
    let att=confirm_password.getAttribute("type")
    if(att=="password"){
        confirm_password.setAttribute('type',"text")
    }else{
        confirm_password.setAttribute('type',"password")
    }

})



form.addEventListener("submit",function(e){
    e.preventDefault();
    errorValidation([username,email,password,confirm_password])
    checklength(username);
    checkemail(email);
    checkpassword(password,5,10);
    confirmPassword(password,confirm_password)
    const obj={
        username:username.value,
        email:email.value,
        password:password.value,
        confirmPassword:confirm_password.value
    }
    console.log(obj);
    alert("Form submitted")
})

//  1. Filled or Not Filled .........

function errorValidation(inputs){
    inputs.forEach((input)=>{
        if(input.value.trim()==""){
            errorMessage(input,"is required")

        }else{
            successMessage(input)

        }
    
    })
}

function errorMessage(input,message){
    const formGroup=input.parentElement
    formGroup.className="form-group error";
    let para=formGroup.querySelector('p')
    let value=input.getAttribute("id");
    para.innerText=`${value} ${message} *`;
    
}

function successMessage(input){
    const formGroup=input.parentElement
    formGroup.className="form-group success";

}
// --------------------
function checklength(username){
    if(username.value.trim()==""){
        errorMessage(username,"required")
    }else{
        successMessage(username)
    }

}


//  2. Checking input value Length .........

function checkpassword(input,min,max){
    
    if(input.value.trim().length<min){
        errorMessage(input,`mustbe Minimum ${min} characters`)
    }else if(input.value.trim().length>max ){
        errorMessage(input,`mustbe Maximum ${max} characters`)
        

    }else{
        successMessage(input)
        
    }
    
}

//  3. CheckProper Email id using regex function.........

String.prototype.isEmail = function () {
    return !!this.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
  };

function checkemail(email){
    if(email.value.trim().isEmail()){
        successMessage(email)
    }else{
        errorMessage(email,"address not valid")
    }
}

//  4. confirm Password function.........

function confirmPassword(password,confirm_password){
    let pass1=password.value.trim();
    let pass2=confirm_password.value.trim()
    if(confirm_password.value.trim()==""){
        errorMessage(confirm_password,"Required")
    }
    else if(pass1==pass2){
        successMessage(confirm_password)

    }else{
        errorMessage(confirm_password,"not match")
    }

}



