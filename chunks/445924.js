var i = t(200651);
t(192379);
var a = t(481060),
    r = t(388032);
n.Z = (e) => {
    let { onChangeAvatar: n, onChangeAvatarDecoration: t, onClose: o, className: l } = e;
    return (0, i.jsxs)(a.Menu, {
        className: l,
        onClose: o,
        onSelect: void 0,
        navId: 'user-settings-change-avatar',
        'aria-label': r.intl.string(r.t.ldIeAQ),
        children: [
            (0, i.jsx)(a.MenuItem, {
                id: 'change-avatar',
                action: n,
                label: r.intl.string(r.t['4OynCA'])
            }),
            (0, i.jsx)(a.MenuItem, {
                id: 'change-avatar-decoration',
                action: t,
                label: r.intl.string(r.t['Tna/TU'])
            })
        ]
    });
};
