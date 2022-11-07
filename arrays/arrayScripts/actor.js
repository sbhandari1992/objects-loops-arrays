let academyMembers = [
  {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
  },
  {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
  },
  {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"]
  },
  {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"]
  },
];

// Who is the Academy Member whose ID is 187?
let searchIdNum = 187;
console.log(`${getAcademyMembersById(academyMembers)} is a member whose ID is ${searchIdNum}`);
function getAcademyMembersById(memberdetails) {
  let memberWithID187;
  for (let i = 0; i < memberdetails.length; i++) {
    if (memberdetails[i].memID == searchIdNum ) {
      memberWithID187 = memberdetails[i].name;
    }
  }
  return memberWithID187;
}


// Who has have been in at least 3 films?
console.log(`${getAcademyMembersByFlimPlayed(academyMembers)} has have been at least 3 flims`);
function getAcademyMembersByFlimPlayed(memberdetails) {
  let memberWithAtleast3Flim = [];
  for (let i = 0; i < memberdetails.length; i++) {
    if (memberdetails[i].films.length >= 3 ) {
      memberWithAtleast3Flim.push(memberdetails[i].name);
    }
  }
  return memberWithAtleast3Flim;
}

// Who has a name that starts with "Bob"?
console.log(`${findNameStartWithBob(academyMembers)} are the name start with Bob`);
function findNameStartWithBob(memberdetails) {
  let findName = [];
  for (let i = 0; i < memberdetails.length; i++) {
    if (memberdetails[i].name.includes("Bob")) {
      findName.push(memberdetails[i].name);
    }
  }
  return findName;
}

// HARDER: Which Academy Members have been in a film that starts with "A"
console.log(`${findMemberFlimStartWithA(academyMembers)} have been in a film that starts with "A"`);
function findMemberFlimStartWithA(memberdetails) {
  let findMember = [];
  for (let i = 0; i < memberdetails.length; i++) {
    let flimNamesLength = academyMembers[i].films.length;
    // console.log(flimNamesLength);
    for (let j = 0; j < flimNamesLength; j++) {
      if (academyMembers[i].films[j].startsWith("A")) {
        findMember.push(academyMembers[i].name);
        if (findMember.includes(academyMembers[i].name)) {
          break
        }
      }
    }
  }
  return findMember;
}

