var i = t(735250);
t(470079);
var a = t(481060), r = t(689938);
n.Z = e => {
    let {
        onChangeAvatar: n,
        onChangeAvatarDecoration: t,
        onClose: o,
        className: s
    } = e;
    return (0, i.jsxs)(a.Menu, {
        className: s,
        onClose: o,
        onSelect: void 0,
        navId: 'user-settings-change-avatar',
        'aria-label': r.Z.Messages.AVATAR_ACTIONS_MENU_LABEL,
        children: [
            (0, i.jsx)(a.MenuItem, {
                id: 'change-avatar',
                action: n,
                label: r.Z.Messages.USER_SETTINGS_CHANGE_AVATAR
            }),
            (0, i.jsx)(a.MenuItem, {
                id: 'change-avatar-decoration',
                action: t,
                label: r.Z.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
            })
        ]
    });
};
