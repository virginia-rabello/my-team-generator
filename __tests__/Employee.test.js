const Employee = require("../lib/Employee");

test ('Creates an Employee object', () => {
    const employee = new Employee('Nicholas', 'nicholas@gmail.com', 1);

    expect(employee.name).toBe('Nicholas');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});