
import React, { Fragment, useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';
import "./GifExpertApp.css"


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Memes']);
    
    return (
        <div className="container-fluid fondo py-3">
            <AddCategory setCategories={ setCategories } />
            <div>
                {
                categories.map(category => (
                    <GifGrid key={category} category={category} />
                ))}
            </div>
        </div>)}


        

