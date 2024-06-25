n(177593);
var s = n(626135),
  i = n(189800),
  l = n(996106),
  a = n(34954),
  r = n(986768),
  o = n(981631);
t.Z = {
  [o.Etm.SUBSCRIBE]: {
    async handler(e) {
      let {
        server: t,
        socket: n,
        evt: c,
        args: u
      } = e, d = t.events[c];
      if (null == d) throw new l.Z({
        errorCode: o.lTL.INVALID_EVENT
      }, "Invalid event: ".concat(c));
      if (!(0, a.Z)(n.authorization.scopes, d.scope)) throw new l.Z({
        errorCode: o.lTL.INVALID_PERMISSIONS
      }, "Not authenticated or invalid scope");
      if (i.N.getCurrentConfig({
          location: "RPCServer"
        }).enabled && s.default.track(o.rMx.RPC_SUBSCRIPTION_REQUESTED, {
          event: c,
          scope: "object" == typeof d.scope ? JSON.stringify(d.scope) : d.scope,
          application_id: n.application.id,
          socket_scope: n.authorization.scopes.toString()
        }), null != d.validation) {
        let e = await t.getJoi();
        if (null != e.validate(u, d.validation(e), {
            convert: !1
          }).error) throw new l.Z({
          errorCode: o.lTL.INVALID_PAYLOAD
        }, "Invalid subscription parameters provided")
      }
      let E = d.handler({
          args: u,
          socket: n
        }),
        h = await (0, r.V)(n, c, u);
      return new Promise(e => {
        setImmediate(() => {
          t.addSubscription(n, c, u, E), null != h && t.dispatchToSubscriptions(c, e => e.socket.id === n.id, h)
        }), e({
          evt: c
        })
      })
    }
  },
  [o.Etm.UNSUBSCRIBE]: {
    handler(e) {
      let {
        server: t,
        socket: n,
        evt: s,
        args: i
      } = e;
      if (null == t.events[s]) throw new l.Z({
        errorCode: o.lTL.INVALID_EVENT
      }, "Invalid event: ".concat(s));
      return t.removeSubscription(n, s, i), {
        evt: s
      }
    }
  }
}