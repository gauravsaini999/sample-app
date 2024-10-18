import React from 'react'
import TimerComponent from './components/TimerComponent';

const TimerPage = () => {
    console.log('timer page render')
    const times = ["1", "5", "10", "15"];
    const titles = ['Easy', 'Not Easy', 'Getting Tough', 'Pros Only']
    return (
        <div>
            {
                times.map((time, index) => {
                    return (<div key={index} style={{ display: 'flex', flexDirection: index !== 0 ? index % 2 == 0 ? 'column' : 'row' : 'row', gap: '25px', justifyContent: 'center', alignItems: 'center' }}>
                        <TimerComponent title={titles[index]} initTime={time} />
                    </div>)
                })
            }
        </div>
    )
}

export default TimerPage
