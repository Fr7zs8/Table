let array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
        married: true,
        pet: 'kutya'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
        married: false,
        pet: 'macska'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
        married: false,
        pet: 'teknős'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth',
        married: true,
        pet: 'macska'
    },
]

const table = document.createElement('table');

document.body.appendChild(table);



const tableheader = document.createElement('thead');
table.appendChild(tableheader);

const tableheaderrow = document.createElement('tr');
tableheader.appendChild(tableheaderrow);

createTableCell("th", "Vezeteknev", tableheaderrow);
/*
const tableheaderrowLastname = document.createElement('th');
tableheaderrowLastname.innerHTML = "Vezeteknev";
tableheaderrow.appendChild(tableheaderrowLastname);
*/

const kernev = createTableCell("th", "Keresztnev", tableheaderrow);
kernev.colSpan = 2;
/*
const tableheaderrowFirstName = document.createElement('th');
tableheaderrowFirstName.innerHTML = "Keresztnev";
tableheaderrowFirstName.colSpan = 2;
tableheaderrow.appendChild(tableheaderrowFirstName);
*/
createTableCell("th", "Házas", tableheaderrow);
/*
const tableRowMarried = document.createElement('th');
tableRowMarried.innerHTML = "Házas";
tableheaderrow.appendChild(tableRowMarried);
*/

createTableCell("th", "Állat", tableheaderrow);
/*
const tableRowPet = document.createElement('th');
tableRowPet.innerHTML = "Állat";
tableheaderrow.appendChild(tableRowPet);
*/
const tablebody = document.createElement('tbody');
table.appendChild(tablebody);

RenderTable();
function RenderTable(){
    for(const person of array){
        
        const tr = document.createElement('tr');
        tablebody.appendChild(tr);

        tr.addEventListener('click', function(e){
            const SelectedRow = tablebody.querySelector('.selected');
            e.currentTarget.classList.add('selected');
            if(SelectedRow  != undefined){
                SelectedRow.classList.remove('selected');
            }
    
            console.log('click');
        })
        
        createTableCell("td", person.lastname, tr)
        /*
        const td = document.createElement('td');
        td.innerHTML = person.lastname;
        tr.appendChild(td);
        */

        const firstname1td = createTableCell("td", person.firstname1, tr);
        /*
        const firstname1td = document.createElement('td');
        firstname1td.innerHTML = person.firstname1;
        tr.appendChild(firstname1td);
    */

        if(person.firstname2 === undefined){
            firstname1td.colSpan = 2;
    
        }
        else{

            createTableCell("td", person.firstname2, tr);
            /*
            const firstname2td = document.createElement('td');
            firstname2td.innerHTML = person.firstname2;
            tr.appendChild(firstname2td);
            */
        }
    
        const married = document.createElement('td');
        //married.innerHtml?"igen":"nem"
        if(person.married === true){
            married.innerHTML = "igen";
        }
        else{
            married.innerHTML = "nem";
        }
        tr.appendChild(married)
        
        createTableCell("td", person.pet, tr);
        /*
        const allat = document.createElement('td');
        allat.innerHTML = person.pet;
        tr.appendChild(allat);
    */
        
    }
}

const form = document.getElementById("form");
form.addEventListener('submit', function(e){
   
    e.preventDefault();
    const lastname = document.getElementById("lastname");
    const firstname1 = document.getElementById("firstname1");
    const firstname2 = document.getElementById("firstname2");
    const married = document.getElementById("married");
    const pet = document.getElementById("pet");

    const lastnameValue = lastname.value;
    const firstname1Value= firstname1.value;
    const firstname2Value = firstname2.value;
    const marriedValue = married.checked;
    const petValue = pet.value;
    

    if(Validatefields(lastname, firstname1, pet)){
        array.push({
            lastname: lastnameValue,
            firstname1: firstname1Value,
            firstname2: firstname2Value === ''?undefined:firstname2Value,
            married: marriedValue,
            pet: petValue,
        })

        tablebody.innerHTML= '';
        /*
        if(firstname2Value === ''){
            firstname2Value = undefined; 
        }
        */
    
        console.log(array);
        RenderTable();
    };
})

function Validatefields(lastnameValidate, firstname1Validate, petValidate){

    let result = true;

    const errorMesssages = form.querySelectorAll(".error");
   for (const error of errorMesssages){
        error.innerHTML = '';
   }
    
    if(lastnameValidate.value === ''){
         const error = lastnameValidate.parentElement.querySelector(".error");
         error.innerHTML ='Vezetéknév kötelező!';
         result = false;
    }
    if(firstname1Validate.value === ''){
        const error = firstname1Validate.parentElement.querySelector(".error");
        error.innerHTML ='Keresztnév kötelező!';
        result = false;
   }
   if(petValidate.value === ''){
    const error = petValidate.parentElement.querySelector(".error");
    error.innerHTML ='Állat kötelező!';
    result = false;
   }
    
   

    return result;
}
/**
 * Adtunk változokat, hogy a vscode segitsen
 * @param {'td'|'th'} tagname 
 * @param {string} innerHTML 
 * @param {HTMLTableRowElement} parent 
 * @returns {HTMLTableCellElement} 
 */
function createTableCell(tagname, innerHTML, parent){

    const element = document.createElement(tagname);
    element.innerHTML = innerHTML;
    parent.appendChild(element);
    return element;
}



