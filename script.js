document.addEventListener('DOMContentLoaded', function() {

    const btnClear = document.getElementById('btn-clear');
    const btnConfirm = document.getElementById('btn-confirm');
    const btnSubtract = document.getElementById('btn-subtract');
    const btnReset = document.getElementById('btn-reset');
    const btnAdd = document.getElementById('btn-add');
    const btnSubmit = document.getElementById('btn-submit');

    let count = 0;
    let counterDisplay = document.getElementById('stitched')

    btnAdd.addEventListener('click', function() {
        count++;
        counterDisplay.textContent = count;
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

    function submitForm(event){
        //Preventing page refresh
        event.preventDefault();
    }
    
    //Calling a function during form submission.
    form.addEventListener('submit', submitForm);



    localStorage.setItem("myCat", "Tom");
})