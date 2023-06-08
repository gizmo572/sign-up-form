const pwOne = document.getElementById('password1');
const pwTwo = document.getElementById('password2');
const pwMatch = document.querySelector('.password + span');

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