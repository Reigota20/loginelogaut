function login() {
	var login = [];
	console.log('login()');

	var email = document.getElementById('inputEmail').value;
	var senha = document.getElementById('inputSenha').value;
	
	login.push(email);
	login.push(senha);

	console.log(login);
}
function Cadastro() {
	var cadastro = [];
	console.log('cadastro()');

	var nome = document.getElementById('inputNome').value;
  var sobrenome = document.getElementById('inputSobrenome').value;
  var email = document.getElementById('inputEmail').value;
  var senha = document.getElementById('inputSenha').value;
  var confirmarsenha = document.getElementById('inputConfirmarsenha').value;
  cadastro.push(nome);
  cadastro.push(sobrenome);
	cadastro.push(email);
	cadastro.push(senha);
  cadastro.push(confirmarsenha);
	console.log(cadastro);
}