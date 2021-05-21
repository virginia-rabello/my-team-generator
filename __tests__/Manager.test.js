const Manager = require("../lib/manager");

test ('Creates an Manager object', () => {
    const manager = new Manager('Nicholas', 'nicholas@gmail.com', 1, 3);

    expect(manager.name).toBe('Nicholas');
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.role).toBe('Manager');

});

test("gets manager office number", () => {
    const manager = new Manager('Nicholas', 'nicholas@gmail.com', 1, 3);
    expect(manager.getOfficeNumber()).toBeGreaterThan(0);
  });