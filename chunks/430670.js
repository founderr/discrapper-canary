n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(512722),
    l = n.n(s),
    r = n(442837),
    o = n(911367),
    c = n(699516),
    u = n(594174),
    d = n(971393),
    h = n(184301),
    p = n(249882),
    m = n(432958),
    _ = n(792379),
    f = n(177222);
function E(e) {
    let { channel: t, ...n } = e,
        s = (0, p.Z)();
    (0, o.t)();
    let [E] = t.recipients,
        C = (0, r.e7)([u.default], () => u.default.getUser(E));
    l()(null != C, 'UserProfilePanelWrapper: user cannot be undefined');
    let g = (0, r.e7)([u.default], () => u.default.getCurrentUser());
    l()(null != g, 'UserProfilePanelWrapper: currentUser cannot be undefined'),
        a.useEffect(() => {
            (0, h.Z)(C, {
                withMutualFriends: !C.bot,
                withMutualGuilds: !0,
                channelId: t.id
            });
        }, [C, t.id]);
    let I = (0, r.e7)([c.Z], () => c.Z.isBlocked(C.id)),
        [x, T] = a.useState(I),
        N = (0, d.sS)({ location: 'UserProfilePanelWrapper' });
    return (a.useEffect(() => {
        T(I);
    }, [I]),
    s)
        ? null
        : x && N
          ? (0, i.jsx)(m.Z, {
                user: C,
                currentUser: g,
                channel: t,
                onViewBlockedProfileClick: () => T(!1),
                ...n
            })
          : C.isNonUserBot()
            ? (0, i.jsx)(_.Z, {
                  user: C,
                  currentUser: g,
                  channel: t,
                  ...n
              })
            : (0, i.jsx)(f.Z, {
                  user: C,
                  currentUser: g,
                  channel: t,
                  ...n
              });
}
