# Projeto Processo Seletivo Media.Monks
# Descrição
Este projeto visa realizar uma análise e a correção em dois arquivos JSON(broken_database_1 e broken_database_2) que estão sendo utilizados como uma base de dados. Após a correção será exportado outros dois arquivos JSON com os dados corrigidos.

## Estrutura do Projeto
O projeto é composto pelos seguintes componentes:

1- Arquivos de Dados:

broken_database_1.json: Representa informações detalhadas sobre vendas de veículos.
broken_database_2.json: Contém informações sobre marcas e modelos de veículos.

2- Scripts de Correção de Dados:

repairData.js: Um script Node.js que lê os arquivos JSON, realiza correções nos dados e exporta os dados corrigidos para novos arquivos.

3- Scripts SQL:
sql_queries.sql: Contém consultas SQL para análise de dados. As consultas abordam questões específicas, como volume de vendas, receitas, médias, rentabilidade e veículos mais vendidos.

4- Relatório Final:
Script SQL que cria uma tabela chamada resultado_final e popula essa tabela com os resultados das análises realizadas.

## Instruções de Uso
Correção de Dados:

Execute o script repairData.js para corrigir dados nos arquivos JSON.

```bash
node repairData.js
```
O sql_queries foi criado utilizando o sqliteonline https://sqliteonline.com/ e após a execução do código deve exportar o relatorio_final.csv.


