function entrar () {

  let aemail = document.querySelector('#ilogin').value
  let asenha = document.querySelector('#isenha').value
  console.log(`${aemail} e ${asenha}`)

  let aalert = document.querySelector('#alert')
  
  aalert.style.display = 'block'
  aalert.innerHTML = `<h1>Seu email é ${aemail}</h1><h1>E sua senha é ${asenha}</h>`

}