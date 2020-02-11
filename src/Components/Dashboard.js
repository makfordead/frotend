import React, {useState, useEffect} from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Iframe from 'react-iframe'

export default () => {
  const [link, setLink] = useState("");

  useEffect(() => {
    const token = localStorage.getItem('token');;
     fetch("http://localhost:8080/system/1", {
       method: 'get',
       headers: new Headers({
         'X-Authorization': `Bearer ${token}`
       })
     })
       .then(results => {
         return results.json();
       }).then(data => {
// var url = data.IframeUrl + "&output=embed";
var url = data.IframeUrl.replace("watch?v=", "embed/");
         // const IframeUrl = data.IframeUrl;
         setLink(url);
       })
  }, [])

  return(
    <>
    <Card style={{height: '90vh', width: "80vw"}}>
      <Iframe url={link}
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
  )
}
