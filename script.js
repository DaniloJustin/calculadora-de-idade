function calcularIdade(){
    let anoNascimento = document.getElementById('anoNascimento').value;
    let anoAtual = new Date().getFullYear();

    let idade = anoAtual - anoNascimento;

    document.getElementById ('idade') .textContent = idade;

    let diasVividos = idade * 365; //considerando apenas anos completos

    document.getElementById('diasVividos').textContent = diasVividos;
}