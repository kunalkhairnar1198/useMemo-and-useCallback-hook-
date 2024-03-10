
    import React, { useMemo } from 'react';

    import classes from './DemoList.module.css';
    
    const DemoList = (props) => {
      const { items, isAscending } = props;

      //without a useMemo hook DemoList component only render when onClick btn then update state and render DemoList component
      //because Demolist component only render when update state it uses a React.memo it will memorize component instance when update state
      //React.memo is avoid render unnecessary component tree when update state
        // const sortedList = items.sort((a, b) => a - b);

        //What problem is face without useMemo pass list to app component to Demo list component.
        //without useMemo it will render unnecesary when update state setTitle form parent component 
        //because arrof list is a ref type they will point different memory space cause of call useMemo when update state 
        //when u update state then array will different type of recreate array without useMemo hook in parent app component

        const sortedList = useMemo(() => {
            console.log('Items sorted');
            return !isAscending ? [...items].sort((a, b) => a - b) : [...items].sort((a, b) => b - a ) ;
          }, [items, isAscending]); 


          console.log('DemoList RUNNING');
    
      return (
        <div className={classes.list}>
          <h2>{props.title}</h2>
          <ul>
            {sortedList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      );
    };
    
    export default React.memo(DemoList); 