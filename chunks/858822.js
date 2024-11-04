n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var l = n(913527),
    a = n.n(l),
    r = n(442837),
    s = n(481060),
    o = n(87051),
    c = n(776568),
    d = n(777861),
    u = n(9156),
    h = n(621600),
    p = n(388032);
function m(e, t) {
    let n = null == e ? void 0 : e.id,
        { muted: l, muteConfig: m } = (0, r.cj)(
            [u.ZP],
            () => ({
                muted: null != n ? u.ZP.isMuted(n) : void 0,
                muteConfig: null != n ? u.ZP.getMuteConfig(n) : void 0
            }),
            [n]
        ),
        f = (0, d.U)(m);
    return null == n
        ? null
        : l
          ? (0, i.jsx)(s.MenuItem, {
                id: 'unmute-guild',
                label: p.intl.string(p.t.De0BTE),
                subtext: f,
                action: () => o.Z.updateGuildNotificationSettings(n, { muted: !1 }, h.ZB.Unmuted)
            })
          : (0, i.jsx)(s.MenuItem, {
                id: 'mute-guild',
                label: p.intl.string(p.t.vRzp7O),
                action: () => o.Z.updateGuildNotificationSettings(n, { muted: !0 }, h.ZB.Muted),
                children: (0, c.k)().map((e) => {
                    let { value: l, label: r } = e;
                    return (0, i.jsx)(
                        s.MenuItem,
                        {
                            id: ''.concat(l),
                            label: r,
                            action: () =>
                                (function (e) {
                                    if (null == n) return;
                                    let i = e > 0 ? a()().add(e, 'second').toISOString() : null;
                                    o.Z.updateGuildNotificationSettings(
                                        n,
                                        {
                                            muted: !0,
                                            mute_config: {
                                                selected_time_window: e,
                                                end_time: i
                                            }
                                        },
                                        h.ZB.Muted,
                                        t
                                    );
                                })(l)
                        },
                        l
                    );
                })
            });
}
