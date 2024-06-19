n(177593);
var i = n(626135),
  s = n(189800),
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
      if (s.N.getCurrentConfig({
          location: "RPCServer"
        }).enabled && i.default.track(o.rMx.RPC_SUBSCRIPTION_REQUESTED, {
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
        evt: i,
        args: s
      } = e;
      if (null == t.events[i]) throw new l.Z({
        errorCode: o.lTL.INVALID_EVENT
      }, "Invalid event: ".concat(i));
      return t.removeSubscription(n, i, s), {
        evt: i
      }
    }
  }
}