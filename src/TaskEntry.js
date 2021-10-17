import React from 'react';
import { useState } from 'react';
import './TaskEntry.css';

function TaskEntry ({task}) {

    const [taskInput, setTaskInput] = useState('');
    const [hourInput, setHourInput] = useState(0);
    const [disabled, setDisabled] = useState(true);

    return (
        <div className="TaskEntry">
            <label id="enterTask" for="task"> Enter Task: </label>
            <input name="taskEntry" type="text" onChange = {e => setTaskInput(e.target.value)} id="taskEntry"/>
            <label id="enterTime" for="time"> Enter Hours: </label>
            <input name="hourEntry" type="text" id="hourEntry" onChange = {e => {
                if(isNaN(Number(e.target.value))) {
                    setDisabled(true);
                } else {
                    setDisabled(false);
                    setHourInput(Number(e.target.value));
                }
            }} 
            /> 
            
            <button className='submitButton' disabled = {disabled} onClick={() => {
                task(taskInput,hourInput);
                setDisabled(true);
            }}>Submit</button>
        </div>
    )
}

export default TaskEntry;