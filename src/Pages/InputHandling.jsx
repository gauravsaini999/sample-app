import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const InputHandling = () => {
    const navigate = useNavigate();

    return (
        <>
            <UsingState />
            <UsingRefs />
            <div style={{marginTop: '50px', display: "flex", justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}} onClick={() => navigate("/home")}>
                <h3>Go Back</h3>
            </div>
        </>
    )
    
}

export default InputHandling

const UsingState = () => {
    const [inputs, setInputs] = useState({
        name: '',
        submitted: false
    });

    const inputHandler = (e) => {
        setInputs(prev => {
            return { ...prev, [e.target.name]: e.target.value, submitted: false }
        })    
    }

    const submitHandler = () => {
        setInputs(prev => {
            return { ...prev, submitted: true }
        })
    }

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '100px' }}>
                <h2>Using State</h2>
                <input value={inputs['name']} onChange={inputHandler} name="name" />
                <button onClick={submitHandler}>Submit Me!</button>
                {inputs['submitted'] && <div>{"name is "}{inputs['name']}</div>}
            </div>
        </div>
    )
}

const UsingRefs = () => {
    const [inputs, setInputs] = useState({
        name: '',
        submitted: false
    });

    const nameRef = useRef('')

    const inputHandler = (e) => {
        setInputs(prev => {
            return { ...prev, [e.target.name]: nameRef.current.value, submitted: false }
        })
    }

    const submitHandler = () => {
        setInputs(prev => {
            return { ...prev, submitted: true }
        })
    }

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '100px' }}>
                <h2>Using Refs</h2>
                <input ref={nameRef} value={inputs['name']} onChange={inputHandler} name="name" />
                <button onClick={submitHandler}>Submit Me!</button>
                {inputs['submitted'] && <div>{"name is "}{inputs['name']}</div>}
            </div>
        </div>
    )
}

