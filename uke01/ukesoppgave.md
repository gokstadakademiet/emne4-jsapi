# Ukesoppgave 01

## Todoapp

### 1. Opprett et npm prosjekt

```node
$ npm init -y
```

output:

```node
Wrote to /Volumes/develop/gokstad/FUE2426/forelesninger/uke01/todoapp/package.json:
{
    "name": "todoapp",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "Abebe Bediye",
    "license": "MIT"
}
```

Filen **package.json** blir opprettet med innholdet i **output** over. Dette er konfigurasjons filen for prosjektet vårt, som vi skal oppdatere.

---

### 2. Oppdater **package.json** ved å legge til **type** og endre kjøre kommandoene i **scripts**

```diff
{
    "name": "todoapp",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
+   "type": "module",
    "scripts": {
-       "test": "echo \"Error: no test specified\" && exit 1"
+       "test": "jest",
+       "dev": "nodemon"
    },
    "keywords": [],
    "author": "Abebe Bediye",
    "license": "MIT"
}
```

- **type: module** forteller node at vi vil bruke modulbasert (ES6) syntax (eks: **import** isteden for **require**)
- **scripts**: kommandoer som vi kan kjøre med **npm run [kommando]**

---

### 3. Innstaller nodemon og jest

```node
$ npm install --save-dev jest nodemon
eller
$ npm install -D jest nodemon
```

Node vil oppdatere **package.json** med et nytt felt **devDependecies** og installere koden for de pakkene i **node_modules** mappen. Node vil også opprette en **package-lock.json** fil som du ikke trenger å bry deg om men den innholder informasjon om hvilke versjoner som skal installeres.

Les mer om **devpendecies** i [dokumentasjonen](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file) på npm sine sider.

```diff
{
    "name": "todoapp",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "type": "module",
    "scripts": {
        "test": "jest",
        "dev": "nodemon"
    },
    "keywords": [],
    "author": "Abebe Bediye",
    "license": "MIT",
+   "devDependencies": {
+       "jest": "^29.7.0",
+       "nodemon": "^3.1.9"
+   }
}
```