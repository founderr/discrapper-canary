n.d(t, {
    U: function () {
        return i;
    }
});
var o = n(735250);
n(470079);
var s = n(481060),
    r = n(46140),
    a = n(689938);
function l(e) {
    let { onClose: t, onSelect: n, quest: l } = e;
    return (0, o.jsx)(s.Menu, {
        variant: 'fixed',
        onSelect: t,
        navId: 'quest-home-platform-select-'.concat(l.id),
        'aria-label': a.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
        onClose: t,
        children: (0, o.jsxs)(
            s.MenuGroup,
            {
                children: [
                    (0, o.jsx)(s.MenuItem, {
                        id: 'desktop',
                        label: a.Z.Messages.QUEST_MULTIPLATFORM_SELECT_DESKTOP,
                        action: () => n(r.cd.DESKTOP),
                        icon: s.ScreenIcon
                    }),
                    (0, o.jsx)(s.MenuItem, {
                        id: 'console',
                        label: a.Z.Messages.QUEST_MULTIPLATFORM_SELECT_CONSOLE,
                        action: () => n(r.cd.CONSOLE),
                        icon: s.GameControllerIcon
                    })
                ]
            },
            'actions'
        )
    });
}
function i(e) {
    let { children: t, ...n } = e;
    return (0, o.jsx)(s.Popout, {
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
