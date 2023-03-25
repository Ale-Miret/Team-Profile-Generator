class Employee {
     // Define a constructor function that takes in three parameters: name, id, and email
    constructor(name, id, email) {
         // Initialize instance variables for name, id, and email based on the values passed into the constructor
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Define function and return values
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
};

// Export the Employee class so that it can be used in other files
module.exports = Employee
