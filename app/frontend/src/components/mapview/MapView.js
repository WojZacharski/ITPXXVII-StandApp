import React from 'react';
import { mapConfig } from "../../configs/maptooltip.config";
import { useLanguageContext } from "../../contexts/LanguageContext";
import './Map.css'; // Ensure you import the CSS file


const ratio = 1;



export const Map = () => {

    const { t } = useLanguageContext();
    console.log('Language Context:', t);

    // Destructure with default values
    const { stands = [], backgroundTitle, walls, mapHeight = 0, mapWidth = 0 } = mapConfig(t);

    // Calculate width and height
    const width = mapWidth * ratio;
    const height = mapHeight * ratio;

    // Debugging logs
    console.log('Map Config:', mapConfig);
    console.log('Stands:', stands);
    console.log('Width:', width, 'Height:', height);

    // Check if width and height are valid
    if (isNaN(width) || isNaN(height)) {
        console.error("Invalid width or height", { width, height, mapWidth, mapHeight });
        return <div>Error: Invalid dimensions.</div>;
    }

    return (
        <div className="map-container"> {/* Centering container */}
            <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg"
                style={{ border: '3px solid orange' }}>

                <defs>
                    <pattern id="background" x="0" y="0" width="1" height="1"
                        viewBox={`0 0 ${width} ${height}`}>
                        <image width="100%" height="100%" xlinkHref={''} />
                    </pattern>
                </defs>

                <g>
                    <title>{backgroundTitle}</title>
                    <rect fill="url(#background)" id="canvas_background" height={height} width={width} y="-1" x="-1" />
                    <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
                        <rect fill="url(#gridpattern)" strokeWidth="0" y="0" x="0" height="100%" width="100%" />
                    </g>
                </g>
                <g>
                    {stands.length > 0 ? (
                        stands.map((stand, index) => <React.Fragment key={index}>{stand}</React.Fragment>)

                    ) : (
                        <text x={width / 2} y={height / 2} textAnchor="middle">No stands available</text>
                    )}
                </g>
                {walls}
            </svg>
        </div>
    );
};

export default Map;
