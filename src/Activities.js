import React from 'react';
import { useState } from 'react';
import './Activities.css';


function Activities({list}) {


    return (
        <div className="activitiesContainer">
            <table>
                <tr>
                    <th>Task</th>
                    <th>Time</th>
                </tr>
                    {list.map((list) => {
                        return (
                            <tr>
                                <td>{list.task}</td>
                                <td>{list.time}</td>
                            </tr>
                        );
                    })}
            </table>
        </div>
    )
}

export default Activities;