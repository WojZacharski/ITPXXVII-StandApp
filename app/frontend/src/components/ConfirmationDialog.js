import React from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import {useLanguageContext} from "../contexts/LanguageContext";
import {PrimaryButton} from "./buttons/PrimaryButton";
import {SecondaryButton} from "./buttons/SecondaryButton";

export const ConfirmationDialog = ({handleClose, open, handleSave}) => {
    const handleSaveAction = () => {
        handleSave();
        handleClose();
    };
    const {t} = useLanguageContext();

    return <Dialog open={open}
                   onClose={handleClose}
                   aria-labelledby="alert-dialog-title"
                   aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{t("ARE_YOU_SURE")}</DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                {t("AFTER_SUBMIT_INFO")}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <SecondaryButton onClick={handleClose} variant="contained">
                {t('DISAGREE')}
            </SecondaryButton>
            <PrimaryButton className='submit' onClick={handleSaveAction} variant="contained" autoFocus>
                {t("SUBMIT")}
            </PrimaryButton>
        </DialogActions>
    </Dialog>;
};