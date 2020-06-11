
// funcao que pega o valor do input e joga no localStorage e se estiver todos os campos 
// corretos entra na pagina inicial
function logar(){

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let genere = document.getElementById('genere').value;
    let date = document.getElementById('date').value;
    let senha = document.getElementById('senha').value;

    localStorage.setItem('nome', nome);
    localStorage.setItem('email', email);
    localStorage.setItem('genere', genere);
    localStorage.setItem('date', date);
    localStorage.setItem('senha', senha);

    if(nome != "" && email != "" && senha != ""){
        window.location.href = "index.html"
    }else{
        alert("insira seus dados");
    }
    
}

logar()

// function Nova()
// {
// location.href=" tela1.html"
// };
