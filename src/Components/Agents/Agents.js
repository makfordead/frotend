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
      <TextField source="id" />
      <TextField source="Name" />
      <TextField source="Description" />
      <TextField source="Status" />
      <EditButton />
    </Datagrid>
  </List>
);

const PropertiesFilter = props => (
  <Filter {...props}>
    <ReferenceInput label="PropertyTypes" source="propertytypeId" reference="propertytypes" allowEmpty alwaysOn>
     <SelectInput optionText="Name" />
   </ReferenceInput>
  </Filter>
);


export const AgentShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="Name" />
            <TextField source="Description" />
            <TextField source="Status" />
            <ReferenceArrayField source="propertyIds" reference="property">
              <List filters={<PropertiesFilter />} {...props}>
              <Datagrid>
                  <TextField source="id" />
                  <ReferenceField source="propertytypeId" reference="propertytypes">
                    <TextField source="Name" />
                  </ReferenceField>
                  <TextField source="key" />
                  <TextField source="value" />
                  <TextField source="valueType" />
                  <TextField source="lastEdited"/>
                  <EditButton />
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
      <TextInput source="Name" />
      <TextInput source="Description" />
        <SelectInput source="Status" choices={[
              { id: 'ACTIVE', name: 'ACTIVE' },
              { id: 'INACTIVE', name: 'INACTIVE' },
              { id: 'DISABLED', name: 'DISABLED' }
          ]} />

  </SimpleForm>
  </Edit>
);
// UserCreate;
export const AgentCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="Name" />
      <TextInput source="Description" />

      <SelectInput source="Status" choices={[
            { id: 'ACTIVE', name: 'ACTIVE' },
            { id: 'INACTIVE', name: 'INACTIVE' },
            { id: 'DISABLED', name: 'DISABLED' }
        ]} />
    </SimpleForm>
  </Create>
);
