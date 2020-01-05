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
  PropertiesList,
  PropertiesCreate,
  PropertiesEdit
} from "./Components/Properties/Properties";
// import dataProvider from "./Utils/dataProvider";

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  // add your own headers here
  options.headers.set(
    "X-Custom-Header",
    "foobar",
    "Access-Control-Expose-Headers: 'Content-Range'"
  );
  return fetchUtils.fetchJson(url, options);
};
const dataProvider = jsonServerProvider(
  "https://fiverapp.herokuapp.com",
  httpClient
);

const App = () => {
  return (
    <Admin
      dashboard={Dashboard}
      // authProvider={authProvider}
      dataProvider={dataProvider}
    >
      <Resource
        name="agents"
        list={ListGuesser}
        // edit={AgentEdit}
        // create={AgentCreate}
      />

      <Resource
        name="properties"
        list={PropertiesList}
        // edit={PropertiesEdit}
        // create={PropertiesCreate}
      />
      {/*
      <Resource
        name="todos"
        list={ListGuesser}
        edit={EditGuesser}
        // create={PropertiesCreate}
      /> */}

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
