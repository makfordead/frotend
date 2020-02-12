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
      <UrlField source="Status_Overview_IframeUrl" />
      <UrlField source="Agent_Performance_IframeUrl" />
      <UrlField source="Market_Analysis_IframeUrl" />
      <UrlField source="System_Health_IframeUrl" />
      <EditButton />
    </Datagrid>
  </List>
);

export const SystemEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="Status_Overview_IframeUrl" />
      <TextInput source="Agent_Performance_IframeUrl" />
      <TextInput source="Market_Analysis_IframeUrl" />
      <TextInput source="System_Health_IframeUrl" />
    </SimpleForm>
  </Edit>
);
