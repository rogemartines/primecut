let inicio = document.getElementById('inicio');
inicio.addEventListener("click", function(funcao){
  funcao.preventDefault();
  let home = document.getElementsByClassName('home')[0];
  home.scrollIntoView({behavior:'smooth'});
});


let sobrenos = document.getElementById('sobrenos');
sobrenos.addEventListener("click", function(funcao){
  funcao.preventDefault();
  let about = document.getElementsByClassName('about')[0];
  about.scrollIntoView({behavior:'smooth'});
});

let cards = document.getElementById('cortes');
cards.addEventListener("click", function(funcao){
  funcao.preventDefault();
  let card = document.getElementsByClassName('cortes-nobres')[0];
  card.scrollIntoView({behavior:'smooth'});
});

let contato = document.getElementById('contato');
contato.addEventListener("click", function(funcao){
  funcao.preventDefault();
  let formulario = document.getElementsByClassName('formulario')[0];
  formulario.scrollIntoView({behavior:'smooth'});
});

let button = document.getElementsByClassName('home-button')[0];
button.addEventListener('click', function(funcao){
  funcao.preventDefault();
  let card = document.getElementsByClassName('cortes-nobres')[0];
  card.scrollIntoView({behavior:'smooth'});
});

let form = document.getElementsByClassName('form')[0];
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let telefoneInput = document.getElementById('telefone');
let comunicacao = document.getElementById('comunicacao');
let mensagem = document.getElementById('mensagem');
let preferenica = document.getElementById('prefencia');
let tipo = document.getElementById('tipo');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if(nameInput.value === ""){
    alert('Por favor, preencha o seu nome.')
    return;
  }

  if(emailInput.value === "" || !isEmailValid(emailInput.value)){
    alert("Por favor, preencha com um e-mail válido");
    return;
  }

  if(!validateTell(telefoneInput.value, 11)){
    alert('O número de telefone precisa ter no mínimo 11 dígitos incluindo o DDD.');
    return;
  }

  if(comunicacao.value === ""){
    alert("Por favor selecione uma opção abaixo.")
  }

  if(preferenica.value === "") {
    alert("Por favor selecione uma opção abaixo.")
  }

  if(tipo.value === "") {
    alert("Por favor selecione uma opção abaixo.")
  }

  if(!validateMsg(mensagem.value, 60)){
    alert('Digite uma mensagem com no mínimo 60 caracteres.');
    return;
  }

  form.submit();
})

  //validação e-mail
function isEmailValid(email){
  let emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );

    if(emailRegex.test(email)){
      return true;
    }
    return false;
}

function validateTell(telefone, minDigits){
  if(telefone.length >= minDigits){
    return true;
  }
  return false;
}

function validateMsg(mensagem, minDigits){
  if(mensagem.length >= minDigits){
    return true;
  }
  return false;
}
