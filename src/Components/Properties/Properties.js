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
  Create,
  Filter
} from "react-admin";

// Filter with property type
const PropertiesFilter = props => (
  <Filter {...props}>
     <ReferenceInput label="Agents" source="agentId" reference="agents" allowEmpty alwaysOn>
      <SelectInput optionText="Name" />
    </ReferenceInput>
    <ReferenceInput label="PropertyTypes" source="propertytypeId" reference="propertytypes" allowEmpty alwaysOn>
     <SelectInput optionText="Name" />
   </ReferenceInput>

  </Filter>
);

export const PropertyList = props => (
    <List filters={<PropertiesFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="agentId" reference="agents">
              <TextField source="Name" />
            </ReferenceField>
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
);


const validateUserBoolean = value => {
  if (
    value.value !== "TRUE" &&
    value.value !== "FALSE" &&
    value.value !== "false" &&
    value.value !== "true"
  ) {
    return false;
  } else {
    return true;
  }
};

const validateUserNumber = value => {
  if (value !== undefined) {
    if (isNaN(value)) {
      return false;
    } else {
      return true;
    }
  }
};

const validateUserCreation = values => {
  const errors = {};
  if (!values.type) {
    errors.type = ["Please select the type of value you want to input"];
  } else {
    if (values.type === "Boolean") {
      if (!validateUserBoolean(values)) {
        errors.value = ["Please enter a Boolean that is true/false"];
      }
    } else if (values.type === "Numeric") {
      if (!validateUserNumber(values.value)) {
        errors.value = ["Please enter a Numeric Value"];
      }
    } else if (values.type === "Text") {
      if (validateUserNumber(values.value) || validateUserBoolean(values)) {
        errors.value = ["Please enter a String Value"];
      }
    }
  }
  return errors;
};



export const PropertyEdit = props => (
    <Edit {...props}>
        <SimpleForm validate={validateUserCreation}>
            <TextInput disabled source="id" />
            <ReferenceInput key="agentId" source="agentId" reference="agents">
              <SelectInput optionText="Name" />
            </ReferenceInput>
            <ReferenceInput key="propertytypeId" source="propertytypeId" reference="propertytypes">
              <SelectInput  optionText="Name" />
            </ReferenceInput>
                  <TextInput source="key" />
            <SelectInput
                source="type"
                choices={[
          { id: "Boolean", name: "Boolean" },
          { id: "Text", name: "Text" },
          { id: "Numeric", name: "Numeric" }
        ]}
      />
      <TextInput source="value" />
      <TextInput disabled source="lastEdited"/>
        </SimpleForm>
    </Edit>
);


export const PropertyCreate = props => (
    <Create {...props}>
        <SimpleForm validate={validateUserCreation}>
            <TextInput disabled source="id" />
            <TextInput source="key" />
            <ReferenceInput source="agentId" reference="agents">
              <SelectInput optionText="Name" />
            </ReferenceInput>
            <ReferenceInput source="propertytypeId" reference="propertytypes">
              <SelectInput optionText="Name" />
            </ReferenceInput>
            <SelectInput
        source="type"
        choices={[
          { id: "Boolean", name: "Boolean" },
          { id: "Text", name: "Text" },
          { id: "Numeric", name: "Numeric" }
        ]}
      />
            <TextInput source="value" />
        </SimpleForm>
    </Create>
);
