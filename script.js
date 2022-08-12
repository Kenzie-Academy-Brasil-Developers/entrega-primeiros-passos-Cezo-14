let nome = prompt("Entre com o nome do aluno");
if (nome.length < 5) {
  alert(`Nome inválido`);
}
let presenca = parseInt(prompt("Qual a presença?"));

let materia1 = prompt("Digite a materia");
let nota1 = parseFloat(prompt(`${materia1}, qual a nota?`));
if (nota1 < 0 || nota1 > 10) {
  alert(`O valor é invalido`);
}

let materia2 = prompt("Digite a materia");
let nota2 = parseFloat(prompt(`${materia2}, qual a nota?`));
if (nota2 < 0 || nota2 > 10) {
  alert(`O valor é invalido`);
}

let materia3 = prompt("Digite a materia");
let nota3 = parseFloat(prompt(`${materia3}, qual a nota?`));
if (nota3 < 0 || nota3 > 10) {
  alert(`O valor é invalido`);
}

let materia4 = prompt("Digite a materia");
let nota4 = parseFloat(prompt(`${materia4}, qual a nota?`));
if (nota4 < 0 || nota4 > 10) {
  alert(`O valor é invalido`);
}

let materia5 = prompt("Digite a materia");
let nota5 = parseFloat(prompt(`${materia5}, qual a nota?`));
if (nota5 < 0 || nota5 > 10) {
  alert(`O valor é invalido`);
}

let materia6 = prompt("Digite a materia");
let nota6 = parseFloat(prompt(`${materia6}, qual a nota?`));
if (nota6 < 0 || nota6 > 10) {
  alert(`O valor é invalido`);
}

let materia7 = prompt("Digite a materia");
let nota7 = parseFloat(prompt(`${materia7}, qual a nota?`));
if (nota7 < 0 || nota7 > 10) {
  alert(`O valor é invalido`);
}

let materia8 = prompt("Digite a materia");
let nota8 = parseFloat(prompt(`${materia8}, qual a nota?`));
if (nota8 < 0 || nota8 > 10) {
  alert(`O valor é invalido`);
}

let materia9 = prompt("Digite a materia");
let nota9 = parseFloat(prompt(`${materia9}, qual a nota?`));
if (nota9 < 0 || nota9 > 10) {
  alert(`O valor é invalido`);
}

let materia10 = prompt("Digite a materia");
let nota10 = parseFloat(prompt(`${materia10}, qual a nota?`));
if (nota10 < 0 || nota10 > 10) {
  alert(`O valor é invalido`);
}

let somaNota =
  nota1 +
  nota2 +
  nota3 +
  nota4 +
  nota5 +
  nota6 +
  nota7 +
  nota8 +
  nota9 +
  nota10;

let mediaNota = somaNota / 10;

if (mediaNota >= 8 && presenca >= 6) {
  alert(
    `A nota do aluno ${nome} é de ${mediaNota} e sua presença de ${presenca}: Aluno aprovado!`
  );
} else {
  alert(
    `A nota do aluno ${nome} é de ${mediaNota} e sua presença de ${presenca}: Aluno reprovado!`
  );
}
