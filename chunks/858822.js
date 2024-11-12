e.d(n, {
    Z: function () {
        return E;
    }
});
var i = e(200651);
e(192379);
var r = e(913527),
    u = e.n(r),
    l = e(442837),
    a = e(481060),
    o = e(87051),
    c = e(776568),
    s = e(777861),
    d = e(9156),
    f = e(621600),
    N = e(388032);
function E(t, n) {
    let e = null == t ? void 0 : t.id,
        { muted: r, muteConfig: E } = (0, l.cj)(
            [d.ZP],
            () => ({
                muted: null != e ? d.ZP.isMuted(e) : void 0,
                muteConfig: null != e ? d.ZP.getMuteConfig(e) : void 0
            }),
            [e]
        ),
        _ = (0, s.U)(E);
    return null == e
        ? null
        : r
          ? (0, i.jsx)(a.MenuItem, {
                id: 'unmute-guild',
                label: N.intl.string(N.t.De0BTE),
                subtext: _,
                action: () => o.Z.updateGuildNotificationSettings(e, { muted: !1 }, f.ZB.Unmuted)
            })
          : (0, i.jsx)(a.MenuItem, {
                id: 'mute-guild',
                label: N.intl.string(N.t.vRzp7O),
                action: () => o.Z.updateGuildNotificationSettings(e, { muted: !0 }, f.ZB.Muted),
                children: (0, c.k)().map((t) => {
                    let { value: r, label: l } = t;
                    return (0, i.jsx)(
                        a.MenuItem,
                        {
                            id: ''.concat(r),
                            label: l,
                            action: () =>
                                (function (t) {
                                    if (null == e) return;
                                    let i = t > 0 ? u()().add(t, 'second').toISOString() : null;
                                    o.Z.updateGuildNotificationSettings(
                                        e,
                                        {
                                            muted: !0,
                                            mute_config: {
                                                selected_time_window: t,
                                                end_time: i
                                            }
                                        },
                                        f.ZB.Muted,
                                        n
                                    );
                                })(r)
                        },
                        r
                    );
                })
            });
}
