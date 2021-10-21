import React from 'react';
// import { useState } from 'react';
import {Bar} from 'react-chartjs-2';
import './graph.css';


function graph({list}) {

  function argMax(array) {
    return array.map((x, i) => [x, i]).reduce((r, a) => (a[0] > r[0] ? a : r))[1];
  }

 
let taskName = [];
let hours = [];
let rating = [];

list.forEach(list => {
    taskName.push(list.task);
    hours.push(list.time);
    rating.push(list.rating);
})

let color = hours.map (x => 'rgba(75,192,192,1)',);
color[argMax(hours)] = 'red';
const state = {
    labels: taskName,
    datasets: [
      {
        label: 'Task/ Process',
        backgroundColor: color,
        borderColor: '#ffffff',
        borderWidth: 2,
        data: hours,
        color: '#ffffff'
      }
    ]
  }
  let colorRating = rating.map (x => 'rgba(75,192,192,1)',);
colorRating[argMax(rating)] = 'red';
const ratingState = {
    labels: taskName,
    datasets: [
      {
        label: 'Task Difficulty',
        backgroundColor: colorRating,
        borderColor: '#ffffff',
        borderWidth: 2,
        data: rating,
        color: '#ffffff'
      }
    ]
  }

    return (
        <div className="graphContainer">
                Task in Need of Automation
            <Bar
                data={state}
               
                width={100}
                height={50}
                options={{
                maintainAspectRatio: false,
                title:{
                display:true,
                text:'Completion time',
                fontSize:60,
                
                },
                legend:{
                display:true,
                position:'right'
                }
                }}
            />
            <Bar
                data={ratingState}
               
                width={100}
                height={50}
                options={{
                maintainAspectRatio: false,
                title:{
                display:true,
                text:'Task Difficulty (1 - 10)',
                fontSize:60,
                
                },
                legend:{
                display:true,
                position:'right'
                }
                }}
            />
        </div>
    )
}

export default graph;