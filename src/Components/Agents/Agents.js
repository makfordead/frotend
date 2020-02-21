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
  ReferenceInput
} from "react-admin";

export const AgentList = props => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="Identifier" />
      <TextField source="Description" />
      <TextField source="Status" />
      <EditButton />
        <a class="MuiButtonBase-root MuiButton-root MuiButton-text RaButton-button-585
          MuiButton-textPrimary MuiButton-textSizeSmall MuiButton-sizeSmall"
          tabindex="0" role="button" aria-disabled="false"
          aria-label="Edit" resource="agents" href="/agentCopy">
          <span class="MuiButton-label">
            <svg class="MuiSvgIcon-root RaButton-smallIcon-588"
              focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z">
              </path>
            </svg>
            <span class="RaButton-label-586">Agent Copy</span>
          </span><span class="MuiTouchRipple-root">
          </span>
          </a>
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
// {agent1: " ", agent2: " "}

export const AgentShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="Identifier" />
      <TextField source="Description" />
      <TextField source="Status" />
      <ReferenceArrayField source="propertyIds" reference="property">
        <List filters={<PropertiesFilter />} filterDefaultValues={{agentId: props.id}} {...props}>
          <Datagrid>
            <TextField source="id" />
            <ReferenceField source="propertytypeId" reference="propertytypes">
              <TextField source="Identifier" />
            </ReferenceField>
            <TextField source="Identifier" />
            <TextField source="value" />
            <TextField source="valueType" />
            <TextField source="lastEdited" />
            <EditButton />
          </Datagrid>
        </List>
      </ReferenceArrayField>
    </SimpleShowLayout>
  </Show>
);


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
