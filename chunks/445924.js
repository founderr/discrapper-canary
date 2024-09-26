var s = n(735250);
n(470079);
var a = n(481060),
    r = n(689938);
t.Z = (e) => {
    let { onChangeAvatar: t, onChangeAvatarDecoration: n, onClose: i, className: l } = e;
    return (0, s.jsxs)(a.Menu, {
        className: l,
        onClose: i,
        onSelect: void 0,
        navId: 'user-settings-change-avatar',
        'aria-label': r.Z.Messages.AVATAR_ACTIONS_MENU_LABEL,
        children: [
            (0, s.jsx)(a.MenuItem, {
                id: 'change-avatar',
                action: t,
                label: r.Z.Messages.USER_SETTINGS_CHANGE_AVATAR
            }),
            (0, s.jsx)(a.MenuItem, {
                id: 'change-avatar-decoration',
                action: n,
                label: r.Z.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
            })
        ]
    });
};
