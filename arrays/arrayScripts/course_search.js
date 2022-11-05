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

let courseStartPROG200 = [];
let titleOfPROJ500 = [];
let findCheapCourses = [];
let classroom1meet = [];

let numOfCourse = courses.length;
for (let i = 0; i < numOfCourse; i++) {
    let arrayObject = courses[i];

    /// When does the PROG200 course start?
    if (arrayObject.CourseId == 'PROG200') {
        courseStartPROG200.push(arrayObject.StartDate);
    }
    /// What is the title of the PROJ500 course?
    if (arrayObject.CourseId == "PROJ500" ) {
        titleOfPROJ500.push(arrayObject.Title);
    }
    /// What are the titles of the courses that cost $50 or less?
    if (arrayObject.Fee <= 50 ) {
        findCheapCourses.push(arrayObject.Title);
    }
    ///What classes meet in "Classroom 1"?
    if (arrayObject.Location ==  "Classroom 1" ) {
        classroom1meet.push(arrayObject.Title);

    }
}
// / When does the PROG200 course start?
console.log(`Your PROG200 course start at ${courseStartPROG200}`);
/// What is the title of the PROJ500 course?
console.log(`Your title of the PROJ500 course is ${titleOfPROJ500}`);
/// What are the titles of the courses that cost $50 or less?
console.log(`Your titles of the courses that cost $50 or less are ${findCheapCourses}`);
/// What classes meet in "Classroom 1"?
console.log(`Title with ${classroom1meet} meet on classroom 1`);










