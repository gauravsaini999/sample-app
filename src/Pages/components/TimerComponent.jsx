import React, { useState, useRef, useEffect } from 'react'

const TimerComponent = (props) => {
    const { title, initTime: time } = props;
    const timer = useRef();
    const [started, setStarted] = useState(false);
    const [expired, setExpired] = useState(false);
    const [stopped, setStopped] = useState(false);

    const handleStart = () => {
        timer.current = setTimeout(() => {
            setExpired(true);
        }, time * 1000)
        setStarted(true);
        setStopped(false);
    }

    const handleStop = () => {
        clearTimeout(timer.current);
        setStopped(true);
        setStarted(false);
        setTimeout(() => {
            setStopped(false);
        }, 3000)
    }

    useEffect(() => {
        console.log(started, stopped, expired, time)
    }, [started, stopped, expired, time])

    return (
        <div style={{ border: '1px solid red', padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
            <h3>{title}</h3>
            <h4>{time} seconds</h4>
            <h1>{(stopped == true && started == false) && (expired == false) ? "you won !!" : (started == false && stopped == true) && (expired == true) ? "you lost !!" : (started == false && stopped==false) || started == false  ? "Info: Please run the timer" : "waiting...."}</h1>
            <button onClick={started ? handleStop : handleStart}>{(stopped || expired) || !started ? "Start" : "Stop"} Challenge</button>
        </div>
    )
}

export default TimerComponent
