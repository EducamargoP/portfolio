document.addEventListener('DOMContentLoaded', () => {
  let btnMenu = document.getElementById('btn-menu')
  let menu = document.getElementById('menu-mobile')
  let overlay = document.getElementById('overlay-menu')

  // Toggle menu
  btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
  })

  menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
  })

  overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
  })

  // Variáveis do formulário
  let nomeInput = document.getElementById('nome')
  let numeroInput = document.getElementById('numero')
  let emailInput = document.getElementById('email')
  let textoInput = document.getElementById('mensagem')
  let honeypot = document.querySelector('[name="botcheck"]')

  // Função de validação
  window.validarFormulario = function () {
    if (honeypot.value.trim() !== "") {
      alert("Formulário bloqueado: suspeita de robô.")
      return false
    }

    let nomeValido = /^[a-zA-ZÀ-ÿ\s]{1,50}$/.test(nomeInput.value)
    let numeroValido = /^\d{1,10}$/.test(numeroInput.value)
    let emailValido = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput.value)
    let textoSeguro = !/(https?:\/\/|<script|<iframe|<img|<style|ls\s|rm\s|-rf|sudo|\.exe)/i.test(textoInput.value)

    if (!nomeValido) {
      alert('Nome inválido: insira apenas letras e espaços.')
      return false
    }

    if (!numeroValido) {
      alert('Número inválido: insira até 10 dígitos numéricos.')
      return false
    }

    if (!emailValido) {
      alert('E-mail inválido: verifique o formato.')
      return false
    }

    if (!textoSeguro) {
      alert('Mensagem contém conteúdo não permitido (links ou código).')
      return false
    }

    return true
  }
})
