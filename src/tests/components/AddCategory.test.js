import React from 'react';
import '@testing-library/jest-dom';
window.alert = jest.fn();
const { shallow } = require('enzyme');
const { AddCategory } = require('../../components/AddCategory');

describe('Pruebas en el componente <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={setCategories}/>);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories}/>);
    });

    test('Debe de mostrarse correctamente', () => {        
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { target: { value } });
        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('No debe de postear la info en onSubmit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Debe de llamar a setCategories y limpiar la caja de texto', () => {
        // 1. simular el inputChange
        // 2. simular el submit
        // 3. setCategories se debe de haber llamado
        // 4. el valor del input debe estar ''
        const input = wrapper.find('input');
        let value = 'superman';
        input.simulate('change', { target: {value}});
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(input.prop('value')).toBe('');
    })
});