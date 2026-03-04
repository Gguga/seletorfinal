# Seletor de Cardápio — Protocolo Anti-Rebote

Aplicação web clínica e minimalista para recomendação automática de estrutura calórica com base no perfil do usuário.

## Tecnologias

- React 18
- Vite 4
- TypeScript 5
- CSS Modules

## Funcionalidades

- Coleta de dados individuais (sexo, idade, altura, peso, frequência de treino, objetivo)
- Cálculo automático de estrutura calórica recomendada (1250, 1500, 1750 ou 2000 kcal)
- Modo de manutenção metabólica para usuários que já atingiram o objetivo
- Design clínico e profissional, responsivo (mobile first)
- Transições suaves entre etapas

## Lógica de Recomendação

**Mulheres:**
- Altura < 1,60m → 1250 kcal
- Altura 1,60m – 1,70m → 1500 kcal
- Altura > 1,70m → 1750 kcal

**Homens:**
- Altura < 1,70m → 1500 kcal
- Altura 1,70m – 1,85m → 1750 kcal
- Altura > 1,85m → 2000 kcal

**Fase de manutenção:** Recomendação estruturada com adições progressivas de carboidrato e fruta.

## Como rodar localmente

```bash
npm install
npm run dev
```

## Deploy no Vercel

O projeto está configurado para deploy automático no Vercel.

1. Faça push para o GitHub
2. Importe o repositório no [Vercel](https://vercel.com)
3. O Vercel detecta automaticamente o Vite e configura o build

O arquivo `vercel.json` já está configurado com:
- Build command: `npm run build`
- Output directory: `dist`
- Rewrites para SPA routing

## Estrutura do Projeto

```
src/
├── components/
│   ├── IntroScreen.tsx       # Tela inicial
│   ├── IntroScreen.module.css
│   ├── FormScreen.tsx        # Formulário de coleta
│   ├── FormScreen.module.css
│   ├── ResultScreen.tsx      # Resultado da avaliação
│   └── ResultScreen.module.css
├── App.tsx                   # Controlador de fluxo
├── App.css
├── index.css                 # Estilos globais e variáveis
├── logic.ts                  # Lógica de recomendação
├── types.ts                  # Tipos TypeScript
└── main.tsx                  # Ponto de entrada
```
