const Employee = require('../lib/employee')

test('tests employee name', () => {
    const test = new Employee('ale', 1, 'alemiret@gmail.com');

    expect(test.getName()).toEqual('ale')
})

test('tests employee ID', () => {
    const test = new Employee('ale', 1, 'alemiret@gmail.com');

    expect(test.getId()).toEqual(1)
})


test('tests employee email', () => {
    const test = new Employee('ale', 1, 'alemiret@gmail.com');

    expect(test.getEmail()).toEqual('alemiret@gmail.com')
})





