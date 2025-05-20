# Labo-String: CLI per Utilità su Stringhe

Questo progetto fornisce una base per una semplice Command-Line Interface (CLI) Node.js che offre diverse utilità per la manipolazione di stringhe.

## Funzionalità Principali

* Inversione di una stringa.
* Verifica se una stringa è palindroma.
* Troncamento di una stringa a una lunghezza massima specificata.
* Conteggio delle occorrenze di ciascun carattere in una stringa.

## Installazione e Avvio

### Prerequisiti

- `Node v18.x`

### Installazione

- Clona la repository 
````bash
git clone https://github.com/Radiaxx/ssgs-labo-02.git
````
- Sposta la working directory all'interno della repository clonata localmente
````bash
cd ${your_dir}/ssgs-labo-02
````
- Installa le dipendenze
````bash
npm install
````

### Avvio

````bash
npm run dev <numero_funzione> <stringa_input> [parametro_aggiuntivo]
````
**Possibili funzioni:**
- 1: Inverti Stringa (reverseString)
- 2: Controlla Palindromo (isPalindrome)
- 3: Tronca Stringa (truncateString) - richiede [lunghezza_massima]
- 4: Conta Caratteri (countCharacters)

## Testing:

Una suite di test e' inclusa utilizzando la libreria [Jest](https://jestjs.io/). Gli unit test coprono le funzionalita' di trasformazione di stringhe contenute nel progetto (`reverseString`, `isPalindrome`, `truncateString`, `countCharacters`). In output viene ritornato il coverage dei test presenti, applicando come vincolo il `100%` di coverage nelle metriche di `branch`, `functions`, `lines`, `statements`.

Per eseguire i test localmente, eseguire sul terminale:

````bash
npm test
````

## Github Actions:

Un workflow di Github Actions e' incluso e configurato in [`.github/workflows/build-test.yml`](). Automatizza il processo di test del progetto e mostra in output la coverage, caricandola come artifact all'interno delle actions e viene eseguita solamente su eventi significativi come `push` e `pull_request`.

- **Trigger:** Il workflow e' eseguito automaticamente sull'evento di `push`.
- **Environment:** E' eseguito su ambiente Ubuntu con Node.js v18.x.
- **Steps:**
    1. Esegue il checkout della repository sul branch in cui viene eseguito.
    2. Inizializza l'ambiente Node.js.
    3. Installa le dipendenze con `npm ci`.
    4. Esegue la suite di test con `npm test`.
    5. Carica un artifact su github actions contenente il report della code coverage.