let display = '0';
let tela = document.querySelector('#display p');
const inputs = document.querySelectorAll('.exibir-valor');
const limpar = document.querySelector('.limpar');
const resultado = document.querySelector('.resultado');

inputs.forEach((input) => {
	input.addEventListener('click', function(event) {
		event.preventDefault();
		if (display == '0') {
			display = this.value;
			tela.innerText = display;
		} else {
			display = `${display}${this.value}`;
			tela.innerText = display;
		}
	});
});

limpar.addEventListener('click', (e) => {
	e.preventDefault();
	display = 0;
	tela.innerText = display;
});

resultado.addEventListener('click', (e) => {
	e.preventDefault();

	const calculo = eval(display);
	tela.innerText = calculo;
});
