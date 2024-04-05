import * as fs from 'node:fs'
import * as path from 'node:path'
import { dateiEndungenErstellen } from './helpers'


// 1. Schritt: Inhalte des Ordners auflisten
const inhalteOrnder = fs.readdirSync('./input')
// console.log(inhalteOrnder)

// 2. Schritt: Dateitypen herausfinden

const endungen = dateiEndungenErstellen(inhalteOrnder)
console.log(endungen)

// 3. Schritt: Dateien nach Bedingungen sortieren