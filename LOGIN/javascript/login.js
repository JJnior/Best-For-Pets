function iniciar(event){
    event.preventDefault()
    let email = document.getElementById("input").value;
    let password = document.getElementById("input2").value;
    let emails = ['71582036@certus.edu.pe','73671739@certus.edu.pe','72355194@certus.edu.pe','74374774@certus.edu.pe'];
    let passwords = ['71582036','73671739','72355194','74374774'];
    let userCorrect = false;
    for (let i=0; i<emails.length; i++){
        if ((email == emails[i]) && (password == passwords[i])){
            userCorrect = true;
            window.location= "../index.html";
        }
    }
    if (!userCorrect){
        alert("Verifique sus datos");
    }
}

function register(){
    alert("Aún estamos en trabajando para una mejor atención.")
}

function lostpas(){
    alert("Aún estamos trabajando para una mejor atención.")
}