# How is own-data/own-net implemented?
The following is a high-level illustration of the `realtimeWrapper,` `owndataWrapper,` and `ownnetWrapper`:

<div style="text-align: center"><img width="400" src="./assets/wrapper-overview.svg" alt="FeathersJS Offline-first wrapper overview"></div>

As can be gleaned from this, the `realtimeWrapper` wraps functionality around all of the CRUD methods of the service. This is mainly to set `onServerAt` to determine the exact time this version of the item in question hit the server and when needed, `deletedAt,` to indicate the exact time when the item in question was deleted from the server. Both of these are crucial for the synchronization with the clients.

The client-side is either wrapped with `owndataWrapper` or `ownnetWrapper` which is are little more complex than the `realtimeWrapper` as you can get an impression of below.

<div style="text-align: center"><img width="400" src="./assets/feathersjs-offline-crud-principle.svg" alt="FeathersJS Offline-first CRUD principle"></div>

On the client we wrap the CRUD methods to set the `onServerAt` to BOT (Beginning Of Time) to indicate that this version of the item has not been on the server yet (which is done in the housekeeping part). We also need to have a way of returning the result of any CRUD method immediately - even if we are not connected to the server - and we need to queue all operations on the client just in case we are not connected. This is done in the _Optimistic op_ part. The queue is essential for updating the server correctly whenever we connect to it. So, to enable this behaviour we make use of two local DB's (implemented as [feathers-localstorage](https://github.com/feathersjs-ecosystem/feathers-localstorage)) per service handled with `own-data` / `own-net` principle.

Once the local database has been updated we immediately spin-off an asynchronous update of the remote DB (see the _Update remote DB_ part). If the client is connected to the server at the time of the operation, we will remove the queued operation and update the local item to reflect the actual status on the server. If we are not connected to the server, the local operation will still succeed, but the remote call will eventually timeout (default after 5 seconds). This will not result in any further action now, but later, when we discover we are connected to the server again the queued operations will be replayed to the server - if successful the queued item is removed and the local item is refreshed with the data returned from the server.

Should the server return with an error, we remove the queued item and revert the change on the local item!

Whenever an CRUD operation successfully has been executed on the server through the wrapper we will try to replay any queued items in order to have the server reflect the most up-to-date state at any time. This queue handling may only occur if no there are no active operations with the server.

The client wrappers will by default try to synchronize with the server every 24 hours. This can be changed by setting the option `timedSync` to any suitable value (in milliseconds). Also, at any time your application can call the `client.service('path').sync()` to force a synchronization.

Synchronization is always initiated by the client and the client determines the synchronization-point-in-time to use from its local DB. At start, the synchronization-point-in-time will be set to BOT. The server will then return the necessary items which are created, patched, or deleted in the local DB. Afterwards, any queued operations will be replayed. Synchronization can only occur when there are no active operations with the server (and no other synchronization running).

At the end of each successful synchronization the oldest `updatedAt` timestamp on items having `onServerAt` equal to BOT or the newest value of `onServerAt` - the oldest of the two is recorded and stored in `localStorage.`

> **Tip:** At any time your application can call the client.service('path').sync(true) to force a synchronization from BOT.

> **Tip:** You should use the `own-data` / `own-net` wrappers with some care, as they consume parts of the localStorage which in browsers is not an unlimited resource pool...

> **ProTip:** It is worth noting that the client wrappers actually works on servers too which for instance can be used to keep several Feathers servers in sync...




## What's next?

In the final chapter, we'll look at [how to write automated tests for our API](./testing.md).