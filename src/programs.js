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
import { Typography } from '@material-ui/core';
import QRCode from 'qrcode.react';

const programFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="partnerId" label="Partner" reference="partners" allowEmpty>
        <SelectInput optionText="name" />
    </ReferenceInput>,
];

const downloadQR = e  => {
    e && e.preventDefault();
    const canvas = document.getElementById("qrCodeEl");
    if (!canvas) return false;
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `qrCode.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    return false;
  };

const Aside = ({ record }) => (
    <div style={{ width: 300, margin: '3em' }}>
        <Typography variant="h6">Program URL QR Code</Typography>
        {record && (
            <>
                <QRCode
                    id="qrCodeEl"
                    value={record.url}
                    size={192}
                    bgColor={"#ffffff"}
                    fgColor={"#000000"}
                    level={"L"}
                    includeMargin={false}
                />
                <div style={{margin: '1em'}}>
                    <a href="/" style={{color: 'blue', cursor: 'pointer'}} onClick={downloadQR}>Download QR</a>
                </div>
            </>
        )}
    </div>
);

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
    <>
        <Edit aside={<Aside />} {...props}>
            <SimpleForm>
                <ReferenceInput disabled source="partnerId" reference="partners">
                    <SelectInput optionText="name" />
                </ReferenceInput>
                <TextInput source="name" />
                <TextInput source="url" />
            </SimpleForm>
        </Edit>
    </>
);

export const ProgramCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="partnerId" reference="partners">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="name" />
            <TextInput source="url" />
        </SimpleForm>
    </Create>
);