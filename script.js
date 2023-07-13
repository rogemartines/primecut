let prime = document.getElementById('home-logo')
prime.addEventListener('click', function (funcao) {
  funcao.preventDefault()
  let home = document.getElementsByClassName('home')[0]
  home.scrollIntoView({ behavior: 'smooth' })
})

let inicio = document.getElementById('inicio')
inicio.addEventListener('click', function (funcao) {
  funcao.preventDefault()
  let home = document.getElementsByClassName('home')[0]
  home.scrollIntoView({ behavior: 'smooth' })
})

let sobrenos = document.getElementById('sobrenos')
sobrenos.addEventListener('click', function (funcao) {
  funcao.preventDefault()
  let about = document.getElementsByClassName('about')[0]
  about.scrollIntoView({ behavior: 'smooth' })
})

let cards = document.getElementById('cortes')
cards.addEventListener('click', function (funcao) {
  funcao.preventDefault()
  let card = document.getElementsByClassName('cortes-nobres')[0]
  card.scrollIntoView({ behavior: 'smooth' })
})

let contato = document.getElementById('contato')
contato.addEventListener('click', function (funcao) {
  funcao.preventDefault()
  let formulario = document.getElementsByClassName('formulario')[0]
  formulario.scrollIntoView({ behavior: 'smooth' })
})

let localizacao = document.getElementById('localizacao')
localizacao.addEventListener('click', function (funcao) {
  funcao.preventDefault()
  let map = document.getElementsByClassName('mapa')[0]
  map.scrollIntoView({ behavior: 'smooth' })
})

let redes = document.getElementById('redes')
redes.addEventListener('click', function (funcao) {
  funcao.preventDefault()
  let footer = document.getElementsByClassName('footer-section')[0]
  footer.scrollIntoView({ behavior: 'smooth' })
})

let button = document.getElementsByClassName('home-button')[0]
button.addEventListener('click', function (funcao) {
  funcao.preventDefault()
  let card = document.getElementsByClassName('cortes-nobres')[0]
  card.scrollIntoView({ behavior: 'smooth' })
})

let form = document.getElementsByClassName('form')[0]
let nameInput = document.getElementById('name')
let emailInput = document.getElementById('email')
let telefoneInput = document.getElementById('telefone')
let comunicacao = document.getElementById('comunicacao')
let mensagem = document.getElementById('mensagem')
let preferencia = document.getElementById('preferencia')
let tipo = document.getElementById('tipo')

const handleChangeTextInSpan = (id, message) => {
  document.getElementById(id).textContent = message
}

form.addEventListener('submit', event => {
  event.preventDefault()

  let errors = false

  if (nameInput.value === '') {
    handleChangeTextInSpan('nome-error', 'Por favor, preencha com o seu nome.')
  } else {
    handleChangeTextInSpan('nome-error', '')
  }

  if (emailInput.value === '' || !isEmailValid(emailInput.value)) {
    handleChangeTextInSpan(
      'email-error',
      'Por favor, preencha com um e-mail válido.'
    )
  } else {
    handleChangeTextInSpan('email-error', '')
  }

  if (!validateTell(telefoneInput.value, 11)) {
    handleChangeTextInSpan(
      'telefone-error',
      'Por favor, preencha com telefone válido.'
    )
  } else {
    handleChangeTextInSpan('telefone-error', '')
  }

  if (preferencia.value === '') {
    handleChangeTextInSpan(
      'preferencia-error',
      'Por favor, selecione ao menos uma opção acima.'
    )
  } else {
    handleChangeTextInSpan('preferencia-error', '')
  }

  if (tipo.value === '') {
    handleChangeTextInSpan(
      'tipo-error',
      'Por favor, selecione ao menos uma opção acima.'
    )
    errors = true
  } else {
    handleChangeTextInSpan('tipo-error', '')
  }

  if (comunicacao.value === '') {
    handleChangeTextInSpan(
      'comunicacao-error',
      'Por favor, selecione ao menos uma opção acima.'
    )
  } else {
    handleChangeTextInSpan('comunicacao-error', '')
  }

  if (!validateMsg(mensagem.value, 5)) {
    handleChangeTextInSpan(
      'textarea-error',
      'Digite uma mensagem de mínimo 5 caracteres.'
    )
  } else {
    handleChangeTextInSpan('textarea-error', '')
  }

  if (
    nameInput.value === '' ||
    !validateMsg(mensagem.value, 5) ||
    emailInput.value === '' ||
    !isEmailValid(emailInput.value) ||
    !validateTell(telefoneInput.value, 11) ||
    preferencia.value === '' ||
    tipo.value === '' ||
    comunicacao.value === ''
  ) {
    errors = true
  } else {
    errors = false
  }
  if (!errors) {
    //form.submit()
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
  }
  form.reset();
    //alert('Mensagem enviada')
  }
})

//validação e-mail
function isEmailValid(email) {
  let emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/)

  if (emailRegex.test(email)) {
    return true
  }
  return false
}

function validateTell(telefone, minDigits) {
  if (telefone.length >= minDigits) {
    return true
  }
  return false
}

function validateMsg(mensagem, minDigits) {
  if (mensagem.length >= minDigits) {
    return true
  }
  return false
}

const handlePhone = event => {
  let input = event.target
  input.value = phoneMask(input.value)
}

const phoneMask = value => {
  if (!value) return ''
  value = value.replace(/\D/g, '')
  value = value.replace(/(\d{2})(\d)/, '($1) $2')
  value = value.replace(/(\d)(\d{4})$/, '$1-$2')
  return value
}
