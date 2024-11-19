n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(512722),
    a = n.n(r),
    s = n(442837),
    o = n(911367),
    c = n(922611),
    d = n(699516),
    u = n(594174),
    h = n(971393),
    p = n(646915),
    m = n(184301),
    f = n(432958),
    g = n(792379),
    C = n(177222);
function x(e) {
    let { channel: t, ...n } = e,
        r = (0, p.Z)();
    (0, o.t)();
    let [x] = t.recipients,
        _ = (0, s.e7)([u.default], () => u.default.getUser(x));
    a()(null != _, 'UserProfilePanelWrapper: user cannot be undefined');
    let v = (0, s.e7)([u.default], () => u.default.getCurrentUser());
    a()(null != v, 'UserProfilePanelWrapper: currentUser cannot be undefined'),
        l.useEffect(() => {
            (0, m.Z)(_, {
                withMutualFriends: !_.bot,
                withMutualGuilds: !0,
                channelId: t.id
            });
        }, [_, t.id]);
    let { isBlocked: I, isIgnored: E } = (0, s.cj)([d.Z], () => ({
            isBlocked: d.Z.isBlocked(_.id),
            isIgnored: d.Z.isIgnored(_.id)
        })),
        b = (0, c.Do)({ location: 'UserProfilePanelWrapper' }),
        [Z, N] = l.useState(I || (b && (E || I))),
        S = (0, h.sS)({ location: 'UserProfilePopoutWrapper' });
    return (l.useEffect(() => {
        N(I || (b && (E || I)));
    }, [I, E, b]),
    r)
        ? null
        : Z && S && !b
          ? (0, i.jsx)(f.Z, {
                user: _,
                currentUser: v,
                channel: t,
                onViewBlockedProfileClick: () => N(!1),
                ...n
            })
          : b && Z
            ? (0, i.jsx)(f.A, {
                  user: _,
                  currentUser: v,
                  channel: t,
                  onViewBlockedProfileClick: () => N(!1),
                  ...n
              })
            : _.isNonUserBot()
              ? (0, i.jsx)(g.Z, {
                    user: _,
                    currentUser: v,
                    channel: t,
                    ...n
                })
              : (0, i.jsx)(C.Z, {
                    user: _,
                    currentUser: v,
                    channel: t,
                    ...n
                });
}
