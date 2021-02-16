import Axios from "axios";

const createConnector = () => {
  const config = {};

  const token = localStorage.getItem("t");

  if (token) {
    config.headers = {
      Authorization: "Bearer "+token,
    };

    //=> config = { headers : }
  }
  return Axios.create(config);
};

const connector = createConnector();

export default connector;
