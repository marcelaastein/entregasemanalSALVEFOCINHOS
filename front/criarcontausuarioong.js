let button = document.getElementById('criarcontausuarioong');

button.onclick = async function() {
    let nome = document.getElementById('nomeong').value;
    let email = document.getElementById('emailong').value;
    let cidade = document.getElementById('cidadeong').value;
    let senha = document.getElementById('senhaong').value;

    let data = {nome,email,cidade,senha}

    const response = await fetch('http://localhost:3001/api/store/ong', {
        method: 'POST',
        headers: {'Content-type': 'application/json;charset=UTF-8'},
        body: JSON.stringify(data)
    });
    
    let content = await response.json();
    
    if(content.success) {
        alert('Sucesso!');
       window.location.href = 'loginong.html'
    } else {
        alert('Algo deu errado, tente novamente!');
    }
    
    // let reload = await content;
    // reload = location.reload()
};