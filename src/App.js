import { useEffect, useState } from 'react';
import './App.scss';
import { SideNav } from './side-nav/side-nav';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';
import { MainContent } from './main-content/main-content';
import useResize from './useResize';

function App() {
  const [searchValue, setSearchValue] = useState();
  const getSearchValue = (value) => setSearchValue(value);
  const width = useResize();
  useEffect(() => {
    console.log(width)
  }, [width])
  

  return (
    <div className="App">
      <Header getSearchValue={getSearchValue} width={width} />
      <main className='main-wrapper'>
        <SideNav  width={width}/>
        <Sidebar width={width}/>
        <MainContent search={searchValue} width={width}/>
      </main>
    </div>
  );
}

export default App;
