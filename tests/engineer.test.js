const Engineer = require('../lib/engineer');

test('tests engineer name', () => {
    const test = new Engineer('Johnny', 2, 'johnny@gmail.com', 'JonDev')

    expect(test.getName()).toBe('Johnny')
})

test('tests engineer id', () => {
    const test = new Engineer('Johnny', 2, 'Johnny@gmail.com', 'JonDev')

    expect(test.getId()).toBe(2)
})

test('tests engineer email', () => {
    const test = new Engineer('Johnny', 2, 'Johnny@gmail.com', 'JonDev')

    expect(test.getEmail()).toBe('Johnny@gmail.com')
})

test('tests engineer role', () => {
    const test = new Engineer('Johnny', 2, 'Johnny@gmail.com', 'JonDev')

    expect(test.getGithub()).toBe('JonDev')
})

