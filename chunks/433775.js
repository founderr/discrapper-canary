l.d(n, {
    Z: function () {
        return u;
    }
}),
    l(47120);
var s = l(192379),
    a = l(442837),
    t = l(951539),
    i = l(592125),
    r = l(356685),
    o = l(486527),
    d = l(981631);
let c = { can_broadcast: !1 };
function u(e, n, l) {
    let [u, E] = s.useState(c),
        [_, x] = s.useState(!1),
        I = s.useRef(!1),
        m = null == e ? void 0 : e.id,
        N = null == e ? void 0 : e.hasFeature(d.oNc.HAS_DIRECTORY_ENTRY);
    s.useEffect(() => {
        if (!N) {
            E(c);
            return;
        }
        if (!I.current && null != m)
            (async () => {
                I.current = !0;
                try {
                    let e = await (0, r.X)(m, o.C2.GUILD_SCHEDULED_EVENT, n);
                    E(e);
                } catch (e) {
                    E(c);
                }
                I.current = !1;
            })();
    }, [m, N, n]),
        s.useEffect(() => {
            var e;
            if (!u.can_broadcast) {
                x(!1);
                return;
            }
            x(null === (e = u.has_broadcast) || void 0 === e || e);
        }, [u]);
    let T = (0, a.e7)([i.Z], () => (0, t.wg)(l, [i.Z]));
    return {
        broadcastInfo: u,
        broadcastToDirectoryChannels: T && _,
        setBroadcastToDirectoryChannels: x,
        canEveryoneRoleViewEvent: T
    };
}
