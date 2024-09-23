n.d(t, {
    U: function () {
        return l;
    }
});
var s = n(735250);
n(470079);
var a = n(481060),
    r = n(46140),
    i = n(689938);
function o(e) {
    let { onClose: t, onSelect: n, quest: o } = e;
    return (0, s.jsx)(a.Menu, {
        variant: 'fixed',
        onSelect: t,
        navId: 'quest-home-platform-select-'.concat(o.id),
        'aria-label': i.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
        onClose: t,
        children: (0, s.jsxs)(
            a.MenuGroup,
            {
                children: [
                    (0, s.jsx)(a.MenuItem, {
                        id: 'desktop',
                        label: i.Z.Messages.QUEST_MULTIPLATFORM_SELECT_DESKTOP,
                        action: () => n(r.cd.DESKTOP),
                        icon: a.ScreenIcon
                    }),
                    (0, s.jsx)(a.MenuItem, {
                        id: 'console',
                        label: i.Z.Messages.QUEST_MULTIPLATFORM_SELECT_CONSOLE,
                        action: () => n(r.cd.CONSOLE),
                        icon: a.GameControllerIcon
                    })
                ]
            },
            'actions'
        )
    });
}
function l(e) {
    let { children: t, ...n } = e;
    return (0, s.jsx)(a.Popout, {
        position: 'bottom',
        align: 'right',
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, s.jsx)(o, {
                ...n,
                onClose: t
            });
        },
        children: t
    });
}
