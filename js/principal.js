        var titulo = document.querySelector("h1");		 
        titulo.textContent = "Aparecida Nutricionistas";

        var paciente = document.querySelector("#primeiro-paciente");
        var tdPeso = paciente.querySelector(".info-peso");

        var peso = tdPeso.textContent;

        var tdAltura = paciente.querySelector(".info-altura");
        var altura = tdAltura.textContent;

        var imc = peso / (altura * altura);

        var tdImc = paciente.querySelector(".info-imc");

        var pesoEhValido = true;
        var alturaEhValido = true;

        if(peso <= 0 || peso >= 1000) {
            console.log("Peso invalido");
            pesoEhValido = false;
            tdImc.textContent = "Peso Invalido!";
        }

        if(altura <= 0 || altura >= 3.00) {
            console.log("Altura Invalida");
            alturaEhValido = false;
            tdImc.textContent = "Altura Invalido!";
        }
        if(pesoEhValido && alturaEhValido) {
            var resultIMC = paciente.querySelector(".info-imc");
            resultIMC.textContent = imc;
        }

    