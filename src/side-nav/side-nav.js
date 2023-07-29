import './side-nav.scss';

export const SideNav = ({width}) => {
    const arr = [1,1,1,1,1,1];
    if (width>=600) return (
        <nav className='nav-wrapper'>
            <section className='signs'>
                {arr.map((item, index) => <button className={`nav-icon${index+1}`} key={index}/>)}
            </section>
            <section className='users'>
                {arr.map((item, index) => {
                    if (index<=3) return <img alt='' className='avatar' src={require(`../images/Avatar-${index+1}.png`)}/>
                })}
                <div className='status'/>
                <button className='nav-icon7'></button>
            </section>
        </nav>
    )
    else return null
}