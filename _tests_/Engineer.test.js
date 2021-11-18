
const Engineer = require('../lib/Engineer')

test ('engineer for github username', () => {
    const engineer = new Engineer('Erika', 'A580', 'erika@yahoo.com', 'luckydog' );
    
    expect(engineer.getGithub()).toBe('luckydog')

})
