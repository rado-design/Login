const signinBtn = document.querySelector('.signinBtn');
const signupBtn = document.querySelector('.signupBtn');
const formbox = document.querySelector('.formbox');
const body = document.querySelector('body');


signupBtn.addEventListener('click', function(){
    formbox.classList.add('active')
    body.classList.add('active')
})

signinBtn.addEventListener('click', function(){
    formbox.classList.remove('active')
    body.classList.remove('active')
})

