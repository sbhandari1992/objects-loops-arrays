let vehicles = [
  {
    color: "Silver",
    type: "Minivan",
    registrationState: "CA",
    licenseNo: "ABC-101",
    registrationExpires: new Date("3-10-2022"),
    capacity: 7,
  },
  {
    color: "Red",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A1D-2NC",
    registrationExpires: new Date("8-31-2023"),
    capacity: 3,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A22-X00",
    registrationExpires: new Date("9-31-2023"),
    capacity: 6,
  },
  {
    color: "Red",
    type: "Car",
    registrationState: "CA",
    licenseNo: "ABC-222",
    registrationExpires: new Date("12-10-2022"),
    capacity: 5,
  },
  {
    color: "Black",
    type: "SUV",
    registrationState: "CA",
    licenseNo: "EEE-222",
    registrationExpires: new Date("12-10-2021"),
    capacity: 7,
  },
  {
    color: "Red",
    type: "SUV",
    registrationState: "TX",
    licenseNo: "ZZ2-101",
    registrationExpires: new Date("12-30-2022"),
    capacity: 5,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "CAC-7YT",
    registrationExpires: new Date("1-31-2023"),
    capacity: 5,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "CA",
    licenseNo: "123-ABC",
    registrationExpires: new Date("3-31-2023"),
    capacity: 5,
  },
];

// Which vehicles are RED?
console.log(`Vehicles with red color are: ${findVehiclesByColor(vehicles)}`);

function findVehiclesByColor(vehiclesInfo) {
    let foundVehicles = [];
    for (let i = 0; i < vehiclesInfo.length; i++) {
        if (vehiclesInfo[i].color == "Red") {
            foundVehicles.push(vehiclesInfo[i].type);
        }
    }
    return foundVehicles;
}
// Which vehicles have registrations that are expired?
console.log(`Vehicles with expired registrations are: ${findVehiclesByRegExpired(vehicles)}`);

function findVehiclesByRegExpired(vehiclesInfo) {
    let currentDate = new Date();
    let foundVehicles = [];
    for (let i = 0; i < vehiclesInfo.length; i++) {
        if (vehicles[i].registrationExpires < currentDate) {
            foundVehicles.push(vehiclesInfo[i].type);
        }
    }
    return foundVehicles;
}
// Which vehicles that hold at least 6 people?
console.log(`Vehicles which hold at least 6 people are: ${findVehiclesByHoldCapacity(vehicles)}`);
function findVehiclesByHoldCapacity(vehiclesInfo) {
    let foundVehicles = [];
    for (let i = 0; i < vehiclesInfo.length; i++) {
        if (vehicles[i].capacity >= 6) {
            foundVehicles.push(vehiclesInfo[i].type);
        }
    }
    return foundVehicles;
}
// Which vehicles have license plates that end with "222"?
// let vehiclesLength = vehicles.length;
// console.log(vehiclesLength);
// for (let i = 0; i < vehiclesLength; i++) {
//     let currentDate = new Date();
//     console.log(currentDate);
    
//     // if (vehicles[i].registrationExpires < ) {

//     // }
//     // console.log(vehicles[i].registrationExpires);


// }