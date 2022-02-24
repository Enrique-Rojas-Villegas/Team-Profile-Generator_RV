const Intern = require('../lib/Intern');

describe('Intern', () => {
    //  1°
    it('Should receive and employee with name as string only', () => {
        const name = 'Enoc';
        const intern = new Intern(name);

        expect(typeof intern.name).toBe('string');
    });

    //  2°
    it('Should receive an ID as a number only', () => {
        //const id = 78;
        const intern = new Intern('Enoc', 78, 'rojiyoyo@gmail.com', 'Tec de Monterrey');
        expect(intern.id).toEqual(expect.any(Number));
    })

    //  3°
    it('Should receive an email conatining the @ character to be valid email', () => {
        const email = 'rojiyoyo@gmail.com'
        const wrongEmail = 'a18110170gmail.com'
        const employee = new Intern(email);
        const emailArray = email.split('');

        expect(emailArray).toContain('@');
    });

    //  4°
    it('Should valid school name as String', () => {
        //const id = 78;
        const intern = new Intern('Enoc', 78, 'rojiyoyo@gmail.com', 'Tec de Monterrey');
        expect(typeof intern.school).toBe('string');
    })

    //  5°
    it('Should accept all parameters and create Intern Object correctly', () => {
        const intern = new Intern('Enoc', 78, 'rojiyoyo@gmail.com', 'Tec de Monterrey');
        expect(typeof intern.name).toBe('string');
        expect(intern.id).toEqual(expect.any(Number));
        expect(intern.email).toContain('@');
    });

    //  6°
    it('Should log the role as Intern for this class Constructor', () =>{
        const intern = new Intern('Enoc', 78, 'rojiyoyo@gmail.com', 'Tec de Monterrey');

        expect(intern.getRole()).toBe('Intern');
    })
})