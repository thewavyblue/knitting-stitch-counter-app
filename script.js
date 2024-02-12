document.addEventListener('DOMContentLoaded', function() {

    const btnClear = document.getElementById('btn-clear');
    const btnSet = document.getElementById('btn-set');
    const btnSubtract = document.getElementById('btn-subtract');
    const btnReset = document.getElementById('btn-reset');
    const btnAdd = document.getElementById('btn-add');
    const btnSubmit = document.getElementById('btn-submit');
    const btnClearNotes = document.getElementById('btn-clear-notes');

    // Get elements related to the 'rows knitted' display
    let rowsKnittedDisplay = document.getElementById('rows-knitted');
    let rowsKnittedCount = 0;
    let savedRowsKnittedCount = localStorage.getItem("rowsKnittedCount");

    // Get elements related to the 'of X rows' display

    let ofXRowsDisplay = document.getElementById('of-rows');
    let ofXRowsCount = 0;
    let savedOfXRowsCount = localStorage.getItem("ofXRowsCount");

    // Notepad related variables
    let notePad = document.getElementById('note-pad-list');
    let inputNote = document.getElementById('input-note');
    let myNotes = [];

    // Get the 'rows knitted' count saved in the localStorage
    if(savedRowsKnittedCount) {
        rowsKnittedDisplay.textContent = savedRowsKnittedCount;
        rowsKnittedCount = savedRowsKnittedCount;
    } else {
        rowsKnittedDisplay.textContent = 0;
        rowsKnittedCount = savedRowsKnittedCount;
    }

    // Get the 'of X rows' value saved in localStorage
    if(savedOfXRowsCount) {
        ofXRowsDisplay.textContent = savedOfXRowsCount;
        ofXRowsCount = savedOfXRowsCount;
        console.log(`savedOfXRowsCount accessed: ${savedOfXRowsCount}`);
    } else {
        ofXRowsDisplay.textContent = 0;
        ofXRowsCount = 0;
        console.log(`savedOfXRowsCount not accessed`);
    }
    
    // Function to save count to localStorage
    function saveCount() {
        localStorage.setItem("rowsKnittedCount", rowsKnittedCount);
        localStorage.setItem("ofXRowsCount", ofXRowsCount);
    }

    // Button to set the 'of X rows' value
    btnSet.addEventListener('click', function() {
        // This is the input for the number of rows required to knit.
        let inputRows = document.getElementById('input-rows').value;
        
        if (inputRows) {
            ofXRowsDisplay.textContent = inputRows;
            ofXRowsCount = inputRows;
            console.log("Set button clicked");
            } else {
            console.log("no number");
        }
        saveCount();
    })

    // Button to clear the 'of X rows' value 
    btnClear.addEventListener('click', function() {
        ofXRowsDisplay.textContent = 0;    
    });

    // Buttons to increment and decrement the row count value
    btnAdd.addEventListener('click', function() {
        rowsKnittedCount++;
        rowsKnittedDisplay.textContent = rowsKnittedCount;
        saveCount();    
    });

    btnSubtract.addEventListener('click', function() {
        if (rowsKnittedCount < 1) {
            rowsKnittedCount = 1;
        }
        rowsKnittedCount--;
        rowsKnittedDisplay.textContent = rowsKnittedCount;
        saveCount();
    });

    // Button to reset the 'rows knitted' value 
    btnReset.addEventListener('click', function() {
        rowsKnittedCount = 0;
        rowsKnittedDisplay.textContent = rowsKnittedCount;
        ofXRowsDisplay.textContent = rowsKnittedCount;
        ofXRowsCount = 0;
        saveCount();
    });



    // Notepad functionality

    // Button to submit a new note
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
})