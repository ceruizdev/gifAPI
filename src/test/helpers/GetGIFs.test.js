import { getGIFs } from "../../helpers/GetGIFs"
describe('Get Gifs function testing', () => {
    test('Return some gifs', async () => {
        const category = 'technology';
        const GIFs = await getGIFs(category);
        expect( GIFs.length ).toBeGreaterThan( 0 );
        expect( GIFs[0] ).toEqual({
            id: expect.any( String),
            title: expect.any( String),
            url: expect.any( String),
        })
    })
})