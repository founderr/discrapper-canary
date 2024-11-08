n.d(t, {
    Z: function () {
        return b;
    }
});
var i = n(200651);
n(192379);
var o = n(913527),
    a = n.n(o),
    r = n(442837),
    c = n(481060),
    l = n(87051),
    u = n(776568),
    s = n(777861),
    d = n(9156),
    _ = n(621600),
    f = n(388032);
function b(e, t) {
    let n = null == e ? void 0 : e.id,
        { muted: o, muteConfig: b } = (0, r.cj)(
            [d.ZP],
            () => ({
                muted: null != n ? d.ZP.isMuted(n) : void 0,
                muteConfig: null != n ? d.ZP.getMuteConfig(n) : void 0
            }),
            [n]
        ),
        g = (0, s.U)(b);
    return null == n
        ? null
        : o
          ? (0, i.jsx)(c.MenuItem, {
                id: 'unmute-guild',
                label: f.intl.string(f.t.De0BTE),
                subtext: g,
                action: () => l.Z.updateGuildNotificationSettings(n, { muted: !1 }, _.ZB.Unmuted)
            })
          : (0, i.jsx)(c.MenuItem, {
                id: 'mute-guild',
                label: f.intl.string(f.t.vRzp7O),
                action: () => l.Z.updateGuildNotificationSettings(n, { muted: !0 }, _.ZB.Muted),
                children: (0, u.k)().map((e) => {
                    let { value: o, label: r } = e;
                    return (0, i.jsx)(
                        c.MenuItem,
                        {
                            id: ''.concat(o),
                            label: r,
                            action: () =>
                                (function (e) {
                                    if (null == n) return;
                                    let i = e > 0 ? a()().add(e, 'second').toISOString() : null;
                                    l.Z.updateGuildNotificationSettings(
                                        n,
                                        {
                                            muted: !0,
                                            mute_config: {
                                                selected_time_window: e,
                                                end_time: i
                                            }
                                        },
                                        _.ZB.Muted,
                                        t
                                    );
                                })(o)
                        },
                        o
                    );
                })
            });
}
