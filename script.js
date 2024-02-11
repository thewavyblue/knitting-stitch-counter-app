document.addEventListener('DOMContentLoaded', function() {

    const btnClear = document.getElementById('btn-clear');
    const btnConfirm = document.getElementById('btn-confirm');
    const btnSubtract = document.getElementById('btn-subtract');
    const btnReset = document.getElementById('btn-reset');
    const btnAdd = document.getElementById('btn-add');
    const btnSubmit = document.getElementById('btn-submit');

    let count = 0;
    let counterDisplay = document.getElementById('rows-knitted');

    btnAdd.addEventListener('click', function() {
        // if (count === counterDisplay.value) {
            count++;
            counterDisplay.textContent = count;
        // }        
    });

    btnReset.addEventListener('click', function() {
        count = 0;
        counterDisplay.textContent = count;
    });

    btnSubtract.addEventListener('click', function() {
        if (count < 1) {
            count = 1;
        }
        count--;
        counterDisplay.textContent = count;
    });


    
    let ofRows = document.getElementById('of-rows');
    let notePad = document.getElementById('note-pad-list');
    let inputNote = document.getElementById('input-note');
    let myNotes = [];

    btnSubmit.addEventListener('click', function() {
        myNotes.push(inputNote.value);
        inputNote.value = ""; 
        localStorage.setItem("myNotes", JSON.stringify(myNotes));
        renderNotes();        
    });

    let localStorageItem = JSON.parse(localStorage.getItem("myNotes"));

    if (localStorageItem) {
        myNotes = localStorageItem;
        renderNotes();
    } 

    function renderNotes() {
        let noteItems = ""
        for (let i = 0; i < myNotes.length; i++) {
            noteItems += `
                <li>
                    ${myNotes[i]}
                </li>
            `
        }
        notePad.innerHTML = noteItems  
    }

    btnConfirm.addEventListener('click', function() {
        let inputRows = document.getElementById('input-rows').value;
        if (!isNaN(inputRows)) {
            ofRows.textContent = inputRows;
            } else {
            console.log("no number");
        }      
    })

    btnClear.addEventListener('click', function() {
        ofRows.textContent = 0;    
    });






    // localStorage.setItem("myCat", "Tom");
})