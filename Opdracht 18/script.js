const Agecheck = function (number) {
    console.log("U leeftijd is niet ouder dan 18");
    if (number < 18) {
        return Math.abs(number);
        Else(number > 18);
        console.log("U leeftijd is ouder dan 18")
    }
    return number;
};

Ageecheck();

const Agecheck2 = function (number) {
    console.log("U leeftijd is goed gekeurd");
    if (number > 18) {
        console.log("Hallo daar");
        Else(number < 18);
        console.log("Hey Kiddo")

        return number;
    };

    function berekenBTW(bedrag, tarief) {
        let bedrag = 120;
        const btw = bedrag * 0.21;
        console.log("BTW: " + btw);

    };


    Function InclBTW(bedrag, tarief) {
        const totaal = bedrag + btw;
        console.log("Totaal inclusief BTW: " + totaal);

    };