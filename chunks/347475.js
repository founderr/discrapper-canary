n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(512722),
    s = n.n(a),
    o = n(442837),
    l = n(922611),
    u = n(695346),
    c = n(699516),
    d = n(594174),
    f = n(971393),
    _ = n(614417),
    p = n(601665),
    h = n(103113),
    m = n(738953);
function g(e) {
    let { userId: t, user: n, ...a } = e,
        g = (0, o.e7)([d.default], () => d.default.getUser(t), [t]),
        E = null != n ? n : g;
    s()(null != E, 'UserProfilePopoutWrapper: user cannot be undefined');
    let v = (0, o.e7)([d.default], () => d.default.getCurrentUser());
    s()(null != v, 'UserProfilePopoutWrapper: currentUser cannot be undefined');
    let { isBlocked: I, isIgnored: T } = (0, o.cj)([c.Z], () => ({
            isBlocked: c.Z.isBlocked(E.id),
            isIgnored: c.Z.isIgnored(E.id)
        })),
        b = (0, l.Do)({ location: 'UserProfileModalWrapper' }),
        [S, y] = i.useState(I || (b && (T || I))),
        A = (0, f.sS)({ location: 'UserProfilePopoutWrapper' }),
        N = u.Rt.useSetting();
    return S && A && !b
        ? (0, r.jsx)(_.Z, {
              ...a,
              user: E,
              currentUser: v,
              onViewBlockedProfileClick: () => y(!1)
          })
        : S && b && !(T && N)
          ? (0, r.jsx)(_.Y, {
                ...a,
                user: E,
                currentUser: v,
                onViewBlockedProfileClick: () => y(!1)
            })
          : E.isNonUserBot()
            ? (0, r.jsx)(h.Z, {
                  ...a,
                  user: E,
                  currentUser: v
              })
            : E.bot
              ? (0, r.jsx)(p.Z, {
                    ...a,
                    user: E,
                    currentUser: v
                })
              : (0, r.jsx)(m.Z, {
                    ...a,
                    user: E,
                    currentUser: v
                });
}
