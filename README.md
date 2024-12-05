# Udemy_Typescript

opzet:
    npm init -y
    npm install typescript --save-dev
    npx tsc --init

    pas package.json aan:
        "scripts": { "build": "tsc" }

    maak mapstructuur:
        mk dir src

    maak eerste TypeScript bestand:
        echo "console.log('Hello, TypeScript!');"> scr/index.ts
    
    compileer TypeScript naar JavaScript        (dit genereert een dist (of vergelijkbare outputmap))
        npm run build

    installeer VSC extensies
        ESLint (voor linting)
        Prettier (voor code-formatting)

    voeg script toe aan package.json
        "start": "node dist/index.js"

    compileer en voer uit:
        npm run build
        npm start