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
-  3: Tronca Stringa (truncateString) - richiede [lunghezza_massima]
- 4: Conta Caratteri (countCharacters)