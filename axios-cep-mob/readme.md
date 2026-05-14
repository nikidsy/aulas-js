# Consulta de CEP - App Mobile (React Native + Expo)

Este projeto é um MVP (Produto Mínimo Viável) desenvolvido com **React Native + Expo**, que consome a API pública **ViaCEP** para consulta de endereços a partir de um CEP informado pelo usuário.

O objetivo é demonstrar conhecimentos em:
- Consumo de API REST
- Navegação entre telas
- Componentização
- Organização de projeto
- UI moderna e responsiva

---

# Tecnologias utilizadas

- React Native
- Expo
- Axios
- React Navigation
- JavaScript

---

# API utilizada

**ViaCEP**  
https://viacep.com.br/

A API retorna informações de endereço com base no CEP informado.

---

# Requisitos Funcionais (RF)

- RF01: O usuário pode buscar um endereço informando um CEP
- RF02: O sistema exibe os dados do endereço (rua, bairro, cidade, estado)
- RF03: O usuário pode navegar entre a tela de busca e detalhes

---

# Requisitos Não Funcionais (RNF)

- RNF01: Tratamento de erros de API e CEP inválido
- RNF02: Exibição de loading durante requisições
- RNF03: Interface responsiva para diferentes telas
- RNF04: Uso de SafeAreaView para evitar sobreposição
- RNF05: Consumo de API utilizando Axios

---

# 📁 Estrutura do projeto

```bash
src/
│
├── components/
│   ├── InputCEP.js        # Input reutilizável para CEP
│   ├── CardEndereco.js    # Card para exibição de endereço
│
├── screens/
│   ├── HomeScreen.js      # Tela principal (busca + histórico)
│   ├── DetailScreen.js    # Tela de detalhes do endereço
│
├── services/
│   ├── api.js             # Configuração do Axios
│
├── styles/
│   ├── globalStyles.js    # Estilos globais da aplicação
│
App.js                     # Configuração de navegação (React Navigation)


# Arquitetura do projeto

O projeto segue uma estrutura modular para facilitar manutenção e escalabilidade:

components/ → elementos reutilizáveis da interface

screens/ → telas principais da aplicação

services/ → integração com API externa

styles/ → centralização de estilos globais

App.js → controle de navegação
``` 

## Telas da aplicação
Home

Campo de input para CEP

Botão de busca

Lista de histórico de consultas

Indicador de carregamento

## Detalhes
Exibição completa do endereço

Visualização organizada em card

```
Como executar o projeto

Instalar dependências
npm install
Iniciar o projeto
npx expo start
Rodar no navegador (web)
npx expo start --web
Rodar no celular
Instale o app Expo Go
Escaneie o QR Code exibido no terminal

Decisões técnicas

Axios utilizado para requisições HTTP
React Navigation para navegação entre telas
Componentização para reutilização de código
StyleSheet para organização visual
FlatList para renderização eficiente de listas

Tratamento de erros
O aplicativo trata:

CEP inválido (menos de 8 dígitos)
Falha na requisição da API
CEP não encontrado

Resultado final
O aplicativo permite:

Consultar endereços via CEP
Visualizar informações detalhadas
Navegar entre telas
```

# Desenvolvedor

Projeto desenvolvido como MVP acadêmico utilizando React Native + Expo.


---