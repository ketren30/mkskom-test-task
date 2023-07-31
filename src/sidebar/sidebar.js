import { useState } from 'react';
import './sidebar.scss';

export const Sidebar = ({width}) => {
    const [hovered, setHovered] = useState(false);
    const handleColor = (name, index) => {
        return hovered===index? 
                require(`../images/${name.toLowerCase()}-hover.png`)
                :require(`../images/${name.toLowerCase()}.png`)
    }

    const dashboard = ['Dashboard', 'Notes', 'Invoice', 'Files', 'Events', 'Teams', 'Message', 'Settings'];
    const socials = ['phone', 'email', 'action', 'tg', 'wa'];
    if (width>600) return (
        <aside className='sidebar-wrapper'>
            <div className='icons'>
                <button className='side-user'></button>
                <button className='side-more'></button>
            </div>
            <div className='side-avatar' src={require('../images/side-avatar.png')} alt=''>

            </div>
            <h2 className='side-title'>Hello Alfred Bryant</h2>
            <address className='email'>adrain.nader@yahoo.com</address>
            <section className='dashboard'>
                {dashboard.map((item, index) => {
                    return <div 
                             className='dashboard-elements'
                             onMouseEnter={() => setHovered(index)}
                             onMouseLeave={() => setHovered(null)}
                           >
                                <img className='dashboard-image' src={handleColor(item, index)} alt=''></img>
                                <h4 className='dashboard-title'>{item}</h4>
                            </div>
                })}
            </section>
            <div className='contacts'>
                {socials.map((item) => <a href='' className='social-logo'>
                    <img src={require(`../images/${item}.png`)} alt=''/>
                </a>)}
            </div>
        </aside>
    )
    else return null
}