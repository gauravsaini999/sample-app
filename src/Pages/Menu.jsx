import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
    const navigate = useNavigate();
    const [mouseOver, setMouseOver] = useState('false');
    const [mouseOverColor, setMouseOverColor] = useState('white');
    const [color, setColor] = useState('black');
    let props = {
        onClick: () => navigate("/inputhandling"),
        onMouseOver: () => setMouseOver(true),
        onMouseOut: () => setMouseOver(false),
        style: { cursor: 'pointer', border: '1px solid blue', padding: '0 10px', backgroundColor: mouseOverColor, color: color }
    }

    useEffect(() => {
        let timer;
        if (mouseOver == true) {
            timer = setTimeout(() => {
                setMouseOverColor('lightpink');
                setColor('blue');
            }, 100);
        }
        else {
            timer = setTimeout(() => {
                setMouseOverColor('white');
                setColor('black');
            }, 100);
        }

        return () => {
            clearTimeout(timer);
        }
    }, [mouseOver]);

    return (
        <div style={{ display: "flex", flexDirection: "row", gap: "20px", justifyContent: "space-evenly", marginTop: '60px' }}>
            <div {...props}>
                <h3>{"Input Handling using State & Refs"}</h3>
            </div>
        </div>
    )
}

export default Menu
