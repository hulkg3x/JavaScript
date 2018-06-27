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

















