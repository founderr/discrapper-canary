var i = a(735250);
a(470079);
var r = a(481060),
    s = a(689938);
n.Z = (e) => {
    let { onChangeAvatar: n, onChangeAvatarDecoration: a, onClose: o, className: l } = e;
    return (0, i.jsxs)(r.Menu, {
        className: l,
        onClose: o,
        onSelect: void 0,
        navId: 'user-settings-change-avatar',
        'aria-label': s.Z.Messages.AVATAR_ACTIONS_MENU_LABEL,
        children: [
            (0, i.jsx)(r.MenuItem, {
                id: 'change-avatar',
                action: n,
                label: s.Z.Messages.USER_SETTINGS_CHANGE_AVATAR
            }),
            (0, i.jsx)(r.MenuItem, {
                id: 'change-avatar-decoration',
                action: a,
                label: s.Z.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
            })
        ]
    });
};
