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
    EditButton,
    Show,
    SimpleShowLayout,
} from 'react-admin';

const partnerFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="id" label="Partner" reference="partners" allowEmpty>
        <SelectInput optionText="name" />
    </ReferenceInput>,
];

const PartnerEditButton = ({ record }) => (
    <EditButton basePath="/partners" label="Edit" record={record} />
);

export const PartnerList = props => (
    <List filters={partnerFilters} {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="name" />
            <PartnerEditButton />
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

export const PartnerShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
        <TextField source="id" />
            <TextField source="name" />
            <TextField source="api_key" />
        </SimpleShowLayout>
    </Show>
);