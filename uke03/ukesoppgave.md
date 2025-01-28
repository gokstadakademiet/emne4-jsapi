# Ukesoppgave 03

## User Authentication and Authorization

### 1. Sett opp et nytt npm prosjekt slik som forrige uke

- **Opprett et npm prosjekt og installer babel og jest**

    ```node
    $ npm init -y
    $ npm i -D jest babel-jest @babel/preset-env @babel/core jest-environment-jsdom
    ```

- **Initier jest og configurer jest.config.js og package.json test script**

    ```node
    $ npx jest init
    ```

    **_jest.config.js_**

    ```diff

    const config = {
        ...
    +   transform: {
    +     '\\.[jt]sx?$': 'babel-jest',
    +   },
        ...
    }
    ```

    **_package.json_**

    ```diff

    ...
    "scripts": {
    -   "test": "jest"
    +   "test": "jest --config ./jest.config.js"
    }
    ...
    ```

- **Opprett og konfigurer babel.config.json**

    **_babel.config.json_**

    ```diff
    +   {
    +       "env": {
    +           "test": {
    +               "presets": [
    +                   "@babel/preset-env"
    +               ],
    +           }
    +       }
    +   }
    ```

---

### 2. Kopier **index.html, globalStyle.css og index.js** fra rotmappen av eksemplet for denne uken

### 3. Opprett sjekk om en bruker er logget inn eller ikke

- Opprett **/src** mappe i rot mappen, denne skal inneholde all logikk som ikke er knyttet til IO med brukeren direkte.
- Opprett filene **/src/authentication.js** og **/src/authentication.test.js**.
- Bruk local storage til å holde på informasjonen om den på loggede brukeren.
- Dersom det ikke eksisterer en bruker i localstorage kan du anse dette som at ingen bruker er pålogget
- Dersom det eksisterer en bruker men brukernavn mangler, kan du anse dette som at ingen bruker er pålogget
- [TIPS!] Husk at localstorage kun kan håndtere string så du må huske å konvertere bruker objektene til string før du legger dem inn i localstorage. Det samme gjelder da når du henter ut bruker tilbake til objekt må du huske på å konvertere det tilbake til objekt.
- Dersom en en bruker er logget inn så kan du vise en melding i listen under **\<section class="nav">** i **index.html** filen i root mappen.
- Dersom en bruker ikke eksistere skal det kun vises en knapp for å vidresende brukeren til **/public/auth** for å logge på.

### 4. Opprett innloggings logikk

- Opprett en mappe **/public/auth** i rootmappen og kopier inn **auth.css, index.html og index.js** fra eksempelet for denne uka.
- Opprett en mappe **/utils** i rotmappen og kopier inn **usersMock.js**. Denne filen skal simulere brukere som allerede er registrert da vi ikke har kommet til dette emnet enda.
- I **/public/auth/auth.js** skal vi skrive js kode som har med innhenting av data fra html og skriving/manipulering av html å gjøre. Selve logikken når vi sammenlikner brukernavn og passord med eksisternede brukere gjør vi i **/src/authentication.js**. Dette for å separere ansvar i funksjonene våre og få mer oversiktlig og ryddig kodebase.
- Skriv js kode for å hente brukernavn og passord som brukeren har tastet I **/public/auth/index.html**. Husk å skrive tester dersom det gir deg mening.
- Skriv js kode for å hente brukere fra **/utils/usersMock.js** og sammenlign brukernavn og passord med det som har blitt tastet inn av brukeren. Dette gjøres i **/src/authentication.js**. Igjen husk å skrive tester her også dersom det gir mening.
- Når er bruker er verifisert og riktig kredentialer er kontorllert skal bruker informasjonen legges inn i localstorage. Bruk nøklen "user" når du legger inn brukerinformasjonen.

### 4. Registrer en ny bruker

- Opprett en mappe **/public/auth/register** under **auth** mappen i forrige oppgave.
- Kopier **index.html og register.js** fra eksempelet for denne uka. Merk at vi ikke trenger **register.css** da den deler samme styling som **/auth**
- På samme måte som vi håndterte innlogging skal vi nå håndtere opprettelse/registrering av nye brukere. Skriv js kode for å håndtere input og output til html i **/public/auth/register.js** og skirv logikk for å legge til den nye brukeren i **/utils/usersMock.js** i **/src/authentication.js**. Husk å skrive tester dersom det gir deg mening.
- Når man oppretter en bruker er det en del validering vi bør pålegge den nye brukeren. Legg merke til at under hver **\<input ... />** har jeg lagt en **\<label class="label error" ... ></label>** som skal vi se ne melding til brukeren dersom validering feiler.
- Legg til minst disse valideringene i registrerring av bruker
  - Brukernavn skal minst være på 3 tegn
  - Brukernavn skal kun innholde små bokstaver og ikke tall eller spesialtegn forutenom understrekning ( **_** )
  - Passord skal minst være på 8 tegn
  - passord skal minst inneholde 1 liten bokstav, 1 stor bokstav, 1 tall og 1 spesialtegn
- Husk å teste dette med jest
