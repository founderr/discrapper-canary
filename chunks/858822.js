n.d(t, {
    Z: function () {
        return M;
    }
});
var i = n(735250);
n(470079);
var u = n(913527),
    a = n.n(u),
    l = n(442837),
    o = n(481060),
    r = n(87051),
    c = n(776568),
    s = n(777861),
    d = n(9156),
    _ = n(621600),
    f = n(689938);
function M(e, t) {
    let n = null == e ? void 0 : e.id,
        { muted: u, muteConfig: M } = (0, l.cj)(
            [d.ZP],
            () => ({
                muted: null != n ? d.ZP.isMuted(n) : void 0,
                muteConfig: null != n ? d.ZP.getMuteConfig(n) : void 0
            }),
            [n]
        ),
        S = (0, s.U)(M);
    return null == n
        ? null
        : u
          ? (0, i.jsx)(o.MenuItem, {
                id: 'unmute-guild',
                label: f.Z.Messages.UNMUTE_SERVER,
                subtext: S,
                action: () => r.Z.updateGuildNotificationSettings(n, { muted: !1 }, _.ZB.Unmuted)
            })
          : (0, i.jsx)(o.MenuItem, {
                id: 'mute-guild',
                label: f.Z.Messages.MUTE_SERVER,
                action: () => r.Z.updateGuildNotificationSettings(n, { muted: !0 }, _.ZB.Muted),
                children: (0, c.k)().map((e) => {
                    let { value: u, label: l } = e;
                    return (0, i.jsx)(
                        o.MenuItem,
                        {
                            id: ''.concat(u),
                            label: l,
                            action: () =>
                                (function (e) {
                                    if (null == n) return;
                                    let i = e > 0 ? a()().add(e, 'second').toISOString() : null;
                                    r.Z.updateGuildNotificationSettings(
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
                                })(u)
                        },
                        u
                    );
                })
            });
}
