const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

const chineses = f => f.pais === 'China';
const mulheres = f => f.genero === 'F';
const menorSalario = (func, funcAtual) => func.salario < funcAtual.salario ? func : funcAtual;

axios.get(url).then(response => {
    const funcionarios = response.data;
    // O desafio é procurar a mulher chinesa com o menor salario
    const func = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario);
    console.log(func);
});
