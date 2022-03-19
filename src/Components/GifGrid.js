
import React, { Fragment } from 'react'
import { useFetchGifs } from '../Hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs( category );

    return (

        <Fragment>
            <h2 className="text-center animate__animated animate__heartBeat">{ category }</h2>
            
            { loading && <p className="animate__animated animate__flash">Loading...</p> }
            <div className="card-grid d-flex align-content-stretch flex-wrap justify-content-center">
                 {
                    images.map(  img =>(
                    <GifGridItem 
                        key={ img.id }
                        { ...img }
                    />
                    ) )
                } 
            </div> 
        </Fragment>
        
    )
}
