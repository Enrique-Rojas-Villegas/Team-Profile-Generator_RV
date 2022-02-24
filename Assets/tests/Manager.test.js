const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('Should receive a name only as string', () => {
        const name = 'Enoc';
        const employee = new Manager(name);

        expect(typeof employee.name).toBe('string');
    });

    it('Should recieve a valid ID as number only', () => {
        const employee = new Manager('Enoc', 78, 'rojiyoyo@gmail.com', 2);
        expect(employee.id).toEqual(expect.any(Number));
    });

    it('Should receive a valid email containing @ symbol', () => {
        const email = 'rojiyoyo@gmail.com'
        const employee = new Manager(email);
        const emailArray = email.split('');

        expect(emailArray).toContain('@');
    });

    it('Should correctly receive an officeNumber', () => {
        const employee = new Manager('Enoc', 78, 'rojiyoyo@gmail.com', 2);
        expect(employee.officeNumber).toEqual(expect.any(Number));
    });

    it('Should correctly create a Manager object', () => {
        const employee = new Manager('Enoc', 78, 'rojiyoyo@gmail.com', 2);
        
        expect(typeof employee.name).toBe('string');
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toContain('@');
        expect(employee.officeNumber).toEqual(expect.any(Number));
    });

    it('Should log the role as Manager for this class Constructor', () =>{
        const employee = new Manager('Enoc', 78, 'rojiyoyo@gmail.com');

        expect(employee.getRole()).toBe('Manager');
    });
})