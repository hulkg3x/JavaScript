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
    
            var pesoEhValido = validaPeso(peso);
            var alturaEhValido = validaAltura(altura);
    
            if(!pesoEhValido) {
                console.log("Peso invalido");
                pesoEhValido = false;
                tdImc.textContent = "Peso Invalido!";
                paciente.classList.add("paciente-invalido");
            }
    
            if(!alturaEhValido) {
                console.log("Altura Invalida");
                alturaEhValido = false;
                tdImc.textContent = "Altura Invalido!";
                paciente.classList.add("paciente-invalido");
            }
            if(pesoEhValido && alturaEhValido) {
                var imc = calculaImc(peso,altura);
                tdImc.textContent = imc;
            }
    
        }

        function calculaImc(peso,altura) {
            var imc = 0;

            imc = peso / (altura * altura);

            return imc.toFixed(2);
        }

        function validaPeso(peso) {
            if(peso >= 0 && peso < 1000) {
                return true;
            } else {
                return false;
            }
        }

        function validaPaciente(paciente) {
            if(paciente.altura < 2.0 && paciente.altura >= 0) {
                return true;
            }
        }

        function validaAltura(altura){
            if(altura >= 0 && altura <= 3.0){
                return true;
            } else{
                return false;
            }
        }
        
      
    