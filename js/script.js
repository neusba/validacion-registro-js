
let inputName = document.getElementById('name')
let inputEmail = document.getElementById('email')
let inputPassword = document.getElementById('password')
let inputRepeat = document.getElementById('passwordR')
let inputCP = document.getElementById('cp')

// Evento para el input #name
inputName.addEventListener("focusout", function() {
    inputName.style.borderStyle = 'solid'
    if (inputName.value == '') {
        inputName.style.borderColor = 'red'
        inputName.placeholder = 'Enter a name!'
    } else {
        inputName.style.borderColor = 'lightgreen'
    }
});

// Evento para input email
inputEmail.addEventListener("focusout", function() {
    inputEmail.style.borderStyle = 'solid'
    inputEmail.style.color = 'black'
    if (validateEmail(inputEmail.value)) {
        inputEmail.style.borderColor = 'lightgreen'
    } else {
        inputEmail.style.borderColor = 'red'
        if (inputEmail.value == '') {
            inputEmail.placeholder = 'Enter an email!'
        } else {
            inputEmail.value = ''
            inputEmail.placeholder = 'Invalid email!'
            inputEmail.style.color = 'red'
        }
    }
})

function validateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return true;
    }else{
        return false;
    }
}

// Evento para el input password
let regExps = [/^.{8,}$/, /[A-Z]/, /[a-z]/, /[0-9]/, /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/];

inputPassword.addEventListener("input", function() {
    inputPassword.style.borderStyle = 'solid'
    let error = inputPassword.value.match(regExps)
    if (!error) {
        let msg = document.getElementById('error')
        msg.style.display = 'flex'
        msg.textContent = 'Invalid password'
        msg.style.color = 'red'
        inputPassword.style.borderColor = 'red'
    } else {
        msg.style.display = 'none'
        inputPassword.style.borderColor = 'lightgreen'
    }
});



// Evento para comprobación de contraseña
inputRepeat.addEventListener("focusout", function() {
    inputRepeat.style.borderStyle = 'solid'
    if (inputRepeat.value == inputPassword.value) {
        inputRepeat.style.borderColor = 'lightgreen'
    } else {
        inputRepeat.style.borderColor = 'red'
        inputRepeat.value = ''
        inputRepeat.placeholder = "Passwords doesn't match"
    }
})

// Evento para el input password
inputCP.addEventListener("focusout", function () {
    inputCP.style.borderStyle = 'solid'
    if (inputCP.value != '') {
        inputCP.style.borderColor = 'lightgreen'
    } else {
        inputCP.style.borderColor = 'red'
    }
})