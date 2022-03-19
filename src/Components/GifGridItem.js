import React from 'react'
import "../GifExpertApp.css"

export const GifGridItem = ( {title, url} ) => {


    return (
        <div className=" animate__animated animate__tada card mx-2 my-2 fondo2" style={{width: "18rem"}}>
            <a href={url} target="_blank" className="d-flex justify-content-center">
                <img className="img-fluid" src={ url } alt={ title } title={title} style={{width: "100vw",height: "45vh"}}/>
            </a>
        </div>
    )
}
