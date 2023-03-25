// Import necessary functions
const { createEngineer, createIntern, createManager, createEmployeesPage } = require('./html-temp');


// Define function to insert HTML
const insertHTML = (employees) => {
    // Create object to map role to corresponding card creator function
    const roleCreator = {
      Manager: createManager,
      Engineer: createEngineer,
      Intern: createIntern,
    };

// Map employees to their corresponding card creator function and join the results into a single string of HTML cards
const cards = employees.map(({ getRole, ...employee }) => {
        const cardCreator = roleCreator[getRole()];
        return cardCreator(employee);
      }).join('');
    

// Create HTML page using the createEmployeesPage function and the HTML cards
const createEmployees = createEmployeesPage(createCards);
    return createEmployees;
};

// Export the insertHTML function
module.exports = insertHTML;