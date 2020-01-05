import React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  ReferenceInput,
  SimpleForm,
  Edit,
  TextInput,
  SelectInput,
  LongTextInput,
  Create,
  Filter
} from "react-admin";

// Filter with property type
const PropertiesFilter = props => (
  <Filter {...props}>
    <TextInput label="Enter Title" source="q" alwaysOn />
    {/* <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
    {console.log(props.data)}
    <SelectInput label="Title" optionText="title" /> */}
  </Filter>
);

export const PropertiesList = props => (
  <List filters={<PropertiesFilter />} {...props}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="title" />
      {/* <TextField source="body" /> */}
      <EditButton />
    </Datagrid>
  </List>
);
const PropertieTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};

export const PropertiesEdit = props => (
  <Edit title={<PropertieTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>

      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
);

export const PropertiesCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>

      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Create>
);
