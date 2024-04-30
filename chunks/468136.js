"use strict";
a.r(t), a("47120");
var n = a("544891"),
  s = a("626135"),
  l = a("186901"),
  i = a("981631");
t.default = {
  [i.RPCCommands.GET_NETWORKING_CONFIG]: {
    scope: l.RPC_LOCAL_SCOPE,
    handler: () => Promise.all([n.HTTP.get({
      url: location.protocol + window.GLOBAL_ENV.NETWORKING_ENDPOINT,
      retries: 3
    }).then(e => {
      let {
        body: {
          address: t
        }
      } = e;
      return t
    }), n.HTTP.post({
      url: i.Endpoints.NETWORKING_TOKEN,
      retries: 3,
      oldFormErrors: !0
    }).then(e => {
      let {
        body: {
          token: t
        }
      } = e;
      return t
    })]).then(e => {
      let [t, a] = e;
      return {
        address: t,
        token: a
      }
    })
  },
  [i.RPCCommands.NETWORKING_SYSTEM_METRICS]: {
    scope: l.RPC_LOCAL_SCOPE,
    handler(e) {
      let {
        socket: t,
        args: a
      } = e;
      a.application_id = t.application.id, s.default.track(i.AnalyticEvents.NETWORKING_SYSTEM_METRICS, a)
    }
  },
  [i.RPCCommands.NETWORKING_PEER_METRICS]: {
    scope: l.RPC_LOCAL_SCOPE,
    handler(e) {
      let {
        socket: t,
        args: a
      } = e;
      a.application_id = t.application.id, s.default.track(i.AnalyticEvents.NETWORKING_PEER_METRICS, a)
    }
  },
  [i.RPCCommands.NETWORKING_CREATE_TOKEN]: {
    scope: l.RPC_LOCAL_SCOPE,
    handler: () => n.HTTP.post({
      url: i.Endpoints.NETWORKING_TOKEN,
      retries: 1,
      oldFormErrors: !0
    }).then(e => e.body)
  }
}