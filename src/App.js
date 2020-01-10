// in src/App.js
import React from "react";
import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  fetchUtils
} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import Dashboard from "./Components/Dashboard";
import authProvider from "./Utils/authProvider";
import { AgentList, AgentCreate, AgentEdit } from "./Components/Agents/Agents";
import {
  PropertyList,
  PropertyEdit,
  PropertyCreate
} from "./Components/Properties/Properties";
import {
  PropertytypeList,
  PropertytypeEdit,
  PropertytypeCreate
} from "./Components/Properties/PropertyTypes";

//
// import dataProvider from "./Utils/dataProvider";
//
// const httpClient = (url, options = {}) => {
//   if (!options.headers) {
//     options.headers = new Headers({ Accept: "application/json" });
//   }
//   // add your own headers here
//   options.headers.set(
//   "Access-Control-Expose-Headers", "Content-Range"
//
//   );
//   return fetchUtils.fetchJson(url, options);
// };
const dataProvider = jsonServerProvider(
  "http://localhost:8080"
);

const App = () => {
  return (
    <Admin
      dashboard={Dashboard}
      authProvider={authProvider}
      dataProvider={dataProvider}
    >
      <Resource
        name="agents"
        list={AgentList}
        edit={AgentEdit}
        create={AgentCreate}
      />

      <Resource
        name="propertytypes"
        list={PropertytypeList}
        edit={PropertytypeEdit}
        create={PropertytypeCreate}
      />

      <Resource
        name="property"
        list={PropertyList}
        edit={PropertyEdit}
        create={PropertyCreate}
      />

      {/* <Resource
        label="Posts lol"
        name="posts"
        // list={PropertiesList}
        // edit={PropertiesEdit}
        // create={PropertiesCreate}
      /> */}
    </Admin>
  );
};

export default App;
