import withStyles from "@material-ui/core/styles/withStyles";
import {green} from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";

export const PrimaryButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(green[600]),
        backgroundColor: green[600],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
}))(Button);