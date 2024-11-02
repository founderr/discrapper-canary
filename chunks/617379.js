n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(110255),
    a = n(64247),
    o = n(981631),
    s = n(388032);
function c(e) {
    let { channel: t } = e;
    return (0, i.jsx)(r.Popout, {
        align: 'right',
        animation: r.Popout.Animation.NONE,
        position: 'bottom',
        renderPopout: (e) =>
            t.isThread()
                ? (0, i.jsx)(a.Z, {
                      ...e,
                      channel: t,
                      navId: 'recents-thread-notifications',
                      label: s.intl.string(s.t.ljs3OT)
                  })
                : (0, i.jsx)(l.Z, {
                      ...e,
                      channel: t,
                      navId: 'recents-notifications',
                      label: s.intl.string(s.t.ljs3OT),
                      location: { section: o.jXE.INBOX },
                      includeGuildMute: !0
                  }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(r.CircleIconButton, {
                tooltip: s.intl.string(s.t.h850Sk),
                color: r.CircleIconButtonColors.TERTIARY,
                icon: (0, i.jsx)(r.BellIcon, {
                    size: 'xs',
                    color: 'currentColor'
                }),
                onClick: t
            });
        }
    });
}
