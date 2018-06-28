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
- No fim da Body porque dependendo da escrita do JavaScript o HTML é executado em ordens.

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

> O básico de um JavaScript, primeiro js:

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















