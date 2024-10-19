import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HoverButton = ({ click, children }) => {
    const navigate = useNavigate();
    const [mouseOver, setMouseOver] = useState('false');
    const [mouseOverColor, setMouseOverColor] = useState('white');
    const [color, setColor] = useState('black');
    const props = (page) => {
        return {
            onClick: () => navigate(page),
            onMouseOver: () => setMouseOver(true),
            onMouseOut: () => setMouseOver(false),
            style: { cursor: 'pointer', border: '1px solid blue', padding: '0 10px', backgroundColor: mouseOverColor, color: color }
        }
    }

    useEffect(() => {
        let timer;
        if (mouseOver === true) {
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
        <button {...props(click)}>{children}</button>
    )
}

export default HoverButton
