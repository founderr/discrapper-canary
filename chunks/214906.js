n.d(t, {
    Z: function () {
        return E;
    }
}), n(47120);
var i = n(735250);
n(470079);
var a = n(913527), s = n.n(a), l = n(442837), r = n(481060), o = n(777861), c = n(569471), d = n(346479), u = n(776568), _ = n(689938);
function E(e) {
    let [t, n, a] = (0, l.Wu)([c.Z], () => [
            c.Z.isMuted(e.id),
            c.Z.getMuteConfig(e.id),
            c.Z.hasJoined(e.id)
        ]), E = (0, o.U)(n);
    function m(t) {
        d.Z.setNotificationSettings(e, { muted: t });
    }
    return a ? t ? (0, i.jsx)(r.MenuItem, {
        id: 'unmute-channel',
        label: e.isForumPost() ? _.Z.Messages.UNMUTE_FORUM_POST : _.Z.Messages.UNMUTE_THREAD,
        subtext: E,
        action: () => m(!1)
    }) : (0, i.jsx)(r.MenuItem, {
        id: 'mute-channel',
        label: e.isForumPost() ? _.Z.Messages.MUTE_FORUM_POST : _.Z.Messages.MUTE_THREAD,
        action: () => m(!0),
        children: (0, u.k)().map(t => {
            let {
                value: n,
                label: a
            } = t;
            return (0, i.jsx)(r.MenuItem, {
                id: ''.concat(n),
                label: a,
                action: () => function (t) {
                    let n = t > 0 ? s()().add(t, 'second').toISOString() : null;
                    d.Z.setNotificationSettings(e, {
                        muted: !0,
                        mute_config: {
                            selected_time_window: t,
                            end_time: n
                        }
                    });
                }(n)
            }, n);
        })
    }) : (0, i.jsx)(r.MenuItem, {
        id: 'mute-disabled',
        label: e.isForumPost() ? _.Z.Messages.MUTE_FORUM_POST : _.Z.Messages.MUTE_THREAD,
        disabled: !0
    });
}
