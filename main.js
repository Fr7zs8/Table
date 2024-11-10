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

RenderTable(array);

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

        const tablebody = document.getElementById("tablebody");
        tablebody.innerHTML= '';
        console.log(array);
        RenderTable(array);
    };
    const form = e.currentTarget;
    form.reset();
})







