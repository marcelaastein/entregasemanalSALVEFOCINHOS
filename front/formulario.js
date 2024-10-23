const usuario = usuario_logado = JSON.parse(localStorage.getItem('usuario'));
console.log(usuario)

// pega o botao e o formulario do html
let botao = document.getElementById('botao');
let formulario = document.getElementById('formulario')

// aqui é se o botao aparece ou não 

if (usuario.tipo === 'doador') {
    botao.style.display = 'none';
} else {
    botao.style.display = 'flex'
}

// quando clica no bota aparece o formulario
botao.addEventListener('click', function (e) {
    formulario.style.display = 'flex';

    const usuarioLogado = usuario_logado = JSON.parse(localStorage.getItem('usuario'));

    let emailLogado = document.getElementById('email').value = usuarioLogado.data.email;
    let nomeLogado = document.getElementById('nome').value = usuarioLogado.data.nome;
});

// função pra criar o card da doação
document.getElementById('formulario').addEventListener('submit', async function (e) {
    e.preventDefault();

    // puxa os campos do formulario
    let ong = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let produto = document.getElementById('produto').value;

    // Condição pra verificar se todos campos estão preenchidos
    if (!ong || !email || !produto) {
        alert('Falta informações!');
    } else {
        // adiciona os dados que vão pro bd na lista "dados"
        let dados = { ong, email, produto };

        console.log(dados)

        const response = await fetch('http://localhost:3001/api/store/doacao', {
            method: 'POST',
            headers: { 'Content-type': 'application/json;charset=UTF-8' },
            body: JSON.stringify(dados)
        });

        let content = await response.json();

        // condição para caso der certo no banco de dados, irá criar o card no html
        if (content.success) {
            alert('Sucesso!');

            // define uma variavel para o card e cria uma div
            let doacao = document.createElement('div');
            doacao.className = 'card_doacao';

            // adiciona o que foi configurado na variavel para enviar para o html com base nas variaveis do formulario
            doacao.innerHTML = `
                <p><b>Ong:</b> ${ong}</p>
                <p><b>Nome completo:</b> ${nome_completo}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Produto:</b> ${produto}</p>
            `;

            // puxa a div que vai ser adicionada o card de doação
            document.querySelector('.doacao').appendChild(doacao);

            // fecha o formulário novamente ao enviar
            document.getElementById('formulario').style.display = 'none';
            // limpa os campos do formulario ao enviar
            document.getElementById('formulario').reset();
        } else {
            alert('Algo deu errado, tente novamente!');
        }
    }

});


// fechar

document.addEventListener('DOMContentLoaded', function () {
    const fecharBtn = document.getElementById('fechar');
    const formulario = document.getElementById('formulario');

    fecharBtn.addEventListener('click', function () {
        // Limpar os campos do formulário
        const inputs = formulario.querySelectorAll('.input_campo');
        inputs.forEach(input => input.value = '');

        // Fechar o formulário
        formulario.style.display = 'none';
    });
});

