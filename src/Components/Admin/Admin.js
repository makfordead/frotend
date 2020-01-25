import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  SimpleForm,
  Edit,
  TextInput,
  PasswordInput
} from "react-admin";

export const AdminList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="Username" />
            <EditButton />
        </Datagrid>
    </List>
);

export const AdminEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="Username" />
            <PasswordInput label="Old Password" source="OldPassword" />
            <PasswordInput label="New Password" source="NewPassword" />
        </SimpleForm>
    </Edit>
);
