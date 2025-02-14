# Ukesopgpave 05 - Hangman

Denne uken skal dere lage deres egen versjon av Hangman.

- Start med å lage spillereglene uten html og css, husk å teste funksjonaliteten deres.
- Bruk så det dere har lært til å lage UI for spillet i html og css.
- Det kommer ikke til å legges vekt på styling eller utseende, bare funksjonalitet.

## Kravspesifikasjon – Hangman i JavaScript

### 1. Grunnleggende funksjonalitet

- ✅ Spillet skal velge et ord som spilleren skal gjette.
- ✅ Spillet skal vise antall bokstaver i ordet som understreker (`_`) ved start.
- ✅ Spilleren skal kunne gjette én bokstav av gangen.
- ✅ Hvis bokstaven finnes i ordet, skal den plasseres på riktig(e) plass(er).
- ✅ Hvis bokstaven ikke finnes i ordet, skal et feiltrekk registreres.
- ✅ Spillet skal avsluttes når spilleren enten:
  - Har gjettet hele ordet riktig (**vinner**).
  - Har brukt opp alle forsøk (**tap**).

### 2. Brukergrensesnitt

- ✅ Programmet skal vise ordet som en rekke med bokstaver og/eller understreker.
- ✅ Antall feil (og eventuelt en visuell fremstilling av hengemannen) skal oppdateres etter hvert trekk.
- ✅ Programmet skal vise hvilke bokstaver spilleren allerede har gjettet.
- ✅ Spillet skal gi en melding ved seier eller tap.

### 3. Interaksjon og input

- ✅ Spilleren skal kunne skrive inn én bokstav om gangen.
- ✅ Kun én bokstav skal godtas per trekk (ikke tall eller spesialtegn).
- ✅ Bokstaver skal være case-insensitive (A og a skal behandles likt).
- ✅ Spilleren skal ikke kunne gjette samme bokstav flere ganger.

### 4. Teknisk krav

- ✅ Koden skal være skrevet i ren JavaScript (ingen eksterne biblioteker kreves).
- ✅ Spillet skal kunne kjøres i nettleseren (bruk DOM-manipulasjon eller `console.log`).
- ✅ Koden skal være godt strukturert og kommentert.
- ✅ Bruk funksjoner for å håndtere sentrale deler av spillet (f.eks. sjekke bokstav, oppdatere skjerm, sjekke seier/tap).

### 5. Ekstra (valgfritt for avanserte studenter)

- 🔹 Mulighet for å gjette hele ordet på én gang.
- 🔹 Enkle animasjoner eller visuelle forbedringer i CSS.
- 🔹 Lokal lagring av beste resultat eller tidligere ord.
- 🔹 Tilfeldig valg av ord fra en liste