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
## 📷 Telas da Aplicação

As telas abaixo ilustram as principais funcionalidades do sistema de monitoramento hidrológico:

### 1. Visão Geral (Dashboard Main)
Painel principal exibindo o seletor da estação, metadados operacionais, seletor de janela de tempo, cards de último nível registrado, precipitação recente e estado de transmissão.

<p align="center"> <img width="1912" height="866" alt="01" src="https://github.com/user-attachments/assets/fa174480-9791-46ec-a1be-92dd90271c4c" />

</p>

---

### 2. Histórico de Medições (Gráficos Analíticos)
Página focada na análise profunda com gráficos interativos de área (Nível do Rio em metros) e gráficos de barras para a precipitação recente.

<p align="center">
 <img width="1677" height="866" alt="02" src="https://github.com/user-attachments/assets/7e08b9a7-15e8-4867-bc2b-0feb40270b86" />

 ---

<img width="1662" height="855" alt="02 1" src="https://github.com/user-attachments/assets/534f6f58-3334-466d-9362-66540c223796" />

</p>

---

### 3. Consulta Analítica de Medições
Listagem em tabela das medições registradas, permitindo ordenação rápida, visualização do estado e aplicação de filtros detalhados.

<p align="center">   <img width="1536" height="867" alt="03" src="https://github.com/user-attachments/assets/f112ee94-e3cb-4611-baa2-8a918bad1f1a" />

</p>

---
## 📊 Modelagem dos Dados

### Diagrama de Classes
O diagrama de classes abaixo representa o modelo conceitual utilizado no projeto para estruturar as informações das estações e medições hidrológicas.

 <img width="2085" height="1635" alt="graph" src="https://github.com/user-attachments/assets/839cd554-04b8-48c3-adc1-3e79ec80413e" />

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









