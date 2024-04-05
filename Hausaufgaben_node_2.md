# Hausaufgabe

## Aufgabe 1: Theorie (10 Punkte je Frage -> 40 Punkte + 10 Zusatzpunkte)

1. Wofür ist die package.json Datei zuständig?

   Die package.json-Datei ist für die Verwaltung von Abhängigkeiten, Skripten und Metadaten eines Node.js-Projekts zuständig.  

2. Was ist der Unterschied zwischen `dependencies` und `devDependencies` in der package.json Datei?

   dependencies sind für Module erforderlich, um das Programm auszuführen, während devDependencies Module sind, die nur für die Entwicklung benötigt werden, wie z. B. Testframeworks oder Build-Tools.

3. Warum ist es von Vorteil, häufig verwendete Befehle in der package.json Datei zu speichern?


   Das Speichern häufig verwendeter Befehle in der package.json-Datei ermöglicht eine konsistente und reproduzierbare Entwicklungsumgebung für Entwickler im Projektteam.

4. Weshalb ist es sinnvoll eine .gitignore Datei zu verwenden?
   
   Die Verwendung einer .gitignore-Datei ermöglicht es, bestimmte Dateien und Verzeichnisse von der Versionskontrolle auszuschließen, was dazu beiträgt, das Repository sauber zu halten und unerwünschte Dateien oder sensible Informationen zu vermeiden.


## Aufgabe 2: Ordner erstellen (30 Punkte)

Schreibe eine Funktion, die Ordner erstellt. Nutze dazu die Funktion `fs.mkdirSync()`.
Die Funktion soll einen Parameter `folderPath` entgegennehmen, der den Pfad zum Ordner angibt. Ein zweiter Parameter `folderNames` soll die Namen der zu erstellenden Ordner enthalten.

```typescript
import * as fs from 'fs';

function createDirs(folderPath: string, folderNames: string[]): void {
    // Überprüfe, ob der Basisordner existiert, falls nicht, erstelle ihn
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }

    folderNames.forEach(folderName => {
        const fullPath = `${folderPath}/${folderName}`;
        // Überprüfe, ob der Ordner bereits existiert, bevor er erstellt wird
        if (!fs.existsSync(fullPath)) {
            try {
                fs.mkdirSync(fullPath);
                console.log(`Ordner ${folderName} erfolgreich erstellt.`);
            } catch (error) {
                console.error(`Fehler beim Erstellen des Ordners ${folderName}: ${error}`);
            }
        } else {
            console.log(`Ordner ${folderName} existiert bereits.`);
        }
    });
}

createDirs("./output", [".png", ".mp4", ".gif"]);

```

In dem Ordner `output` sollen nach Ausführung die Ordner `.png`, `.mp4` und `.gif` erstellt werden.

_Hinweis_: Nutze eine for-schleife um alle Ordner, die in `folderNames` enthalten sind, zu erstellen.

_Hinweis_ 2: Nutze die Funktion `fs.existsSync()` um zu überprüfen, ob ein Ordner bereits existiert.
