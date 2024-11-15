n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(481060),
    s = n(87051),
    o = n(9156),
    c = n(585483),
    d = n(621600),
    u = n(665149),
    h = n(110255),
    p = n(981631),
    m = n(388032),
    f = n(459445);
function g(e) {
    let { channel: t } = e,
        n = (0, r.useRedesignIconContext)().enabled,
        [g, C] = (0, a.Wu)([o.ZP], () => [o.ZP.isChannelMuted(t.getGuildId(), t.id), o.ZP.resolvedMessageNotifications(t)], [t]),
        [x, v] = l.useState(!1);
    l.useEffect(() => {
        let e = () => v(!0);
        return (
            c.S.subscribe(p.CkL.OPEN_THREAD_NOTIFICATION_SETTINGS, e),
            () => {
                c.S.unsubscribe(p.CkL.OPEN_THREAD_NOTIFICATION_SETTINGS, e);
            }
        );
    }, []);
    let _ = (e) => {
            e.shiftKey ? s.Z.updateChannelOverrideSettings(t.guild_id, t.id, { muted: !g }, d.UE.muted(!g)) : v((e) => !e);
        },
        I = m.intl.string(m.t.h850Sk);
    return (0, i.jsx)(r.Popout, {
        shouldShow: x,
        animation: r.Popout.Animation.NONE,
        position: 'bottom',
        align: 'right',
        autoInvert: !1,
        onRequestClose: () => v(!1),
        renderPopout: (e) =>
            (0, i.jsx)(h.Z, {
                ...e,
                channel: t,
                navId: 'channel-context',
                label: m.intl.string(m.t.Xm41aW)
            }),
        children: (e, t) => {
            let { isShown: l } = t;
            return (0, i.jsx)(u.ZP.Icon, {
                ...e,
                onClick: _,
                tooltip: l ? null : I,
                icon: g || C !== p.bL.ALL_MESSAGES ? r.BellSlashIcon : r.BellIcon,
                foreground: g && !n ? f.strikethrough : null,
                'aria-label': I,
                selected: l
            });
        }
    });
}
