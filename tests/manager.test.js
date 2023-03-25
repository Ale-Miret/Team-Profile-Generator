const Manager = require('../lib/manager.js');

test('test manager office number', () => {
    const test = new Manager('Sasha', 4, 'sasha@gmail.com', 7);

    expect(test.officeNumber).toBe(7)
})

test('test manager office number', () => {
    const test = new Manager('Sasha', 4, 'sasha@gmail.com', 7, 'Manager');

    expect(test.id).toBe(4)
})