/**
 * Adtunk változokat, hogy a vscode segitsen // Ez a függvény azt csinálja, hogy létrehoz egy cellát a táblázatunkhoz 
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

/**
 * Ez a függvény azt csinálja, hogy létrehoz egy html elemet és az id-ját is megadhatjuk neki
 * @param {HTMLTableElement} tag 
 * @param {string} id 
 * @param {HTMLElement} parent 
 */
function createHtmlElement(tag, id ,parent){
    const element = document.createElement(tag);
    element.id = id;
    parent.appendChild(element);
}

/**
 * Ez a függvény azt csinálja, hogy létrehoz egy Html elementet és ahoz az id-ju elemhez csatolja amit megadunk neki.
 * @param {HTMLTableElement} tag 
 * @param {string} id 
 * @param {string} parentid 
 */
function createHtmlElementWithParentId(tag, id, parentid){
    const element = document.getElementById(parentid);
    if (element != undefined){ // if(elementid)
        createHtmlElement(tag, id, element);
    }
        
    else{
        console.log("Nem létezik ilyen id.");
    }
        
}

/**
 * Ez a függvény azt csinálja, hogy létrehozza a fejlécet
 */
function RenderTableHeader(){
    const element = document.getElementById("tableheaderrow");
    createTableCell("th", "Vezetéknév", element);
    const kernev = createTableCell("th", "Keresztnév", element);
    kernev.colSpan = 2;
    createTableCell("th", "Házas", element);
    createTableCell("th", "Állat", element);
}

/**
 * Ez a függvény azt csinálja, hogy létrehozza a táblázatunkat az adatokkal amit megadunk neki
 * @param {Array} personarray 
 */
function RenderTable(personarray){
    for(const person of personarray){
        const tablebody = document.getElementById("tablebody");
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
/**
 * Ez a függvény megnézi valahova nem e írt üres mezőt a felhasználó és azt ellenőrzi. 
 * @param {HTMLElement} lastnameValidate 
 * @param {HTMLElement} firstname1Validate 
 * @param {HTMLElement} petValidate 
 * @returns {boolean}
 */
function Validatefields(lastnameValidate, firstname1Validate, petValidate){

    let result = true;

    const errorMesssages = form.querySelectorAll(".error");
   for (const error of errorMesssages){
        error.innerHTML = '';
   }
        result = ValidateElement(lastnameValidate, "Vezetéknév kötelező!");
        result = ValidateElement(firstname1Validate, 'Keresztnév kötelező!');
        result = ValidateElement(petValidate, 'Állat kötelező!');

    return result;
}

/**
 * Ez a függvény ha talál egy hibát hogy valahová ahova kötelező nincs írva semmi akkor azt a megadott error üzenettel vissza adja
 * @param {HTMLElement} validateelement 
 * @param {string} message 
 * @returns {boolean}
 */
function ValidateElement(validateelement, message){
    if(validateelement.value === ''){
        const error = validateelement.parentElement.querySelector(".error");
        error.innerHTML = message;
        return false;
    }
    return true;
}
