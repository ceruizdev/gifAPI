import { render, screen } from "@testing-library/react";
import { GIFGrid } from "../../components";
import { useFetchGIFs } from "../../hooks/useFetchGIFs";

jest.mock('../../hooks/useFetchGIFs');

const category = 'WWE';
describe('Test in <GIFGrid />', () => {
    test('Loading mark is visible', () => {  
        useFetchGIFs.mockReturnValue({
            images: [],
            isLoading: true
        });     
        render(<GIFGrid category = {category}/>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    })

    test('Mocking custom hook', () => {
        const GIFs = [{
                id: '123',
                title: 'AAA',
                url: 'http://localhost/aaa.jpg'
            },
            {
                id: '1234',
                title: 'WWE',
                url: 'http://localhost/wwe.jpg'
            }
        ]; 
        useFetchGIFs.mockReturnValue({
            images: GIFs,
            isLoading: true
        }); 
        render(<GIFGrid category = {category}/>);
        screen.debug();
        expect(screen.getAllByRole('img').length).toBe(2);
        expect(GIFs.length).toBe(2);
    })
});