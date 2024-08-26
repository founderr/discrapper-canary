n.d(t, {
    Z: function () {
        return h;
    }
});
var o = n(735250);
n(470079);
var i = n(913527),
    r = n.n(i),
    c = n(442837),
    a = n(481060),
    l = n(92114),
    u = n(776568),
    s = n(777861),
    d = n(9156),
    g = n(621600),
    _ = n(689938);
function h(e, t) {
    let n = null == e ? void 0 : e.id,
        { muted: i, muteConfig: h } = (0, c.cj)(
            [d.ZP],
            () => ({
                muted: null != n ? d.ZP.isMuted(n) : void 0,
                muteConfig: null != n ? d.ZP.getMuteConfig(n) : void 0
            }),
            [n]
        ),
        f = (0, s.U)(h);
    return null == n
        ? null
        : i
          ? (0, o.jsx)(a.MenuItem, {
                id: 'unmute-guild',
                label: _.Z.Messages.UNMUTE_SERVER,
                subtext: f,
                action: () => l.Z.updateGuildNotificationSettings(n, { muted: !1 }, g.ZB.Unmuted)
            })
          : (0, o.jsx)(a.MenuItem, {
                id: 'mute-guild',
                label: _.Z.Messages.MUTE_SERVER,
                action: () => l.Z.updateGuildNotificationSettings(n, { muted: !0 }, g.ZB.Muted),
                children: (0, u.k)().map((e) => {
                    let { value: i, label: c } = e;
                    return (0, o.jsx)(
                        a.MenuItem,
                        {
                            id: ''.concat(i),
                            label: c,
                            action: () =>
                                (function (e) {
                                    if (null == n) return;
                                    let o = e > 0 ? r()().add(e, 'second').toISOString() : null;
                                    l.Z.updateGuildNotificationSettings(
                                        n,
                                        {
                                            muted: !0,
                                            mute_config: {
                                                selected_time_window: e,
                                                end_time: o
                                            }
                                        },
                                        g.ZB.Muted,
                                        t
                                    );
                                })(i)
                        },
                        i
                    );
                })
            });
}
