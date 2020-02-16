import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";

import { SimpleForm, ReferenceInput, SelectInput } from "react-admin";

export default () => {
  const [link, setLink] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:8080/system/2", {
      method: "get",
      headers: new Headers({
        "X-Authorization": `Bearer ${token}`
      })
    })
      .then(results => {
        return results.json();
      })
      .then(data => {
        // var url = data.IframeUrl + "&output=embed";
        var url = data.IframeUrl.replace("watch?v=", "embed/");
        // const IframeUrl = data.IframeUrl;
        setLink(url);
      });
  }, []);

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
        <SimpleForm>
          <ReferenceInput
            label="Agent # 1"
            source="agentId"
            reference="agents"
            allowEmpty
            alwaysOn
          >
            <SelectInput optionText="Identifier" />
          </ReferenceInput>
          <ReferenceInput
            label="Agent # 2"
            source="agentId"
            reference="agents"
            allowEmpty
            alwaysOn
          >
            <SelectInput optionText="Identifier" />
          </ReferenceInput>
        </SimpleForm>
      </Card>
    </>
  );
};
