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
    var gemValues = {
        1: 0,
        2: 0,
        3: 0,
        4: 0
    }

    //Sets up the game
    function setUp() {
        winsEl.innerHTML = 0;
        lossesEl.innerHTML = 0;
        targetEl.innerHTML = generateRandom(19, 120);
        scoreEl.innerHTML = 0;
        //Gives values to the gems
        for (gem in gemValues) {
            gemValues[gem] = generateRandom(1, 12);
        }
        console.log(gemValues);
    }

    //Generates a random target value [19-120]
    function generateRandom(min, max) {
        return Math.floor((Math.random() * (max - min)) + min);
    }

    setUp();

    $("#gems").on("click", (e) => {
        console.log(e.target.id);
    });

});