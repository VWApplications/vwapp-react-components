# vwapp-react-components

Componentes customizados usando o bootstrap4 de forma mais legivel em react.

Os componentes de formulário foram passados para a lib: [vwapp-react-form](https://github.com/VictorDeon/vwapp-react-form)

[![NPM](https://img.shields.io/npm/v/vwapp-react-components.svg)](https://www.npmjs.com/package/vwapp-react-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Instalação.

```bash
npm install --save vwapp-react-components
```

## Uso

```jsx
import React, { Fragment } from 'react';
import { FlexContainer, FlexItem as Box, Line, BreakLine } from 'vwapp-react-components';
import styled from 'styled-components';

const FlexItem = styled(Box)`
  background-color: green;
  text-align: center;
  margin: 10px;
  padding: 5px;
`

export default () => (
  <Fragment>
    <FlexContainer reverse direction="row" justify="center" align="center" className="bg-dark" style={{height: "200px"}}>
      <FlexItem>01</FlexItem>
      <FlexItem>02</FlexItem>
    </FlexContainer>
    <Line />
    <FlexContainer wrap direction="row" justify="center" align="center" className="bg-dark" style={{height: "200px"}}>
      <FlexItem>01</FlexItem><FlexItem>02</FlexItem><FlexItem>03</FlexItem><FlexItem>04</FlexItem><FlexItem>05</FlexItem>
      <FlexItem>06</FlexItem><FlexItem>07</FlexItem><FlexItem>08</FlexItem><FlexItem>09</FlexItem><FlexItem>10</FlexItem>
      <FlexItem>11</FlexItem><FlexItem>12</FlexItem><FlexItem>13</FlexItem><FlexItem>14</FlexItem><FlexItem>15</FlexItem>
      <FlexItem>16</FlexItem><FlexItem>17</FlexItem><FlexItem>18</FlexItem><FlexItem>19</FlexItem><FlexItem>20</FlexItem>
      <FlexItem>21</FlexItem><FlexItem>22</FlexItem><FlexItem>23</FlexItem><FlexItem>24</FlexItem><FlexItem>25</FlexItem>
      <FlexItem>26</FlexItem><FlexItem>27</FlexItem><FlexItem>28</FlexItem><FlexItem>29</FlexItem><FlexItem>30</FlexItem>
    </FlexContainer>
    <Line />
    <FlexContainer direction="row" justify="center" align="stretch" className="bg-dark" style={{height: "200px"}}>
      <FlexItem order="3" length="100px">01</FlexItem>
      <FlexItem grow order="2" align="center">02</FlexItem>
      <FlexItem grow order="0">03</FlexItem>
      <FlexItem shrink order="1">04</FlexItem>
      <FlexItem grow order="4">05</FlexItem>
    </FlexContainer>
    <BreakLine />
  </Fragment>
);
```

## Documentação

Além das propriedades especificas de cada componente, também pode ser inserido outras propriedades como: id, className, ...

### 1. Flexbox

Componentes para facilitar o uso do flexbox.

#### Componentes

* FlexContainer
* FlexItem

#### Propriedades (FlexContainer)

* **wrap**: Faz com que os itens ao chegar no limite passe para a próxima linha ou coluna. (Booleano - padrão: false - css: flex-wrap)

* **reverse**: Inverte a ordem dos itens definidas no atributo "direction" ou "wrap". Ele também inverte o alinhamento do atributo "justify" (Booleano - padrão: false - css: flex-direction e flex-wrap).

* **direction**: Empilha os itens horizontalmente ou verticalmente, ou seja, da esquerda para a direita ou de cima para baixo. (String - padrão: "row" - css: flex-direction).

  - **row**: Empilha os itens horizontalmente, ou seja, da esquerda para a direita.

  - **col**: Empilha os itens verticalmente, ou seja, de cima para baixo.

* **justify**: Alinha todos os itens do container verticalmente (col) ou horizontalmente (row). (String - padrão: "initial" - css: justify-content).

  - **start**: Alinha os itens no começo.

  - **end**: Alinha os itens no final.

  - **center**: Alinha os itens no centro.

  - **space-around**: Alinha os itens com espaçamentos ao redor deles.

  - **space-between**: Alinha os itens com espaçamentos entre eles.

* **align**: Alinha todos os itens do container verticalmente (row) ou horizontalmente (col). (String - padrão: "initial" - css: align-items ou align-content). O "align-content" é ativado se o container tiver o atributo "wrap" setado nele, ou seja, ele alinha os conjuntos de itens como um todo. Caso contrário é ativado o "align-items" que alinha os itens separadamente.

  - **start**: Alinha os itens no começo.

  - **end**: Alinha os itens no final.

  - **center**: Alinha os itens no centro.

  - **stretch**: Preenche os itens no container.

  - **baseline**: Alinha os itens tendo como base seu texto. Só funciona com o wrap **não** setado. css: "align-items".

  - **space-around**: Alinha os itens com espaçamentos ao redor deles. Só funciona com o wrap setado. css: "align-content".

  - **space-between**: Alinha os itens com espaçamentos entre eles. Só funciona com o wrap setado. css: "align-content".

#### Propriedades (FlexItem)

* **order**: Ordena os itens da forma que for inserido. Só é aceito valores de 1-12 e todos os itens devem ser preenchidos.
Ou seja, a lista de itens só pode ter no máximo 12 itens. (String - Opcional - css: order)

* **grow**: Faz o item crescer proporcionalmente em relação aos demais, preenchendo a linha. (Booleano - default: false - css: flex-grow)

* **shrink**: Não deixe o item diminuir tanto quanto os outros itens. (Booleano - default: false - css: flex-shrink)

* **length**: Configura um tamanho inicial para o item em pixels. (String - Opcional - css: flex-basis).

* **align**: Especifica o alinhamento do item selecionado dentro do conteiner. A propriedade substitui o alinhamento do atributo "align" definido no container. (String - Opcional - css: align-self).

  - **start**: Alinha os itens no começo.

  - **end**: Alinha os itens no final.

  - **center**: Alinha os itens no centro.

  - **stretch**: Preenche os itens no container.

  - **baseline**: Alinha os itens tendo como base seu texto.

#### Exemplo

```jsx
import React, { Fragment } from 'react';
import { FlexContainer, FlexItem as Box, Line, BreakLine } from 'vwapp-react-components';
import styled from 'styled-components';

const FlexItem = styled(Box)`
  background-color: green;
  text-align: center;
  margin: 10px;
  padding: 5px;
`

export default () => (
  <Fragment>
    <FlexContainer reverse direction="row" justify="center" align="center" className="bg-dark" style={{height: "200px"}}>
      <FlexItem>01</FlexItem>
      <FlexItem>02</FlexItem>
    </FlexContainer>
    <Line />
    <FlexContainer wrap direction="row" justify="center" align="center" className="bg-dark" style={{height: "200px"}}>
      <FlexItem>01</FlexItem><FlexItem>02</FlexItem><FlexItem>03</FlexItem><FlexItem>04</FlexItem><FlexItem>05</FlexItem>
      <FlexItem>06</FlexItem><FlexItem>07</FlexItem><FlexItem>08</FlexItem><FlexItem>09</FlexItem><FlexItem>10</FlexItem>
      <FlexItem>11</FlexItem><FlexItem>12</FlexItem><FlexItem>13</FlexItem><FlexItem>14</FlexItem><FlexItem>15</FlexItem>
      <FlexItem>16</FlexItem><FlexItem>17</FlexItem><FlexItem>18</FlexItem><FlexItem>19</FlexItem><FlexItem>20</FlexItem>
      <FlexItem>21</FlexItem><FlexItem>22</FlexItem><FlexItem>23</FlexItem><FlexItem>24</FlexItem><FlexItem>25</FlexItem>
      <FlexItem>26</FlexItem><FlexItem>27</FlexItem><FlexItem>28</FlexItem><FlexItem>29</FlexItem><FlexItem>30</FlexItem>
    </FlexContainer>
    <Line />
    <FlexContainer direction="row" justify="center" align="stretch" className="bg-dark" style={{height: "200px"}}>
      <FlexItem order="3" length="100px">01</FlexItem>
      <FlexItem grow order="2" align="center">02</FlexItem>
      <FlexItem grow order="0">03</FlexItem>
      <FlexItem shrink order="1">04</FlexItem>
      <FlexItem grow order="4">05</FlexItem>
    </FlexContainer>
    <BreakLine />
  </Fragment>
);
```

### 2. Pagination

Componentes relacionados a criação de paginações.

#### Componentes

* Pagination

#### Propriedades especificas:

* **totalItens**: Total de itens que será paginado. (Inteiro - obrigatório)

* **activePage**: Página ativa pelo usuário na função handlePagination. (Inteiro - obrigatório)

* **itemPerPage**: Quantidade de itens que aparecerá por páginas. (Inteiro - default 20)

* **pageRange**: Quantidade de páginas que irá aparecer no componente de cada vez. (Inteiro - default 5)

* **firstPageText**: Título ou Icone que ao clicar vai voltar para a primeira página. (String - default "Primeiro")

* **lastPageText**: Título ou Icone que ao clicar vai redirecionar para a última página. (String - default "Último")

* **prevPageText**: Título ou Icone que ao clicar vai voltar para a página anterior. (String - default "<<")

* **nextPageText**: Título ou Icone que ao clicar vai avançar para a próxima página. (String - default ">>")

* **handlePagination**: Função que irá tratar a paginação. (Função - Obrigatório).

#### Exemplo:

```jsx
<Pagination
  totalItens={60}
  itemPerPage={20}
  activePage={this.state.activePage}
  handlePagination={this.__handlePagination}
/>
```

## Contribuir

#### 1. Como rodar o ambiente de desenvolvimento:

Rode os dois comandos abaixo em 2 abas diferentes. O primeiro comando vai ficar observando modificações do seu pacote e o segundo
comando consome essas modificações no html.

No diretorio raiz rode o npm start

```
npm start
```

No diretorio example rode o npm start.

```
cd example
npm start
```

#### 2. Como instalar ou remove um pacote.

Para instalar um novo pacote tem que fazer o seguinte comando:

```
npm install --save-dev nome-do-pacote
```

Com ele instalado tem que coloca-lo no package.json

```json
"dependencies": {
  "nome-do-pacote": "^versao",
  "...": "..."
},
"peerDependencies": {
  "nome-do-pacote": "^versao",
  "...": "..."
}
```

Com isso, teste se esse pacote está sendo utilizado, caso não rode o npm install e reinicie os servidores.

#### 3. Publicar no npmjs

1. Crie uma conta no https://www.npmjs.com/
2. Execute no terminal ```npm login``` e logar com as credenciais criadas no npmjs
3. Execute ```npm publish``` na pasta do projeto
4. E então use em outros projetos!

#### 4. Publicar documentação github pages

Rode o comando para criar uma pagina com a build do projeto example do seu repositório.

```
npm run deploy
```

#### 5. Atualizando um projeto.

Versões: MAJOR.MINOR.PATCH

* **MAJOR**: Versão em que fizeste modificações incompatives com versões anteriores, ou seja, que irá quebrar algo anteriormente feito.
* **MINOR**: Quando você adicionar funcionalidades que são compativeis com versões anteriores.
* **PATCH**: Correções de erros/bugs compativeis com versões anteriores.

## Licença

MIT © [VictorDeon](https://github.com/VictorDeon)

Criado a partir do pacote: [Create React Library](https://github.com/transitive-bullshit/create-react-library)
