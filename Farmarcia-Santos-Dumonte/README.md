# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Carrinho e área do cliente

- O ícone do carrinho no cabeçalho abre a página de carrinho.
- Na página de detalhes, `Adicionar ao carrinho` inclui a quantidade escolhida.
- O carrinho permite alterar quantidades e remover produtos; os itens ficam guardados no `localStorage` do navegador.
- O ícone de usuário abre a área `Minha conta`, com formulário para nome, e-mail, telefone e endereço. Os dados são guardados localmente no navegador.
- A finalização de compra é apenas demonstrativa. Para receber pedidos de verdade, ainda é necessário integrar backend, estoque, entrega e pagamento.
- A área do cliente não tem autenticação nem conta sincronizada entre dispositivos; o armazenamento local é apenas para protótipo.

Para executar: `npm install` e `npm run dev`.
