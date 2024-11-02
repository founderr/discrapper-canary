n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651);
n(192379);
var l = n(913527),
    r = n.n(l),
    a = n(442837),
    s = n(481060),
    o = n(87051),
    c = n(776568),
    u = n(777861),
    d = n(9156),
    h = n(621600),
    m = n(388032);
function p(e, t) {
    let n = null == e ? void 0 : e.id,
        { muted: l, muteConfig: p } = (0, a.cj)(
            [d.ZP],
            () => ({
                muted: null != n ? d.ZP.isMuted(n) : void 0,
                muteConfig: null != n ? d.ZP.getMuteConfig(n) : void 0
            }),
            [n]
        ),
        f = (0, u.U)(p);
    return null == n
        ? null
        : l
          ? (0, i.jsx)(s.MenuItem, {
                id: 'unmute-guild',
                label: m.intl.string(m.t.De0BTE),
                subtext: f,
                action: () => o.Z.updateGuildNotificationSettings(n, { muted: !1 }, h.ZB.Unmuted)
            })
          : (0, i.jsx)(s.MenuItem, {
                id: 'mute-guild',
                label: m.intl.string(m.t.vRzp7O),
                action: () => o.Z.updateGuildNotificationSettings(n, { muted: !0 }, h.ZB.Muted),
                children: (0, c.k)().map((e) => {
                    let { value: l, label: a } = e;
                    return (0, i.jsx)(
                        s.MenuItem,
                        {
                            id: ''.concat(l),
                            label: a,
                            action: () =>
                                (function (e) {
                                    if (null == n) return;
                                    let i = e > 0 ? r()().add(e, 'second').toISOString() : null;
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
