const msal = require("@azure/msal-node");
const dataverse = require("./dataverse");

let apiConfig = {};
let tokenRequest = {};
let getToken = new Function();

exports.onPreBootstrap = async (args, pluginOptions) => {
  const msalConfig = {
    auth: {
      clientId: pluginOptions.clientid,
      authority: pluginOptions.authorityuri,
      clientSecret: pluginOptions.secret,
    },
  };
  tokenRequest = {
    scopes: [`${pluginOptions.dataverseurl}/.default`],
  };

  apiConfig = {
    uri: `${pluginOptions.dataverseurl}/api/data/${pluginOptions.apiversion}`,
  };

  cca = new msal.ConfidentialClientApplication(msalConfig);
  getToken = async (tokenRequest) => {
    return await cca.acquireTokenByClientCredential(tokenRequest);
  };
};

exports.sourceNodes = async (
  { actions, createContentDigest, createNodeId, getNodesByType },
  options
) => {
  const { createNode } = actions;
  const authResponse = await getToken(tokenRequest);
  const response = await dataverse.retrieve(
    apiConfig.uri,
    authResponse.accessToken
  );

  options.entities.forEach(async (entity) => {
    const url = `${apiConfig.uri}/${entity.name}?$select=${entity.fields.join(
      ","
    )}`;
    const response = await dataverse.retrieve(url, authResponse.accessToken);

    response.value.forEach((record) => {
      createNode({
        ...record,
        id: createNodeId(`${entity}-${record[entity.primary]}`),
        parent: null,
        children: [],
        internal: {
          type: entity.name,
          content: JSON.stringify(record),
          contentDigest: createContentDigest(record),
        },
      });
    });
  });

  return;
};
