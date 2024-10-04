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

const tableheaderrowLastname = document.createElement('th');
tableheaderrowLastname.innerHTML = "Vezeteknev";
tableheaderrow.appendChild(tableheaderrowLastname);

const tableheaderrowFirstName = document.createElement('th');
tableheaderrowFirstName.innerHTML = "Keresztnev";
tableheaderrowFirstName.colSpan = 2;
tableheaderrow.appendChild(tableheaderrowFirstName);

const tableRowMarried = document.createElement('th');
tableRowMarried.innerHTML = "Házas";
tableheaderrow.appendChild(tableRowMarried);

const tableRowPet = document.createElement('th');
tableRowPet.innerHTML = "Állat";
tableheaderrow.appendChild(tableRowPet);

const tablebody = document.createElement('tbody');
table.appendChild(tablebody);


for(const person of array){
    const tr = document.createElement('tr')
    tr.addEventListener('click', function(e){
        const SelectedRow = tablebody.querySelector('.selected');
        e.currentTarget.classList.add('selected');
        if(SelectedRow  != undefined){
            SelectedRow.classList.remove('selected');
        }

        console.log('click');
    })

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

    const married = document.createElement('td');
    //married.innerHtml?"igen":"nem"
    if(person.married === true){
        married.innerHTML = "igen";
    }
    else{
        married.innerHTML = "nem";
    }
    tr.appendChild(married)
    
    const allat = document.createElement('td');
    allat.innerHTML = person.pet;
    tr.appendChild(allat);

    tablebody.appendChild(tr);


    

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

    array.push({
        lastname: lastnameValue,
        firstname1: firstname1Value,
        firstname2: firstname2Value,
        married: marriedValue,
        pet: petValue,
    })

    console.log(array);

})



