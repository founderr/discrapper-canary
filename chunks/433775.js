t.d(n, {
    Z: function () {
        return u;
    }
}),
    t(47120);
var l = t(192379),
    i = t(442837),
    r = t(951539),
    a = t(592125),
    s = t(356685),
    o = t(486527),
    d = t(981631);
let c = { can_broadcast: !1 };
function u(e, n, t) {
    let [u, m] = l.useState(c),
        [x, h] = l.useState(!1),
        g = l.useRef(!1),
        v = null == e ? void 0 : e.id,
        f = null == e ? void 0 : e.hasFeature(d.oNc.HAS_DIRECTORY_ENTRY);
    l.useEffect(() => {
        if (!f) {
            m(c);
            return;
        }
        if (!g.current && null != v)
            (async () => {
                g.current = !0;
                try {
                    let e = await (0, s.X)(v, o.C2.GUILD_SCHEDULED_EVENT, n);
                    m(e);
                } catch (e) {
                    m(c);
                }
                g.current = !1;
            })();
    }, [v, f, n]),
        l.useEffect(() => {
            var e;
            if (!u.can_broadcast) {
                h(!1);
                return;
            }
            h(null === (e = u.has_broadcast) || void 0 === e || e);
        }, [u]);
    let j = (0, i.e7)([a.Z], () => (0, r.wg)(t, [a.Z]));
    return {
        broadcastInfo: u,
        broadcastToDirectoryChannels: j && x,
        setBroadcastToDirectoryChannels: h,
        canEveryoneRoleViewEvent: j
    };
}
