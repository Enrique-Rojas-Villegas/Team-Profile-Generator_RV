const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    //  1°
    it('Should receive and employee with name as string only', () => {
        const name = 'Enoc';
        const engineer = new Engineer(name);

        expect(typeof engineer.name).toBe('string');
    });

    //  2°
    it('Should receive an ID as a number only', () => {
        //const id = 78;
        const engineer = new Engineer('Enoc', 78, 'rojiyoyo@gmail.com', 'Enrique-Rojas-Villegas');
        expect(engineer.id).toEqual(expect.any(Number));
    })

    //  3°
    it('Should receive an email containing the @ character to be valid email', () => {
        const email = 'rojiyoyo@gmail.com'
        const wrongEmail = 'a18110170gmail.com'
        const engineer = new Engineer(email);
        const emailArray = email.split('');

        expect(emailArray).toContain('@');
    });

    //  4°
    it('Should receive a valid GitHub Username', () => {
        //const id = 78;
        const engineer = new Engineer('Enoc', 78, 'rojiyoyo@gmail.com', 'Enrique-Rojas-Villegas');
        expect(typeof engineer.github).toBe('string');
    })

    //  5°
    it('Should accept all parameters and create Engineer Object correctly', () => {
        const engineer = new Engineer('Enoc', 78, 'rojiyoyo@gmail.com', 'Enrique-Rojas-Villegas');
        expect(typeof engineer.name).toBe('string');
        expect(engineer.id).toEqual(expect.any(Number));
        expect(engineer.email).toContain('@');
    });

    //  6°
    it('Should log the role as Engineer for this class Constructor', () =>{
        const engineer = new Engineer('Enoc', 78, 'rojiyoyo@gmail.com', 'Enrique-Rojas-Villegas');

        expect(engineer.getRole()).toBe('Engineer');
    })
})