n.d(t, {
    Z: function () {
        return _;
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
    d = n(695346),
    u = n(699516),
    h = n(594174),
    p = n(971393),
    m = n(646915),
    f = n(184301),
    g = n(432958),
    C = n(792379),
    x = n(177222);
function _(e) {
    let { channel: t, ...n } = e,
        r = (0, m.Z)();
    (0, o.t)();
    let [_] = t.recipients,
        v = (0, s.e7)([h.default], () => h.default.getUser(_));
    a()(null != v, 'UserProfilePanelWrapper: user cannot be undefined');
    let I = (0, s.e7)([h.default], () => h.default.getCurrentUser());
    a()(null != I, 'UserProfilePanelWrapper: currentUser cannot be undefined'),
        l.useEffect(() => {
            (0, f.Z)(v, {
                withMutualFriends: !v.bot,
                withMutualGuilds: !0,
                channelId: t.id
            });
        }, [v, t.id]);
    let { isBlocked: E, isIgnored: b } = (0, s.cj)([u.Z], () => ({
            isBlocked: u.Z.isBlocked(v.id),
            isIgnored: u.Z.isIgnored(v.id)
        })),
        N = (0, c.Do)({ location: 'UserProfilePanelWrapper' }),
        [Z, S] = l.useState(E || (N && (b || E))),
        T = (0, p.sS)({ location: 'UserProfilePopoutWrapper' });
    l.useEffect(() => {
        S(E || (N && (b || E)));
    }, [E, b, N]);
    let j = d.Rt.useSetting();
    return r
        ? null
        : Z && T && !N
          ? (0, i.jsx)(g.Z, {
                user: v,
                currentUser: I,
                channel: t,
                onViewBlockedProfileClick: () => S(!1),
                ...n
            })
          : N && Z && !(b && j)
            ? (0, i.jsx)(g.A, {
                  user: v,
                  currentUser: I,
                  channel: t,
                  onViewBlockedProfileClick: () => S(!1),
                  ...n
              })
            : v.isNonUserBot()
              ? (0, i.jsx)(C.Z, {
                    user: v,
                    currentUser: I,
                    channel: t,
                    ...n
                })
              : (0, i.jsx)(x.Z, {
                    user: v,
                    currentUser: I,
                    channel: t,
                    ...n
                });
}
