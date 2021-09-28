import * as React from "react";
import { List, Datagrid, TextField } from 'react-admin';

export const CardList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="cardId" />
        </Datagrid>
    </List>
);