import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs'

export const useFetchGif = (category) => {
    const [state, setState] = useState({
        images: [],
        loading: true
    });

    useEffect(() => {           
        getGifs(category)
            .then(imgs => {
                setState({
                    images: imgs,
                    loading: false
                });
            });
    }, [category]);

    return state; // { data: [], loading: true };
}
