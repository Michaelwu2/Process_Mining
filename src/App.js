// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import TaskEntry from './TaskEntry';
import Activities from './Activities';
import Graph from './graph';

function App() {

  const data = [{task:'Evaluating Request w/o registered letter',time:22},
   {task:'Evaluating Request w/ registered letter', time:16}, 
   {task:'Network service closure', time:17}, 
   {task:'Authorization requested', time:21}, 
   {task:'BO Service Closure', time:55}, 
   {task:'Pending request for reservation closure', time:1},
   {task:'Pending liqudation request', time:24},
   {task:'Back office adjustment request', time:19}]

  const [taskList, setTaskList] = useState(data)

  const task = (task, hour) => {
    // console.log("clicked", task, hour)
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
      <h1> Process Mining </h1>
      <TaskEntry task = {task}/>
      <Activities list = {taskList}/>
      <Graph list = {taskList}/>
 
    </div>
  );
}

export default App;
