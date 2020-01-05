import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  ReferenceInput,
  SimpleForm,
  Edit,
  TextInput,
  SelectInput,
  LongTextInput,
  Create
} from "react-admin";

export const AgentList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="phone" />
      <TextField source="website" />
      <EditButton />
    </Datagrid>
  </List>
);

const AgentTitle = ({ record }) => {
  return <span>User {record ? `"${record.name}"` : ""}</span>;
};

export const AgentEdit = props => (
  <Edit title={<AgentTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="phone" />
      <TextInput source="website" />
    </SimpleForm>
  </Edit>
);
// UserCreate;
export const AgentCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="phone" />
      <TextInput source="website" />
    </SimpleForm>
  </Create>
);
