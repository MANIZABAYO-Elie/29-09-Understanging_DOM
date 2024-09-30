// const btn = document.getElementById('btn');
// const heading = document.querySelector('.title');
// btn.addEventListener('click',function () {
//     console.log('hello world');
//     heading.style.display = 'block'
// })

const form = document.getElementById('form');
const username = document.getElementById('username');
const email  = document.getElementById('email');
const password = document.getElementById('password');


form.addEventListener('submit', e=>{
    e.preventDefault();
    validateInputs();
    isValidEmail()
})
const validateInputs = ()=>{
   const  usernameValue = username.value.trim();
   const  emailValue = email.value.trim();
   const  passwordValue = password.value.trim();
   if(usernameValue===""){
    const usernameError= document.querySelector('.username-error');
    usernameError.style.display = 'block';
   }else{
    usernameError.style.display = 'none';
   }
   isValidEmail=(email)=>{
    const emailError = document.querySelector('.email-error');
    if(emailValue===""){
      emailError.style.display= 'block'
    
    }
   const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email).toLowerCase();
    

    }
    if(passwordValue===""){
        const passwordError = document.querySelector('.password-error');
        passwordError.style.display= 'block';
    }else if(passwordValue.length<8){
        

    }else{
        passwordError.style.display= 'none';

    }
}
    
    
   

