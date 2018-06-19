        var titulo = document.querySelector("h1");		 
        titulo.textContent = "Aparecida Nutricionistas";

        var pacientes = document.querySelectorAll(".paciente");

        for(var i = 0; i < pacientes.length; i++){
            
            var paciente = pacientes[i];

            var tdPeso = paciente.querySelector(".info-peso")
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
                paciente.classList.add("paciente-invalido");
            }
    
            if(altura <= 0 || altura >= 3.00) {
                console.log("Altura Invalida");
                alturaEhValido = false;
                tdImc.textContent = "Altura Invalido!";
                paciente.classList.add("paciente-invalido");
            }
            if(pesoEhValido && alturaEhValido) {
                var resultIMC = paciente.querySelector(".info-imc");
                resultIMC.textContent = imc.toFixed(2);
            }
    
        }

        var botaoAdicionar = document.querySelector("#adicionar-paciente");
        botaoAdicionar.addEventListener("click", function(event){
            event.preventDefault();

            var form = document.querySelector("#form-adiciona");
           
            var nome = form.nome.value;
            var peso = form.peso.value;
            var altura = form.altura.value;
            var gordura = form.gordura.value;

            var pacienteTr = document.createElement("tr");

            var nomeTd = document.createElement("td");
            var pesoTd = document.createElement("td");
            var alturaTd = document.createElement("td");
            var gorduraTd = document.createElement("td");
            var imcTd = document.createElement("td");

            nomeTd.textContent = nome;
            pesoTd.textContent = peso;
            alturaTd.textContent = altura;
            gorduraTd.textContent = gordura;


            pacienteTr.appendChild(nomeTd);
            pacienteTr.appendChild(pesoTd);
            pacienteTr.appendChild(alturaTd);
            pacienteTr.appendChild(gorduraTd);
    
            var tabela = document.querySelector("#tabela-pacientes");

            tabela.appendChild(pacienteTr);
            
        });
      
    