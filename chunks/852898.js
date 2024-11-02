n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(139387),
    a = n(726542),
    o = n(690221),
    c = n(434404),
    d = n(999382),
    u = n(981631),
    m = n(388032);
function h(e) {
    let t = (0, l.e7)([d.Z], () => d.Z.getProps().integrations);
    return r.useMemo(
        () =>
            (function (e, t) {
                var n, r, l, d;
                let h;
                if (!e.managed) return null;
                let g = null === (n = e.tags) || void 0 === n ? void 0 : n.bot_id,
                    x = null === (r = e.tags) || void 0 === r ? void 0 : r.integration_id,
                    p = (null === (l = e.tags) || void 0 === l ? void 0 : l.premium_subscriber) !== void 0,
                    f = (null === (d = e.tags) || void 0 === d ? void 0 : d.guild_connections) !== void 0;
                if (
                    (null != g
                        ? (h =
                              null == t
                                  ? void 0
                                  : t.find((e) => {
                                        var t;
                                        let { application: n } = e;
                                        return (null == n ? void 0 : null === (t = n.bot) || void 0 === t ? void 0 : t.id) === g;
                                    }))
                        : null != x &&
                          (h =
                              null == t
                                  ? void 0
                                  : t.find((e) => {
                                        let { id: t } = e;
                                        return t === x;
                                    })),
                    null != h && null != h.application && null != h.name)
                ) {
                    let e = h.application.id,
                        t = h.name;
                    [u.ABu.TWITCH, u.ABu.YOUTUBE].includes(h.type) && (t = ''.concat(a.Z.get(h.type).name, ' - ').concat(t));
                    let n = () => {
                        c.Z.setSection(u.pNK.INTEGRATIONS), s.Z.setSection(u.b4C.APPLICATION, e);
                    };
                    return m.intl.format(m.t.FuXsWl, {
                        name: t,
                        integrationNameHook: (e, t) =>
                            (0, i.jsx)(
                                o.Z,
                                {
                                    onClick: n,
                                    children: e
                                },
                                t
                            )
                    });
                }
                return p ? m.intl.string(m.t.oF6FYW) : f ? m.intl.string(m.t.ZQ37tL) : m.intl.string(m.t.k5d7DA);
            })(e, t),
        [e, t]
    );
}
