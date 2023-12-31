import { useState } from 'react';
import userIcon from '../images/user-icon.png';
import './header.scss';

export const Header = ({getSearchValue, width}) => {
    const [searchValue, setSearchValue] = useState('');
    const handleInput = (e) => {
        setSearchValue(e.target.value);
    }
    const onSearchClick = () => {
        if (!!Number(searchValue)) getSearchValue(searchValue)
        else {
            alert('Пожалуйста, введите число');
            setSearchValue('')
        }
    }
    return (
        <header className="header-wrapper">
            <button className="header-menu-icon"></button>
            <h2 className='header-title'>Constructor</h2>
            {width>600 && <><nav className='navigation'>
                <a href='' className="menu-link">Dashboard</a>
                <a href='' className="menu-link">About Us</a>
                <a href='' className="menu-link">News</a>
                <a href='' className="menu-link">User Policy</a>
                <a href='' className="menu-link">Contacts</a>
                <button className="more-menu"></button>
            </nav>
            
            <div className='side-info'>
                <form className="form-wrapper" onSubmit={(e)=> e.preventDefault()}>
                    <input 
                        className="search" 
                        placeholder='Search Transactions and Documents' 
                        onChange={handleInput}
                        value={searchValue}
                    ></input>
                    <button className="search-btn" onClick={onSearchClick} ></button>
                    <button className="search-arrow" onClick={onSearchClick} ></button>
                </form>
                <h3 className="user-name">Clayton Santos</h3>
                <button className='alerts'></button>
                <button className='close'></button>
            </div>   
            </>}

            {width<=600 && <button className='mobile-user'></button>}
        </header>
    )
}