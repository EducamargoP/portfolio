function validarFormulario() {
  let honeypot = document.querySelector('[name="botcheck"]')
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

<<<<<<< HEAD
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
=======
overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
>>>>>>> parent of b8f282d (inicio segurança)
