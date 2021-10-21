import React from 'react';
import { useState } from 'react';
import './TaskEntry.css';

function TaskEntry ({task}) {

    const [taskInput, setTaskInput] = useState('');
    const [hourInput, setHourInput] = useState(0);
    const [disabled, setDisabled] = useState(true);
    const [disabledRate, setDisabledRate] = useState(true);
    const [ratingInput, setRatingInput] = useState(0);

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
            />   <label id="enterRating" for="rating"> Enter Difficulty (Easy 1-10 Hard): </label>
            <input name="ratingEntry" type="text" id="ratingEntry" onChange = {e => {
                if(isNaN(Number(e.target.value))) {
                    setDisabledRate(true);
                } else {
                    setDisabledRate(false);
                    setRatingInput(Number(e.target.value));
                }
            }} 
            /> 
            <button className='submitButton' disabled = {disabled && disabledRate} onClick={() => {
                task(taskInput,hourInput,ratingInput);
                setDisabled(true);
                setDisabledRate(true);
            }}>Submit</button>
        </div>
    )
}

export default TaskEntry;