# Feathers Offline-first API

This api describes three wrappers first the server wrapper, `realtimeWrapper,` and then the two client wrappers `owndataWrapper,` and `ownnetWrapper.`

## @feathers-offline/server
<br>

[![npm version](https://img.shields.io/npm/v/@feathersjs-offline/server.svg?style=flat-square)](https://www.npmjs.com/package/@feathersjs-offline/server)
[![Build Status](https://img.shields.io/github/workflow/status/feathersjs-offline/owndata-ownnet/CI)](https://github.com/feathersjs-offline/owndata-ownnet/actions)
[![Dependency Status](https://img.shields.io/david/feathersjs-offline/owndata-ownnet?path=packages%2Fserver&style=flat-square)](https://david-dm.org/@feathersjs-offline/server)
[![Known Vulnerabilities](https://snyk.io/test/github/feathersjs-offline/owndata-ownnet/badge.svg)](https://snyk.io/test/github/feathersjs-offline/owndata-ownnet)
[![Download Status](https://img.shields.io/npm/dm/@feathersjs-offline/server)](https://www.npmjs.com/package/@feathersjs-offline/server)


[@feathersjs-offline/server](https://github.com/feathersjs-offline/owndata-ownnet/tree/main/packages/server)is a database service adapter that extends any Feathers CRUD database adapter and helps to enable both own-data and own-net (as implemented in [@feathersjs-offline/client](https://github.com/feathersjs-offline/owndata-ownnet/tree/main/packages/client) for the service chosen.

```
$ npm install --save @feathersjs-offline/server
```

Important: `@feathersjs-offline` extends any [Feathers Common database adapter API](./databases/common.md) and [querying syntax](./databases/querying.md).

### API

### `service(options)`

Returns a new service instance initialized with the given options.

```
const ls-service = require('feathers-localstorage');
const { realtimeWrapper } = require('@feathersjs-offline/server');

app.use('/messages', ls-service({
  storage: window.localStorage || AsyncStorage
}));
realtimeWrapper(app, '/messages', { storage, id, startId, name, store, paginate });
```

__Options:__

As the wrapper extends the wrapped service, the available options are those of the wrapped service and these:

`useShortUuid` (*optional*, default `true`) - Generate short `uuid`'s. If false long `uuid`'s are generated. This option should match whatever you choose on the client.
`adapterTest` (*optional*, default `false`) - This is usually only used for running adapter tests as it suppresses returning `updatedAt,` `onServerAt,` `deletedAt,` and `uuid` in results.

### Methods
The services under `realtimeWrapper` control all implement the standard service methods as described in [Services](./services.md).

### Example
Here is an example of a Feathers server with a messages in-memory service that supports pagination:

```
$ npm install @feathersjs/feathers @feathersjs/express @feathersjs/socketio @feathersjs/errors feathers-memory @feathersjs-offline/server
````

In `app.js`:

``` js{6,26}
const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');

const memory = require('feathers-memory');
const realtimeWrapper = require('@feathersjs-offline/server);

// Create an Express compatible Feathers application instance.
const app = express(feathers());
// Turn on JSON parser for REST services
app.use(express.json());
// Turn on URL-encoded parser for REST services
app.use(express.urlencoded({ extended: true }));
// Enable REST services
app.configure(express.rest());
// Enable REST services
app.configure(socketio());
// Create an in-memory Feathers service with a default page size of 2 items
// and a maximum size of 4
app.use('/messages', memory({
  paginate: {
    default: 2,
    max: 4
  }
}));
realtimeWrapper(app, '/messages');

// Set up default error handler
app.use(express.errorHandler());

// Create a dummy Message
app.service('messages').create({
  text: 'Message created on server'
}).then(message => console.log('Created message', message));

// Start the server.
const port = 3030;

app.listen(port, () => {
  console.log(`Feathers server listening on port ${port}`)
});
```

Run the example with `node app` and go to [localhost:3030/messages](http://localhost:3030/messages).



## @feathersjs-offline/client, own-data
<br>

[![npm version](https://img.shields.io/npm/v/@feathersjs-offline/client.svg?style=flat-square)](https://www.npmjs.com/package/@feathersjs-offline/client)
[![Build Status](https://img.shields.io/github/workflow/status/feathersjs-offline/owndata-ownnet/CI)](https://github.com/feathersjs-offline/owndata-ownnet/actions)
[![Dependency Status](https://img.shields.io/david/feathersjs-offline/owndata-ownnet?path=packages%2Fclient&style=flat-square)](https://david-dm.org/@feathersjs-offline/client)
[![Known Vulnerabilities](https://snyk.io/test/github/feathersjs-offline/owndata-ownnet/badge.svg)](https://snyk.io/test/github/feathersjs-offline/owndata-ownnet)
[![Download Status](https://img.shields.io/npm/dm/@feathersjs-offline/client)](https://www.npmjs.com/package/@feathersjs-offline/client)

The `owndataWrapper` (and `Owndata`) of [@feathersjs-offline/client](https://github.com/feathersjs-offline/owndata-ownnet/tree/main/packages/client) is a database service adapter that wraps and extends any Feathers CRUD database adapter and behind the scenes locally stores data in [localStorage](https://developer.mozilla.org/en/docs/Web/API/Window/localStorage) in the browser or [AsyncStorage](https://facebook.github.io/react-native/docs/asyncstorage.html) in React Native.

__Options:__

All options available for the wrapped adapter can be used in addition to:

- `id` (*optional*, default: `'id'`) - The name of the id field property. Preferably, for `own-data` it ought to be `uuid.`
- `storage` (*optional*, default `window.localStorage`) - The local storage engine. You can pass in the browsers `window.localStorage,` React Native's `AsyncStorage,` or a NodeJS `localstorage` module.
- `store` (*optional*, default `null`) - An object with id to item assignments to pre-initialize the data store.
- `paginate` (*optional*, default `false`) - A pagination object containing a default and max page size.
- `multi` (*optional*) - Allow create with arrays and update and remove with id null to change multiple items. Can be true for all methods or an array of allowed methods (e.g. `[ 'remove', 'create' ]`).
- `throttle` (*optional*, default: `200` ms) - Determines the minimum time before an operation on the local DB is actually written to permanent storage.
- `timedSync` (*optional*, default: `86400000` ms) - Determines the frequency of forced synchronization with the server. Default is 24 hours. 0 means never. You can always call `service.sync()` to perform a synchronization. Any ad hoc synchronizations does not affect any timed synchronizations.
- `fixedName` (*optional*, default: `null`) - Force the prefix name of the local DB and queue DB. This is useful when several apps on the same device use `@feathersjs-offline` and the same service name (e.g. `'/messages'`).
- `useShortUuid` (*optional*, default `true`) - Generate short `uuid`'s. If false long `uuid`'s are generated. This option should match whatever you choose on the server.
- `adapterTest` (*optional*, default `false`) - This is usually only used for running adapter tests as it suppresses returning `updatedAt,` `onServerAt,` `deletedAt,` and `uuid` in results.

### Methods
The services under `owndataWrapper` control all implement the standard service methods as described in Services. In addition to this there are a couple of other methods to be used at your discretion.

#### .getEntries(params)
`service.getEntries(params) -> Promise` - Retrieves a list of all resources from the service. params.query can be used to filter and limit the returned data.

``` js
async app.service('/messages').getEntries(params)
  .then(result => {
    console.log(`entries = ${JSON.stringify(result)}`);
  });
```

Note: getEntries retrieves all resources (fulfilling the criteria of params.query) and always return an array.

#### .sync(bAll)
`service.sync(bAll) -> Promise` - Synchronize local data with server. if `bAll` is `true` synchronization is done beginning from BOT (Beginning Of Time). If `bAll` is `false` synchronization will be done from the newest possible timestamp (determined from resources in local DB). Synchronization will only be performed if no active operations involving the server are running.

``` js
async app.service('/messages').getEntries(params)
  .then(result => {
    console.log(`entries = ${JSON.stringify(result)}`);
  });
```

Note: `getEntries` retrieves all resources (fulfilling the criteria of `params.query`) and always return an array.

#### Internal service handles
Internal service handles are useful for receiving messages whenever a CRUD operation have been successfully performed. To receive a message you first have to register a message handler for the relevant service handle. You can register message handlers for the messages `created,` `updated,` `patched,` and `removed`. The available service handles are:

Handle | Comment
| --- | ---
service.local   |	The local database holding the relevant service resources
service.queue	  | The queue database holding all unfinished requests/operations
service.remote	| The server database (i.e. equivalent to app.service('/message') for non-wrapped services)

Service handles are read-only.

See an example using service handles and showing the inner workings of offline-first wrappers [here](https://github.com/feathersjs-offline/simple-example).

In addition, the service emits a `synced` message every time a synchronization has been attempted. It return a value of `true` if the synchronization was successful and `false` otherwise.

### Example
See the [clients](https://docs.feathersjs.com/api/client.html) chapter for more information about using Feathers in the browser and React Native.

### Browser
```html{16,22}
<html lang="en">
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0" />
    <title>FeathersJS chat</title>
    <link rel="shortcut icon" href="favicon.ico">
    <link rel="stylesheet" href="//unpkg.com/feathers-chat@4.0.0/public/base.css">
    <link rel="stylesheet" href="//unpkg.com/feathers-chat@4.0.0/public/chat.css">
  </head>
  <body>
    <div id="app" class="flex flex-column"></div>
    <script src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.12.0/moment.js"></script>
    <script src="//unpkg.com/@feathersjs/client@^4.3.0/dist/feathers.js"></script>
    <script src="/socket.io/socket.io.js"></script>
    <script src="//unpkg.com/@feathersjs-offline/client@^1.0/dist/feathersjs-offline-client.min.js"></script>
    <script type="text/javascript">
      var service = feathers.localstorage({
        storage: window.localStorage
      });
      var app = feathers().use('/messages', service);
      feathersOfflineClient.owndataWrapper(app, '/messages', {});

      var messages = app.service('messages');

      messages.on('created', function(message) {
        console.log('Someone created a message', message);
      });

      messages.create({
        text: 'Message created in browser'
  });
    </script>
  </body>
</html>
</script>
```

### React Native
``` sh
$ npm install @feathersjs/feathers feathers-localstorage @feathersjs-offline/owndata --save
```
``` js
import React from 'react-native';
import feathers from '@feathersjs/feathers';
import localstorage from 'feathers-localstorage';
import { owndataWrapper } from '@feathersjs-offline/client';

const { AsyncStorage } = React;

const app = feathers()
  .use('/messages', localstorage({ storage: AsyncStorage }));
owndataWrapper(app, '/messages', {});

const messages = app.service('messages');

messages.on('created', function(message) {
  console.log('Someone created a message', message);
});

messages.create({
  text: 'Message from React Native'
});
```

## @feathersjs-offline/client, own-net
<br>

[![npm version](https://img.shields.io/npm/v/@feathersjs-offline/client.svg?style=flat-square)](https://www.npmjs.com/package/@feathersjs-offline/client)
[![Build Status](https://img.shields.io/github/workflow/status/feathersjs-offline/owndata-ownnet/CI)](https://github.com/feathersjs-offline/owndata-ownnet/actions)
[![Dependency Status](https://img.shields.io/david/feathersjs-offline/owndata-ownnet?path=packages%2Fclient&style=flat-square)](https://david-dm.org/@feathersjs-offline/client)
[![Known Vulnerabilities](https://snyk.io/test/github/feathersjs-offline/owndata-ownnet/badge.svg)](https://snyk.io/test/github/feathersjs-offline/owndata-ownnet)
[![Download Status](https://img.shields.io/npm/dm/@feathersjs-offline/client)](https://www.npmjs.com/package/@feathersjs-offline/client)


The `ownnetWrapper` (and `Ownnet`) of [@feathersjs-offline/client](https://github.com/feathersjs-offline/owndata-ownnet/client) is a database service adapter that wraps and extends any Feathers CRUD database adapter and behind the scenes locally stores data in [localStorage](https://developer.mozilla.org/en/docs/Web/API/Window/localStorage) in the browser or [AsyncStorage](https://facebook.github.io/react-native/docs/asyncstorage.html) in React Native.

__Options:__

All options available for the wrapped adapter can be used in addition to:

- `id` (*optional*, default: `'id'`) - The name of the id field property. Preferably, for `own-data` it ought to be `uuid.`
- `storage` (*optional*, default `window.localStorage`) - The local storage engine. You can pass in the browsers `window.localStorage,` React Native's `AsyncStorage,` or a NodeJS `localstorage` module.
- `store` (*optional*, default `null`) - An object with id to item assignments to pre-initialize the data store.
- `paginate` (*optional*, default `false`) - A pagination object containing a default and max page size.
- `multi` (*optional*) - Allow create with arrays and update and remove with id null to change multiple items. Can be true for all methods or an array of allowed methods (e.g. `[ 'remove', 'create' ]`).
- `throttle` (*optional*, default: `200` ms) - Determines the minimum time before an operation on the local DB is actually written to permanent storage.
- `timedSync` (*optional*, default: `86400000` ms) - Determines the frequency of forced synchronization with the server. Default is 24 hours. 0 means never. You can always call `service.sync()` to perform a synchronization. Any ad hoc synchronizations does not affect any timed synchronizations.
- `fixedName` (*optional*, default: `null`) - Force the prefix name of the local DB and queue DB. This is useful when several apps on the same device use `@feathersjs-offline` and the same service name (e.g. '/messages').
- `useShortUuid` (*optional*, default `true`) - Generate short `uuid`'s. If false long `uuid`'s are generated. This option should match whatever you choose on the server.
- `adapterTest` (*optional*, default `false`) - This is usually only used for running adapter tests as it suppresses returning `updatedAt,` `onServerAt,` `deletedAt,` and `uuid` in results.

### Methods
The services under `ownnetWrapper` control all implement the standard service methods as described in Services. In addition to this there are a couple of other methods to be used at your discretion.

### .getEntries(params)
`service.getEntries(params) -> Promise` - Retrieves a list of all resources from the service. `params.query` can be used to filter and limit the returned data.

``` js
async app.service('/messages').getEntries(params)
  .then(result => {
    console.log(`entries = ${JSON.stringify(result)}`);
  });
```

Note: `getEntries` retrieves all resources (fulfilling the criteria of `params.query`) and always return an array.

### .sync(bAll)
`service.sync(bAll) -> Promise` - Synchronize local data with server. if `bAll` is `true` synchronization is done beginning from BOT (Beginning Of Time). If `bAll` is `false` synchronization will be done from the newest possible timestamp (determined from resources in local DB). Synchronization will only be performed if no active operations involving the server are running.

``` js
async app.service('/messages').getEntries(params)
  .then(result => {
    console.log(`entries = ${JSON.stringify(result)}`);
  });
```

Note: `getEntries` retrieves all resources (fulfilling the criteria of `params.query`) and always return an array.

### Internal service handles
Internal service handles are useful for receiving messages whenever a CRUD operation have been successfully performed. To receive a message tou first have to register a message handler for the relevant service handle. You can register message handlers for the messages `created,` `updated,` `patched,` and `removed.` The available service handles are

Handle | Comment
| ---- | ---- |
service.local	  | The local database holding the relevant service resources
service.queue	  | The queue database holding all unfinished requests/operations
service.remote	| The server database (i.e. equivalent to app.service('/message') for non-wrapped services)

Service handles are read-only.

See an example using service handles and showing the inner workings of offline-first wrappers [here](https://github.com/feathersjs-offline/simple-example).

In addition, the service emits a `synced` message every time a synchronization has been attempted. It return a value of `true` if the synchronization was successful and `false` otherwise.

### Example
See the [clients](https://docs.feathersjs.com/api/client.html) chapter for more information about using Feathers in the browser and React Native.

### Browser

``` html{16,22}
<html lang="en">
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0" />
    <title>FeathersJS chat</title>
    <link rel="shortcut icon" href="favicon.ico">
    <link rel="stylesheet" href="//unpkg.com/feathers-chat@4.0.0/public/base.css">
    <link rel="stylesheet" href="//unpkg.com/feathers-chat@4.0.0/public/chat.css">
  </head>
  <body>
    <div id="app" class="flex flex-column"></div>
    <script src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.12.0/moment.js"></script>
    <script src="//unpkg.com/@feathersjs/client@^4.3.0/dist/feathers.js"></script>
    <script src="/socket.io/socket.io.js"></script>
    <script src="//unpkg.com/@feathersjs-offline/client@^1.0/dist/feathersjs-offline-client.min.js"></script>
    <script type="text/javascript">
      var service = feathers.localstorage({
        storage: window.localStorage
      });
      var app = feathers().use('/messages', service);
      feathersOfflineClient.ownnetWrapper(app, '/messages', {});

      var messages = app.service('messages');

      messages.on('created', function(message) {
        console.log('Someone created a message', message);
      });

      messages.create({
        text: 'Message created in browser'
  });
    </script>
  </body>
</html>
</script>
```

#### React Native
``` sh
$ npm install @feathersjs/feathers feathers-localstorage @feathersjs-offline/ownnet --save
```

``` js
import React from 'react-native';
import feathers from '@feathersjs/feathers';
import localstorage from 'feathers-localstorage';
import { ownnetWrapper } from '@feathersjs-offline/ownnet';

const { AsyncStorage } = React;

const app = feathers()
  .use('/messages', localstorage({ storage: AsyncStorage }));
ownnetWrapper(app, '/messages', {});

const messages = app.service('messages');

messages.on('created', function(message) {
  console.log('Someone created a message', message);
});

messages.create({
  text: 'Message from React Native'
});
```

## License
Copyright (c) 2020

Licensed under the [MIT license](./license.md).