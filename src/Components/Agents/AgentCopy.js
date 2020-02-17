import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default () => {
  // const [link, setLink] = useState("");
  const [agent1, setAgent1] = useState("");
  const [agent2, setAgent2] = useState("");
  const [totalAgents, setTotalAgents] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(
      "http://localhost:8080/agents?_end=25&_order=DESC&_sort=id&_start=0",
      {
        method: "get",
        headers: new Headers({
          "X-Authorization": `Bearer ${token}`
        })
      }
    )
      .then(results => {
        return results.json();
      })
      .then(data => {
        console.log(data);
        setTotalAgents(data);
      });
  }, []);

  const handleChangeAgent1 = event => {
    setAgent1(event.target.value);
  };
  const handleChangeAgent2 = event => {
    setAgent2(event.target.value);
  };
  const handleOnSubmit = () => {
    if (agent1.length === 0 || agent2.length === 0) {
      console.log("cant");
      return;
    }
    const agents = {
      agent1,
      agent2
    };
    const token = localStorage.getItem("token");
    fetch("http://localhost:8080/agentCopy/", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, /",
        "Content-Type": "application/json",
        "X-Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(agents)
    })
      .then(res => res.json())
      .then(res => console.log(res));
  };
  return (
    <>
      <h1
        style={{
          fontSize: "1.25rem",
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          fontWeight: "500",
          color: "white",
          lineHeight: "1.6",
          letterSpacing: "0.0075em"
        }}
       >
        Agent Copy
      </h1>
      <Card>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Agent # 1</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={agent1}
            onChange={handleChangeAgent1}
          >
            {totalAgents.map(data => (
              <MenuItem value={data.id}>{data.Identifier}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Divider />
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Agent # 2</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={agent2}
            onChange={handleChangeAgent2}
          >
            {totalAgents.map(data => (
              <MenuItem value={data.id}>{data.Identifier}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Divider />
        <Button
          style={{
            marginTop: "30px",
            marginLeft: "10px",
            marginBottom: "10px"
          }}
          variant="contained"
          color="primary"
          onClick={handleOnSubmit}
        >
          Copy
        </Button>
      </Card>
    </>
  );
};
