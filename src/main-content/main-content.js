import './main-content.scss';

export const MainContent = ({search}) => {
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

    return (
        <article className='content-wrapper'>
            <section className='notes'>
                <button className='new-note'>New Note</button>
                {notes.map((item) => <div className='note-item'>
                    <p>{item[0]}</p>
                    <p className='number'>{item[1]}</p>
                </div>)}
                <button className='add-folder'>Add folder</button>
            </section>
            <div className='panel'>
                <div className='control'>
                    <div className='switch'>
                        <button className='flex'></button>
                        <button className='grid'></button>
                    </div>
                    <button className='delete'></button>
                </div>
                <div className='search'>
                    <input className='search-input' placeholder='Search'></input>
                    <button className='search-icon'></button>
                </div>
            </div>
            <section className='labels'>
                <h4 className='label-title'>Labels</h4>
                {labels.map((item, ind) => <h5 className={`label${ind+1}`}>{item}</h5>)}
                <button className='add-label'>New Label</button>
            </section>
            
            <div className='images'>

            </div>
        </article>
    )
}