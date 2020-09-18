const { getGifs } = require('../../helpers/getGifs');

describe('Pruebas con getGifs Feth', () => {
    test('Debe de traer 10 elementos', async () => {
        const gif = await getGifs('One Punch');
        expect(gif.length).toBe(10);
    })
})