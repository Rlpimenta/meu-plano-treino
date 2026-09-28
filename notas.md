# Notas --- Defesa do projeto "Meu Plano"

## 1. Sobre o projeto

**Nome:** Meu Plano

**Objetivo:**\
É uma aplicação para organizar os meus treinos, consultar os exercícios
de cada dia, pesquisar e filtrar exercícios e registar os pesos
utilizados.

**Por que escolhi este projeto?**\
Porque é um projeto pessoal e útil para mim. O objetivo da avaliação
permite reutilizar e evoluir um projeto pessoal, desde que sejam
demonstradas as funcionalidades pedidas e eu consiga explicar o que foi
acrescentado ou alterado.

------------------------------------------------------------------------

# 2. Estrutura do projeto

``` text
Meu-plano-treino/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
│   └── hero-gym.jpg
├── README.md
└── notas.md
```

### Para que serve cada ficheiro?

**index.html**\
É a estrutura da página.

**style.css**\
É responsável pelo aspeto visual, cores, espaçamentos, cartões e
responsividade.

**script.js**\
É onde está a lógica da aplicação: dados dos treinos, pesquisa, filtro,
contador, adicionar e eliminar exercícios, pesos e outras interações.

**hero-gym.jpg**\
É a imagem utilizada no fundo da área principal do topo.

------------------------------------------------------------------------

# 3. Onde estão os dados?

Os dados dos treinos e exercícios estão no `script.js`, dentro de um
array de objetos chamado `treinos`.

Cada treino contém os seus exercícios.

Exemplo simplificado:

``` javascript
{
    id: 1,
    nome: "Chin Up",
    grupo: "Costas",
    series: 3,
    repeticoes: "6-10"
}
```

Não preciso decorar o código inteiro. O importante é saber explicar que
os dados ficam no JavaScript e a página é construída a partir desses
dados.

------------------------------------------------------------------------

# 4. Como os cartões dos exercícios aparecem?

Os cartões não são escritos um por um no HTML.

O JavaScript percorre os exercícios e cria os elementos necessários para
mostrar cada exercício.

A ideia é:

``` text
dados
  ↓
JavaScript
  ↓
cria os cartões
  ↓
mostra na página
```

Isto permite que a interface seja atualizada quando os dados mudam.

### Se perguntarem:

**"Por que não colocou todos os exercícios diretamente no HTML?"**

Resposta:

> "Porque queria que a interface fosse dinâmica. Os dados ficam no
> JavaScript e os cartões são criados a partir deles."

------------------------------------------------------------------------

# 5. Como funciona a mudança entre D1, D2, D3, D4 e D5?

Cada opção do menu corresponde a um treino.

Quando clico num dia, o JavaScript identifica o treino correspondente e
chama a função que mostra os exercícios desse treino.

### Resposta curta:

> "O clique no dia altera o treino atual e o JavaScript volta a
> renderizar os exercícios correspondentes."

------------------------------------------------------------------------

# 6. Como funciona a pesquisa?

Existe um campo de pesquisa.

Quando escrevo alguma coisa, o JavaScript compara o texto pesquisado com
o nome dos exercícios.

São mostrados apenas os exercícios que correspondem à pesquisa.

### Exemplo:

Pesquisar:

``` text
curl
```

pode mostrar:

-   Preacher Curl
-   Incline Dumbbell Curl
-   Hammer Curl

### Resposta curta:

> "A pesquisa filtra o array de exercícios pelo nome e atualiza a lista
> apresentada."

------------------------------------------------------------------------

# 7. Como funciona o filtro?

Existe um filtro por grupo muscular.

Por exemplo:

``` text
Todos
Costas
Peito
Ombros
Bíceps
Tríceps
Pernas
Abdómen
```

Quando escolho um grupo, o JavaScript verifica quais exercícios
pertencem a esse grupo.

### Importante

A pesquisa e o filtro podem ser utilizados juntos.

### Resposta curta:

> "O filtro verifica o grupo muscular e a pesquisa verifica o nome. Os
> dois critérios podem ser aplicados ao mesmo tempo."

------------------------------------------------------------------------

# 8. Como funciona o contador?

O contador mostra quantos exercícios estão atualmente visíveis.

Por exemplo:

``` text
9 exercícios encontrados.
```

Se eu pesquisar algo e aparecer apenas 2 exercícios:

``` text
2 exercícios encontrados.
```

### Resposta:

> "O contador recebe a quantidade de exercícios depois da pesquisa ou
> filtro e atualiza o texto apresentado na página."

------------------------------------------------------------------------

# 9. Como adicionar um exercício?

Existe a secção **Adicionar exercício** com um formulário.

O utilizador preenche os campos e envia o formulário.

O JavaScript:

1.  impede o envio normal do formulário;
2.  recolhe os valores;
3.  verifica os campos obrigatórios;
4.  cria um novo objeto;
5.  atribui um identificador;
6.  adiciona o exercício aos dados;
7.  atualiza a interface;
8.  limpa o formulário.

### Resposta curta:

> "O formulário recolhe os dados, valida os campos, cria um novo objeto
> e depois atualiza a lista."

------------------------------------------------------------------------

# 10. O formulário tem validação?

Sim.

Os campos obrigatórios não podem ficar vazios.

Se o utilizador tentar enviar sem preencher os campos necessários, o
formulário não deve aceitar a submissão válida.

### Resposta:

> "Usei validação dos campos obrigatórios para evitar adicionar
> exercícios incompletos."

------------------------------------------------------------------------

# 11. Como eliminar um exercício?

Cada exercício possui uma ação para o eliminar.

Quando o utilizador elimina um exercício:

``` text
exercício é removido
        ↓
dados são atualizados
        ↓
lista é atualizada
        ↓
contador também muda
```

### Resposta:

> "A eliminação altera os dados e depois a interface é atualizada para
> refletir essa alteração."

------------------------------------------------------------------------

# 12. O que é o estado vazio?

É quando não existem resultados para mostrar.

Pode acontecer de duas formas:

### Pesquisa

Pesquisar algo que não existe:

``` text
ZZZZZZZZ
```

Aparece uma mensagem como:

> Nenhum exercício encontrado.

### Eliminação

Se não houver exercícios para apresentar, também aparece uma mensagem em
vez de deixar uma área vazia.

### Resposta:

> "Criei um estado vazio para informar o utilizador quando a pesquisa ou
> o filtro não encontra resultados."

------------------------------------------------------------------------

# 13. Como os pesos funcionam?

Cada exercício possui um campo para introduzir o peso utilizado.

Exemplo:

``` text
Peso (kg): 25
```

O peso é guardado no `localStorage`, permitindo manter o valor para
utilizações futuras no mesmo navegador.

### Resposta:

> "Usei localStorage para guardar os pesos dos exercícios e permitir que
> continuem disponíveis quando volto a utilizar a aplicação."

**Nota:** O `localStorage` é uma funcionalidade extra em relação aos
requisitos mínimos da avaliação.

------------------------------------------------------------------------

# 14. Como fiz a responsividade?

Usei CSS com diferentes regras para diferentes larguras de ecrã.

No desktop, a página utiliza mais espaço horizontal.

No telemóvel, os elementos passam para uma disposição vertical e os
cartões ficam numa coluna.

Também ajustei o formulário e o menu para ecrãs menores.

### Resposta:

> "Usei media queries e CSS Grid/Flexbox para adaptar a interface a
> diferentes tamanhos de ecrã."

------------------------------------------------------------------------

# 15. Como funciona o Hero?

O topo possui:

-   título;
-   texto introdutório;
-   botão "Começar";
-   imagem de fundo;
-   frase motivacional.

A frase motivacional muda automaticamente.

### Resposta:

> "Quis tornar o topo mais dinâmico, por isso implementei a alteração
> automática das frases motivacionais."

------------------------------------------------------------------------

# 16. Por que escolhi este visual?

Escolhi uma identidade visual escura com vermelho porque está
relacionada com o tema de treino e torna a aplicação visualmente
semelhante a um dashboard de ginásio.

Também procurei manter:

-   boa hierarquia visual;
-   contraste;
-   cartões organizados;
-   navegação simples.

------------------------------------------------------------------------

# 17. HTML --- o que preciso saber?

Usei HTML para estruturar a aplicação.

Alguns elementos importantes:

-   `header` --- cabeçalho;
-   `nav` --- navegação;
-   `main` --- conteúdo principal;
-   `section` --- diferentes áreas;
-   `article` --- conteúdo dos exercícios;
-   `form` --- formulário;
-   `footer` --- rodapé.

### Se perguntarem por que usar elementos semânticos:

> "Porque ajudam a organizar a estrutura da página e tornam o HTML mais
> claro."

------------------------------------------------------------------------

# 18. CSS --- o que preciso saber?

O CSS está num ficheiro externo:

``` text
css/style.css
```

Usei:

-   Flexbox;
-   CSS Grid;
-   media queries;
-   `:hover`;
-   `:focus`;
-   variáveis CSS;
-   medidas relativas em várias partes do layout.

### Resposta:

> "Separei a apresentação do HTML e usei Grid, Flexbox e media queries
> para organizar e adaptar o layout."

------------------------------------------------------------------------

# 19. JavaScript --- o que preciso saber?

O projeto usa **JavaScript Vanilla**.

Não usei React, Vue, Angular ou jQuery.

O JavaScript é responsável principalmente por:

-   guardar os dados;
-   mostrar os treinos;
-   criar os cartões;
-   pesquisar;
-   filtrar;
-   atualizar o contador;
-   adicionar exercícios;
-   eliminar exercícios;
-   guardar pesos;
-   atualizar a interface.

### Resposta:

> "Usei JavaScript Vanilla para manipular os dados e o DOM e tornar a
> aplicação interativa."

------------------------------------------------------------------------

# 20. O que é DOM?

Se perguntarem:

> "DOM é a representação da página HTML que o JavaScript consegue
> manipular."

Exemplo:

``` text
JavaScript
    ↓
encontra um elemento HTML
    ↓
altera o conteúdo
    ↓
a página muda
```

Não é preciso explicar mais do que isto, a menos que o professor peça.

------------------------------------------------------------------------

# 21. Uma decisão técnica que gostei

Resposta possível:

> "Uma das decisões que gostei foi manter os exercícios num array e
> criar os cartões através do JavaScript. Assim consigo alterar os dados
> sem precisar alterar manualmente todos os cartões no HTML."

Outra opção:

> "Também gostei de implementar o localStorage para guardar os pesos,
> porque transforma a aplicação numa ferramenta realmente útil para
> acompanhar os meus treinos."

------------------------------------------------------------------------

# 22. O que eu melhoraria no futuro?

Resposta possível:

> "No futuro gostaria de guardar também os exercícios adicionados e
> criar um histórico dos pesos utilizados em cada treino."

Outra possibilidade:

> "Também poderia adicionar gráficos para acompanhar a evolução dos
> pesos ao longo do tempo."

------------------------------------------------------------------------

# 23. Se perguntarem "O que já existia e o que foi acrescentado?"

Resposta:

> "A ideia base do projeto já existia como um plano de treino pessoal.
> Para esta avaliação desenvolvi e organizei as funcionalidades
> interativas em JavaScript, incluindo a listagem dinâmica, pesquisa,
> filtro, contador, formulário para adicionar, eliminação, estado vazio
> e persistência dos pesos. Também trabalhei a responsividade e a
> apresentação visual."

------------------------------------------------------------------------

# 24. Perguntas rápidas para treinar

## Onde estão os dados?

> No JavaScript, num array de objetos.

## Os cartões estão escritos no HTML?

> Não. São criados dinamicamente pelo JavaScript.

## Para que serve o formulário?

> Para adicionar novos exercícios.

## Como funciona a pesquisa?

> Filtra os exercícios pelo nome.

## Como funciona o filtro?

> Filtra os exercícios pelo grupo muscular.

## O contador faz o quê?

> Mostra quantos exercícios estão atualmente visíveis.

## O que acontece quando elimino um exercício?

> O exercício é removido dos dados e a interface é atualizada.

## O que acontece quando não existem resultados?

> Aparece uma mensagem de estado vazio.

## Para que serve o localStorage?

> Para guardar os pesos dos exercícios.

## Como fizeste o mobile?

> Com CSS Grid, Flexbox e media queries.

## Usaste React?

> Não. Usei JavaScript Vanilla.

## Qual foi uma funcionalidade extra?

> O localStorage para guardar os pesos.

## O que melhorarias?

> Guardaria também os exercícios adicionados e criaria um histórico ou
> gráficos de evolução.

------------------------------------------------------------------------

# 25. FRASE PARA LEMBRAR SE DER BRANCO 😅

Se eu esquecer algum detalhe durante a apresentação:

> "A ideia principal é que os dados ficam no JavaScript e a interface é
> atualizada a partir desses dados. Quando o utilizador pesquisa,
> filtra, adiciona ou elimina um exercício, os dados mudam e a interface
> acompanha essa alteração."

Essa frase resume uma parte importante da lógica do projeto.

------------------------------------------------------------------------

# 26. O mais importante

Não preciso decorar o `script.js` inteiro.

Preciso conseguir explicar:

``` text
DADOS
  ↓
JAVASCRIPT
  ↓
INTERAÇÃO DO UTILIZADOR
  ↓
ALTERAÇÃO DOS DADOS
  ↓
INTERFACE ATUALIZADA
```

E conseguir mostrar no projeto onde cada funcionalidade está.
