import axios from "axios";
import { Badge } from "react-bootstrap";

componentDidMount = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "GET"
  })
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson);
      this.setState({
        data: responseJson
      });
    })
    .catch(error => {
      console.error(error);
    });
};
