const Employee = require("../lib/Employee");

test ('Creates an Employee object', () => {
    const employee = new Employee('Nicholas', 'nicholas@gmail.com', 1);

    expect(employee.name).toBe('Nicholas');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));

});

test("gets Employee name", () => {
    const employee = new Employee('Nicholas', 'nicholas@gmail.com', 1);
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
  });

test("gets Employee email", () => {
    const employee = new Employee('Nicholas', 'nicholas@gmail.com', 1);
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
  });

test("gets Employee ID", () => {
    const employee = new Employee('Nicholas', 'nicholas@gmail.com', 1);
    expect(employee.getId()).toBeGreaterThan(0);
  });

test("gets Employee role", () => {
    const employee = new Employee('Nicholas', 'nicholas@gmail.com', 1);
    expect(employee.getRole()).toEqual(expect.stringContaining(employee.role));
  });