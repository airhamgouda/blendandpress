const employee = (function () {
    //Hold employees until push to MongoDB
    let employeeList = [];


    // Constructor Functions

    const createNewEmployee = function (firstName, lastName, address, phone, email, pin) {
      employeeList.push(
          {
              firstName,
              lastName,
              address,
              phone,
              email,
              pin
          });
    }
    
    


    //Absolute return
    return {
        createNewEmployee
    }

})();