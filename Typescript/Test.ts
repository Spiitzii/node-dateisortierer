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