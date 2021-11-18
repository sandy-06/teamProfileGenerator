const Manager = require('../lib/Manager');

test("manager for officeNumber as object", () => {
    const manager = new Manager("Sandy", 'A150', 'sandy@teamprofile.com', '555-555-5555')
    expect(manager.getOfficeNumber()).toBe('555-555-5555')
})