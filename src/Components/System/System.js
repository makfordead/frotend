import React from 'react';
import {List, Datagrid, TextField, EditButton, Edit, UrlField,SimpleForm, TextInput} from 'react-admin';


export const SystemList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <UrlField source="IframeUrl" />
              <EditButton />
        </Datagrid>
    </List>
)

export const SystemEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="IframeUrl" />
        </SimpleForm>
    </Edit>
);
