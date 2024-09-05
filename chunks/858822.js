n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(735250);
n(470079);
var o = n(913527),
    r = n.n(o),
    a = n(442837),
    c = n(481060),
    l = n(92114),
    s = n(776568),
    u = n(777861),
    d = n(9156),
    g = n(621600),
    h = n(689938);
function f(e, t) {
    let n = null == e ? void 0 : e.id,
        { muted: o, muteConfig: f } = (0, a.cj)(
            [d.ZP],
            () => ({
                muted: null != n ? d.ZP.isMuted(n) : void 0,
                muteConfig: null != n ? d.ZP.getMuteConfig(n) : void 0
            }),
            [n]
        ),
        _ = (0, u.U)(f);
    return null == n
        ? null
        : o
          ? (0, i.jsx)(c.MenuItem, {
                id: 'unmute-guild',
                label: h.Z.Messages.UNMUTE_SERVER,
                subtext: _,
                action: () => l.Z.updateGuildNotificationSettings(n, { muted: !1 }, g.ZB.Unmuted)
            })
          : (0, i.jsx)(c.MenuItem, {
                id: 'mute-guild',
                label: h.Z.Messages.MUTE_SERVER,
                action: () => l.Z.updateGuildNotificationSettings(n, { muted: !0 }, g.ZB.Muted),
                children: (0, s.k)().map((e) => {
                    let { value: o, label: a } = e;
                    return (0, i.jsx)(
                        c.MenuItem,
                        {
                            id: ''.concat(o),
                            label: a,
                            action: () =>
                                (function (e) {
                                    if (null == n) return;
                                    let i = e > 0 ? r()().add(e, 'second').toISOString() : null;
                                    l.Z.updateGuildNotificationSettings(
                                        n,
                                        {
                                            muted: !0,
                                            mute_config: {
                                                selected_time_window: e,
                                                end_time: i
                                            }
                                        },
                                        g.ZB.Muted,
                                        t
                                    );
                                })(o)
                        },
                        o
                    );
                })
            });
}
