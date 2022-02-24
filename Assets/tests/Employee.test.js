const Employee = require('../lib/Employee');

describe('Employee', () => {
    //  1°
    it('Should receive and employee with name as string only', () => {
        const name = 'Enoc';
        const employee = new Employee(name);

        expect(typeof employee.name).toBe('string');
    });

    //  2°
    it('Should receive an ID as a number only', () => {
        //const id = 78;
        const employee = new Employee('Enoc', 78, 'rojiyoyo@gmail.com');
        expect(employee.id).toEqual(expect.any(Number));
    })

    //  3°
    it('Should receive an email conatining the @ character to be valid email', () => {
        const email = 'rojiyoyo@gmail.com'
        const wrongEmail = 'a18110170gmail.com'
        const employee = new Employee(email);
        const emailArray = email.split('');

        expect(emailArray).toContain('@');
    });

    //  4°
    it('Should accept all parameters and create Employee Object correctly', () => {
        const employee = new Employee('Enoc', 78, 'rojiyoyo@gmail.com');
        expect(typeof employee.name).toBe('string');
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toContain('@');
    });

    //  5°
    it('Should log the role as Employee for this class Constructor', () =>{
        const employee = new Employee('Enoc', 78, 'rojiyoyo@gmail.com');

        expect(employee.getRole()).toBe('Employee');
    })
})