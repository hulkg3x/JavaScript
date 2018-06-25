var botaoAdicionar = document.querySelector("#adicionar-paciente");
        botaoAdicionar.addEventListener("click", function(event){
            event.preventDefault();

            var form = document.querySelector("#form-adiciona");
           
            // extrai informação do paciente form
           var paciente = obtemPacienteDoFormulario(form);
            
           // cria as TR e TD
           var pacienteTr = montaTr(paciente);

           var erros = validaPaciente(paciente);

           if(erros.length > 0) {
                
            exibeMensagemDeError(erros);

               return;
           }


            // adiciona o paciente na tabela.
            var tabela = document.querySelector("#tabela-pacientes");

            tabela.appendChild(pacienteTr);

            form.reset();

            var mensagemErro = document.querySelector("#mensagem-error");

            mensagemErro.innerHTML = "";
            
        });

        function obtemPacienteDoFormulario(form) {

            var paciente = {
                nome: form.nome.value,
                peso: form.peso.value,
                altura: form.altura.value,
                gordura: form.gordura.value,
                imc: calculaImc(form.peso.value, form.altura.value)
            }
            return paciente;
        }

        function montaTr(paciente) {

            var pacienteTr = document.createElement("tr");
            pacienteTr.classList.add("paciente");

            var nomeTd = montaTd(paciente.nome, "info-nome");
            var pesoTd = montaTd(paciente.peso, "info-peso");
            var alturaTd = montaTd(paciente.altura, "info-altura");
            var gorduraTd = montaTd(paciente.gordura, "info-gordura");
            var imcTd = montaTd(paciente.imc, "info-imc");

            
            // var nomeTd = document.createElement("td");
            // var pesoTd = document.createElement("td");
            // var alturaTd = document.createElement("td");
            // var gorduraTd = document.createElement("td");
            // var imcTd = document.createElement("td");

            nomeTd.textContent = paciente.nome;
            pesoTd.textContent = paciente.peso;
            alturaTd.textContent = paciente.altura;
            gorduraTd.textContent = paciente.gordura;
            imcTd.textContent = paciente.imc;

            pacienteTr.appendChild(nomeTd);
            pacienteTr.appendChild(pesoTd);
            pacienteTr.appendChild(alturaTd);
            pacienteTr.appendChild(gorduraTd);
            pacienteTr.appendChild(imcTd);

            return pacienteTr;

        }

        function montaTd(dado,classe){
            var td = document.createElement("td");
            td.textContent = dado;
            td.classList.add(classe);
            return td;
        }

        function validaPaciente(paciente) {

           var erros = [];

           if(paciente.nome.length == 0) {
               erros.push("*Insira o nome do Paciente");
           }

            if(!validaPeso(paciente.peso)) {
                erros.push("*O Peso está errado");
            }

            if(!validaAltura(paciente.altura)) {
                erros.push("*A Altura está errada");
            }

            if(paciente.gordura.length == 0) {
                erros.push("*A gordura não pode ser em brando");
            }

            if(paciente.peso.length == 0) {
                erros.push("*Digite o Peso");
            }

            if(paciente.altura.length == 0) {
                erros.push("*Digite a Altura");
            }

            return erros;
        }
        function exibeMensagemDeError(erros) {
            var ul = document.querySelector("#mensagem-error");

            ul.innerHTML = "";

            erros.forEach(function(erro) {
                var li = document.createElement("li");
                li.textContent = erro;
                ul.appendChild(li);
            });
        }

    