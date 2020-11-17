# Offline-first
Right - we have a real-time application running, but how do we get our application to be offline-first? Well, it is very simple - in fact so simple it ought to be illegal!

First we have to import the necessary wrappers; one for the client and one for the server.

:::: tabs :options="{ useUrlFragment: false }"
::: tab "JavaScript"
We need to add a couple of lines to `app/app.js`. First we show how to use the `own-data` wrapper:
```js
// ...
import { owndataWrapper } from '@feathersjs-offline/owndata';
// ...
app.use('messages');
owndataWrapper(app, 'messages'); // Wrap the service; use the own-data principle
```
Next, this is how you use the `own-net` wrapper:
```js
// ...
import { ownnetWrapper } from '@feathersjs-offline/ownnet';
// ...
app.use('messages');
ownnetWrapper(app, 'messages'); // Wrap the service; use the own-net principle
```
Here is a couple of links to help you choose between [own-data]() and [own-net]().
:::
::: tab "TypeScript"
```js
// Sadly, the TypeScript version is not complete yet.
```
:::
::::

For the server we do this

:::: tabs :options="{ useUrlFragment: false }"
::: tab "JavaScript"
```js
// ...
import { RealtimeServiceWrapper } from '@feathersjs-offline/server';
// ...
// app.use('messages', Messages());

// Wrap the service; supports both own-data/own-net principles
const RealtimeMessages = RealtimeServiceWrapper(Messages());
app.use('messages', RealtimeMessages());
```
:::
::: tab "TypeScript"
```js
// Sadly, the TypeScript version is not complete yet.
```
:::
::::

Now restart the server and refresh the client in the browser and that's it! From now on, all activity on the `messages` service on the client will be handled in a client-first server-later (possibly very shortly after) manner. What's more, whenever the client has a valid connection to the server it will synchronize all changes made on the `message` service while offline - regardless of the origin of the changes.

Synchronization is done in a `newest change wins` manner. Changing the _same_ (same `uuid`) item on three different offline devices makes the latest change> eventually become the winner.

Items removed from the server cannot be revived (this is because we make a '_soft-delete_' on the server to be able to ensure synchronization can be successful at all times).

> __Note:__ For this to work you must ensure the service implements the date fields `updatedAt`, `onServerAt`, and the id field `uuid`. The wrapper will do all handling of the fields behind the scenes. (The `uuid` do not _have_ to be the id field but it is considered good practice).
> 
> For MongoDB you do not have to worry, but for schema-centric DBs you have to ensure your schema include these fields.

> __Note:__ If you want to know more about _how_ the wrappers work read [own-data/own-net implementation](./implementation.md).

# Come-on, it can't be that simple!
Well, it almost is due to Feathers clever adapter implementation. All service adapters, that are able to pass the adapterTests, should be able work seamlessly with the realtime wrappers. But, you have to make one or two choices by answering a couple of questions:

1. Is your application
