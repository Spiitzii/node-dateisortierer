import * as fs from 'node:fs'
import * as path from 'node:path'
import { dateiEndungenErstellen } from './helpers'

// 1. Schritt: Inhalte des Ordners auflisten
const inhalteOrnder = fs.readdirSync('./input')
console.log(inhalteOrnder)

// 2. Schritt: Dateitypen herausfinden

const endungen = dateiEndungenErstellen(inhalteOrnder)
console.log(endungen)

// 3. Schritt: Dateien nach Bedingungen sortieren

for (const endung of endungen){
    try {
    fs.mkdirSync('./output/' + endung)
    } catch (e) {
        console.error("Das Verzeichnis exisitiert schon")
    }
}

// Dies ist eine Schleife, die über jedes Element im Array 'inhalteOrdner' iteriert.
inhalteOrnder.forEach

// Dies ist eine Pfeilfunktion, die für jedes Element in 'inhalteOrdner' ausgeführt wird.
// 'file' ist eine Variable, die jedes Element des Arrays während der Iteration repräsentiert.
(file => {

// 'path.extname(file)' gibt die Dateierweiterung des aktuellen Elements file zurück. 
// Die Dateierweiterung wird in der Variablen ext gespeichert.
    const ext = path.extname(file)

// fs.copyFileSync() kopiert synchron eine Datei von einem Speicherort in einen anderen.
// './input/ + file' ist der Pfad zur aktuellen Datei im Ordner "input".
// './output/ + ext + '/' + file' ist der Zielort, wohin die Datei kopiert werden soll.
    // './output/' ist der Pfad zum Ausgabeordner.
    // 'ext + '/'' wird verwendet, um Unterordner für jede Dateierweiterung zu erstellen, 
    // falls sie nicht bereits vorhanden sind. Hier wird die Datei in einen Ordner kopiert, der nach ihrer Erweiterung benannt ist.
    // 'file' ist der Dateiname der zu kopierenden Datei.

    fs.copyFileSync('./input/' + file, './output/' + ext + '/' + file)
})
