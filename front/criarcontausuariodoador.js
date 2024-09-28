let button = document.getElementById('criarcontadoador');

button.onclick = async function() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let cidade = document.getElementById('cidade').value;
    let senha = document.getElementById('senha').value;
    let ConfirmarSenha = document.getElementById('confirmar_senha').value;

    let data = {nome,email,cidade,senha}

    const response = await fetch('http://localhost:3001/api/store/criarUsuario', {
        method: 'POST',
        headers: {'Content-type': 'application/json;charset=UTF-8'},
        body: JSON.stringify(data)
    });
    
    let content = await response.json();
    
    if(content.success) {
        alert('Sucesso!');
        window.location.href = 'index.html'
    } else {
        alert('Algo deu errado, tente novamente!');
    }
    
    // let reload = await content;
    // reload = location.reload()
};