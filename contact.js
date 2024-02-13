const first=document.getElementById("first");  
    const last=document.getElementById("last");  
    const email=document.getElementById("email");  
    const phone = document.getElementById("phone");  
const subject = document.getElementById("subject");
const form = document.getElementById("form");
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {

  
        e.preventDefault();
        validateInputs();
    
})
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

}
const isValidPhone = phone => {
const res =  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
return res.test(String(phone).toLowerCase());
}
const validateInputs = () => {
    const firstValue = first.value.trim();
    const leastValue = last.value.trim();
    const phoneValue = phone.value.trim();
    const subjectValue  = subject.value.trim();
    const emailValue = email.value.trim();


    if(firstValue === '') {
        setError(first, 'FirstName is required');
    } else {
        setSuccess(first);
    }
    if(leastValue === '') {
        setError(last, 'lastName is required');
    } else {
        setSuccess(last);
    }
    if(subjectValue === '') {
        setError(subject, 'Subject is required');
    } else {
        setSuccess(subject);
    }
    if(phoneValue === '') {
        setError(phone, 'Phone is required');
    } else if (!isValidPhone(phoneValue)) {
        setError(phone, 'Provide a valid phone');
    } else {
        setSuccess(phone);
    }
    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }



};

// function create_account(){  
//     var first=document.getElementById("first").value;  
//     var last=document.getElementById("last").value;  
//     var email=document.getElementById("email").value;  
//     var phone = document.getElementById("phone").value;  
//     var subject = document.getElementById("subject").value;  

//             var letters = /^[A-Za-z]+$/;  
//             var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  
 
//     if(first==''||last==''||email==''||phone==''||subject==''){  
//     alert("Enter each details correctly");  
//     }  
//     else if(!letters.test(first))  
//             {  
//                 alert('FirstName is incorrect must contain alphabets only');  
//     }  
//     else if(!letters.test(last))  
//     {  
//         alert('LastName is incorrect must contain alphabets only'); 
//         console.log(last)
//     }  
//     else if (!email_val.test(e))  
//             {  
//                 alert('Invalid email format please enter valid email id');  
//     }  
//     else if(!letters.test(phone))  
//     {  
//         alert('Phone is incorrect must contain alphabets only');  
// }  
// else if(!letters.test(subject))  
// {  
// alert('Subject is incorrect must contain alphabets only');  
// }  
   

//     }  