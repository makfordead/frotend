import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import Iframe from "react-iframe";

export default () => {
  const [link, setLink] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:8080/system/1", {
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
        var url = data.System_Health_IframeUrl.replace("watch?v=", "embed/");
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
        Systems Health
      </h1>
      <Card style={{ height: "80vh", width: "100%" }}>
        <Iframe
          url={link}
          width="100%"
          height="100%"
          id="myId"
          allowFullScreen
          className="myClassname"
          display="initial"
          position="relative"
        />
      </Card>
    </>
  );
};
