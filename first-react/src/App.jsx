import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';  
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Tasks from "./components/Tasks"
import Header from './components/Header';
import AddTask from './components/AddTask';

import './App.css';

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

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return {  ...task, completed: !task.completed };

      return task;
    });

    setTasks(newTasks);
  }

  // FUNCAO PARA ADICIONAR UMA NOVA TASK
  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks, 
    {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }];

    setTasks(newTasks);
  }

  // FUNCAO PARA DELETAR UMA TASK
  const handleTaskDelete = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  }

  return (
    <Router>
      <div className='container'>
        <Header /> 
        <Route path="/" exact render={() => (
          <>
            <AddTask handleTaskAddition={handleTaskAddition}/>
            <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDelete={handleTaskDelete}/>
          </>
        )}/>
      </div>
    </Router>
  );
};

export default App;



