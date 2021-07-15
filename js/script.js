const formulario = document.querySelector('.email')
const input = document.querySelector('[required]')
const btn = document.querySelector('[tyoe="submit"]')
const error = input.nextElementSibling;


formulario.addEventListener('change', handleForm)

function handleForm(event) {
    const target = event.target

    if (!event.target.checkValidity()) {
        target.classList.add('invalid')
        target.previousElementSibling.classList.add('active')
        target.nextElementSibling.classList.add('invalido')
        target.nextElementSibling.innerText = 'Please provide a valid email '

    } else {
        target.classList.remove('invalid')
        target.previousElementSibling.classList.remove('active')
        target.nextElementSibling.classList.remove('invalido')
        target.nextElementSibling.innerText = ''
    }

}