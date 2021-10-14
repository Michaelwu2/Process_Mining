// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import TaskEntry from './TaskEntry';
import Activities from './Activities';

function App() {

  const [taskList, setTaskList] = useState([])

  const task = (task, hour) => {
    console.log("clicked", task, hour)
    const entry = {task: task, time: hour};
    setTaskList(taskList => [...taskList, entry])
    // setTaskList.push(entry)
   
    document.getElementById("taskEntry").value = "";
    document.getElementById("hourEntry").value = "";
  }
useEffect(() => {
  console.log("tasklist",taskList)
})

  return (
    <div className="App">
      
      <TaskEntry task = {task}/>
      <Activities list = {taskList}/>
 
    </div>
  );
}

export default App;
