import * as React from "react";
import { 
    List, 
    Datagrid, 
    TextField, 
    EmailField, 
    Edit, 
    SimpleForm, 
    TextInput, 
    PasswordInput,
    Create,
} from 'react-admin';

const userFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
];

export const UserList = props => (
    <List filters={userFilters} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
        </Datagrid>
    </List>
);

export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="email" />
            <PasswordInput source="password" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="email" />
            <PasswordInput source="password" />
        </SimpleForm>
    </Create>
    );