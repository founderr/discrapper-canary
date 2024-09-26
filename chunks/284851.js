n.d(t, {
    U: function () {
        return i;
    }
});
var s = n(735250);
n(470079);
var o = n(481060),
    r = n(46140),
    a = n(689938);
function l(e) {
    let { onClose: t, onSelect: n, quest: l } = e;
    return (0, s.jsx)(o.Menu, {
        variant: 'fixed',
        onSelect: t,
        navId: 'quest-home-platform-select-'.concat(l.id),
        'aria-label': a.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
        onClose: t,
        children: (0, s.jsxs)(
            o.MenuGroup,
            {
                children: [
                    (0, s.jsx)(o.MenuItem, {
                        id: 'desktop',
                        label: a.Z.Messages.QUEST_MULTIPLATFORM_SELECT_DESKTOP,
                        action: () => n(r.cd.DESKTOP),
                        icon: o.ScreenIcon
                    }),
                    (0, s.jsx)(o.MenuItem, {
                        id: 'console',
                        label: a.Z.Messages.QUEST_MULTIPLATFORM_SELECT_CONSOLE,
                        action: () => n(r.cd.CONSOLE),
                        icon: o.GameControllerIcon
                    })
                ]
            },
            'actions'
        )
    });
}
function i(e) {
    let { children: t, ...n } = e;
    return (0, s.jsx)(o.Popout, {
        position: 'bottom',
        align: 'right',
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, s.jsx)(l, {
                ...n,
                onClose: t
            });
        },
        children: t
    });
}
