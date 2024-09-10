t.d(n, {
    Z: function () {
        return u;
    }
}),
    t(47120);
var s = t(735250);
t(470079);
var i = t(442837),
    l = t(481060),
    a = t(699516),
    o = t(689938);
function u(e) {
    let { user: n, onAction: u } = e,
        d = n.id,
        [r, c] = (0, i.Wu)(
            [a.Z],
            () => {
                var e;
                return [a.Z.isFriend(d), null !== (e = a.Z.getNickname(d)) && void 0 !== e ? e : null];
            },
            [d]
        );
    if (!r) return null;
    let E = null == c ? o.Z.Messages.ADD_FRIEND_NICKNAME : o.Z.Messages.CHANGE_FRIEND_NICKNAME;
    return (0, s.jsx)(l.MenuItem, {
        id: null == c ? 'add-friend-nickname' : 'edit-friend-nickname',
        label: E,
        action: () => {
            null == u || u(),
                (0, l.openModalLazy)(async () => {
                    let { default: e } = await t.e('25070').then(t.bind(t, 670794));
                    return (t) =>
                        (0, s.jsx)(e, {
                            user: n,
                            nickname: c,
                            ...t
                        });
                });
        }
    });
}
