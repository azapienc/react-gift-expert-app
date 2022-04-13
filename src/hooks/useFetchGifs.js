
import { useState } from 'react'
import { useEffect } from 'react';
import { getGif } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    //Initializing the state
    const [state, setState] = useState({
        data:[],
        loading:true,
    });

    //Use effect to change component
    useEffect(()=>{
        getGif(category)
            .then(img=>setState({
                data: img,
                loading: false,
            }))
    },[category])

    return state;
}
