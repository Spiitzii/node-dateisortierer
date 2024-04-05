# Hausaufgabe

## Aufgabe 1: Theorie (10 Punkte je Frage -> 40 Punkte)

1. Wofür ist die package.json Datei zuständig?
2. Was ist der Unterschied zwischen `dependencies` und `devDependencies` in der package.json Datei?
3. Warum ist es von Vorteil, häufig verwendete Befehle in der package.json Datei zu speichern?
4. Weshalb ist es sinnvoll eine .gitignore Datei zu verwenden?

Zusatzaufgabe: 5. Erkläre mit eigenen Worten, wofür man try-catch-Blöcke verwendet.

## Aufgabe 2: Ordner erstellen (30 Punkte)

Schreibe eine Funktion, die Ordner erstellt. Nutze dazu die Funktion `fs.mkdirSync()`.
Die Funktion soll einen Parameter `folderPath` entgegennehmen, der den Pfad zum Ordner angibt. Ein zweiter Parameter `folderNames` soll die Namen der zu erstellenden Ordner enthalten.

```typescript
function createDirs(folderPath: string, folderNames: string[]): void {
  // Hier kommt dein Code hin.
}

createDirs("./output", [".png", ".mp4", ".gif"]);
```

In dem Ordner `output` sollen nach Ausführung die Ordner `.png`, `.mp4` und `.gif` erstellt werden.

_Hinweis_: Nutze eine for-schleife um alle Ordner, die in `folderNames` enthalten sind, zu erstellen.

_Hinweis_ 2: Nutze die Funktion `fs.existsSync()` um zu überprüfen, ob ein Ordner bereits existiert.

## (Zusatz) Aufgabe 3: Dateien kopieren (50 Punkte)

Schreibe eine Funktion, die Dateien kopiert. Nutze dazu die Funktion `fs.copyFileSync()`. Die Funktion soll die Dateien von einem Ordner in verschiedene Ornder kopieren.
Das soll ganz im Sinne des Projektes sein, also nach Dateityp sortiert.

Finde zuerst heraus, welche Funktionen du benötigst, um die Dateiendung einer Datei zu ermitteln.
Finde danach heraus, wie du eine Datei in einen anderen Ordner kopieren kannst.

## (Zusatz) Aufgabe 4: Zufällige Elemente aus einer Liste

Gegeben ist eine Liste von Elementen. Schreibe eine Funktion, die ein zufälliges Element aus der Liste zurückgibt.
Erkundige dich selbstständig, wie du die Bibliothek `Math` oder `crypto` verwenden kannst, um zufällige Zahlen zu generieren.
Nutze die Funktion `Math.floor()` um die Zufallszahl auf eine ganze Zahl abzurunden.

```typescript
function getRandomElementFromList(list: string[]): string {
  // Hier kommt dein Code hin.
}

const endungen = [
  ".txt",
  ".png",
  ".mp4",
  ".gif",
  ".jpg",
  ".pdf",
  ".docx",
  ".xlsx",
  ".pptx",
];

getRandomElementFromList(endungen); // Gibt ein zufälliges Element aus der Liste zurück.
```
