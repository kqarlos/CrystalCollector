$(() => {

    //Getting elements
    var targetEl = document.querySelector('#target');
    var winsEl = document.querySelector('#wins');
    var lossesEl = document.querySelector('#losses');
    var gem1El = document.querySelector('#gem1');
    var gem2El = document.querySelector('#gem2');
    var gem3El = document.querySelector('#gem3');
    var gem4El = document.querySelector('#gem4');
    var scoreEl = document.querySelector('#score');

    //Sets up the game
    function setUp() {
        winsEl.innerHTML = 0;
        lossesEl.innerHTML = 0;
        targetEl.innerHTML = generateTarget();
        scoreEl.innerHTML = 0;
    }

    //Generates a random target value [19-120]
    function generateTarget() {
        return Math.floor((Math.random() * (120 - 19)) + 19);
    }

    setUp();

});