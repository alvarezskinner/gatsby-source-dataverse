# gatsby-source-dataverse

Source plugin for pulling data from [Dataverse](https://powerplatform.microsoft.com/en-us/dataverse/) into [Gatsby](https://www.gatsbyjs.org/) websites.

## Table of contents

- [Install](#install)
- [Basic usage](#basic-usage)
- [Options](#options)
- [Todo](#todo)

## Install

## Basic usage

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

## Todo

- [x] Authentication using MSAL to Dataverse
- [x] Basic set of plugin options defined
- [x] Basic retrieval
- [] Paging
- [] Filtering
- [] Paging
