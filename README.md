# 🌊 Projeto FrontEnd - Monitoramento Hidrológico (Cogmo Technology)

Aplicação FrontEnd desenvolvida em **React** para o monitoramento de estações hidrológicas, exibindo níveis de rios, precipitação recente, gráficos de séries históricas e tabelas de consulta analítica de medições, como parte dos desafios do **Bolsa Futuro Digital (BFD)**.

---

## 🚀 Deploy da Aplicação

* **FrontEnd (Produção):** [Acesse o projeto na Vercel](https://hydrocogmo.vercel.app/) 

---

## 📂 Repositórios do Projeto

* **FrontEnd (React):** [Repositório GitHub do Monitoramento Hidrológico](https://github.com/silver-ward/monitoramento-hidrologico)

---

## 🎯 Visão Geral do Projeto

* **Domínio:** Monitoramento Hidrológico e Ambiental.
* **Entidades Principais:** Estações Hidrológicas, Nível do Rio (metros), Precipitação (mm/h) e Estado de Transmissão.
* **Objetivo:** Desenvolver uma interface web interativa para consumo de dados hidrológicos, oferecendo visualização gráfica e analítica para apoio à tomada de decisão.

---

## 💻 Tecnologias Utilizadas

### FrontEnd
* **ReactJS**
* **JavaScript (ES6+)**
* **Ant Design (AntD)** / Componentes customizados
* **Chart Libraries (D3 / Recharts)** para os gráficos de nível e chuva
---
📷 Telas da Aplicação
As telas abaixo ilustram as principais funcionalidades do sistema:

Tela 1 - Visão Geral (Dashboard Main)
Painel principal exibindo o seletor da estação, metadados operacionais, seletor de janela de tempo, cards de último nível registrado, precipitação recente e estado de transmissão.
<img width="1912" height="866" alt="01" src="https://github.com/user-attachments/assets/3e59cdf0-9a24-4100-9729-bc0f7d65dc31" />

Tela 2 - Histórico de Medições (Gráficos Analíticos)
Página focada na análise profunda com gráficos interativos de área (Nível do Rio em metros) e gráficos de barras para a precipitação recente.
<img width="1677" height="866" alt="02" src="https://github.com/user-attachments/assets/6e726651-800c-40bd-94e8-9dddd24213c2" />
<img width="1662" height="855" alt="02 1" src="https://github.com/user-attachments/assets/cf44d762-445e-4d73-b341-e7c8125bf970" />

Tela 3 - Consulta Analítica de Medições
Listagem em tabela das medições registradas, permitindo ordenação rápida, visualização do estado e aplicação de filtros detalhados.
<img width="1536" height="867" alt="03" src="https://github.com/user-attachments/assets/0ffcc9f4-8d0a-48f7-8f23-7c0dfbacc595" />

---

## 🗂️ Estrutura do Projeto (FrontEnd)

A organização das pastas e arquivos do projeto segue a seguinte estrutura:

```text
monitoramento-hidrologico/
├── img/
│   ├── cogmo-logo.png
│   ├── ifb-logo.png
│   └── ...
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AppHeader.jsx
│   │   ├── MeasurementCharts.jsx
│   │   ├── MeasurementTable.jsx
│   │   ├── Overview.jsx
│   │   └── StationControls.jsx
│   ├── data/
│   │   └── stations.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── package.json
└── README.md









