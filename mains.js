// reset js
'use strict';

// Salvo l'elemento paragrafo all'interno di una variabile
let currentElement = document.getElementById('prezzo');

// riciclo il valore iniziale della variabile
let currentText = currentElement.innerHTML;

// Prende come input il numero di chilometri da percorrere e l'età dell'utente tramite i prompts.

const ChilometriDaPercorrere = Number(prompt("Inserire il numero di Km da percorrere: "))

const UserAge = Number(prompt("Inserire la propria età: "));