let students = [
    {name: "Zephaniah", scores: [100, 96, 99, 92]},
    {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
    {name: "Siddalee", scores: [86, 72, 92]},
    {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
    {name: "Elisha", scores: [89, 100]},
    {name: "Ezra", scores: [100, 99, 100, 87]}
];

console.log(students.length);
for (let i = 0; i < students.length; i++) {
    // // console.log(students[i]);
    // let studentObject = students[i];
    // console.log(studentObject.length);
    for (let object in students[i].scores) {
        console.log(object);

    
    }

}














// let studentLength = students.length;
// let studentObj = (students[0]);
// console.log(studentObj);

// console.log(studentLength);
// for (let i = 0; i < studentObj.length; i++) {
//     let studentProp = (studentObj[i]);
//     // let studentScore = (students[i].scores);
//     console.log(studentProp.length);
//     // console.log(studentScore);


// }
// console.log(students.length);
// for(let i = 0; i < students.length; i++){
//     console.log[students[i]];
//     // for (let j = 0; j < students[i].length; j++ ) {
//     //     console.log(students[i][j])

//     // }
//     // let son = students[i].name;
//     // let sos = students[i].scores;
//     // let sosLength = students[i].scores.length;
//     // console.log(son);
//     // console.log(sos);
//     // console.log(sosLength);

//     // if (sos) {
//     //     let sum = 0;
//     //     for (let j = 0; j < sosLength; j++) {
//     //         sum += students[i].scores;
//     //         console.log(sum);
            

//     //     }
//     // }

//     // // let studentObjLength = students[i];
//     // // console.log(studentObjLength);
//     // for(let j = 0; j < students[i].length; j++){

//     //     console.log([j]);
//     // }
// }