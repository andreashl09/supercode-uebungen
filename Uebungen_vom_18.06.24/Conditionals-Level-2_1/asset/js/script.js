function game() {
    let name1 = "john";
    let age1 = 22;
    let height1 = 170;

    let name2 = "meike";
    let age2 = 13;
    let height2 = 168;

    let points1 = age1 * 5 + height1;
    let points2 = age2 * 5 + height2;

    console.log(`${name1} score: ${points1}`);
    console.log(`${name2} score: ${points2}`);

    if (points1 > points2) {
        console.log(`${name1} gewinnt das Spiel mit ${points1} Punkten`);
    } else if (points1 < points2) {
        console.log(`${name2} gewinnt das Spiel mit ${points2} Punkten`);
    } else {
        console.log(`Unentschieden!`);
    }
}

game();
