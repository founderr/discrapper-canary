n(177593);
var i = n(626135),
    r = n(996106),
    l = n(34954),
    a = n(986768),
    o = n(981631);
t.Z = {
    [o.Etm.SUBSCRIBE]: {
        async handler(e) {
            let { server: t, socket: n, evt: s, args: c } = e,
                d = t.events[s];
            if (null == d) throw new r.Z({ errorCode: o.lTL.INVALID_EVENT }, 'Invalid event: '.concat(s));
            if (!(0, l.Z)(n.authorization.scopes, d.scope)) throw new r.Z({ errorCode: o.lTL.INVALID_PERMISSIONS }, 'Not authenticated or invalid scope');
            if (
                (i.default.track(o.rMx.RPC_SUBSCRIPTION_REQUESTED, {
                    event: s,
                    scope: 'object' == typeof d.scope ? JSON.stringify(d.scope) : d.scope,
                    application_id: n.application.id,
                    socket_scope: n.authorization.scopes.toString()
                }),
                null != d.validation)
            ) {
                let e = await t.getJoi();
                if (null != e.validate(c, d.validation(e), { convert: !1 }).error) throw new r.Z({ errorCode: o.lTL.INVALID_PAYLOAD }, 'Invalid subscription parameters provided');
            }
            let u = d.handler({
                    args: c,
                    socket: n
                }),
                h = await (0, a.V)(n, s, c);
            return new Promise((e) => {
                setImmediate(() => {
                    t.addSubscription(n, s, c, u), null != h && t.dispatchToSubscriptions(s, (e) => e.socket.id === n.id, h);
                }),
                    e({ evt: s });
            });
        }
    },
    [o.Etm.UNSUBSCRIBE]: {
        handler(e) {
            let { server: t, socket: n, evt: i, args: l } = e;
            if (null == t.events[i]) throw new r.Z({ errorCode: o.lTL.INVALID_EVENT }, 'Invalid event: '.concat(i));
            return t.removeSubscription(n, i, l), { evt: i };
        }
    }
};
