function checkEmail() {
    var result = document.getElementById("result");
    var emailInpt = document.getElementById("email");
    
    if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(emailInpt.value)) {
        result.innerHTML = "Email is valid";
        result.style.color = 'green';
    } else {
        result.innerHTML = "Email is invalid";
        result.style.color = 'red';
    }
}

let text = "E hwnw!";
let result = text.replaceAll("w", "ë");
console.log(result);
