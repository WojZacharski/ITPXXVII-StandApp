import React from 'react';
import { useDataContext } from "../../contexts/DataContext";
import { useLanguageContext } from "../../contexts/LanguageContext";
import { makeStyles } from "@material-ui/core";
import { blue, green, grey, orange } from "@material-ui/core/colors";
import { useTokens } from "../../hooks/useTokens";

const useStyles = makeStyles((theme) => ({
    notAllowed: {
        cursor: 'not-allowed',
    },
    allowed: {
        cursor: 'pointer',
    },
}));

const COLORS = {
    SAVED_STAND: blue['A400'],
    SELECTED_STAND: green['A700'],
    STAND_STROKE: '#000',
    OPEN_STAND: orange['200'],
    TEXT_STAND: '#fff',
    DISABLED_STAND: grey['500'],
};

export const AbstractStand = (props) => {
    const { t } = useLanguageContext();
    const classes = useStyles();
    const { id, setId, selectedStand, type } = useDataContext();

    // Get tokens (with company info) from useTokens hook
    const { tokens, error, loading } = useTokens();
    const { width: w, height: h, reversed, ...rest } = props;

    const width = reversed ? h : w;
    const height = reversed ? w : h;

    // Check if stand is reserved using data from tokens
    const standData = tokens?.find((token) => token.selectedStand === rest.id);
    const disabled = type !== rest.type || !!standData; // Disable if the stand is reserved or type mismatches

    // Default text for stand
    let text = `${t("STAND")} ${rest.type}m² - ${rest.id}`;
    let handleClick = !disabled ? (() => setId(rest.id)) : undefined;

    // If stand is reserved, show company name
    if (standData) {
        text = standData.companyName ? standData.companyName : `${t("Reserved")} - ${rest.id}`; // fallback if no company name
        handleClick = undefined; // Disable click for reserved stands
    }

    // Determine fill color based on the state
    const disabledFill = disabled ? COLORS.DISABLED_STAND : undefined;
    const alreadySelectedStandFill = selectedStand === rest.id ? COLORS.SAVED_STAND : undefined;
    const selectedStandFill = rest.id === id ? COLORS.SELECTED_STAND : undefined;
    const fill = alreadySelectedStandFill || selectedStandFill || disabledFill || COLORS.OPEN_STAND;

    // Class name based on state
    const className = disabled || selectedStand ? classes.notAllowed : classes.allowed;
    const textColor = fill === COLORS.OPEN_STAND ? COLORS.STAND_STROKE : COLORS.TEXT_STAND;

    // Debugging: Log final state
    console.log(`Stand ID: ${rest.id}, Company Name: ${standData ? standData.companyName : 'N/A'}, Disabled: ${disabled}, Fill Color: ${fill}, Text: ${text}`);

    // Show loading or error state
    if (loading) {
        return <div>{t("Loading stands...")}</div>;
    }

    if (error) {
        return <div>{t("Error fetching stand data")}: {error}</div>;
    }

    return (
        <svg width={width} height={height} x={rest.x} y={rest.y} onClick={handleClick} className={`${className} ${rest.id}`}>
            <rect x={0} y={0} width={width} height={height} fill={fill} strokeWidth="1" stroke={COLORS.STAND_STROKE} />
            <text x="50%" y="50%" fill={textColor} fontSize={7} dominantBaseline="middle" textAnchor="middle">{rest.id}</text>
            <title>{text}</title> {/* Display company name or reserved info */}
        </svg>
    );
};

export default AbstractStand;
