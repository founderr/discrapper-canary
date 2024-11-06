n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    o = n(782568),
    s = n(31336),
    c = n(906467),
    u = n(63063),
    d = n(665149),
    m = n(388032);
function h() {
    let e = (0, l.e7)([c.Z], () => c.Z.isDeveloper),
        [t, h] = r.useState(!1),
        [f, p] = r.useState(0),
        g = (e) => {
            clearTimeout(f),
                p(
                    setTimeout(() => {
                        h(e);
                    }, 100)
                );
        };
    return (0, i.jsx)('div', {
        onMouseEnter: () => g(!0),
        onMouseLeave: () => g(!1),
        children: (0, i.jsx)(a.Popout, {
            shouldShow: t,
            animation: a.Popout.Animation.NONE,
            position: 'bottom',
            align: 'right',
            autoInvert: !1,
            onRequestOpen: () => h(!0),
            onRequestClose: () => h(!1),
            renderPopout: () =>
                (function (e) {
                    let { onClose: t, isDiscordDeveloper: r } = e;
                    return (0, i.jsx)(a.Menu, {
                        onSelect: () => {},
                        navId: 'staff-help-popout',
                        variant: 'fixed',
                        onClose: t,
                        'aria-label': m.intl.string(m.t.HpQykZ),
                        children: (0, i.jsxs)(a.MenuGroup, {
                            children: [
                                (0, i.jsx)(a.MenuItem, {
                                    id: 'staff-help-bug-reporter',
                                    label: m.intl.string(m.t['5Lqopa']),
                                    icon: a.BugIcon,
                                    action: () =>
                                        (0, a.openModalLazy)(async () => {
                                            let { default: e } = await n.e('83051').then(n.bind(n, 115072));
                                            return (t) => (0, i.jsx)(e, { ...t });
                                        })
                                }),
                                r &&
                                    (0, i.jsx)(a.MenuItem, {
                                        id: 'staff-devtools',
                                        label: 'Toggle DevTools',
                                        icon: a.StaffBadgeIcon,
                                        action: () => (0, s.SO)()
                                    }),
                                (0, i.jsx)(a.MenuItem, {
                                    id: 'staff-help-center',
                                    label: 'Go to Help Center',
                                    icon: a.WindowLaunchIcon,
                                    action: () => (0, o.Z)(u.w)
                                })
                            ]
                        })
                    });
                })({
                    onClose: () => h(!1),
                    isDiscordDeveloper: e
                }),
            children: (e, t) => {
                let { isShown: n } = t;
                return (0, i.jsx)(d.JO, {
                    ...e,
                    icon: a.BugIcon,
                    'aria-label': m.intl.string(m.t.cqEoj4),
                    selected: n
                });
            }
        })
    });
}
