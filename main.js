const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
]

const table = document.createElement('table');

document.body.appendChild(table);

const tableheader = document.createElement('thead');
table.appendChild(tableheader);

const tableheaderrow = document.createElement('tr');
tableheader.appendChild(tableheaderrow);

const tableheaderrowLastname = document.createElement('th');
tableheaderrowLastname.innerHTML = "Vezeteknev";
tableheaderrow.appendChild(tableheaderrowLastname);

const tableheaderrowFirstName = document.createElement('th');
tableheaderrowFirstName.innerHTML = "Keresztnev";
tableheaderrowFirstName.colSpan = 2;
tableheaderrow.appendChild(tableheaderrowFirstName);

const tablebody = document.createElement('tbody');
table.appendChild(tablebody);


for(const person of array){
    const tr = document.createElement('tr')

    const td = document.createElement('td');
    td.innerHTML = person.lastname;
    tr.appendChild(td);

    const firstname1td = document.createElement('td');
    firstname1td.innerHTML = person.firstname1;
    tr.appendChild(firstname1td);

    if(person.firstname2 === undefined){
        firstname1td.colSpan = 2;

    }
    else{
        const firstname2td = document.createElement('td');
        firstname2td.innerHTML = person.firstname2;
        tr.appendChild(firstname2td);
    }

    tablebody.appendChild(tr);
    
   


}




