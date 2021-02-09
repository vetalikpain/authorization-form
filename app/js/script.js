

const signUpButton = document.getElementById("signUp")
const signInButton = document.getElementById("signIn")
const container = document.getElementById("container")
const info = document.getElementsByClassName('sign-up')
const button = document.querySelector('#sign-up-btn')
const input = document.querySelector("#phone");

const generateCSV = (e) => {

    e.preventDefault()
    const infoArray = []
    for (let i = 0; i < info.length; i++) {
        infoArray.push(info[i].value)
    }
    const rows = [
        ["name", "email", "phone"],
        infoArray
    ];

    let csvContent = "data:text/csv;charset=utf-8,"
        + rows.map(e => e.join(" ")).join("\n");

    var encodedUri = encodeURI(csvContent);
    window.open(encodedUri);
}
const slideRight = () => { container.classList.add("right-panel-active") }
const slideLeft = () => { container.classList.remove("right-panel-active") }
signUpButton.addEventListener("click", slideRight,
    signInButton.addEventListener("click", slideLeft ));

button.addEventListener('click', generateCSV)
