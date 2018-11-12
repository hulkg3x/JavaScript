# JavaScript
Curso JavaScript: Programando na linguagem da web: https://cursos.alura.com.br/course/javascript-programando-na-linguagem-web


<p align="center">
<img src="https://d2tycqyw09ngo1.cloudfront.net/be-content/uploads/2018/04/23170601/frameworks-js2-1.png" width="500" alt="Imagen do JavaScript">

#1.0 Aula 1: Introdução

>JavaScript é uma forma interessante de iniciar seus site para deixar bem mais atrativo. Criar efeitos para seu site e facilitar a vida do usuario.

- Podemos iniciar o javascript de uma forma simples

```html
<html>
    <head>
        ...
    </head>
    <body>
        ...

        <script>
            ....
        </script>
    </body>
</html>
```
- No fim da Body porque dependendo da escrita do java o HTML é executado em ordens.

```html
<html>
    <head>
        <script>
            ....
        </script>
        ...
    </head>
    <body>
        ...
    </body>
</html>
```
- e Dentro da tag ```<head>```. Como primeiro a ser executado.

> Além disso podemos chamar o javascript.js.
```html
<html>
    <head>
        <script src="js/javascript.js"> </script>
        ...
    </head>
    <body>
        ...
    </body>
</html>
```
- Dessa forma chamamos um arquivo externo. Seguindo o mesmo conceito de ordem a ser executado.

> O basico de um JavaScritp, primeiro js:

```html
    <script>
        alert("Olá Mundo");
    </script>
```
- O ```alert()``` mostra no navegador um alerta - uma caixa de dialogo vai aparecer para apertar "OK", exibir uma mensagem.

> Temos outro basico e importante a ser usado no JavaScript:
```html
    <script>
        console.log("Oi Mundo");
    </script>
```
- O ```console.log()``` exibe o texto escrito variavel ou função criada no console do Navegador. Quando abrimos o Inspector do navegador GoogleChrome ou qualquer outro.

> O console do navegador também aceita comandos javascritp. Se digitarmos ```console.log("texto aqui")``` vai exibir a mensagem limpa no console e o, ```alert("texto")``` exibe o popup de texto no navegador.

## 1.1: QuerySelector

>Agora que vimos o basico mesmo do javascript, uma forma interessante de manipular o HTML é ultilizando o ```QuerySelector("")```

- So que para ultilizar esse javascript precisamos saber mais sobre o > **DOM** (**Document Object Model**) < representação do ```HTML``` para o nosso JavaScript, acessível por uma palava do JavaScript chamada ```document```.

- Se introduzir o ```document``` no javascript no seu documento HTML
```html
    <script>
        console.log(document);
    </script>
```

- No navegador ao abrir o console, nota que vai aparecer todo o conteudo HTML da sua pagina. Mais ou Menos assim:

```html
#document
    <!DOCTYPE html>
    <html lang="pt-br">
        <head>...</head>
        <body>...</body>
    </html>
```

> Mais se nao quisermos manipular a pagina inteira e sim algo especifico, para isso precisamos usar a ```querySelector```: com ela podemos pegar o item especifico com ```tags``` , ```classes``` ou ```IDs```.


- nesse estamos pegando uma tag, a ```h1```
```js
    document.querySelector("h1");
```

- nesse estamos pegando uma clase, Como todos sabem classes se inicia com ```. ```, ```.exemploClasse```
```js
    document.querySelector(".exemploClasse");
```

- nesse estamos pegando um ```ID``` e como todos sabem ```ID``` ao ser chamada se inicia com ```# ```, ```#exemploId```
```js
    document.querySelector("#exemploId");
```

> Para editar um texto podemos iniciar criando uma Variavel:

```js
    var titulo = document.querySelector("h1");
    console.log(titulo);
```
 - imprime o texto dentro do ```h1```.

 > dentro do ```h1``` contem conteudo de texto entao o javascript tem uma propriedade que nos permite acessar para alterar:  ```textContent```:

 ```js

    var titulo = document.querySelector("h1");
    console.log(titulo);
    console.log(titulo.textContent);

    titulo.textContent = "Texto a alterar";
```
- Com isso Conseguimos alterar o nosso conteudo HTML.

# 2.0 Aula 2: Variaveis e Operadores

```js
    var cadeMeuValor = "Estou Aqui";
```
- O primeiro operador que você deve ter percebido em nossos exemplos, foi o sinal de igual ```(=)```, um operador de atribuição:

> Este operador funciona conforme estamos acostumados a ver em qualquer lugar, o item da esquerda recebe o valor da direita por atribuição, ou resumindo: isso é igual a aquilo e ponto (e vírgula no caso).

- Pode por qualquer coisa em sua variavel como exemplo abaixo :

```js
    var minhaString = "Uma string";
    var outraVariável = minhaString;
    var ambosOsValores = outraVariável + ' uma string';
    var umaFunção = func();
    var umArray = new Array();
```

- você pode fazer qualquer tipo de conta que quiser com os operadores aritméticos ```+ (sinal de mais)```, ```– (sinal de menos)```, ```/ (sinal de divisão)```, ```* (sinal de multiplicação)``` e ```% (o resto da divisão)```. Exemplo:
- 
```js

var resultado = 1 + 1; // 2
var a = 2;
var b = 4;
var c = a * b; // 8

```

> Devemos tomar cuidado ao usar os operadores aritméticos. Como por Exemplo:

```js
var peso = 100;
var altura = 2;

var imc = peso / altura * altura;

```
- o Resultado daria 100 porque o calculo iniciaria assim ```100 / 2 = 50 * 2 = 100```, mais todos sabemos que inicia antes na multiplicação, e o javascript também sabe, so que precisamos avisar que a gente quer iniciar dessa forma ```2 * 2 = 4 / 100 = 25```.

> Em JavaScript, existem os operadores aritméticos básicos de todas as linguagens de programação: +, -, *, / e %. Temos ainda outros caracteres para nos ajudar a representar uma conta matemática, os parênteses ().

- Exemplo:

```js
var peso = 100;
var altura = 2;

var imc = peso / (altura * altura);

```

# 3.0 Aula 3: Array, Loop e Estilos

> para iniciar um Array , que é uma lista de itens que se inicia sempre pelo 0 , 1 , 2 e etc.

```js

var meyArray = ["carro", "bicicleta", "nave"];

```

> Podemos usando um loop ```for``` ele receberá três argumentos: a declaração da variável inicial, até onde queremos que essa variável cresça, e o que queremos fazer no fim de cada iteração. Por exemplo:

```js
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < 5; i++) {

}
```

- e quando queremos pecorrer oa lista de pacientes na qual o ```querySelectorAll``` busca usando o for.


```js
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

}
```

- A propriedade ```length``` informa o seu tamanho do array paciente. Usando o for ela vai pecorrer o array todo, ate seu limite.
 > Cada Array tem seu indice que inicia pelo 0, e vai 1 , 2 , 3 e etc...

 ```js
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    console.log(pacientes[i]);
}
```


>OBS: Quando fazemos calculo e que aparece muitas casas decimais, podemos usar o ```toFixed``` para corrigir esses problemas.

- por exemplo 3.555555555555

> usando o ```toFixed``` podemos corrigir.

```js

if(...)
    ...
    minhaVariavel.textContent = minhaVariavel.toFixed(2);
}

```

- assim o numero fica 3.55, voce pode definir quantas casas aparecer ```toFixed(3)``` e etc...

> Podemos aplicar estilos usando nosso ```javaScript```.


- podemos usar assim dessa forma:

```js
    MinhaVariavel.style.color = "red";
``` 
- a Variavel selecionada é a variavel onde o querySelector seleciona o elemento, e o textContent faz a alteração.

```js
        paciente.style.backgroundColor = "red";
```

- o BackgroundColor tem que permanecer juntos, ```Camel Case``` padrão.

>assim como temos o **style** para acesso aos estilos e o textContent para acessarmos o conteúdo de texto de um elemento, teremos a classList para acessarmos as classes. E usando o método add.

```js

    minhaVariavel.classList.add("minha-classe-no-css");

```

- Isso fará adicionar a classe ```minha-classe-no-css``` no conteudo desejado, ou seja na variavel que vai alterar o conteudo do texto.
- 
# 4.0 Aula 4: Eventos, Formulários e Criando Elementos

> Quando queremos criar um evento de click para nosso formulario, o javaScript precisa escutar esse evento.

- com isso temos o ```addEventListener()```,  Ela será responsável por adicionar o escutador de evento, como já diz o nome traduzido para o português. E como queremos o evento quando clicar no botão, entao passamos o evento de ```click```.

```js
botao.addEventListener("click", mostraMensagem);

function mostraMensagem(){
    console.log("Olá eu fui clicado!");
}
```

- Isso é onde a variavel **"botão"** chama a função **"mostraMensagem"**.
- O melhor podemos criar funções anonimas também , como por exemplo :

```js
botao.addEventListener("click", function() {
    consol.elog("Olá eu fui clicado!");
});
```
- Funçoes anonimas é as quais nao precisa por um nome, somente passar os eventos a ser executados.

> Em formularios a casos em que queremos que ao clicar no botão, a pagina não da reload, e nem limpar os campos por exemplo. Para evitar esse tipo de situação o javaScript pode nós ajudar.

- Para isso usamos o ```event.preventDefault()```.

```js
botao.addEventListener("click", function(event) {
    event.preventDefault();
    consol.elog("Olá eu fui clicado!");
});
```

- Como se trata de um Evento, devemos passar na função anonima o (event), e chamar o ```preventDefault()```. ```event.preventDefault();```.


> Podemos adicionar elementos ao nosso HTML através do javaScript, com os formulario, para isso precisamos além dos ```input```, o campo ```nome``` que pega as informações digitadas pelo usuario, e o campo ```value``` no javaScript que detecta as informaçoes digitadas.

- Ao selecionar o nosso ```form``` que seria a propria ```tag``` html ou ate mesmo passar um ```ID``` para ela, devemos criar as variaveis para detectar o campo e os valores digitados.

- Exemplo:

```js
botao.addEventListener("click", function(event) {
    event.preventDefault();
   
   var form = document.querySelector("#form-adicionar");

   var nome = form.nome.value;
   var idade = form.idade.value;
   var aniversario = form.aniversario.value;
});
```

- Para pegar o valor digitado no input acessamos a sua propriedade ```value```.
- na parte do ```nome```, ```idade``` e ```aniversario``` é os nomes digitados no input do campo ```name="nome"```, ```name="idade"``` e etc...

> Agora que pegamos as informaçoes dos campos digitados, devemos criar uma tabela , dentro da ```<table>```, tem ```<tr>``` e dentro da ```<tr>``` tem o ```<td>```, entao para criar nessa ordem seria.
> 

```js
botao.addEventListener("click", function(event) {
    event.preventDefault();
   
   var form = document.querySelector("#form-adicionar");

   var nome = form.nome.value;
   var idade = form.idade.value;
   var aniversario = form.aniversario.value;


    var criaTr = document.createElement("tr");
});
```

- o Tr cria uma vez da variavel ```criaTr```, agora devemos criar as ```<td>``` que vai receber os campos digitados.


```js
botao.addEventListener("click", function(event) {
    event.preventDefault();
   
   var form = document.querySelector("#form-adicionar");

   var nome = form.nome.value;
   var idade = form.idade.value;
   var aniversario = form.aniversario.value;


    var criaTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var idadeTd = document.createElement("td");
    var aniversarioTd = document.createElement("td");
});
```
> Para colocar os valores que extraimos de cada campo digitado no input devemos por o ```textContent```, Ele serve para alterar os nossos textos do nosso html.


```js
botao.addEventListener("click", function(event) {
    event.preventDefault();
   
   var form = document.querySelector("#form-adicionar");

   var nome = form.nome.value;
   var idade = form.idade.value;
   var aniversario = form.aniversario.value;


    var criaTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var idadeTd = document.createElement("td");
    var aniversarioTd = document.createElement("td");

    nomeTd.textContent = nome;
    idadeTd.textContent = idade;
    aniversario.textContent = aniversario;
});
```
- Nesse caso pegamos a ```<td>```que vai ser criada, colocamos o ```textContent``` que vai receber a informação digitada pelo usuario do campo que ele recebe, ```nome```, ```idade``` e etc.

> Agora para por corretamente na tabela devemos pensar o seguinte, primeiro vem a ```<tr>```, depois as ```<td>```, entao a ```<td>``` é filho da ```<tr>```, para fazer com que o javaScript coloque dessa forma no nosso ```HTML```, passamos para ela o seguinte ```appendChild();```.

```js
botao.addEventListener("click", function(event) {
    event.preventDefault();
   
   var form = document.querySelector("#form-adicionar");

   var nome = form.nome.value;
   var idade = form.idade.value;
   var aniversario = form.aniversario.value;


    var criaTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var idadeTd = document.createElement("td");
    var aniversarioTd = document.createElement("td");

    nomeTd.textContent = nome;
    idadeTd.textContent = idade;
    aniversario.textContent = aniversario;

    criaTr.appendChild(nomeTd);
    criaTr.appendChild(idadeTd);
    criaTr.appendChild(aniversarioTd);
});
```
 - com isso Colocamos as variaveis que cria as ```<td>``` dentro da ```<tr>``` que tem como nome a variavel ```criaTr```. usando o ```appendChild``` que faz com que um elemento se torne filho de outro.

 # 5.0 Aula 5: Boas Praticas com JavaScript

> Assim como no HTML, precisamos no javaScript manter a organização e um bom entendimento do codigo futuramente, manter as boas praticas.

- Sem ter que escrever linhas e linhas uma abaixo da outra e fazendo aquela extensa lista de codigos sem poder entender o que cada um ta fazendo.

- Podemos ir separando por ```escopos```, ```funçoes```. Criar funçoes, para melhor entender o que cada parte está fazendo no nosso codigo.

> Ajuda ate mesmo outras pessoas que futuramente irá usar, rever e alterar seu codigo escrito.

- Exemplo: Em Vez disso:

```js
botao.addEventListener("click", function(event) {
    event.preventDefault();
   
   var form = document.querySelector("#form-adicionar");

   var nome = form.nome.value;
   var idade = form.idade.value;
   var aniversario = form.aniversario.value;
});
```
- Exemplo: Correto, posivelmente

```js
botao.addEventListener("click", function(event) {
    event.preventDefault();
   
   var form = document.querySelector("#form-adicionar");

function obterValoresDigitadosPeloUsuario(form) {
    var nome = form.nome.value;
    var idade = form.idade.value;
    var aniversario = form.aniversario.value;
});
```

- Um Exemplo simples, mais que possa manter esse conceito.

# 6.0 Aula 6: Validações

> Podemos validar no nosso JavaScript, e como todos sabem a forma mais facil, e bastante conhecida é o ```if``` e ```else```.

- Exemplo :

```js

if (seEssaVariavelFor == aEssaOutraVariavel) {
  //  aqui se torna verdadeiro
} else {
   // se nao aqui se torna falso
}

```

```js
if (algumaVariavel > 50)
{
  // faça alguma coisa
}
```

 - Existe varios operadores de comparação negação, diferente ou maior ou menor e etc.

- Operadores:

```
 x == y (x é igual a y)
 x != y (x é não igual a y)
 x <  y (x é menor que y)  
 x >  y (x é maior que y) 
 x <= y (x é menor ou igual a y) 
 x >= y (x é maior ou igual a y)

```

# 7.0 Aula 7 : Animação com CSS e javaScript

> Podemos animar nossa pagina usando o JavaScript e CSS , com eventos de clicks, como por exemplo o ```remove``` que é ultilizado para remover conteudos do nosso HTML, seguido do ```this``` que acessa o dono do evento no qual está atrelado.

```js
var minhaVariavel = document.querySelectorAll(".minhaClasse");

minhaVariavel.forEach(function(minhaVariavel) {
    minhaVariavel.addEventListener("dblclick", function() {
        this.remove();
    });
});
```
- o ```dblclick```, informa que precisamos da duplo click para que o evento de remoção aconteça. Dessa forma o ```querySelector``` está selecionando o conteudo HTML, onde com a função forEach executa o restante do evento que seria remover o conteudo. ```this.remove()```.


- Temos o ```target```também que informa quem foi o elemento clicado quem foi o alvo.
- 
> Exemplo

```JS
var minhaVariavel = document.querySelector("classeSelecionada");

minhaVariavel.addEventListener("dblclick", function(event) {
    event.target.remove();
});
``` 

> O ```parentNode``` seleciona o pai do elemento, ou seja podemos remover tanto o pai quanto o filho usando essa propriedade.

- Exemplo :

```JS
var minhaVariavel = document.querySelector("classeSelecionada");

minhaVariavel.addEventListener("dblclick", function(event) {
    event.target.parentNode.remove();
});
``` 

> Ja Animação fica por conta do estilo ```CSS``` onde voce cria seu estilo que deseja usar como animação ao clicar para remover .

- exemplo :
```css
    .fadeOut {
        opacity: 0;
        transition: 0.5s;
    }
```
> Dessa forma chamamos essa animação para o nosso JavaScript
- como Por Exemplo:

```js
var minhaVariavel = document.querySelector("classeSelecionada");

minhaVariavel.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");
    event.target.parentNode.remove();
});
```

> Usando ```classList.add();```.Podemos usar o ```setTimeout``` para da um delay de tempo antes de executar a animação ```CSS```.

- exemplo :

```js

var minhaVariavel = document.querySelector("classeSelecionada");

minhaVariavel.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
        ~
        
    }, 500);

});

```

- com o tempo de 500 milissegundos, equivalente a meio segundo.

# 8.0 Aula 8: Filtrando com JavaScript

> Podemos fazer um simples sistema de busca, ou seja filtrar algo ao digitar o que desejamos buscar.

- Ao criar nosso campo input, precisamos chamar no JavaScript como ja sabemos usando o ```querySelector```.

- em seguida assim como usamos o ```click``` , o ```dblclick``` vamos usar o ```input```, como exemplo abaixo:

```js
var campoFiltro = document.querySelector("#filtrar");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
});
```

- com isso ja Detecta o que foi digitado no campo. Em seguida basta criar a logica do filtro.

> Ao criar o eventListener com a função e o metodo input dentro devemos digitar toda nossa logica de pesquisa da tabela.

- Antes criaremos rapidamente um estilo CSS, para fazer sumir ou aparecer a nossa lista da tabela como exemplo.

```css
.invisivel{
    display: none;
}
```
 > Podemos criar da seguinte forma: 

```js
var campoFiltro = document.querySelector("#filtrar");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);

    // Criamos uma Variavel para chamar 
    // o elemento HTML que  vai ser buscado
    var buscarAlgo = document.querySelectorAll("ID ou Classe do elemento");
});
```

> Em Seguida criaremos um if para a logica:

```js
var campoFiltro = document.querySelector("#filtrar");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);

    /* Criamos uma Variavel para chamar 
    o elemento HTML que  vai ser buscado */
    var buscarAlgo = document.querySelectorAll("ID ou Classe do elemento");

    /* Verificamos se o nosso campo digitado
     é maior que 0 ou seja se o campo foi 
     prenchido com alguma letra, 
     NESSE CASO SE FOR MAIOR VAI FAZER UMA CONDIÇÃO */
    if(this.value.length > 0) {
        /* OU SEJA ESSA CONDIÇÃO É UM FOR 
        que irá percorrer na tabela ou lista ou algo
        que deseja buscar (deve ter varias outras formas de fazer essa logica)*/
        for( var i = 0; i < buscarAlgo.length; i++){

            // variavel para que busca algo
            var listaOuTabelaSeiLa = buscarAlgo[i];

            //variavel que pega algo especifico dentro
            // da tabela ou lista que está dentro
            // do elemento que buscamos na variavel
            // BuscarAlgo.
            var elementoEspecificoDaLista =  listaOuTabelaSeiLa.querySelector(".NomeDaCalsse ou #ID");

            //variavel que pega o nome da lista 
            // quando digitamos no input
            var nome = elementoEspecificoDaLista.textContent;

            // variavel que tras uma expressao
            // na hora de buscar no input
            // podendo digitar qualquer palavra
            // e ja mostra o resultado sem precisar
            // digitar o nome por completo
            var expressao = new RegExp(this.value,"i");
    }
});
```

> Acima no for é a seguinte forma , "o var i é igual a 0; se o i for menor que buscarAlgo.length que é o comprimento do campo digitado no inpute e o i++" executa as condições abaixo: Entao criamos uma variavel com o nome "listaOuTabelaSeiLa" e atribuimos a ela nossa buscarAlgo[i]; "que nela vai retornar um Array da lista pq o buscarAlgo ela pega para gente o elemento que contem tudo que vamos buscar".

> Em seguida se usamos uma tabela que contem uma lista e nessa lista contem algo especifico que queremos buscar tipo um "nome" criamos uma variavel para pegar somente pelo nome do item. Por isso criamos mais uma variavel : "elementoEspecificoDaLista" que recebe o querySelector com a id ou classe que queremos.

>Por fim criamos uma outra variavel para receber o conteudo da variavel "elementoEspecificoDaLista", ja que queremos buscar o nome entao criamos a variavel : nome que recebe elementoEspecificoDaLista.textContent;
>Que o textContent serve para pegar o conteudo de texto do elemento.

>outra variavel expressao ela serve para buscar no conteudo do elemento html por cada letra sem precisar ter q digitar o nome completo para buscar por completo, tipo aquelas buscas que faz no google voce coloca uma letra L por exemplo e ja aparece tudo que contem a letra L de inicio ou meio e fim. Entao criamos a variavel e atribuimos a ela "new RegExp(this.value,"i");" "RegExp expressao Regular" e dentro dos parentes, quem queremos buscar? o que digitarmos, entao this.value, ja o "i" depois da virgula indica que buscamos no campo input qualquer nome nao importa se esta com a letra MAIUSCULA ou minuscula, ou seja ativamos o case insensitive.


```js
var campoFiltro = document.querySelector("#filtrar");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);

    /* Criamos uma Variavel para chamar 
    o elemento HTML que  vai ser buscado */
    var buscarAlgo = document.querySelectorAll("ID ou Classe do elemento");

    /* Verificamos se o nosso campo digitado
     é maior que 0 ou seja se o campo foi 
     prenchido com alguma letra, 
     NESSE CASO SE FOR MAIOR VAI FAZER UMA CONDIÇÃO */
    if(this.value.length > 0) {
        /* OU SEJA ESSA CONDIÇÃO É UM FOR 
        que irá percorrer na tabela ou lista ou algo
        que deseja buscar (deve ter varias outras formas de fazer essa logica)*/
        for( var i = 0; i < buscarAlgo.length; i++){

            // variavel para que busca algo
            var listaOuTabelaSeiLa = buscarAlgo[i];

            //variavel que pega algo especifico dentro
            // da tabela ou lista que está dentro
            // do elemento que buscamos na variavel
            // BuscarAlgo.
            var elementoEspecificoDaLista =  listaOuTabelaSeiLa.querySelector(".NomeDaCalsse ou #ID");

            //variavel que pega o nome da lista 
            // quando digitamos no input
            var nome = elementoEspecificoDaLista.textContent;

            // variavel que tras uma expressao
            // na hora de buscar no input
            // podendo digitar qualquer palavra
            // e ja mostra o resultado sem precisar
            // digitar o nome por completo
            var expressao = new RegExp(this.value,"i");

            // Criamos um IF agora para aplicar
            // a classe que criamos para sumir
            // o nome da tabela e aparecer somento
            // o que estamos procurando
            if(!expressao.test(nome)){
               paciente.classList.add("invisivel");
           } else {
               paciente.classList.remove("invisivel");
           } 

           // por fim remover a classe invisivel
           // caso nosso campo input esteja 
           // com o campo vazio
        } else {
        for( var i = 0; i < buscarAlgo.length; i++){
            var listaOuTabelaSeiLa = buscarAlgo[i];
            listaOuTabelaSeiLa.classList.remove("invisivel");
        } 
    }  
});
```
> Na logica do if da expressao "ja que estamos usando expressao regular devemos pegar a variavel que atribuimos a expressao new regexp etc, devemos chamar no if, usando também o metodo "test(), com a qual passaremos o que queremos testar", e entao verificamos "if se minha expressao for negativa ao nome digitado que nao corresponder voce aplica a classe invisivel que é para sumir com ela da tabela / Se nao(else) voce mostra o nome correto digitado, ou seja remove a classe invisivel, e me apareça com o nome que eu digitei.

>Na ultima condição do ELSE repetimos o For porque vamos retornar com a lista da nossa tabela ou qualquer outro elemento que esteja buscando, entao queremos o array daquilo que estava na lista entao se la em cima a condição do meu if foi se meu valor this.value.length for maior que 0 busca para mim e tals, se nao ao apagar o nome no campo quero q retorne a lista para mim, ou seja , (else), pego o for, pego minhas variaveis e removo a classe invisivel como no exemplo acima.

> ficaria mais ou menos assim:

```js
var campoFiltro = document.querySelector("#filtrar");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);

    var buscarAlgo = document.querySelectorAll("ID ou Classe do elemento");

    if(this.value.length > 0) {
        for( var i = 0; i < buscarAlgo.length; i++){

            var listaOuTabelaSeiLa = buscarAlgo[i];
            var elementoEspecificoDaLista =  listaOuTabelaSeiLa.querySelector(".NomeDaCalsse ou #ID");

            var nome = elementoEspecificoDaLista.textContent;
            var expressao = new RegExp(this.value,"i");

            if(!expressao.test(nome)){
               paciente.classList.add("invisivel");
           } else {
               paciente.classList.remove("invisivel");
           } 
        } else {
        for( var i = 0; i < buscarAlgo.length; i++){
            var listaOuTabelaSeiLa = buscarAlgo[i];
            listaOuTabelaSeiLa.classList.remove("invisivel");
        } 
    }  
});
```

# 9.0 Aula 9: AjaxBuscando elementos com AJAX







