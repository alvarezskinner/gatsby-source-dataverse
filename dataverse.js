const axios = require("axios");

async function retrieve(endpoint, accessToken) {
  const options = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
      "OData-MaxVersion": "4.0",
      "OData-Version": "4.0",
    },
  };

  try {
    const response = await axios.default.get(endpoint, options);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

module.exports = {
  retrieve,
};
