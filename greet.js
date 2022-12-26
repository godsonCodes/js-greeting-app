let closeBtn = document.querySelector('.fa-close');
let submitBtn = document.querySelector('.submit-btn');
let clearBtn = document.querySelector('.clear-btn');
let nameBox = document.querySelector('.name-box');
let message = document.querySelector('.message');
let inputDetails = document.querySelector('.input-details');
let messageh2 = document.querySelector('.message h2');
let backBtn = document.querySelector('.back-btn');
let proceedBtn = document.querySelector('.proceed-btn');

closeBtn.addEventListener('click', () =>{
    alert('This button is yet to be configured. Thanks.')
})

submitBtn.addEventListener('click', () => {
    if(nameBox.value !== ''){
        let userName = nameBox.value;
        messageh2.innerText = `Welcome ${userName}`
        message.classList.toggle('active');
        inputDetails.classList.toggle('active');
    }
    else{
        alert('Please enter your name to proceed!')
    }
 }
)

clearBtn.addEventListener('click', () => {
    nameBox.value = ''
})

proceedBtn.addEventListener('click', () =>{
    alert('This button is yet to be configured. Kindly click the back button to return to the landing page. Thanks.')
})

backBtn.addEventListener('click', () =>{
    message.classList.remove('active');
    inputDetails.classList.remove('active');
}
)
