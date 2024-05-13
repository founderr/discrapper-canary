"use strict";
n.r(t), n("47120");
var a = n("544891"),
  s = n("626135"),
  i = n("186901"),
  l = n("981631");
t.default = {
  [l.RPCCommands.GET_NETWORKING_CONFIG]: {
    scope: i.RPC_LOCAL_SCOPE,
    handler: () => Promise.all([a.HTTP.get({
      url: location.protocol + window.GLOBAL_ENV.NETWORKING_ENDPOINT,
      retries: 3
    }).then(e => {
      let {
        body: {
          address: t
        }
      } = e;
      return t
    }), a.HTTP.post({
      url: l.Endpoints.NETWORKING_TOKEN,
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
      let [t, n] = e;
      return {
        address: t,
        token: n
      }
    })
  },
  [l.RPCCommands.NETWORKING_SYSTEM_METRICS]: {
    scope: i.RPC_LOCAL_SCOPE,
    handler(e) {
      let {
        socket: t,
        args: n
      } = e;
      n.application_id = t.application.id, s.default.track(l.AnalyticEvents.NETWORKING_SYSTEM_METRICS, n)
    }
  },
  [l.RPCCommands.NETWORKING_PEER_METRICS]: {
    scope: i.RPC_LOCAL_SCOPE,
    handler(e) {
      let {
        socket: t,
        args: n
      } = e;
      n.application_id = t.application.id, s.default.track(l.AnalyticEvents.NETWORKING_PEER_METRICS, n)
    }
  },
  [l.RPCCommands.NETWORKING_CREATE_TOKEN]: {
    scope: i.RPC_LOCAL_SCOPE,
    handler: () => a.HTTP.post({
      url: l.Endpoints.NETWORKING_TOKEN,
      retries: 1,
      oldFormErrors: !0
    }).then(e => e.body)
  }
}