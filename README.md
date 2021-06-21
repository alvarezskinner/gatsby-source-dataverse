# gatsby-source-dataverse

Source plugin for pulling data from [Dataverse](https://powerplatform.microsoft.com/en-us/dataverse/) into [Gatsby](https://www.gatsbyjs.org/) websites.

## Table of contents

- [Install](#install)
- [Basic usage](#basic-usage)
- [Options](#options)
- [Todo](#todo)
- [How to query for data](#how-to-query-for-data)

## Install

To install the package simply run the following command

```
npm install gatsby-source-dataverse
```

After that include the plugin in your `gatsby-config.js` file and make sure to add the options needed for it to work.

## Basic usage

The plugin at this point will just source the entities (with the specific fields) to the graphql server for you to then decide how to use that data. Use with simple templates, query the data from the pages, whatever you prefer.

## Options

```
module.exports = {
  plugins: [
    {
      resolve: require.resolve(`../gatsby-source-dataverse`),
      options: {
        clientid: APPLICATION_ID,
        authorityuri:
          "https://login.microsoftonline.com/TENANT_ID",
        secret: SECRET,
        dataverseurl: NAME.crm.dynamics.com, //organization url
        apiversion: API_VERSION, //v9.2
        entities: [
          { name: "accounts", primary: "accountid", fields: ["name"] },
          { name: "contacts", primary: "contactid", fields: ["lastname"] },
          ...
          ...
          ...
        ],
      },
    },
  ],
}
```

## How to query for data

## Todo

- [x] Authentication using MSAL to Dataverse
- [x] Basic set of plugin options defined
- [x] Basic retrieval
- [ ] Paging
- [ ] Filtering
- [ ] Paging
- [ ] Honouring security model
