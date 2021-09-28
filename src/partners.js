import * as React from "react";
import { List, Datagrid, TextField } from 'react-admin';

export const PartnerList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
        </Datagrid>
    </List>
);