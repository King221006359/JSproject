var adminAccount = {
    email: "admin@gmail.com",
    password: "admin123"
}

function adminLogin() {
    var email = document.getElementById("emailM").value;
    email.toLowerCase();
    var password = document.getElementById("passwordM").value;
    if (email === adminAccount.email && password === adminAccount.password) {
        document.getElementById("display1").style.display = 'block';
        document.getElementById("error2").style.display = 'none';
        setTimeout(function () {
            location = 'index.html'
        }, 2000)
    }
    else {
        document.getElementById("error2").style.display = 'block';
    }
}