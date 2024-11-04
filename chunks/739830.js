n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(481060),
    s = n(665149),
    a = n(585483),
    o = n(723170),
    c = n(64247),
    u = n(124368),
    d = n(981631),
    h = n(388032),
    m = n(607222);
function p(e) {
    let { channel: t } = e,
        n = (0, o.B)(t),
        [p, f] = l.useState(!1),
        g = (0, r.useRedesignIconContext)().enabled;
    l.useEffect(() => {
        let e = () => f(!0);
        return (
            a.S.subscribe(d.CkL.OPEN_THREAD_NOTIFICATION_SETTINGS, e),
            () => {
                a.S.unsubscribe(d.CkL.OPEN_THREAD_NOTIFICATION_SETTINGS, e);
            }
        );
    }, []);
    let C = h.intl.string(h.t.h850Sk);
    return (0, i.jsx)(r.Popout, {
        shouldShow: p,
        animation: r.Popout.Animation.NONE,
        position: 'bottom',
        align: 'right',
        autoInvert: !1,
        onRequestClose: () => f(!1),
        renderPopout: (e) =>
            (0, i.jsx)(c.Z, {
                ...e,
                channel: t,
                navId: 'thread-context',
                label: h.intl.string(h.t['1NBjqa'])
            }),
        children: (e, t) => {
            let { isShown: l } = t;
            return (0, i.jsx)(s.ZP.Icon, {
                ...e,
                onClick: () => f((e) => !e),
                tooltip: l ? null : C,
                icon: n === u.iN.NO_MESSAGES ? r.BellSlashIcon : r.BellIcon,
                foreground: n !== u.iN.NO_MESSAGES || g ? null : m.strikethrough,
                'aria-label': C,
                selected: l
            });
        }
    });
}
