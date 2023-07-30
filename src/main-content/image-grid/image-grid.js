import './image-grid.scss';

export const ImageGrid = ({image, index}) => {

    if (index<2) return (
        <div className='album'>
            <div className='image-cut'>
                <img src={image.urls.small} alt='' className='grid-image'/>
            </div>
        </div>
    )
    else return (
        <div className='square'>
            <div className='image-cut'>
                <img src={image.urls.small} alt='' className='grid-image'/>
            </div>
        </div>
    )
}