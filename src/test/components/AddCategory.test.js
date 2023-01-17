import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../components";

describe('<AddCategory />', () => {
    test('Validate value field changed', () => {
        render(<AddCategory onNewCategory = { () => {}} />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target : {value: 'NBA'}});
        expect(input.value).toBe('NBA')
    });

    test('Call to onNewCategory event', () => {
        const inputValue = 'Super bowl';
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory = { onNewCategory } />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, {target : {value: inputValue}});
        fireEvent.submit(form);
        expect( input.value ).toBe('');
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith(inputValue);
    });

    test('Cero calls to function when input value is empty', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory = { onNewCategory } />);
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect( onNewCategory ).toHaveBeenCalledTimes(0);
    });
    
})