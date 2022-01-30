/* 
1. Creare un oggetto che descriva uno studente, 
con le seguenti proprietà: nome, cognome e età.
2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, 
un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età. 
*/


// 1) Student Object with properties
const student = {
    nome: 'Daniel', cognome: 'Ofosu', età: 26,
};
//2) Print properties (for-in)
const display = document.getElementById('display');

let content = '';

// If 'student content' is 'student key' + 'student key value', display the content for every key in the 'student' array. 
for(let key in student) {
    content += `<div>${key}: ${student[key]}</div>`;
    display.innerHTML = content;
}

//3) Students array


const display = document.getElementById('display');

const students = [
    {nome: 'Daniel', cognome: 'Ofosu', età: 26,},
    {nome: 'Darnel', cognome: 'Ofosu', età: 31,},
    {nome: 'Dandalf', cognome: 'Ofosu', età: 981,},
];



// Print-Prompt functions

// 4) Print
// - Cycle
const printArrayObjects = (objectArray, targetElement) => {
    let content = '';
    for (let i = 0; i < objectArray.lenght; i++) {
        content += '<ul>';
        const currentObject = objectArray[i];
        for (let key in currentObject) {
            content += `<li>${key}: ${currentObject[key]}</li>`;
        }
        content += '</ul>';
        content += '<hr/>';
    }
    targetElement.innerHTML = content;
};

// - Print
printArrayObjects(students, display);

const getWordFromUser = () =>



