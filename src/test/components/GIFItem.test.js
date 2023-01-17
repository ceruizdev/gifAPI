import { render, screen } from "@testing-library/react";
import { GIFItem } from "../../components";

const title = 'NBA';
const id = '0';
const url = 'http://nba.com/test.jpg';

describe('<GIFItem />', () => {
    test('Match with snapshot', () => {
        const { container } = render(<GIFItem title={title} id={id} url={url}/>);
        expect( container ).toMatchSnapshot();
    });

    test('Show URL and text ALT', () => {
        render(<GIFItem title={title} id={id} url={url}/>);
        const { src, alt} = screen.getByRole('img');
        screen.debug();
        expect( src ).toBe(url);
        expect( alt ).toBe(title);
    });


    test('Show title in the component', () => {
        render(<GIFItem title={title} id={id} url={url}/>);
        expect( screen.getByText(title) ).toBeTruthy();
    });
})