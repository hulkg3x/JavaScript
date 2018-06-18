    var titulo = document.querySelector("h1");		 
    titulo.textContent = "Aparecida Nutricionistas";

    var paciente = document.querySelector("#primeiro-paciente");
    var tdPeso = paciente.querySelector(".info-peso");

    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var imc = peso / (altura * altura);


    var resultIMC = paciente.querySelector(".info-imc");

    resultIMC.textContent = imc;

  