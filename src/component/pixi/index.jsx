import React, { useEffect, useRef } from 'react';
import { Stage, Sprite } from '@inlet/react-pixi';

const PixiComponent = () => {
    useEffect(() => {}, []);

    return (
        <Stage>
            <Sprite
                image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                x={100}
                y={100}
            />
        </Stage>
    );
};

export default PixiComponent;
