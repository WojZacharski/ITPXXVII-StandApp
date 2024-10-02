import React from 'react';
import {mapConfig} from "../configs/map.config";
import {useLanguageContext} from "../contexts/LanguageContext";

const ratio = 1;

export const StandMap = () => {
    const {t} = useLanguageContext();
    const { stands, backgroundTitle, walls, mapHeight, mapWidth } = mapConfig(t);
    const width = mapWidth * ratio;
    const height = mapHeight * ratio;

    return <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg"
                style={{border: '3px solid orange'}}>

        <defs>
            <pattern id="background" x="0" y="0" width="1" height="1"
                     viewBox={`0 0 ${width} ${height}`}>
                <image width="100%" height="100%" xlinkHref={''}/>
            </pattern>
        </defs>

        <g>
            <title>{backgroundTitle}</title>
            <rect fill="url(#background)" id="canvas_background" height={height} width={width} y="-1" x="-1"/>
            <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
                <rect fill="url(#gridpattern)" strokeWidth="0" y="0" x="0" height="100%" width="100%"/>
            </g>
        </g>
        <g>
            {stands.map((stand, index) => <React.Fragment key={index}>{stand}</React.Fragment>)}
        </g>
        {walls}
    </svg>
};

export default StandMap;