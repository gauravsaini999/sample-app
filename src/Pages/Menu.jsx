import React from 'react';
import HoverButton from './components/HoverButton';

const Menu = () => {

    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: '60px', gap: '50px' }}>
            <HoverButton click='/inputhandling'>
                <h3>{"Input Handling using State & Refs"}</h3>
            </HoverButton>
            <HoverButton click='/timerpage'>
                <h3>{"Timer challenge using Refs"}</h3>
            </HoverButton>
        </div>
    )
}

export default Menu
