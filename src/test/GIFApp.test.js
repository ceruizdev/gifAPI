import { render, screen } from "@testing-library/react"
import GifApp from "../GIFApp";

describe('Main component <GIFApp /> testing', () => { 
    test('', () => { 
        render(<GifApp />);
        screen.debug();
        expect(screen.getByLabelText('main-title').textContent).toBe('GIF Gallery');
     })
 })