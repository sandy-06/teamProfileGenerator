const Intern = require('../lib/Intern');

test("intern for school as object", () => {
    const intern = new Intern("Sam", 'C4500', 'sam@gmail.com', 'U of AZ')
    expect(intern.getSchool()).toBe('U of AZ')
})