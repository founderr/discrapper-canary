t.d(n, {
    Z: function () {
        return u;
    }
}),
    t(47120);
var l = t(200651);
t(192379);
var i = t(442837),
    a = t(481060),
    s = t(699516),
    o = t(689938);
function u(e) {
    let { user: n, onAction: u } = e,
        d = n.id,
        [r, c] = (0, i.Wu)(
            [s.Z],
            () => {
                var e;
                return [s.Z.isFriend(d), null !== (e = s.Z.getNickname(d)) && void 0 !== e ? e : null];
            },
            [d]
        );
    if (!r) return null;
    let Z = null == c ? o.Z.Messages.ADD_FRIEND_NICKNAME : o.Z.Messages.CHANGE_FRIEND_NICKNAME;
    return (0, l.jsx)(a.MenuItem, {
        id: null == c ? 'add-friend-nickname' : 'edit-friend-nickname',
        label: Z,
        action: () => {
            null == u || u(),
                (0, a.openModalLazy)(async () => {
                    let { default: e } = await t.e('25070').then(t.bind(t, 670794));
                    return (t) =>
                        (0, l.jsx)(e, {
                            user: n,
                            nickname: c,
                            ...t
                        });
                });
        }
    });
}
