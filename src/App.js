// in src/App.js
import React from "react";
import {
  Admin,
  Resource,
  fetchUtils,
  Login,
  AppBar,
  Layout,
  UserMenu
} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import Dashboard from "./Components/Dashboard";
 import authProvider from "./Utils/authProvider";
import { AgentList, AgentCreate, AgentEdit, AgentShow } from "./Components/Agents/Agents";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
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
import {AdminList, AdminEdit} from "./Components/Admin/Admin"
import {createMuiTheme}  from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";


const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    options.headers.set('X-Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};
const dataProvider = jsonServerProvider(
  "http://localhost:8080", httpClient
);

const myLoginPage = () => <Login backgroundImage="" />
const App = () => {
  // dark theme/light theme starts
   const [dark, setDark] = React.useState({
     darkMode: false
   });
   const handleChange = name => event => {
     setDark({ ...dark, [name]: event.target.checked });
   };
   const ConfigurationMenu = React.forwardRef(({ onClick }, ref) => (
     <>
       <FormControlLabel
         control={
           <Switch
             checked={dark.darkMode}
             onChange={handleChange("darkMode")}
             value="darkMode"
             color="#212121"
           />
         }
         style={{ marginLeft: "5px" }}
         label="Dark Mode"
       />
     </>
   ));
   const MyUserMenu = props => (
     <UserMenu {...props}>
       <ConfigurationMenu />
     </UserMenu>
   );
   const MyAppBar = props => <AppBar {...props} userMenu={<MyUserMenu />} />;
   const myLayout = props => <Layout {...props} appBar={MyAppBar} />;
   const MyTheme = createMuiTheme({
     palette: {
       type: dark.darkMode ? "dark" : "light",
       primary: blue,
       secondary: blue
     }
   });
   // Dark/Light theme ends
  return (
    <Admin
       theme={MyTheme}
       appLayout={myLayout}
       dashboard={Dashboard}
       loginPage={myLoginPage}
       authProvider={authProvider}
       dataProvider={dataProvider}
    >
      <Resource
        name="agents"
        list={AgentList}
        edit={AgentEdit}
        create={AgentCreate}
        show={AgentShow}
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
      <Resource
        name="admin"
        list={AdminList}
        edit={AdminEdit}
      />

    </Admin>
  );
};

export default App;
