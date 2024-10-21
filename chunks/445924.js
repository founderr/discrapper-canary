var t = a(200651);
a(192379);
var s = a(481060),
    c = a(689938);
n.Z = (e) => {
    let { onChangeAvatar: n, onChangeAvatarDecoration: a, onClose: o, className: i } = e;
    return (0, t.jsxs)(s.Menu, {
        className: i,
        onClose: o,
        onSelect: void 0,
        navId: 'user-settings-change-avatar',
        'aria-label': c.Z.Messages.AVATAR_ACTIONS_MENU_LABEL,
        children: [
            (0, t.jsx)(s.MenuItem, {
                id: 'change-avatar',
                action: n,
                label: c.Z.Messages.USER_SETTINGS_CHANGE_AVATAR
            }),
            (0, t.jsx)(s.MenuItem, {
                id: 'change-avatar-decoration',
                action: a,
                label: c.Z.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
            })
        ]
    });
};
