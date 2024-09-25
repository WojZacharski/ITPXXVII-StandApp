import React from 'react';
import {useDataContext} from "../contexts/DataContext";
import {ConfirmationDialog} from "./ConfirmationDialog";
import {useLanguageContext} from "../contexts/LanguageContext";
import {Info} from "./Info";
import {PrimaryButton} from "./buttons/PrimaryButton";

export const Actions = () => {
    const {t} = useLanguageContext();
    const {id, selectedStand, saveChoice} = useDataContext();
    const [open, setOpen] = React.useState(false);
    const submitDisabled = !!(selectedStand || !id);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return <div>
        <Info saved={selectedStand}/>
        <PrimaryButton variant="contained" onClick={handleOpen} disabled={submitDisabled}>{t("SUBMIT")}</PrimaryButton>
        <ConfirmationDialog handleClose={handleClose} handleSave={saveChoice} open={open}/>
    </div>
};