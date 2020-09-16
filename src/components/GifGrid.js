import React from 'react';
import { useFetchGif } from '../hooks/useFetchGif';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {  

    const { images, loading } = useFetchGif(category);
    // console.log(images);
    // console.log(loading);
    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading...</p>}
                <div className="card-grid">                            
                    {
                        images.map(img => (                    
                            <GifGridItem
                                key={ img.id }
                                { ...img }
                            />
                        ))
                    }                      
                </div>
        </>
    )
}
