import React, {useState, useEffect} from 'react'
import { getGif } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    //Use efect sólo se va a ejecutar cuando se renderiza por primera vez
    //con esta configuración de dependencias
    // const [count, setCount] = useState(0);

    const {data: images, loading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Loading</p>}
            <div className='card-grid'>
                {
                    images.map(img => (
                        <GifGridItem 
                            key={img.id} 
                            {...img}
                        /> 
                    ))
                }
            </div>
        </>
    )
}
