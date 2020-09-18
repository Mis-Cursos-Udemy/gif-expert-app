import React from 'react';
import '@testing-library/jest-dom';
const { shallow } = require('enzyme');
const { GifExpertApp } = require('../GifExpertApp');

describe('Pruebas en <GifExpertApp />', () => {

    test('Debe de mostrar el componente correctamente ', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar una lista de categorias', () => {
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
});