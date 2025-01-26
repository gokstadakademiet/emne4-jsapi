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