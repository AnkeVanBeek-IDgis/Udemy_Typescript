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


### check welke versie TypeScript:
installeren lokaal in projectmap: npm install --save-dev typescript
controle versie: npx tsc --version

### Start Live Server
1. Klik met de rechtermuisknop op index.html in de dist-map in de Explorer (linkerzijbalk in VS Code).
2. Kies de optie "Open with Live Server".
3. Je browser zou automatisch moeten openen en index.html weergeven.

### opnieuw build (is niet meer nodig door regel 'watch' in package.json)
npx tsc src/script.ts --outDir dist


lijkt nog niet juist, ik doe nu:
- npx tsc src/script.ts --outDir dist
<!-- - npx tsc --watch -->
- rechtermuis op index.html (open with live server)