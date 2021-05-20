const Engineer = require("../lib/Engineer");

test ('Creates an Engineer object', () => {
    const engineer = new Engineer('Nicholas', 'nicholas@gmail.com', 1, 'n');

    expect(engineer.name).toBe('Nicholas');
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.github).toEqual(expect.any(String));

});