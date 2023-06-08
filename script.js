const pwOne = document.getElementById('password1');
const pwTwo = document.getElementById('password2');
const pwMatch = document.querySelector('.password + span');
const form = document.getElementById('theForm');
const badPW = document.querySelector('form > div');

document.querySelectorAll('.password').forEach(tag => {
    tag.addEventListener('keypress', () => {
        setTimeout(() => {
            console.log(pwMatch)
            if (pwOne.value === pwTwo.value) {
                pwOne.classList.remove('error');
                pwTwo.classList.remove('error');
                pwMatch.innerText = "";
            } else {
                pwOne.classList.add('error');
                pwTwo.classList.add('error');
                pwMatch.innerText = "* Passwords do not match"
            }
        },100)
    })
})

form.addEventListener("submit", (e) => {
    console.log(badPW)
    if (pwOne.value !== pwTwo.value) {
        e.preventDefault();
        badPW.textContent = "PASSWORDS DO NOT MATCH!!!!";
        badPW.classList.add('badPw');
        setTimeout(() =>{
            badPW.textContent = '';
            badPW.classList.remove('badPw');
        },2000)
    }
})