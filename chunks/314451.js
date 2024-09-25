n.d(t, {
    Z: function () {
        return h;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(442837),
    s = n(481060),
    l = n(782568),
    u = n(31336),
    c = n(906467),
    d = n(63063),
    _ = n(665149),
    E = n(689938);
function f(e) {
    let { onClose: t, isDiscordDeveloper: r } = e;
    return (0, i.jsx)(s.Menu, {
        onSelect: () => {},
        navId: 'staff-help-popout',
        variant: 'fixed',
        onClose: t,
        'aria-label': E.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
        children: (0, i.jsxs)(s.MenuGroup, {
            children: [
                (0, i.jsx)(s.MenuItem, {
                    id: 'staff-help-bug-reporter',
                    label: E.Z.Messages.BUG_REPORT_TITLE,
                    icon: s.BugIcon,
                    action: () =>
                        (0, s.openModalLazy)(async () => {
                            let { default: e } = await n.e('83051').then(n.bind(n, 115072));
                            return (t) => (0, i.jsx)(e, { ...t });
                        })
                }),
                r &&
                    (0, i.jsx)(s.MenuItem, {
                        id: 'staff-devtools',
                        label: 'Toggle DevTools',
                        icon: s.StaffBadgeIcon,
                        action: () => (0, u.SO)()
                    }),
                (0, i.jsx)(s.MenuItem, {
                    id: 'staff-help-center',
                    label: 'Go to Help Center',
                    icon: s.WindowLaunchIcon,
                    action: () => (0, l.Z)(d.w)
                })
            ]
        })
    });
}
function h() {
    let e = (0, o.e7)([c.Z], () => c.Z.isDeveloper),
        [t, n] = a.useState(!1),
        [r, l] = a.useState(0),
        u = (e) => {
            clearTimeout(r),
                l(
                    setTimeout(() => {
                        n(e);
                    }, 100)
                );
        };
    return (0, i.jsx)('div', {
        onMouseEnter: () => u(!0),
        onMouseLeave: () => u(!1),
        children: (0, i.jsx)(s.Popout, {
            shouldShow: t,
            animation: s.Popout.Animation.NONE,
            position: 'bottom',
            align: 'right',
            autoInvert: !1,
            onRequestOpen: () => n(!0),
            onRequestClose: () => n(!1),
            renderPopout: () =>
                f({
                    onClose: () => n(!1),
                    isDiscordDeveloper: e
                }),
            children: (e, t) => {
                let { isShown: n } = t;
                return (0, i.jsx)(_.JO, {
                    ...e,
                    icon: s.BugIcon,
                    'aria-label': E.Z.Messages.HELP,
                    selected: n
                });
            }
        })
    });
}
