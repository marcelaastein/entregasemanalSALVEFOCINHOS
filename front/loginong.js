let entrar = document.getElementById('entrar');

entrar.onclick = async function (e) {
    e.preventDefault();

    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    let data = {email, senha}; // Update the data object

    const response = await fetch('http://localhost:3001/api/login/ong', {
        method: "POST",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify(data)
    });

    let content = await response.json();
    console.log(content);

    if (content.success) {
        let tipo = 'ong';
        let usuario = content.data[0].id

        
        localStorage.setItem('usuario', usuario);

        console.log(usuario)
        alert('Sucesso!');
        window.location.href = 'formulario.html';

    } else {
        alert('Erro no login, tente novamente!');
        console.log(content)
    }
};