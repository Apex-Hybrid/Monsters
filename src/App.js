import { useState, useEffect } from 'react'
import Cardlist from './components/card-list/card-list.component';
import logo from './logo.svg';
import './App.css';
import SearchBox from './components/search-box/search-box.component';

const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setfilteredMonsters] = useState(monsters);



  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setfilteredMonsters(newfilteredMonsters)
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }


  return (
    <div className="App" >
      <h1 className='Title'>Monsters Rolodex</h1>


      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='Search Monsters' />
      <Cardlist
        monsters={filteredMonsters} />
    </div>
  );
};


export default App; 
