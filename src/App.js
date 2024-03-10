import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './Components/DemoList';
import Button from './Components/UI/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [isAscending, setIsAscending] = useState(true)
  console.log('initialy render component App ')

  const changeTitleHandler = useCallback(() => {
    setIsAscending((preIsAscending)=>!preIsAscending);
    setListTitle(prevTitle => prevTitle === 'My List' ? 'Ascending' : 'Descending')
  }, []);

  //when listItems inside useMemo hook used they will not recalculate sorting method to the child component 
  //without the useMemo hook will unnecessaryly re-create array and update to the child demolist component 
  //useMemo hook will optimize performance when update the state useMemo hook will memorise array of items when it is not changes in array of items
  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} isAscending={isAscending} />
      <Button onClick={changeTitleHandler}>{isAscending ? 'Change to Ascending Order' : 'Change to Decending order'}</Button>
    </div>
  );
}

export default App;