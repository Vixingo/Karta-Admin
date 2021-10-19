import * as React from "react";
import { 
    List, 
    Datagrid, 
    TextField, 
    ReferenceField,
    ReferenceInput,
    SelectInput, 
    Edit, 
    SimpleForm, 
    TextInput,
    EditButton,
    Show,
    SimpleShowLayout,
} from 'react-admin';

const cardFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="programId" label="Program" reference="programs" allowEmpty>
    <SelectInput optionText="name" />
</ReferenceInput>,
];

const CardEditButton = ({ record }) => (
    <EditButton basePath="/cards" label="Edit" record={record} />
);

export const CardList = props => (
    <List filters={cardFilters} {...props}>
        <Datagrid rowClick="show">
            <TextField source="cardId" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField source="programId" reference="programs">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="state" />
            <CardEditButton />
        </Datagrid>
    </List>
);

export const CardEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput disabled source="userId" reference="users">
                <SelectInput source="name" />
            </ReferenceInput>
            <ReferenceInput disabled source="programId" reference="programs">
                <SelectInput source="name" />
            </ReferenceInput>
            <TextInput disabled source="cardId" />
            <TextInput disabled source="cardId" />
            <TextInput disabled source="cardId" />
            <TextInput disabled source="cardNumber" />
            <TextInput disabled source="panFirst6" />
            <TextInput disabled source="panLast4" />
            <TextInput disabled source="type" />
            <TextInput disabled source="state" />
            <TextInput disabled source="sequenceNumber" />
            <TextInput disabled source="cardProfileName" />
            <TextInput disabled source="pinFailCount" />
            <TextInput disabled source="reissue" />
            <TextInput disabled source="expiry" />
            <TextInput disabled source="embossedName" />
            <TextInput disabled source="pan" />
            <TextInput disabled source="cvv2" />
            <TextInput disabled source="encryptedId" />
        </SimpleForm>
    </Edit>
);

export const CardShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <ReferenceField disabled source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField disabled source="programId" reference="programs">
                <TextField source="name" />
            </ReferenceField>
            <TextField disabled source="cardId" />
            <TextField disabled source="cardId" />
            <TextField disabled source="cardId" />
            <TextField disabled source="cardNumber" />
            <TextField disabled source="panFirst6" />
            <TextField disabled source="panLast4" />
            <TextField disabled source="type" />
            <TextField disabled source="state" />
            <TextField disabled source="sequenceNumber" />
            <TextField disabled source="cardProfileName" />
            <TextField disabled source="pinFailCount" />
            <TextField disabled source="reissue" />
            <TextField disabled source="expiry" />
            <TextField disabled source="embossedName" />
            <TextField disabled source="pan" />
            <TextField disabled source="cvv2" />
            <TextField disabled source="encryptedId" />
        </SimpleShowLayout>
    </Show>
);