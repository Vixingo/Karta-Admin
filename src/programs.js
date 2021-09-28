import * as React from "react";
import { 
    List, 
    Datagrid, 
    TextField, 
    ReferenceField, 
    Edit, 
    SimpleForm, 
    TextInput,
    SelectInput,
    ReferenceInput,
    Create,
} from 'react-admin';

const programFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="partnerId" label="Partner" reference="partners" allowEmpty>
        <SelectInput optionText="name" />
    </ReferenceInput>,
];

export const ProgramList = props => (
    <List filters={programFilters} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="partnerId" reference="partners">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="name" />
        </Datagrid>
    </List>
);

export const ProgramEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput disabled source="partnerId" reference="partners">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);

export const ProgramCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="partnerId" reference="partners">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);