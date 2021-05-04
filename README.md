
# Test Render Grid (Large List)

## Instalação

**OBS:** Para a execução dos comandos em ambiente linux pode ser necessário
 permissões de superusuário dependendo das configurações.

### Ferramentas

Baixe e instale o [node.js] versão LTS.

### Instalação do Projeto

Abra o terminal do seu sistema e execute o seguinte comando na **raiz do projeto**  para instalar todas dependências

```sh
npm install
```

## Execução da aplicação localmente

Abra o terminal na **raiz do projeto** e execute os seguinte comando

```sh
npm run start
```

Após terminar a compilação do projeto, abrirá automaticamente a página inicial da aplicação no seu navegador padrão ou você também poderá acessar manualmente nesta URL [http://localhost:3000/](http://localhost:3000/)

## Geração de Build para Produção

Para gerar o build para produção basta rodar o seguinte comando na **raiz do projeto**.

```sh
npm run build
```

Após terminar a execução, será gerado uma pasta com nome **"build"** contendo todos arquivos necessários para subir a aplicação em produção.

## Testes

Para executar os testes unitários basta rodar o seguinte comando na raiz do projeto.

```sh
npm run test
```

Após terminar a execução, será apresentado a quantidades de testes realizados, passados com sucesso ou erros.

Os testes realizados foram os de Snapshots, Props e Reducers.

[node.js]: <https://nodejs.org/en/download/>
