import * as path from 'node:path'
import * as fs from 'fs';

export function dateiEndungenErstellen(inhalteOrnder: string[]) {

  const endungen = new Set<string>()

  for (let i = 0; i < inhalteOrnder.length; i = i + 1) {
    const dateiName = inhalteOrnder[i] // wir laden hier den aktuellen Dateinamen in die Variable
    const dateiEndung = path.extname(dateiName) // wir finden die Dateieindung der eingegebenen Variable heraus
    console.log(dateiEndung)
    endungen.add(dateiEndung)
  }

  return endungen

}



export function Ordner(folderPath: string, folderNames: string[]): void {
    // Check Root Ordner vorhanden
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true })
    }

    folderNames.forEach(folderName => {
        const fullPath = `${folderPath}/${folderName}`
        // Check ob Ornder schon vorhanden
        if (!fs.existsSync(fullPath)) {
            try {
                fs.mkdirSync(fullPath);
                console.log(`Ordner ${folderName} erfolgreich erstellt.`)
            } catch (error) {
                console.error(`Fehler beim Erstellen des Ordners ${folderName}: ${error}`)
            }
        } else {
            console.log(`Ordner ${folderName} existiert bereits.`)
        }
    });
}