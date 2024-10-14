const form = document.getElementById("form");
const email = document.getElementById("email");
const button = document.getElementById("button");

form.addEventListener('submit', (e) => {
    e.preventDefault()

    Validate()
})

function Validate() {
    const emailValue = email.value(trim)

    if (emailValue === '') {
        setErrorFor(email, `Email cannot be empty`)
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, `Please provide a valid email address`)
    } else {
      setSuccessFor(email)
    }
}

//where i can now add classes for an error 
function setErrorFor() {

}

// this could be a small green tick to show valid 
function setSuccessFor() {

}

// add rejects function like a test
function isEmail(email) {

}