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
      <TextField source="Name" />
      <TextField source="Description" />
      <TextField source="Status" />
      <EditButton />
    </Datagrid>
  </List>
);

const AgentTitle = ({ record }) => {
  return <span>User {record ? `"${record.Name}"` : ""}</span>;
};

export const AgentEdit = props => (
  <Edit title={<AgentTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="Name" />
      <TextInput multiline source="Description" />
      <TextInput source="Status" />
  </SimpleForm>
  </Edit>
);
// UserCreate;
export const AgentCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="Name" />
      <TextInput multiline source="Description" />
      <TextInput source="Status" />
    </SimpleForm>
  </Create>
);
