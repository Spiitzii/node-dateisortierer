"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function createDirs(folderPath, folderNames) {
    // Überprüfe, ob der Basisordner existiert, falls nicht, erstelle ihn
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }
    folderNames.forEach(function (folderName) {
        var fullPath = "".concat(folderPath, "/").concat(folderName);
        // Überprüfe, ob der Ordner bereits existiert, bevor er erstellt wird
        if (!fs.existsSync(fullPath)) {
            try {
                fs.mkdirSync(fullPath);
                console.log("Ordner ".concat(folderName, " erfolgreich erstellt."));
            }
            catch (error) {
                console.error("Fehler beim Erstellen des Ordners ".concat(folderName, ": ").concat(error));
            }
        }
        else {
            console.log("Ordner ".concat(folderName, " existiert bereits."));
        }
    });
}
