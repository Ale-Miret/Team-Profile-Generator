const Intern = require('../lib/intern')

test('test intern name', () => {
    const test = new Intern('Crixus', 3, 'crixus@gmail.com', 'Hogwarts');

    expect(test.getName()).toBe('Crixus')
})

test('test intern id', () => {
    const test = new Intern('Crixus', 3, 'crixus@gmail.com', 'Hogwarts');

    expect(test.getId()).toBe(3)
})

test('test intern email', () => {
    const test = new Intern('Crixus', 3, 'crixus@gmail.com', 'Hogwarts');

    expect(test.getEmail()).toBe('crixus@gmail.com')
})

test('test intern school', () => {
    const test = new Intern('Crixus', 3, 'crixus@gmail.com', 'Hogwarts');

    expect(test.getSchool()).toBe('Hogwarts')
})