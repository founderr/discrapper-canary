n.d(t, {
    Z: function () {
        return M;
    }
});
var i = n(735250);
n(470079);
var a = n(913527),
    l = n.n(a),
    u = n(442837),
    o = n(481060),
    r = n(92114),
    s = n(776568),
    c = n(777861),
    d = n(9156),
    _ = n(621600),
    f = n(689938);
function M(e, t) {
    let n = null == e ? void 0 : e.id,
        { muted: a, muteConfig: M } = (0, u.cj)(
            [d.ZP],
            () => ({
                muted: null != n ? d.ZP.isMuted(n) : void 0,
                muteConfig: null != n ? d.ZP.getMuteConfig(n) : void 0
            }),
            [n]
        ),
        S = (0, c.U)(M);
    return null == n
        ? null
        : a
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
                children: (0, s.k)().map((e) => {
                    let { value: a, label: u } = e;
                    return (0, i.jsx)(
                        o.MenuItem,
                        {
                            id: ''.concat(a),
                            label: u,
                            action: () =>
                                (function (e) {
                                    if (null == n) return;
                                    let i = e > 0 ? l()().add(e, 'second').toISOString() : null;
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
                                })(a)
                        },
                        a
                    );
                })
            });
}
