"use strict";
a.r(t), a("177593");
var n = a("626135"),
  s = a("189800"),
  l = a("996106"),
  i = a("34954"),
  r = a("986768"),
  o = a("981631");
t.default = {
  [o.RPCCommands.SUBSCRIBE]: {
    async handler(e) {
      let {
        server: t,
        socket: a,
        evt: u,
        args: d
      } = e, c = t.events[u];
      if (null == c) throw new l.default({
        errorCode: o.RPCErrors.INVALID_EVENT
      }, "Invalid event: ".concat(u));
      if (!(0, i.default)(a.authorization.scopes, c.scope)) throw new l.default({
        errorCode: o.RPCErrors.INVALID_PERMISSIONS
      }, "Not authenticated or invalid scope");
      if (s.ExperimentRPCServerAnalyticsKillswitch.getCurrentConfig({
          location: "RPCServer"
        }).enabled && n.default.track(o.AnalyticEvents.RPC_SUBSCRIPTION_REQUESTED, {
          event: u,
          scope: "object" == typeof c.scope ? JSON.stringify(c.scope) : c.scope,
          application_id: a.application.id,
          socket_scope: a.authorization.scopes.toString()
        }), null != c.validation) {
        let e = await t.getJoi();
        if (null != e.validate(d, c.validation(e), {
            convert: !1
          }).error) throw new l.default({
          errorCode: o.RPCErrors.INVALID_PAYLOAD
        }, "Invalid subscription parameters provided")
      }
      let f = c.handler({
          args: d,
          socket: a
        }),
        E = await (0, r.getInitialSubscriptionPayload)(a, u, d);
      return new Promise(e => {
        setImmediate(() => {
          t.addSubscription(a, u, d, f), null != E && t.dispatchToSubscriptions(u, e => e.socket.id === a.id, E)
        }), e({
          evt: u
        })
      })
    }
  },
  [o.RPCCommands.UNSUBSCRIBE]: {
    handler(e) {
      let {
        server: t,
        socket: a,
        evt: n,
        args: s
      } = e;
      if (null == t.events[n]) throw new l.default({
        errorCode: o.RPCErrors.INVALID_EVENT
      }, "Invalid event: ".concat(n));
      return t.removeSubscription(a, n, s), {
        evt: n
      }
    }
  }
}