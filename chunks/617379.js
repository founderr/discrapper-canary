n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(110255),
    o = n(64247),
    s = n(981631),
    l = n(689938);
function u(e) {
    let { channel: t } = e;
    return (0, r.jsx)(i.Popout, {
        align: 'right',
        animation: i.Popout.Animation.NONE,
        position: 'bottom',
        renderPopout: (e) =>
            t.isThread()
                ? (0, r.jsx)(o.Z, {
                      ...e,
                      channel: t,
                      navId: 'recents-thread-notifications',
                      label: l.Z.Messages.RECENTS_NOTIFICATIONS_MENU_LABEL
                  })
                : (0, r.jsx)(a.Z, {
                      ...e,
                      channel: t,
                      navId: 'recents-notifications',
                      label: l.Z.Messages.RECENTS_NOTIFICATIONS_MENU_LABEL,
                      location: { section: s.jXE.INBOX },
                      includeGuildMute: !0
                  }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, r.jsx)(i.CircleIconButton, {
                tooltip: l.Z.Messages.NOTIFICATION_SETTINGS,
                color: i.CircleIconButtonColors.TERTIARY,
                icon: (0, r.jsx)(i.BellIcon, {
                    size: 'xs',
                    color: 'currentColor'
                }),
                onClick: t
            });
        }
    });
}
