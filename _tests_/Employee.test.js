
const Employee = require("../lib/Employee");

test('create an employee object', () => {
    const employee = new Employee('Dave');

    expect(employee.getName()).toBe('Dave')
    
})
test("create an employee id as an object", () =>{
    const employee = new Employee('Dave', 'A1345');
expect(employee.getId()).toBe('A1345')
})
test('create an employee email as an object', () => {
    const employee = new Employee('Dave', 'A1345', 'dave@gmail.com');
    expect(employee.getEmail()).toBe('dave@gmail.com');
})




