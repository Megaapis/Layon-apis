#!/bin/bash

# Remove a pasta node_modules
echo "Removendo a pasta node_modules..."
rm -rf node_modules

# Instala as dependências do projeto usando o Yarn
echo "Instalando as dependências do projeto..."
yarn install

# Instala o módulo @bochilteam/scraper
echo "Instalando o módulo @bochilteam/scraper..."
yarn add @bochilteam/scraper

# Instala a versão 11.8.5 do módulo got para compatibilidade com CommonJS
echo "Instalando o módulo got@11.8.5..."
yarn add got@11.8.5

echo "Processo concluído!"
