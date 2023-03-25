const { createEngineer, createIntern, createManager, createEmployeesPage } = require('./html-temp');

const insertHTML = (data) => {
    const roleCreator = {
        Manager: createManager,
        Engineer: createEngineer,
        Intern: createIntern,
    };

    const renderCards = data.map(employee => {
        const createRole = employee.getRole();
        const cardCreator = roleCreator[createRole];
        return cardCreator(employee);
    }).join('');

    const createEmployees = createEmployeesPage(renderCards);
    return createEmployees;
};

module.exports = insertHTML;
