import React, { useState } from 'react';
import Tasks from "./components/Tasks"
import './App.css';
import AddTask from './components/AddTask';
import {v4 as uuidv4} from 'uuid';

const App = () => {
  // let message = 'Hello World';
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Study Medicine',
      completed: false,
    },
    {
      id: '2',
      title: 'Read Books',
      completed: true,
    }
  ]);

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks, 
    {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }];

    setTasks(newTasks);
  }

  return (
    <>
      <div className='container'>
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks tasks={tasks}/>
      </div>
    </>
  );
};

export default App;



