n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(512722),
    a = n.n(r),
    s = n(442837),
    o = n(911367),
    c = n(699516),
    d = n(594174),
    u = n(971393),
    h = n(646915),
    p = n(184301),
    m = n(432958),
    f = n(792379),
    g = n(177222);
function C(e) {
    let { channel: t, ...n } = e,
        r = (0, h.Z)();
    (0, o.t)();
    let [C] = t.recipients,
        x = (0, s.e7)([d.default], () => d.default.getUser(C));
    a()(null != x, 'UserProfilePanelWrapper: user cannot be undefined');
    let _ = (0, s.e7)([d.default], () => d.default.getCurrentUser());
    a()(null != _, 'UserProfilePanelWrapper: currentUser cannot be undefined'),
        l.useEffect(() => {
            (0, p.Z)(x, {
                withMutualFriends: !x.bot,
                withMutualGuilds: !0,
                channelId: t.id
            });
        }, [x, t.id]);
    let v = (0, s.e7)([c.Z], () => c.Z.isBlocked(x.id)),
        [I, E] = l.useState(v),
        b = (0, u.sS)({ location: 'UserProfilePanelWrapper' });
    return (l.useEffect(() => {
        E(v);
    }, [v]),
    r)
        ? null
        : I && b
          ? (0, i.jsx)(m.Z, {
                user: x,
                currentUser: _,
                channel: t,
                onViewBlockedProfileClick: () => E(!1),
                ...n
            })
          : x.isNonUserBot()
            ? (0, i.jsx)(f.Z, {
                  user: x,
                  currentUser: _,
                  channel: t,
                  ...n
              })
            : (0, i.jsx)(g.Z, {
                  user: x,
                  currentUser: _,
                  channel: t,
                  ...n
              });
}
