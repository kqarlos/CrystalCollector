$(() => {

    //Getting elements
    var targetEl = document.querySelector('#target');
    var winsEl = document.querySelector('#wins');
    var lossesEl = document.querySelector('#losses');
    var scoreEl = document.querySelector('#score');
    var gemValues = {
        "gem1": 0,
        "gem2": 0,
        "gem3": 0,
        "gem4": 0
    }

    //Sets up the game
    function setUpGame() {
        winsEl.innerHTML = 0;
        lossesEl.innerHTML = 0;
        setUpLevel();
    }

    function setUpLevel() {
        targetEl.innerHTML = generateRandom(19, 120);
        scoreEl.innerHTML = 0;
        //Gives values to the gems
        for (gem in gemValues) {
            gemValues[gem] = generateRandom(1, 12);
        }
    }

    //Generates a random target value [19-120]
    function generateRandom(min, max) {
        return Math.floor((Math.random() * (max - min)) + min);
    }

    setUpGame();

    function checkScore() {
        var target = parseInt(targetEl.innerHTML);
        var score = parseInt(scoreEl.innerHTML);

        //Win or loose
        if (score === target) {
            //win
            setUpLevel();
        } else if (score >= target) {
            setUpLevel();
        }
    }

    $("#gems").on("click", (e) => {
        var id = e.target.id;
        scoreEl.innerHTML = parseInt(scoreEl.innerHTML) + gemValues[id];
        checkScore();
    });

});