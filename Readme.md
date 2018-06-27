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



















