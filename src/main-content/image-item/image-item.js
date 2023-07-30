import { useState } from 'react';
import './image-item.scss';

export const ImageItem = ({image, index, setChosen, chosen}) => {
    const date = image.created_at.slice(0, 10).split('-').reverse().join('.');
    
    
    return (
        <div className={index===chosen?'image-wrapper-clicked':'image-wrapper'} onClick={()=>setChosen(index)}>
            <div className='image-cut'>
                <img className='fetched-image' src={image.urls.small} alt={image.description}/>
                
            </div>
            <p className='description'>{image.alt_description}</p>
            <p className='date'>{date}</p>
        </div>
    )
}