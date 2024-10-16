// File used for configuration of the map and its elements, used in MapView.js for easier view management
// Leave the file as is, and only modify the mapConfig function to change the map layout
import React from 'react';
import { Stand8 } from "../components/standsTooltip/Stand8";
import { Stand4 } from "../components/standsTooltip/Stand4";
import { Stand6 } from "../components/standsTooltip/Stand6";
import { StandS } from "../components/standsTooltip/StandS";
import { StandMS } from "../components/standsTooltip/StandMS";
import { StandPPS } from "../components/standsTooltip/StandPPS";
import { Rectangle } from "../components/standsTooltip/Rectangle";
import { grey, lightBlue, orange } from "@material-ui/core/colors";

//Copy mapConfig function from frontend/src/configs/map.config.js after stand map modification

export const mapConfig = (t) => ({
    mapWidth: 1200,
    mapHeight: 350,
    backgroundTitle: "ITP Area",
    walls: <polyline points="1110,175 1160,175 1160,235 1110,235 1110,280 1030,280 1030,255 960,255 960,280 900,280
    900,255 895,255 895,280 835,280 835,230 780,230 780,255 700,255 700,
    300 630,
    300 630,
    255 590,255 590,230 550,230 550,
    300 470,
    300 470,
    250 350, 250 350, 230 290,230 290,290 180,290 180,255 35,255 35,175 235,175 235,35 455,35 455,105 660,105 660,35 880,35 880,175 1040,175" stroke={grey['400']} fill="none" />,
    stands: [
        //Other
        <Rectangle x="1045" y="30" width={60} height={150} text={t("PSS_AREA").toUpperCase()} fill={orange['500']} />,
        // Jobwalls
        <Rectangle x="955" y="240" width={60} height={15} text={"JOBWALL"} fill={'none'} textColor={'black'} />,
        <Rectangle x="500" y="240" width={60} height={15} text={"JOBWALL"} fill={'none'} textColor={'black'} />,
        <Rectangle x="160" y="185" width={60} height={15} text={"JOBWALL"} fill={'none'} textColor={'black'} />,
        <Rectangle x="690" y="240" width={60} height={15} text={"JOBWALL"} fill={'none'} textColor={'black'} />,

        <Rectangle x="470" y="300" width={80} height={20} text={t("ENTRANCE").toUpperCase()} fill={lightBlue['500']} />,

        // LEFT SIDE
        <Stand6 id="L1" x="410" y="70" />,
        <Stand6 id="L2" x="380" y="70" />,
        <Stand4 id="L3" x="360" y="70" />,
        <Stand4 id="L4" x="320" y="70" />,
        <Stand6 id="L5" x="290" y="70" />,
        <Stand6 id="L6" x="260" y="70" />,
        <Stand4 id="L7" x="240" y="90" reversed />,
        <Stand4 id="L8" x="240" y="110" reversed />,
        <Stand6 id="L9" x="240" y="130" reversed />,
        <Stand4 id="L10" x="240" y="160" reversed />,
        <Stand4 id="L11" x="240" y="180" reversed />,
        <Stand6 id="L12" x="210" y="180" />,
        <StandS id="L13" x="130" y="180" />, //sponsor
        <Stand6 id="L14" x="100" y="180" />,
        <Stand4 id="L15" x="80" y="200" />,
        <Stand6 id="L16" x="180" y="255" />,
        <Stand4 id="L17" x="210" y="255" />,
        <Stand8 id="L18" x="250" y="230" />,
        <StandS id="L19" x="430" y="230" />,

        // MIDDLE-LEFT SIDE

        <StandS id="S1" x="410" y="140" reversed />, //sponsor
        <Stand6 id="S2" x="380" y="140" />,
        <Stand8 id="S3" x="340" y="140" />,
        <Stand4 id="S4" x="320" y="140" />,
        <StandS id="S5" x="300" y="140" reversed />, //sponsor
        <Stand4 id="S6" x="320" y="160" />,
        <Stand8 id="S7" x="340" y="160" />,
        <Stand6 id="S8" x="380" y="160" />,

        // MIDDLE
        <StandMS id="SG" x="580" y="110" />,
        <Rectangle x="520" y="110"
            width={40} height={20}
            text={t("BEST").toUpperCase()}
            fill={lightBlue['500']} />,

        // MIDDLE-RIGHT SIDE
        <StandS id="S9" x="680" y="140" reversed />, //sponsor
        <Stand6 id="S10" x="700" y="140" />,
        <Stand4 id="S11" x="730" y="140" />,
        <Stand4 id="S12" x="750" y="140" />,
        <Stand6 id="S13" x="770" y="140" />,
        <StandS id="S14" x="800" y="140" reversed />, //sponsor
        <Stand6 id="S15" x="770" y="160" />,
        <Stand8 id="S16" x="730" y="160" />,
        <Stand6 id="S17" x="700" y="160" />,

        // RIGHT SIDE
        <Stand6 id="P1" x="665" y="70" />,
        <Stand4 id="P2" x="695" y="70" />,
        <Stand4 id="P3" x="715" y="70" />,
        <Stand4 id="P4" x="735" y="70" />,
        <Stand6 id="P5" x="790" y="70" />,
        <Stand6 id="P6" x="820" y="70" />,
        <Stand4 id="P7" x="855" y="90" reversed />,
        <Stand4 id="P8" x="855" y="110" reversed />,
        <Stand6 id="P9" x="855" y="130" reversed />,
        <Stand4 id="P10" x="855" y="160" reversed />,
        <Stand4 id="P11" x="855" y="180" reversed />,
        <Stand6 id="P12" x="875" y="180" />,
        <StandS id="P13" x="905" y="180" />, //sponosr
        <Stand8 id="P14" x="945" y="180" />,
        <Stand6 id="P15" x="985" y="180" />,
        <Stand6 id="P16" x="1015" y="180" />,
        <StandPPS id="P17" x="1105" y="185" reversed />, //partner strefy studenta
        <Stand4 id="P18" x="1030" y="255" />,
        <Stand6 id="P19" x="860" y="255" />,
        <Stand4 id="P20" x="840" y="255" />,
        <Stand6 id="P21" x="610" y="232" />,

    ]
});