const API_URL = 'http://localhost:5000/api';

document.getElementById('formLogin').addEventListener('submit', function (event) {
    const usern = document.getElementById('usern');
    const passw = document.getElementById('passw');
    const erroLogin = document.getElementById('erroLogin');

    if (!usern.value.trim() || !passw.value.trim()) {
        erroLogin.classList.remove("is-hidden");
        event.preventDefault();
    }
    else {
        erroLogin.classList.add("is-hidden");     
    }
}); 

document.getElementById('formComentario').addEventListener('submit', function (event) {
    const nome = document.getElementById('nomeComentario');
    const comentário = document.getElementById('textoComentario');
    const erroCom = document.getElementById('erroCom');

    if (!nome.value.trim() || !comentário.value.trim()) {
        erroCom.classList.remove("is-hidden");
        event.preventDefault();
    }
    else {
        erroCom.classList.add("is-hidden");
    }

});

document.getElementById('form_usuario').addEventListener('submit', async function (event) {
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const solicit = document.getElementById('solicit');
    const erroSoli = document.getElementById('erroSoli');

    if (!nome.value.trim() || !email.value.trim() || !solicit.value.trim()) {
        erroSoli.classList.remove("is-hidden");
        event.preventDefault();
    }
    else {
        erroSoli.classList.add("is-hidden");
        event.preventDefault();
        await enviarComentario();    
    }
}); 

function limpar() {
    document.getElementById("form_usuario").reset();
}


function abrir(string) {
    document.getElementById(string).classList.add('is-active');
}
function fechar(string) {
    document.getElementById(string).classList.remove('is-active');
}

function abrirModal() {
    abrir('modalLogin');
}
function fecharModal() {
    fechar('modalLogin');
}

function abrirModalComentario() {
    abrir('modalComentario');
}

function fecharModalComentario() {
    fechar('modalComentario');
}

async function enviarComentario() {
    const autor = document.getElementById('nomeComentario').value;
    const texto = document.getElementById('textoComentario').value;

    try {
        const response = await fetch('/api/comentarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ autor: autor, texto: texto })
        });


        const data = await response.json();

        if (response.ok) {
            fecharModalComentario();

            window.location.reload();
            alert(data.mensagemok);
        } else {
            console.error('Erro ao enviar comentário:', response.status);
            alert(data.erro);
        }
    } catch (error) {
        console.error('Erro ao enviar comentário:', error);
        alert(data.mensagemoff)
    }
}
async function login() {
    const username = document.getElementById('usern').value;
    const password = document.getElementById('passw').value;
    console.log(username);
    // if (input.value.trim() !== '') {
    //     const response = await fetch(`${API_URL}/clientes`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ nome: input.value }),
    //     });
    //     if (response.ok) {
    //         input.value = '';
    //         pegaClientes();
    //     }
    // }

    // fecharModal();
}

function fecharModal() {
    document.getElementById('modalLogin').classList.remove('is-active');
}

//para o futuro
// window.location.assign("/clientes"); 

