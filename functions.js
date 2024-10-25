/**
 * Adtunk változokat, hogy a vscode segitsen // Ez a függvény azt csinálja.
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

function createHtmlElement(tag, id ,parent){
    const element = document.createElement(tag);
    element.id = id;
    parent.appendChild(element);
}

function createHtmlElementWithParentId(tag, id, parentid){
    const element = document.getElementById(parentid);
    if (element != undefined){ // if(elementid)
        createHtmlElement(tag, id, element);
    }
        
    else{
        console.log("Nem létezik ilyen id.");
    }
        
}

function RenderTableHeader(){
    const element = document.getElementById("tableheaderrow");
    createTableCell("th", "Vezetéknév", element);
    const kernev = createTableCell("th", "Keresztnév", element);
    kernev.colSpan = 2;
    createTableCell("th", "Házas", element);
    createTableCell("th", "Állat", element);
}

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
