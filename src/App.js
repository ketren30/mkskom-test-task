import { useState } from 'react';
import './App.scss';
import { SideNav } from './side-nav/side-nav';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';
import { MainContent } from './main-content/main-content';

function App() {
  const [searchValue, setSearchValue] = useState();
  const getSearchValue = (value) => setSearchValue(value);
  return (
    <div className="App">
      <Header getSearchValue={getSearchValue}/>
      <main className='main-wrapper'>
        <SideNav/>
        <Sidebar/>
        <MainContent search={searchValue}/>
      </main>
    </div>
  );
}

export default App;
