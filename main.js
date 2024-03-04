const Form = document.getElementById('myForm')
const btn = document.getElementById('myBtn')
const users = document.getElementById('user')
const myItem = document.getElementById('item')
const msg = document.getElementById('Msg')
const msg2 = document.getElementById('Msg2')
const inputText = document.getElementById('text')
const inputEmail = document.getElementById('email')


Form.addEventListener('submit', function (e) {
    e.preventDefault()

    const myText = inputText.value
    const myEmail = inputEmail.value

    if (myText == '' || myEmail == '') {
        showErrorMessage('Please Enter all values!')
        return
    }
    else {
        showRightMessage('You\'ed Entered all values')

        users.innerHTML += `<li id="item"><b> The name: </b> ${myText} <br> <b> The email:</b> ${myEmail} </li>`
        inputText.value = ''
        inputEmail.value = ''

    }


    function showErrorMessage(message) {
        msg.innerHTML += message
        msg.classList.add('error')


        setTimeout(() => {
            msg.classList.remove('error')
            msg.innerHTML = ''
        }, 2000);
    }

    function showRightMessage(message2) {
        msg2.innerHTML += message2
        msg2.classList.add('right')

        setTimeout(() => {
            msg2.classList.remove('right')
            msg2.innerHTML = ''
        }, 2000);
    }
})






