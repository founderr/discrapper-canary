n.d(t, {
    U: function () {
        return i;
    }
});
var o = n(200651);
n(192379);
var r = n(481060),
    s = n(46140),
    a = n(388032);
function l(e) {
    let { onClose: t, onSelect: n, quest: l } = e;
    return (0, o.jsx)(r.Menu, {
        variant: 'fixed',
        onSelect: t,
        navId: 'quest-home-platform-select-'.concat(l.id),
        'aria-label': a.intl.string(a.t.ogxXGh),
        onClose: t,
        children: (0, o.jsxs)(
            r.MenuGroup,
            {
                children: [
                    (0, o.jsx)(r.MenuItem, {
                        id: 'desktop',
                        label: a.intl.string(a.t.QXc019),
                        action: () => n(s.cd.DESKTOP),
                        icon: r.ScreenIcon
                    }),
                    (0, o.jsx)(r.MenuItem, {
                        id: 'console',
                        label: a.intl.string(a.t['8lAfuL']),
                        action: () => n(s.cd.CONSOLE),
                        icon: r.GameControllerIcon
                    })
                ]
            },
            'actions'
        )
    });
}
function i(e) {
    let { children: t, ...n } = e;
    return (0, o.jsx)(r.Popout, {
        position: 'bottom',
        align: 'right',
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, o.jsx)(l, {
                ...n,
                onClose: t
            });
        },
        children: t
    });
}
