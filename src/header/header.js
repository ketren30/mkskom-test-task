import { useState } from 'react';
import userIcon from '../images/user-icon.png';
import './header.scss';

export const Header = ({getSearchValue}) => {
    const [searchValue, setSearchValue] = useState('');
    const handleInput = (e) => {
        setSearchValue(e.target.value);
    }
    const onSearchClick = () => {
        getSearchValue(searchValue)
    }
    return (
        <header className="header-wrapper">
            <button className="header-menu-icon"></button>
            <h2 className='header-title'>Constructor</h2>
            <nav className='navigation'>
                <a href='' className="menu-link">Dashboard</a>
                <a href='' className="menu-link">About Us</a>
                <a href='' className="menu-link">News</a>
                <a href='' className="menu-link">User Policy</a>
                <a href='' className="menu-link">Contacts</a>
                <button className="more-menu"></button>
            </nav>
            
            <form className="form-wrapper">
                <input className="search" placeholder='Search Transactions and Documents' onChange={handleInput}></input>
                <button className="search-btn" onClick={onSearchClick}></button>
                <button className="search-arrow" onClick={onSearchClick}></button>
            </form>
            <img src={userIcon} alt=''></img>
            <h3 className="user-name">Clayton Santos</h3>
            <button className='alerts'></button>
            <button className='close'></button>
        </header>
    )
}