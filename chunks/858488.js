n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    o = n(699516),
    a = n(388032);
function u(e) {
    let { user: t, onAction: u } = e,
        d = t.id,
        [s, c] = (0, l.Wu)(
            [o.Z],
            () => {
                var e;
                return [o.Z.isFriend(d), null !== (e = o.Z.getNickname(d)) && void 0 !== e ? e : null];
            },
            [d]
        );
    if (!s) return null;
    let f = null == c ? a.intl.string(a.t.BGYkaG) : a.intl.string(a.t['8pOYUF']);
    return (0, i.jsx)(r.MenuItem, {
        id: null == c ? 'add-friend-nickname' : 'edit-friend-nickname',
        label: f,
        action: () => {
            null == u || u(),
                (0, r.openModalLazy)(async () => {
                    let { default: e } = await n.e('25070').then(n.bind(n, 670794));
                    return (n) =>
                        (0, i.jsx)(e, {
                            user: t,
                            nickname: c,
                            ...n
                        });
                });
        }
    });
}
