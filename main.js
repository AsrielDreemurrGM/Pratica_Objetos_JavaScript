// Classe/Função Base
function Casa(quarto, banheiro, sala, cozinha) {
    this.quarto = quarto;
    this.banheiro = banheiro;
    this.sala = sala;
    this.cozinha = cozinha;
}

// Método
Casa.prototype.luz = function() {
    console.log("Eletricidade");
}
// Método
Casa.prototype.agua = function() {
    console.log("Molhada");
}

// Função Construtora
function CasaPopular(quarto, banheiro, sala, cozinha, lavanderia) {
    Casa.call(this, quarto, banheiro, sala, cozinha);
    this.lavanderia = lavanderia;
}

// CasaPopular Herda os métodos de Casa
CasaPopular.prototype = Object.create(Casa.prototype);
// Diz ao JS que CasaPopular é quem foi a Função Construtora (Se não ele diz que foi Casa);
CasaPopular.prototype.constructor = CasaPopular;

// Função Construtora
function Kitnet(salaQuarto, banheiro, cozinhaAreaServico) {
    Casa.call(this, undefined, banheiro, undefined, undefined);;
    this.salaQuarto = salaQuarto;
    this.cozinhaAreaServico = cozinhaAreaServico;

    delete this.quarto;
    delete this.sala;
    delete this.cozinha;
}

// Kitnet Herda os métodos de Casa
Kitnet.prototype = Object.create(Casa.prototype);
// Diz ao JS que Kitnet é quem foi a Função Construtora (Se não ele diz que foi Casa);
Kitnet.prototype.constructor = Kitnet;

// Instâncias/Objetos
const casaPopularDaMaria = new CasaPopular(2,1,1,1,1);
const kitnetDoJoao = new Kitnet("Sala/Quarto Combinados", 1,"Cozinha e Área de Serviço Combinados");
const casaPopularDoEduardo = new CasaPopular(2,2,1,1,1);

// Mostra Objetos no Console
console.log(casaPopularDaMaria);
console.log(kitnetDoJoao);
console.log(casaPopularDoEduardo);

// Testa os Métodos
kitnetDoJoao.agua();
casaPopularDaMaria.luz();
casaPopularDoEduardo.agua();
casaPopularDoEduardo.luz();
