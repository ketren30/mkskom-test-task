import { useEffect, useState } from 'react';
import './main-content.scss';
import { ImageItem } from './image-item/image-item';
import { ImageGrid } from './image-grid/image-grid';

export const MainContent = ({search, width}) => {
    const notes = [
        ['All notes', 43], 
        ['Design', 23], 
        ['Code Blocks', 15], 
        ['Drafts', 18], 
        ['Peoples Review', 21], 
        ['Social', 43], 
        ['Labels', 36], 
        ['My Notes', 29]
    ];
    const labels = ['Notes', 'Change Notes', 'From Family','Imagium', 'Work'];

    const [data, setData] = useState([]);
    useEffect(() => {
        const url = search? 
        `https://api.unsplash.com/photos/?client_id=WBGix2orWMTxu4B91F_BlxJ8wAFabrpx12h7okuNtkU&per_page=16&page=${search}`
        : 'https://api.unsplash.com/photos/?client_id=WBGix2orWMTxu4B91F_BlxJ8wAFabrpx12h7okuNtkU&per_page=16'
        fetch(url)
            .then(res => res.json())
            .then(result => setData(result))
    }, [search]);

    const [isSearch, setIsSearch] = useState(false);
    const [selfSearch, setSelfSearch] = useState('');

    const handleInput = (e) => {
        setSelfSearch(e.target.value)
    }
    const handleClick = () => {
        if (!isSearch) setIsSearch(true)
        else {
            setIsSearch(false);
            if (!!Number(selfSearch)) {
                fetch (`https://api.unsplash.com/photos/?client_id=WBGix2orWMTxu4B91F_BlxJ8wAFabrpx12h7okuNtkU&per_page=16&page=${selfSearch}`)
                .then(res => res.json())
                .then(result => setData(result))
            } else alert('Пожалуйста, введите число')
        }
    }

    const [isGrid, setIsGrid] = useState(false);
    
    const [chosenElem, setChosenElem] = useState();
    const setChosen = (ind) => {
        setChosenElem(ind)
    }
    

    return (
        <article className='content-wrapper'>
            {width>=600 && <section className='notes-labels'>
                <div className='notes'>
                    <button className='new-note'>New Note</button>
                    {notes.map((item) => <div className='note-item'>
                        <p>{item[0]}</p>
                        <p className='number'>{item[1]}</p>
                    </div>)}
                    <button className='add-folder'>Add folder</button>
                </div>

                <div className='labels'>
                    <h4 className='label-title'>Labels</h4>
                    {labels.map((item, ind) => <h5 className={`label${ind+1}`}>{item}</h5>)}
                    <button className='add-label'>New Label</button>
                </div>
            </section>}

            <section className='panel-images'>
                <div className='panel'>
                    <div className='control'>
                        {width<600 && <button className='menu-icon'></button>}
                        <div className='switch'>
                            <button className='flex' onClick={() => setIsGrid(false)}></button>
                            <button className='grid' onClick={() => setIsGrid(true)}></button>
                        </div>
                        <button className='delete'></button>
                    </div>
                    <div className='search'>
                        {(width>=600 || isSearch) && 
                        <input 
                            className='search-input' 
                            placeholder='Search'
                            value={selfSearch}
                            onChange={handleInput}
                        ></input>}
                        <button className='search-icon' onClick={handleClick}></button>
                    </div>
                </div>
                            
                <div className='images' style={{display: isGrid? 'none':'flex' }}>
                    {data.length && data.map((item, index) => <ImageItem image={item} index={index} setChosen={setChosen} chosen={chosenElem}/>)}
                </div>

                <div className='images-grid' style={{display: isGrid? 'grid':'none' }}>
                    {data.length && data.map((item, index) => {
                        if (index<5) return <ImageGrid image={item} index={index}/>
                    })}
                </div>
            </section>
        </article>
    )
}