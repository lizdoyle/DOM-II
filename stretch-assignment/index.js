const blocks = document.querySelector('.blocks');
const redBlock = document.querySelector('.block--red');
const blueBlock = document.querySelector('.block--blue');
const greenBlock = document.querySelector('.block--green');
const pinkBlock = document.querySelector('.block--pink');
const grayBlock = document.querySelector('.block--gray');


// Rockets:
//   * When a block is clicked, it should go to the top of the stack.

let rockets = document.querySelectorAll(".blocks");

rockets.addEventListener('click', () => {
    moveTop();

});

const moveTop = () => {
    

}



// Travelers:
// * While a mouse is clicked down on a box, it should move to the right 
// (It should coninuously move, there is no limit on how far it will go).

const travelers = document.querySelectorAll('.blocks');

// let travel = setInterval()

blocks.addEventListener('click', (move) => {
    // set the initial position at 0
    let traveler = document.querySelectorAll('.block');
    let start = 0;
    // move to the right continuously?

    traveler.setinterval(frame, 10);

    function frame() {

    }

});