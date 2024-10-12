import React from 'react';
import { useDataContext } from "../../contexts/DataContext";
import { useLanguageContext } from "../../contexts/LanguageContext";
import { makeStyles } from "@material-ui/core";
import { blue, green, grey, orange } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
    notAllowed: {
        cursor: 'not-allowed'
    },
    allowed: {
        cursor: 'pointer'
    }
}));

const COLORS = {
    SAVED_STAND: blue['A400'],
    SELECTED_STAND: green['A700'],
    STAND_STROKE: '#000',
    OPEN_STAND: orange['200'],
    TEXT_STAND: '#fff',
    DISABLED_STAND: grey['500']
};

export const AbstractStand = (props) => {
    const { t } = useLanguageContext();
    const classes = useStyles();
    const { id, setId, reservedStands = [], selectedStand, type, tokenData } = useDataContext();
    const { width: w, height: h, reversed, ...rest } = props;
    const width = reversed ? h : w;
    const height = reversed ? w : h;
    let disabled = type !== rest.type || reservedStands.filter((stand) => stand.id === rest.id).length;
    let text = `${t("STAND")} ${rest.type}m² - ${rest.id}`;
    let handleClick = !disabled ? (() => setId(rest.id)) : undefined;

    if (tokenData.admin) {
        let standData;
        disabled = reservedStands.filter((stand) => {
            const check = stand.id === rest.id;
            if (check) {
                standData = stand;
            }
            return check;
        }).length;
        text = standData ? standData.companyName : text;
        handleClick = undefined;
    }

    const disabledFill = disabled && COLORS.DISABLED_STAND;
    const alreadySelectedStandFill = selectedStand === rest.id && COLORS.SAVED_STAND;
    const selectedStandFill = rest.id === id && COLORS.SELECTED_STAND;
    const fill = alreadySelectedStandFill || selectedStandFill || disabledFill || COLORS.OPEN_STAND;
    const className = disabled || selectedStand ? classes.notAllowed : classes.allowed;
    const textColor = fill === COLORS.OPEN_STAND ? COLORS.STAND_STROKE : COLORS.TEXT_STAND;

    return <svg width={width} height={height} x={rest.x} y={rest.y} onClick={handleClick} className={`${className} ${rest.id}`}>
        <rect x={0} y={0} width={width} height={height} fill={fill} strokeWidth="1" stroke={COLORS.STAND_STROKE} />
        <text x="50%" y="50%" fill={textColor} fontSize={7} dominantBaseline="middle" textAnchor="middle">{rest.id}</text>
        <title>{text}</title>
    </svg>
};


