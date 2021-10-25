import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function Leaderboard({ scores }) {

    const scroller = () => {
        const objDiv = document.querySelector('.score_area');
        if (objDiv !== null) {
            if (objDiv.scrollTop < (objDiv.scrollHeight - objDiv.clientHeight)) {
                objDiv.scrollTop++;
            } else {
                objDiv.scrollTop = 0;
            }
        }
    }

    useEffect(() => {
        setInterval(() => {
            scroller();
        }, 30);
    }, []);

    return (
        <div className="score_area">
            <div className="score">&nbsp;</div>
            <div className="score">&nbsp;</div>
            <div className="score">&nbsp;</div>
            <div className="score">&nbsp;</div>
            {
                scores.map((value, i) => {
                    console.log(value);
                    return (<div className="score"><span style={{ display: "inline-block", width: "4em", textAlign: "right" }}>{value.local_score}</span> {value.name}</div>)
                })
            }
            <div className="score">&nbsp;</div>
            <div className="score">&nbsp;</div>
            <div className="score">&nbsp;</div>
        </div>
    )
}

function App() {
    const [data, setData] = useState([]);
    const update = () => {
        axios.get("/aoc.json").then((reply) => {
            if (reply.status === 200) {
                const data2 = Object.entries(reply.data.members).map(([key, value]) => { return value });
                const data3 = data2.sort((a, b) => { return (b.local_score - a.local_score) })
                setData(data3);    
            } else {
                console.log(reply);
            }
    })}

    useEffect(() => {
        setInterval(() => { update() }, 60000);
        update();
    }, []);

    return (
        <div className="App">
            <div>
                <h1>Advent of code</h1>
                <h2>STC leaderboard 2021</h2>
            </div>
            <Leaderboard scores={data} />
        </div>
    );
}

export default App;
