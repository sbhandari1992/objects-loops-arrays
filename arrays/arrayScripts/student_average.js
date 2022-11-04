let students = [
    {name: "Zephaniah", scores: [100, 96, 99, 92]},
    {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
    {name: "Siddalee", scores: [86, 72, 92]},
    {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
    {name: "Elisha", scores: [89, 100]},
    {name: "Ezra", scores: [100, 99, 100, 87]}
];
let studentsLength = students.length;
for (let i = 0; i < students.length; i++) {
    let studentsObj = students[i];
    let studentScore = students[i].scores; 
    let sum = 0;
    let avarageScore = 0;
    for (let j = 0; j < studentScore.length; j++) {
        sum  += studentScore[j];
        avarageScore = (sum / studentScore.length).toFixed(2);
    }
    console.log(`student ${studentsObj.name} avarage score is ${avarageScore}`);
}