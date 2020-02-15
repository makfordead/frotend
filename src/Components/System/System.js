import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Edit,
  UrlField,
  SimpleForm,
  TextInput
} from "react-admin";

export const SystemList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
     <TextField source="Name" />
     <UrlField source = "IframeUrl" />
      <EditButton />
    </Datagrid>
  </List>
);

export const SystemEdit = props => (
  <Edit {...props}>
    <SimpleForm redirect="list">
      <TextInput source="id" disabled/>
      <TextInput source="Name" disabled />
      <TextInput source="IframeUrl" />
    </SimpleForm>
  </Edit>
);
