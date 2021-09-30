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
    EditButton,
    Show,
    SimpleShowLayout,   
} from 'react-admin';

const userFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
];

const UserEditButton = ({ record }) => (
    <EditButton basePath="/users" label="Edit" record={record} />
);

export const UserList = props => (
    <List filters={userFilters} {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <UserEditButton />
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

export const UserShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
        </SimpleShowLayout>
    </Show>
);