n.d(e, {
    Z: function () {
        return _;
    }
});
var i = n(200651);
n(192379);
var l = n(913527),
    u = n.n(l),
    a = n(442837),
    r = n(481060),
    o = n(87051),
    d = n(776568),
    c = n(777861),
    s = n(9156),
    f = n(621600),
    g = n(388032);
function _(t, e) {
    let n = null == t ? void 0 : t.id,
        { muted: l, muteConfig: _ } = (0, a.cj)(
            [s.ZP],
            () => ({
                muted: null != n ? s.ZP.isMuted(n) : void 0,
                muteConfig: null != n ? s.ZP.getMuteConfig(n) : void 0
            }),
            [n]
        ),
        b = (0, c.U)(_);
    return null == n
        ? null
        : l
          ? (0, i.jsx)(r.MenuItem, {
                id: 'unmute-guild',
                label: g.intl.string(g.t.De0BTE),
                subtext: b,
                action: () => o.Z.updateGuildNotificationSettings(n, { muted: !1 }, f.ZB.Unmuted)
            })
          : (0, i.jsx)(r.MenuItem, {
                id: 'mute-guild',
                label: g.intl.string(g.t.vRzp7O),
                action: () => o.Z.updateGuildNotificationSettings(n, { muted: !0 }, f.ZB.Muted),
                children: (0, d.k)().map((t) => {
                    let { value: l, label: a } = t;
                    return (0, i.jsx)(
                        r.MenuItem,
                        {
                            id: ''.concat(l),
                            label: a,
                            action: () =>
                                (function (t) {
                                    if (null == n) return;
                                    let i = t > 0 ? u()().add(t, 'second').toISOString() : null;
                                    o.Z.updateGuildNotificationSettings(
                                        n,
                                        {
                                            muted: !0,
                                            mute_config: {
                                                selected_time_window: t,
                                                end_time: i
                                            }
                                        },
                                        f.ZB.Muted,
                                        e
                                    );
                                })(l)
                        },
                        l
                    );
                })
            });
}
