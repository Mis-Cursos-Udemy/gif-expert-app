import React from 'react';
const { shallow } = require("enzyme");
const { GifGridItem } = require("../../components/GifGridItem");
const title = 'Un título';
const url = 'https://localhost/algo.jpg';

const wrapper = shallow(<GifGridItem title={title} url={url} />);

describe('Pruebas en <GifGridItem />', () => {

    test('Debe de mostrar el componente correctamente ', () => {        
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de tener un párrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });
    
    test('Debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        // console.log(img.props().src);
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('Debe de tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        // console.log(div.prop('className'));
        const className = div.prop('className');
        expect(className.includes('animate__fadeIn')).toBe(true);
    });
    
})