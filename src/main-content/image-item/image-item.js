import './image-item.scss';

export const ImageItem = ({image}) => {
    const date = image.created_at.slice(0, 10).split('-').reverse().join('.');
    
    return (
        <div className='image-wrapper'>
            <div className='image-cut'>
                <img className='fetched-image' src={image.urls.small} alt={image.description}/>
                
            </div>
            <p className='description'>{image.alt_description}</p>
            <p className='date'>{date}</p>
        </div>
    )
}