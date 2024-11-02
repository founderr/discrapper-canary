n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    s = n(87051),
    o = n(9156),
    c = n(585483),
    u = n(621600),
    d = n(665149),
    h = n(110255),
    m = n(981631),
    p = n(388032),
    f = n(938565);
function g(e) {
    let { channel: t } = e,
        n = (0, a.useRedesignIconContext)().enabled,
        [g, C] = (0, r.Wu)([o.ZP], () => [o.ZP.isChannelMuted(t.getGuildId(), t.id), o.ZP.resolvedMessageNotifications(t)], [t]),
        [x, v] = l.useState(!1);
    l.useEffect(() => {
        let e = () => v(!0);
        return (
            c.S.subscribe(m.CkL.OPEN_THREAD_NOTIFICATION_SETTINGS, e),
            () => {
                c.S.unsubscribe(m.CkL.OPEN_THREAD_NOTIFICATION_SETTINGS, e);
            }
        );
    }, []);
    let _ = (e) => {
            e.shiftKey ? s.Z.updateChannelOverrideSettings(t.guild_id, t.id, { muted: !g }, u.UE.muted(!g)) : v((e) => !e);
        },
        I = p.intl.string(p.t.h850Sk);
    return (0, i.jsx)(a.Popout, {
        shouldShow: x,
        animation: a.Popout.Animation.NONE,
        position: 'bottom',
        align: 'right',
        autoInvert: !1,
        onRequestClose: () => v(!1),
        renderPopout: (e) =>
            (0, i.jsx)(h.Z, {
                ...e,
                channel: t,
                navId: 'channel-context',
                label: p.intl.string(p.t.Xm41aW)
            }),
        children: (e, t) => {
            let { isShown: l } = t;
            return (0, i.jsx)(d.ZP.Icon, {
                ...e,
                onClick: _,
                tooltip: l ? null : I,
                icon: g || C !== m.bL.ALL_MESSAGES ? a.BellSlashIcon : a.BellIcon,
                foreground: g && !n ? f.strikethrough : null,
                'aria-label': I,
                selected: l
            });
        }
    });
}
