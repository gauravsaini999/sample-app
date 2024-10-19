import React from 'react'
import TimerComponent from './components/TimerComponent';

const TimerPage = () => {
    console.log('timer page render')
    const times = ["1", "5", "10", "15"];
    const titles = ['Easy', 'Not Easy', 'Getting Tough', 'Pros Only']
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Don't let the timer win !!</h1>
            <br></br><br></br>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                {times.map((time, index) => {
                    return (
                        <div key={index} style={{ flexBasis: 'calc(50% - 30px)', margin: '10px', display: 'flex', justifyContent: 'center' }}>
                            <TimerComponent key={index} title={titles[index]} initTime={time} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TimerPage
