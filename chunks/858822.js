n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651);
n(192379);
var l = n(913527),
    u = n.n(l),
    a = n(442837),
    r = n(481060),
    o = n(87051),
    c = n(776568),
    d = n(777861),
    f = n(9156),
    s = n(621600),
    _ = n(388032);
function g(e, t) {
    let n = null == e ? void 0 : e.id,
        { muted: l, muteConfig: g } = (0, a.cj)(
            [f.ZP],
            () => ({
                muted: null != n ? f.ZP.isMuted(n) : void 0,
                muteConfig: null != n ? f.ZP.getMuteConfig(n) : void 0
            }),
            [n]
        ),
        S = (0, d.U)(g);
    return null == n
        ? null
        : l
          ? (0, i.jsx)(r.MenuItem, {
                id: 'unmute-guild',
                label: _.intl.string(_.t.De0BTE),
                subtext: S,
                action: () => o.Z.updateGuildNotificationSettings(n, { muted: !1 }, s.ZB.Unmuted)
            })
          : (0, i.jsx)(r.MenuItem, {
                id: 'mute-guild',
                label: _.intl.string(_.t.vRzp7O),
                action: () => o.Z.updateGuildNotificationSettings(n, { muted: !0 }, s.ZB.Muted),
                children: (0, c.k)().map((e) => {
                    let { value: l, label: a } = e;
                    return (0, i.jsx)(
                        r.MenuItem,
                        {
                            id: ''.concat(l),
                            label: a,
                            action: () =>
                                (function (e) {
                                    if (null == n) return;
                                    let i = e > 0 ? u()().add(e, 'second').toISOString() : null;
                                    o.Z.updateGuildNotificationSettings(
                                        n,
                                        {
                                            muted: !0,
                                            mute_config: {
                                                selected_time_window: e,
                                                end_time: i
                                            }
                                        },
                                        s.ZB.Muted,
                                        t
                                    );
                                })(l)
                        },
                        l
                    );
                })
            });
}
