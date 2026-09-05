const form=document.querySelector('#form')
const username=document.querySelector('#username')
const email=document.querySelector('#email')
const password=document.querySelector('#password')
const cpassword=document.querySelector('#cpassword')
const number=document.querySelector('#number')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    ValidateInputs();
})
function ValidateInputs(){
    const usernameVal=username.value.trim();
    const emailVal=email.value.trim();
    const passwordVal=password.value.trim();
    const cpasswordVal=cpassword.value.trim();
    const numberVal=number.value.trim();

    if(usernameVal===''){
        setError(username,'Username is required')
    }
    else{
        setSuccess(username)
    }
    if(emailVal===''){
         setError(email,'Email is required')
    }
    else if(!validateEmail(emailVal)){
        setError(email,'Please enter invalid email')
    }
    else{
        setSuccess(email)
    }
    if(passwordVal===''){
        setError(password,'Password is required')
    }
    else if(passwordVal.length<8){
        setError(password,'Password must be at least 8 characters')
    }
    else{
        setSuccess(password)
    }
    if(cpasswordVal==='')
    {
        setError(cpassword,'Confirm password is required')
    }
    else if(cpasswordVal !== passwordVal){
        setError(cpassword,'Password does not match')
    }
    else{
        setSuccess(cpassword)
    }
    if(numberVal==''){
        setError(number,'Number is required')
    }
    else if(numberVal.length!==10){
        setError(number,'Number must be 10 digits')
    }
    else{
        setSuccess(number)
    }
}
function setError(element,message){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error');
    errorElement.innerHTML=message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}
function setSuccess(element){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error');
    errorElement.innerHTML='';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}
///^[^\s@]+@[^\s@]+\.[^\s@]+$/
const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
};
function validateNumber(number){
    const regex=/^[0-9]{10}$/;
    return regex.test(number);
}