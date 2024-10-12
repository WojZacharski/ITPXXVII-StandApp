import React from 'react';

export const Rectangle = (props) => {
    const {width, height, fill, x, y, stroke, text, textColor} = props;

    return <svg width={width} height={height} x={x} y={y}>
        <rect x={0} y={0} width={width} height={height}  fill={fill}  strokeWidth="1" stroke={stroke}/>
        <text x="50%" y="50%" fill={textColor || '#fff'} fontSize={9} dominantBaseline="middle" textAnchor="middle">{text}</text>
    </svg>
};


