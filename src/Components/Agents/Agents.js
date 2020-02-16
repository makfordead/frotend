import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  SimpleForm,
  Edit,
  TextInput,
  SelectInput,
  Create,
  Show,
  SimpleShowLayout,
  ReferenceField,
  ReferenceArrayField,
  Filter,
  CloneButton,
  ReferenceInput
} from "react-admin";

export const AgentList = props => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="Identifier" />
      <TextField source="Description" />
      <TextField source="Status" />
      <EditButton />
    </Datagrid>
  </List>
);

const PropertiesFilter = props => (
  <Filter {...props}>
    <ReferenceInput
      label="PropertyTypes"
      source="propertytypeId"
      reference="propertytypes"
      allowEmpty
      alwaysOn
    >
      <SelectInput optionText="Identifier" />
    </ReferenceInput>
  </Filter>
);

export const AgentShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="Identifier" />
      <TextField source="Description" />
      <TextField source="Status" />
      <ReferenceArrayField source="propertyIds" reference="property">
        <List filters={<PropertiesFilter />} {...props}>
          <Datagrid>
            <ReferenceField source="propertytypeId" reference="propertytypes">
              <TextField source="Identifier" />
            </ReferenceField>
            <TextField source="Identifier" />
            <TextField source="value" />
            <TextField source="valueType" />
            <TextField source="lastEdited" />
            <EditButton />
            <CloneButton />
          </Datagrid>
        </List>
      </ReferenceArrayField>
    </SimpleShowLayout>
  </Show>
);
// kapil i need something like this:
// {
//   other agent stuff...
//   properties: [1, propertyId: 2]
// }

const AgentTitle = ({ record }) => {
  return <span>User {record ? `"${record.Name}"` : ""}</span>;
};

export const AgentEdit = props => (
  <Edit title={<AgentTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="Identifier" />
      <TextInput source="Description" />
      <SelectInput
        source="Status"
        choices={[
          { id: "ACTIVE", name: "ACTIVE" },
          { id: "INACTIVE", name: "INACTIVE" },
          { id: "DISABLED", name: "DISABLED" }
        ]}
      />
    </SimpleForm>
  </Edit>
);
// UserCreate;
export const AgentCreate = props => (
  <Create {...props}>
    <SimpleForm redirect="list">
      <TextInput disabled source="id" />
      <TextInput source="Identifier" />
      <TextInput source="Description" />
      <SelectInput
        source="Status"
        choices={[
          { id: "ACTIVE", name: "ACTIVE" },
          { id: "INACTIVE", name: "INACTIVE" },
          { id: "DISABLED", name: "DISABLED" }
        ]}
      />
    </SimpleForm>
  </Create>
);
