document.addEventListener('DOMContentLoaded', function() {

    const btnClear = document.getElementById('btn-clear');
    const btnConfirm = document.getElementById('btn-confirm');
    const btnSubtract = document.getElementById('btn-subtract');
    const btnReset = document.getElementById('btn-reset');
    const btnAdd = document.getElementById('btn-add');
    const btnSubmit = document.getElementById('btn-submit');
    const btnClearNotes = document.getElementById('btn-clear-notes');

    let counterDisplay = document.getElementById('rows-knitted');
    let count = null;
    let savedCount = localStorage.getItem("rowCount");
    let savedRows = localStorage.getItem("ofRowsCount");

    let ofRows = document.getElementById('of-rows');
    let notePad = document.getElementById('note-pad-list');
    let inputNote = document.getElementById('input-note');
    let myNotes = [];
    let ofRowsCount = 0;

    // Get the row count saved in the localStorage
    if(savedCount) {
        counterDisplay.textContent = savedCount;
        count = savedCount;
    } else {
        counterDisplay.textContent = 0;
        count = savedCount;
    }

    if(savedRows) {
        ofRows.textContent = savedRows;
        ofRowsCount = savedRows;
    } else {
        ofRows.textContent = 0;
        ofRowsCount = 0;
    }

    btnAdd.addEventListener('click', function() {
        count++;
        counterDisplay.textContent = count;
        saveCount();    
    });

    btnReset.addEventListener('click', function() {
        count = 0;
        counterDisplay.textContent = count;
        saveCount();
    });

    btnSubtract.addEventListener('click', function() {
        if (count < 1) {
            count = 1;
        }
        count--;
        counterDisplay.textContent = count;
        saveCount();
    });

    function saveCount() {
        localStorage.setItem("rowCount", count);
        localStorage.setItem("ofRowsCount", ofRowsCount);
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

    btnClearNotes.addEventListener('click', function() {
        clearNotePad();
    })

    function clearNotePad() {
        localStorage.clear();
        notePad.innerHTML = "";
    }








    // localStorage.setItem("myCat", "Tom");
})