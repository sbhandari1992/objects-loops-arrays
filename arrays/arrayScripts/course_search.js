let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
];
// When does the PROG200 course start?
// What is the title of the PROJ500 course?
// What are the titles of the courses that cost $50 or less? // What classes meet in "Classroom 1"?

let numOfCourse = courses.length;
for (let i = 0; i < numOfCourse; i++) {
    let arrayObject = courses[i];
    // let courseId = courses[i].CourseId;
    // let title = courses[i].Title;
    // let location = courses[i].Location;
    // let date = courses[i].StartDate;
    // let fee = courses[i].Fee;

    console.log(arrayObject);

    // if (arrayObject.CourseId & arrayObject.Title) {
    //     console.log('yes got it ');

    // }


}
const numbers = [2,3,1,14];
console.log(numbers.sort());
