var i = a(735250);
a(470079);
var s = a(481060),
    r = a(689938);
n.Z = (e) => {
    let { onChangeAvatar: n, onChangeAvatarDecoration: a, onClose: o, className: l } = e;
    return (0, i.jsxs)(s.Menu, {
        className: l,
        onClose: o,
        onSelect: void 0,
        navId: 'user-settings-change-avatar',
        'aria-label': r.Z.Messages.AVATAR_ACTIONS_MENU_LABEL,
        children: [
            (0, i.jsx)(s.MenuItem, {
                id: 'change-avatar',
                action: n,
                label: r.Z.Messages.USER_SETTINGS_CHANGE_AVATAR
            }),
            (0, i.jsx)(s.MenuItem, {
                id: 'change-avatar-decoration',
                action: a,
                label: r.Z.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
            })
        ]
    });
};
