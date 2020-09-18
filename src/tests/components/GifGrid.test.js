import React from 'react';
import '@testing-library/jest-dom';
import { useFetchGif } from '../../hooks/useFetchGif';
const { shallow } = require('enzyme');
const { GifGrid } = require('../../components/GifGrid');
jest.mock('../../hooks/useFetchGif');

const category = 'Superman';

describe('Pruebas en <GifGridItem />', () => {

    test('Debe de mostrar el componente correctamente ', () => {
        useFetchGif.mockReturnValue({
            images: [],
            loading: true
        });      
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostar items cuando se cargan imágenes en useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        },
        {
            id: '123',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        }
        ];
        useFetchGif.mockReturnValue({
            images: gifs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);        
    });
});