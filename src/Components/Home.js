import { useState, useEffect } from "react"
import Cookies from 'universal-cookie';

import "../App.css";

const cookies = new Cookies();

function addZero(num) {
    if (String(num).length === 1) {
        return "0" + String(num)
    } else {
        return num
    }
}

function timeConvert(num) { // in seconds
    let hours = Math.floor(num / 3600); 
    let remainder = num - (hours * 3600);
    let minutes = Math.floor(remainder / 60);
    let seconds = remainder - minutes * 60

  return addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds);
}



const Home = function() {

    const [ extended, setExtended ] = useState(false);
    const [ timerRunning, setTimerRunning ] = useState(false);
    const [ currentTime, setCurrentTime ] = useState(7229);

    const extend = function() {
        setExtended(!extended);
    }

    const startAndPause = function() {
        console.log("flipped")
        setTimerRunning(!timerRunning)
    }

    useEffect(() => {
        if (cookies.get('totalTime') == null) {
            console.log("no cookie found")
            cookies.set('totalTime', 3600, { path: '/' });
            // cookies.set('lastLoginTime', 3600, { path: '/' }); // if this is more than 3 hours ago, reset everything to user defaults
            // console.log(cookies.get('totalTime'));
        } else {
            console.log("cookie found")
        }
        // console.log(timeConvert(3598))
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            if (timerRunning) {
                console.log('This will run every second!');
                simpleUpdateTime()
            }
          }, 1000);
          return () => clearInterval(interval);
    })

    // if I get a proper one second interval working I can literally just use this
    const simpleUpdateTime = function() {
        return setCurrentTime(currentTime -1);
    }
    

    return (
        <div className="home-screen-box">
            <div className="center-content-container">
                <div className="center-circle">
                    <div className="inner-triangle" onClick={startAndPause}>

                    </div>
                </div>
                <div className="time-text-container">
                    <p>until break: {timerRunning ? "" : ""} </p>
                    <p>total remaining: {timeConvert(currentTime)}</p>
                </div>
            </div>
            <div className="foldout-section-container">
                <button className="foldout-section-button" onClick={extend} />
                <div className={extended ? "foldout-section": "foldout-section hidden"}>
                    <div className="foldout-segment">
                        <p>add minute</p>
                        <img onClick={""} alt="click to add one minute" />
                    </div>
                    <div className="foldout-segment">
                        <p>remove minute</p>
                        <img onClick={""} alt="click to remove one minute" />
                    </div>
                    <div className="foldout-segment">
                        <p>set total time</p>
                        <input type="text"/>
                    </div>
                    <div className="foldout-segment">
                        <p>add one minute per day</p>
                        <input type="checkbox"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home