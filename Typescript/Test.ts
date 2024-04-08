import * as fs from 'fs';

function Ordner(folderPath: string, folderNames: string[]): void {
    // Check Root Ordner vorhanden
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }

    folderNames.forEach(folderName => {
        const fullPath = `${folderPath}/${folderName}`;
        // Check ob Ornder schon vorhanden
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