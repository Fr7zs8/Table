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

createHtmlElement("table", "personTable", document.body);
createHtmlElementWithParentId("thead", "tableheader", "personTable" );
createHtmlElementWithParentId("tr", "tableheaderrow", "tableheader")
RenderTableHeader();
createHtmlElementWithParentId("tbody", "tablebody", "personTable")

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

        const firstname1td = createTableCell("td", person.firstname1, tr);

        if(person.firstname2 === undefined){
            firstname1td.colSpan = 2;
    
        }
        else{

            createTableCell("td", person.firstname2, tr);
        }
    
        const married = createTableCell("td", person.married, tr);
        
        if(person.married === true){
            married.innerHTML = "igen";
        }
        else{
            married.innerHTML = "nem";
        }

        createTableCell("td", person.pet, tr);
        
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
        console.log(array);
        RenderTable();
    };

    form.reset();
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





