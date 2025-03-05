### 📌 **Hva er Fetch API?**  
**Fetch API** er en innebygd funksjonalitet i JavaScript som brukes til å sende HTTP-forespørsler til en server. Det brukes ofte til å hente data fra et API (**Application Programming Interface**) eller sende data til en server. Fetch API er en forbedring over den eldre `XMLHttpRequest` fordi det bruker **Promises**, noe som gjør koden mer lesbar og enklere å håndtere.

---

### 📌 **Hvordan bruke Fetch API?**  
Grunnleggende syntaks for `fetch` ser slik ut:  

```javascript
fetch(url, options)
  .then(response => response.json())  // Konverterer response til JSON
  .then(data => console.log(data))    // Håndterer dataen
  .catch(error => console.error("Error:", error));  // Fanger opp feil
```

- **`url`**: Adressen til API-et du vil hente data fra.  
- **`options`**: (Valgfritt) Et objekt hvor du kan spesifisere HTTP-metoden, headers, body osv.  
- **`.then(response => response.json())`**: Konverterer response til JSON-format.  
- **`.catch(error => console.error("Error:", error))`**: Fanger opp og logger eventuelle feil.  

---

### 📌 **Hva er en URL?**  
En **URL (Uniform Resource Locator)** er en adresse som peker til en ressurs på nettet.  

Eksempel på en URL:  

```
https://pokeapi.co/api/v2/pokemon
```

URL-en er bygd opp av flere deler:  
- **Protokoll** (`https://`): Forteller hvordan vi kommuniserer med serveren (HTTP eller HTTPS).  
- **Domene** (`pokeapi.co`): Nettadressen til serveren.  
- **URL path** (`/api/v2/pokemon`): Stien til ressursen på serveren.  
- **Query parameters** (`?limit=10&offset=20`): Ekstra informasjon sendt med forespørselen.  

Eksempel med query parameters:  

```
https://pokeapi.co/api/v2/pokemon?limit=10&offset=20
```

- `?limit=10` → Henter kun 10 resultater.  
- `&offset=20` → Hopper over de første 20 resultatene.  

---

### 📌 **HTTP-metoder (HTTP verbs)**  
HTTP-metoder bestemmer hvilken type handling vi utfører på serveren:  

| **Metode** | **Beskrivelse** |
|------------|---------------|
| `GET` | Henter data fra en server (brukes ofte med Fetch API). |
| `POST` | Sender data til en server (f.eks. for å opprette en ny ressurs). |
| `PUT` | Oppdaterer en eksisterende ressurs fullstendig. |
| `PATCH` | Oppdaterer deler av en eksisterende ressurs. |
| `DELETE` | Sletter en ressurs. |

---

## 📝  Oppgave: Hent Pokémon fra PokeAPI**

💡 **Mål**: Du skal bruke `fetch` til å hente en liste over Pokémon fra [PokeAPI](https://pokeapi.co).

### **Steg 1: Opprett en HTML-fil**
Lag en ny fil `index.html` og legg inn følgende kode:

```html
<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokémon Fetch</title>
</head>
<body>
    <h1>Pokémon Liste</h1>
    <button id="fetchPokemons">Hent Pokémon</button>
    <ul id="pokemonList"></ul>

    <script src="script.js"></script>
</body>
</html>
```

---

### **Steg 2: Opprett en JavaScript-fil**
Lag en fil `script.js` og legg inn følgende kode:

```javascript
// URL til API-et
const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=10";

document.getElementById("fetchPokemons").addEventListener("click", () => {
    fetch(apiUrl) // Sender en GET-forespørsel
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // Konverterer response til JSON
        })
        .then(data => {
            const pokemonList = document.getElementById("pokemonList");
            pokemonList.innerHTML = ""; // Tømmer listen før vi legger til nye elementer

            data.results.forEach(pokemon => {
                const listItem = document.createElement("li");
                listItem.textContent = pokemon.name;
                pokemonList.appendChild(listItem);
            });
        })
        .catch(error => console.error("Error:", error));
});
```

---

### **Steg 3: Test koden**
1. Åpne `index.html` i en nettleser.  
2. Klikk på knappen **"Hent Pokémon"**.  
3. Se listen av Pokémon vises!  

---

### **Forstå koden**
1. **Klikkhendelse**: Når knappen trykkes, sendes en `GET`-forespørsel til API-et.  
2. **Fetch API**: Henter data fra `https://pokeapi.co/api/v2/pokemon?limit=10`.  
3. **Error handling**: Hvis `response.ok` er `false`, kaster vi en feil.  
4. **Vis i HTML**: Vi bruker `document.createElement("li")` for å lage listeelementer med Pokémon-navnene.  

---

✅ **Ekstra utfordringer:**  
1. **Hent flere Pokémon** → Endre `limit=10` til `limit=50`.  
2. **Vis bilder av Pokémon** → Hver Pokémon har en egen `URL` i `data.results`. Hent bildet fra `sprites.front_default`.  
3. **Lag en søkefunksjon** → Bruk en `<input>`-boks for å søke etter en spesifikk Pokémon.  

