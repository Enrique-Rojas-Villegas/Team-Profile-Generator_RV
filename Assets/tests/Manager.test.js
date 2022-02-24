const Manager = require('../lib/Manager');

describe('Manager', () => {

    //  1°
    it('Should receive a name only as string', () => {
        const name = 'Enoc';
        const manager = new Manager(name);

        expect(typeof manager.name).toBe('string');
    });

    //  2°
    it('Should recieve a valid ID as number only', () => {
        const manager = new Manager('Enoc', 78, 'rojiyoyo@gmail.com', 2);
        expect(manager.id).toEqual(expect.any(Number));
    });

    //  3°
    it('Should receive a valid email containing @ symbol', () => {
        const email = 'rojiyoyo@gmail.com'
        const manager = new Manager(email);
        const emailArray = email.split('');

        expect(emailArray).toContain('@');
    });

    //  4°
    it('Should correctly receive an officeNumber', () => {
        const manager = new Manager('Enoc', 78, 'rojiyoyo@gmail.com', 2);
        expect(manager.officeNumber).toEqual(expect.any(Number));
    });

    //  5°
    it('Should correctly create a Manager object', () => {
        const manager = new Manager('Enoc', 78, 'rojiyoyo@gmail.com', 2);
        
        expect(typeof manager.name).toBe('string');
        expect(manager.id).toEqual(expect.any(Number));
        expect(manager.email).toContain('@');
        expect(manager.officeNumber).toEqual(expect.any(Number));
    });

    //  6°
    it('Should log the role as Manager for this class Constructor', () =>{
        const manager = new Manager('Enoc', 78, 'rojiyoyo@gmail.com');

        expect(manager.getRole()).toBe('Manager');
    });
})