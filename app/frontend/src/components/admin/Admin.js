import React from 'react';
import MaterialTable from "material-table";
import {Container} from "@material-ui/core";
import {useTokens} from "../../hooks/useTokens";

export const Admin = (props) => {
    const {tokens, error, loading} = useTokens();
    const columns = [
        {title: "Company", field: 'companyName'},
        {title: "Type", field: 'type'},
        {title: "Stand", field: 'selectedStand'},
        {title: "Token", field: 'token'},
    ];
    return <Container>
        {error}
        <MaterialTable title="Admin Console" columns={columns} data={tokens} isLoading={loading}/>
    </Container>
};