n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(438536),
    o = n(214906),
    s = n(346479),
    l = n(723170),
    u = n(124368);
function c(e) {
    let { channel: t, closePopout: n, onSelect: c, navId: d, label: _ } = e,
        E = (0, a.Z)(t, 'Notifications Bell'),
        f = (0, o.Z)(t),
        h = (0, l.B)(t);
    return (0, r.jsxs)(i.Menu, {
        navId: d,
        onClose: n,
        'aria-label': _,
        onSelect: c,
        children: [
            (0, r.jsxs)(i.MenuGroup, {
                children: [t.isForumPost() ? E : null, f]
            }),
            (0, r.jsx)(i.MenuGroup, {
                children: (0, u.zb)().map((e) => {
                    let { setting: n, label: a } = e;
                    return (0, r.jsx)(
                        i.MenuRadioItem,
                        {
                            group: 'thread-notifications',
                            id: ''.concat(n),
                            label: a,
                            action: () => s.Z.setNotificationSettings(t, { flags: n }),
                            checked: n === h
                        },
                        n
                    );
                })
            })
        ]
    });
}
