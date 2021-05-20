const Intern = require("../lib/Intern");

test ('Creates an Intern object', () => {
    const intern = new Intern('Nicholas', 'nicholas@gmail.com', 1, 'n');

    expect(intern.name).toBe('Nicholas');
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.school).toEqual(expect.any(String));

});