import * as React from "react";
import { 
    List, 
    Datagrid, 
    TextField, 
    Edit, 
    SimpleForm, 
    TextInput,
    ReferenceInput,
    SelectInput, 
    Create,
} from 'react-admin';

const partnerFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="id" label="Partner" reference="partners" allowEmpty>
        <SelectInput optionText="name" />
    </ReferenceInput>,
];

export const PartnerList = props => (
    <List filters={partnerFilters} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
        </Datagrid>
    </List>
);

export const PartnerEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="api_key" />
        </SimpleForm>
    </Edit>
);

export const PartnerCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="api_key" />
        </SimpleForm>
    </Create>
    );