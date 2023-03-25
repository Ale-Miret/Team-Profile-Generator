// Importing render functions from html-temp module
const { renderEngineer, renderIntern, renderManager, renderEmployeesPage } = require('./html-temp');

// Main function to insert HTML content
const insertHTML = (data) => {
      // Creating an object with each employee type (Manager, Engineer, Intern) as a key and the corresponding render function as the value
    const roleCreator = {
        Manager: renderManager,
        Engineer: renderEngineer,
        Intern: renderIntern,
    };

     // Mapping through the employee data and returning the HTML for each employee type
    const renderCards = data.map(employee => {
        const createRole = employee.getRole();
        const cardCreator = roleCreator[createRole];
        return cardCreator(employee);
    }).join('');

    // Combining all the employee HTML content into a full HTML page
    const createEmployees = renderEmployeesPage(renderCards);
    return createEmployees;
};

// Exporting the insertHTML function to be used in other parts of the application
module.exports = insertHTML;
