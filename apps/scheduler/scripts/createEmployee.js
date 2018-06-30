'use strict';

// TO DO
// Create database collection for employees
// Create script to import/export from database on site load, and link to compiler.render

const employee = (function () {
  //Hold employees until push to database, used to reference employees locally on the site 
  let employeeList = [];


  // Constructor Functions

  const createNewEmployee = function (firstName, lastName, streetAddress, city, state, zip, phone, email, pin) {
    employeeList.push(
      {
        firstName,
        lastName,
        streetAddress,
        city,
        state,
        zip,
        phone,
        email,
        pin
      });
  };

  //Employee Filler Data
  createNewEmployee('Aram', 'Hammoudeh', '1402 tori court', 'Loveland', 'CO', '80537', '404-695-6941', 'aramcontact@gmail.com', 1234);
  createNewEmployee('Sydni', 'Kramer', '191 Passaic Lane', 'Savannah', 'GA', '31324', '412-354-1563', 'sydnikramer@gmail.com', 3124);
  createNewEmployee('Chelsea', 'Dye', '312 Landgly Jive', 'Jackland', 'NY', '80427', '912-314-1521', 'chelseadye@gmail.com', 1344);
  createNewEmployee('Chris', 'Chavk', '965 Macha Dacha', 'Krateeland', 'AZ', '65337', '543-521-1235', 'jackchrischav@gmail.com', 1521);


  //Absolute return
  return {
    employeeList,
    createNewEmployee
  };

})();