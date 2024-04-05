import * as fs from 'node:fs'
import * as path from 'node:path'

// 1. Schritt: Inhalte des Ordners auflisten
const inhalteOrnder = fs.readdirSync('./input')
console.log(inhalteOrnder)

// 2. Schritt: Dateitypen herausfinden


// 3. Schritt: Dateien nach Bedingungen sortieren