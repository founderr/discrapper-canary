n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    a = n(442837),
    l = n(481060),
    r = n(87051),
    o = n(9156),
    c = n(585483),
    u = n(621600),
    d = n(665149),
    h = n(110255),
    p = n(981631),
    m = n(689938),
    _ = n(938565);
function f(e) {
    let { channel: t } = e,
        n = (0, l.useRedesignIconContext)().enabled,
        [f, E] = (0, a.Wu)([o.ZP], () => [o.ZP.isChannelMuted(t.getGuildId(), t.id), o.ZP.resolvedMessageNotifications(t)], [t]),
        [g, C] = s.useState(!1);
    s.useEffect(() => {
        let e = () => C(!0);
        return (
            c.S.subscribe(p.CkL.OPEN_THREAD_NOTIFICATION_SETTINGS, e),
            () => {
                c.S.unsubscribe(p.CkL.OPEN_THREAD_NOTIFICATION_SETTINGS, e);
            }
        );
    }, []);
    let I = (e) => {
            e.shiftKey ? r.Z.updateChannelOverrideSettings(t.guild_id, t.id, { muted: !f }, u.UE.muted(!f)) : C((e) => !e);
        },
        T = m.Z.Messages.NOTIFICATION_SETTINGS;
    return (0, i.jsx)(l.Popout, {
        shouldShow: g,
        animation: l.Popout.Animation.NONE,
        position: 'bottom',
        align: 'right',
        autoInvert: !1,
        onRequestClose: () => C(!1),
        renderPopout: (e) =>
            (0, i.jsx)(h.Z, {
                ...e,
                channel: t,
                navId: 'channel-context',
                label: m.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL
            }),
        children: (e, t) => {
            let { isShown: s } = t;
            return (0, i.jsx)(d.ZP.Icon, {
                ...e,
                onClick: I,
                tooltip: s ? null : T,
                icon: f || E !== p.bL.ALL_MESSAGES ? l.BellSlashIcon : l.BellIcon,
                foreground: f && !n ? _.strikethrough : null,
                'aria-label': T,
                selected: s
            });
        }
    });
}
