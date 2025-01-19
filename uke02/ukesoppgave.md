# Ukesoppgave 02

## Caesar Cipher

[Kilde](https://dev.to/manuartero/setup-jest-from-scratch-in-a-vanilla-js-project-47o0)

### 1. Initier et nytt npm prosjekt

```node
$ npm init -y
```

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

### 3. Innstaller babel, nodemon og jest

```node
$ npm install --save-dev jest nodemon babel-jest @babel/preset-env @babel/core jest-environment-jsdom
eller
$ npm install -D jest nodemon babel-jest @babel/preset-env @babel/core jest-environment-jsdom
```

Node vil oppdatere **package.json** med et nytt felt **devDependecies** og installere koden for de pakkene i **node_modules** mappen. Node vil også opprette en **package-lock.json** fil som du ikke trenger å bry deg om men den innholder informasjon om hvilke versjoner som skal installeres.

Les mer om **dependecies/devDependecies** i [dokumentasjonen](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file) på npm sine sider.

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
+       "@babel/core": "^7.26.0",
+       "@babel/preset-env": "^7.26.0",
+       "babel-jest": "^29.7.0",
+       "jest": "^29.7.0",
+       "nodemon": "^3.1.9"
+   }
}
```

---

### 4. Initier jest configurasjon

```node
$ npx jest init
```


output:

The following questions will help Jest to create a suitable configuration for your project

✔ Would you like to use Jest when running "test" script in "package.json"? … **yes**
✔ Would you like to use Typescript for the configuration file? … **no**
✔ Choose the test environment that will be used for testing › **jsdom (browser-like)**
✔ Do you want Jest to add coverage reports? … **no**
✔ Which provider should be used to instrument code for coverage? › **babel**
✔ Automatically clear mock calls, instances, contexts and results before every test? … **no**

Dette vil opprette en **jest.config.js** fil i roten av prosjektet. Ta en titt på denn for å se hva som er mulig å konfigurere.

Legg til følgende i **jest.config.js**, dette vil fortelle jest at vi skal bruke babel for testene våre.

```diff
const config = {
    ...
+   transform: {
+     '\\.[jt]sx?$': 'babel-jest',
+   },
    ...
}
```

I **package.json** skal vi nå oppdatere test kommandoen til å bruke denne konfigurasjons filen.

```diff
...
"scripts": {
-   "test": "jest"
+   "test": "jest --config ./jest.config.js"
}
...
```

---
