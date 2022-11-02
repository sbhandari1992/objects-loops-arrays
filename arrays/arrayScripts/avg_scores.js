let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAvarage(score) {
    let sum = 0;
    let scoreLength = score.length;
    for (let i = 0; i < scoreLength; i++) {
        sum += score[i];
    }
    let avrage = sum / scoreLength;
    console.log(`Your avarage number is ${avrage.toFixed(2)}`);
}
getAvarage(yourScores);