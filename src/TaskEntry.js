import React from 'react';
import { useState } from 'react';
import './TaskEntry.css';

function TaskEntry ({task}) {

    const [taskInput, setTaskInput] = useState('');
    const [hourInput, setHourInput] = useState(0);

    return (
        <div className="TaskEntry">
            <label for="task"> Enter Task: </label>
            <input name='taskEntry' type='text' onChange = {e => setTaskInput(e.target.value)} id="taskEntry"/> <br/>
            <label for="time"> Enter Hours: </label>
            <input name="hourEntry" type="text" onChange = {e => setHourInput(e.target.value)} id="hourEntry"/> <br/>
            <button onClick={() => task(taskInput,hourInput)}>Submit</button>
        </div>
    )
}

export default TaskEntry;