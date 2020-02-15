import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  SimpleForm,
  Edit,
  TextInput,
  Create
} from "react-admin";


export const PropertytypeList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="Identifier" />
            <TextField source="Description" />
            <EditButton />
      </Datagrid>
    </List>
);

// you need to create all the urls before i can continue
export const PropertytypeEdit = props => (
    <Edit {...props}>
        <SimpleForm redirect="list">
            <TextInput disabled source="id" />
            <TextInput source="Identifier" />
            <TextInput source="Description" />
        </SimpleForm>
    </Edit>
)

export const PropertytypeCreate = props => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <TextInput disabled source="id" />
            <TextInput source="Identifier" />
            <TextInput  source="Description" />
        </SimpleForm>
    </Create>
)
