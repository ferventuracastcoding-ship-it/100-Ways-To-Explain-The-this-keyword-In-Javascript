// square query selector
const squares = document.querySelectorAll('.square');
// forEach loop
squares.forEach(square => {
    square.addEventListener('click', function() {
        // 'this' refers to the specific button element that was clicked
        if (this.innerText === '') { 
            this.innerText = currentPlayer; // Marks the square with 'X' or 'O'
            this.classList.add('taken');
            // check winner
            checkWinner();
            switchTurn();
        }
    });
});
