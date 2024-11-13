n.d(e, {
    Z: function () {
        return E;
    }
});
var i = n(200651);
n(192379);
var r = n(913527),
    u = n.n(r),
    l = n(442837),
    a = n(481060),
    o = n(87051),
    c = n(776568),
    s = n(777861),
    d = n(9156),
    f = n(621600),
    N = n(388032);
function E(t, e) {
    let n = null == t ? void 0 : t.id,
        { muted: r, muteConfig: E } = (0, l.cj)(
            [d.ZP],
            () => ({
                muted: null != n ? d.ZP.isMuted(n) : void 0,
                muteConfig: null != n ? d.ZP.getMuteConfig(n) : void 0
            }),
            [n]
        ),
        m = (0, s.U)(E);
    return null == n
        ? null
        : r
          ? (0, i.jsx)(a.MenuItem, {
                id: 'unmute-guild',
                label: N.intl.string(N.t.De0BTE),
                subtext: m,
                action: () => o.Z.updateGuildNotificationSettings(n, { muted: !1 }, f.ZB.Unmuted)
            })
          : (0, i.jsx)(a.MenuItem, {
                id: 'mute-guild',
                label: N.intl.string(N.t.vRzp7O),
                action: () => o.Z.updateGuildNotificationSettings(n, { muted: !0 }, f.ZB.Muted),
                children: (0, c.k)().map((t) => {
                    let { value: r, label: l } = t;
                    return (0, i.jsx)(
                        a.MenuItem,
                        {
                            id: ''.concat(r),
                            label: l,
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
                                })(r)
                        },
                        r
                    );
                })
            });
}
