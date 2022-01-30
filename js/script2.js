/* 
3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, 
un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età. 
*/
console.log('JS OK')


const display = document.getElementById('display');
//3) Students array

const students = [
    {
        nome: 'Daniel', cognome: 'Ofosu', età: 26,
    },
    {
        nome: 'Darnel', cognome: 'Ofosu', età: 31,
    },
    {
        nome: 'Dandalf', cognome: 'Ofosu', età: 981,
    },
];

// Print-Prompt functions

// 
// - Cycle
const printObjectArray = (objectArray, display) => {
    let content = '';
    for (let i = 0; i < objectArray.lenght; i++) {
        content += '<ul>';
        const currentObject = objectArray[i];
        for (let key in currentObject) {
            content += `<li>${key}: ${currentObject[key]}</li>`;
        }
        content += '</ul>';
        content += '<hr />';
    }
    display.innerHTML = content;
};

//Prompt

const getWordFromUser = (text) => {
    let word;
    do {
        word = prompt(text).trim();
    } while (!word);
    return word;
};

const getNumberFromUser = (text) => {
    let number;
    do {
        number = parseInt(prompt(text).trim());
    } while (isNaN(number) || number < 5 );
    return number;
};

const nome = getWordFromUser('Nome');
const cognome = getWordFromUser('Cognome');
const età = getWordFromUser('Età');

const newStudent = {
    nome, cognome, età,
};

students.push(newStudent)

// - Print
printObjectArray(students, display);


