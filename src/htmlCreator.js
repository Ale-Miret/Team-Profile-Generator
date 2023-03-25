const { createEngineer, createIntern, createManager, createEmployeesPage } = require('./html-temp');

const insertHTML = (employees) => {
    const roleCreator = {
      Manager: createManager,
      Engineer: createEngineer,
      Intern: createIntern,
    };

    const cards = employees.map(({ getRole, ...employee }) => {
        const cardCreator = roleCreator[getRole()];
        return cardCreator(employee);
      }).join('');
    
    const createEmployees = createEmployeesPage(createCards);
    return createEmployees;
};

module.exports = insertHTML;