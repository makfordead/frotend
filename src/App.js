// in src/App.js
import React, {useEffect} from "react";
import {
  Admin,
  Resource,
  fetchUtils,
  Login,
  AppBar,
  Layout,
  UserMenu,
  getResources
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
import {SystemList, SystemEdit} from './Components/System/System';
import {createMuiTheme}  from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Menu from "./Components/Menu/Menu";
import SubjectIcon from "@material-ui/icons/Subject";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import BuildIcon from "@material-ui/icons/Build";

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
   // to make sure that darkMode stays
   useEffect(() => {
     if(localStorage.getItem('darkMode') === true + ""){
       setDark({...dark, darkMode: true})
     }else{
       setDark({...dark, darkMode: false})
     }
   }, [])
   // ends
   const handleChange = name => event => {
     localStorage.setItem('darkMode', event.target.checked + "");
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
   // custom menu implementation starts
 const menuStyles = theme => ({
   nested: {
     paddingLeft: theme.spacing(3)
   }
 });
 var MenuWithStyles = withStyles(menuStyles)(Menu);

 const MyMenu = withRouter(
   connect(state => ({
     resources: getResources(state)
   }))(MenuWithStyles)
 );
 // custom menu implementation ends
   const MyAppBar = props => <AppBar {...props} userMenu={<MyUserMenu />} />;
   const myLayout = props => <Layout {...props} appBar={MyAppBar} menu={MyMenu} />;
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
        options={{ label: "Agent Overview", menu: "A", icon: <SubjectIcon /> }}
      />

      <Resource
        name="propertytypes"
        list={PropertytypeList}
        edit={PropertytypeEdit}
        create={PropertytypeCreate}
        options={{
          label: "Property Types",
          menu: "A",
          icon: <AssignmentTurnedInIcon />
        }}
      />

      <Resource
        name="property"
        list={PropertyList}
        edit={PropertyEdit}
        create={PropertyCreate}
        options={{ label: "Properties", menu: "A", icon: <BookmarkIcon /> }}
      />
      <Resource
        name="admin"
        list={AdminList}
        edit={AdminEdit}
        options={{ label: "User", menu: "B", icon: <AccountBoxIcon /> }}
      />
      <Resource
        name="system"
        list={SystemList}
        edit={SystemEdit}
        options={{ label: "System", menu: "B", icon: <BuildIcon /> }}
      />
    </Admin>
  );
};

export default App;
