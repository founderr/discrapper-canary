n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(512722),
    s = n.n(a),
    o = n(442837),
    l = n(922611),
    u = n(699516),
    c = n(594174),
    d = n(971393),
    f = n(614417),
    _ = n(601665),
    p = n(103113),
    h = n(738953);
function m(e) {
    let { userId: t, user: n, ...a } = e,
        m = (0, o.e7)([c.default], () => c.default.getUser(t), [t]),
        g = null != n ? n : m;
    s()(null != g, 'UserProfilePopoutWrapper: user cannot be undefined');
    let E = (0, o.e7)([c.default], () => c.default.getCurrentUser());
    s()(null != E, 'UserProfilePopoutWrapper: currentUser cannot be undefined');
    let { isBlocked: v, isIgnored: I } = (0, o.cj)([u.Z], () => ({
            isBlocked: u.Z.isBlocked(g.id),
            isIgnored: u.Z.isIgnored(g.id)
        })),
        T = (0, l.Do)({ location: 'UserProfileModalWrapper' }),
        [b, S] = i.useState(v || (T && (I || v))),
        y = (0, d.sS)({ location: 'UserProfilePopoutWrapper' });
    return b && y && !T
        ? (0, r.jsx)(f.Z, {
              ...a,
              user: g,
              currentUser: E,
              onViewBlockedProfileClick: () => S(!1)
          })
        : b && T
          ? (0, r.jsx)(f.Y, {
                ...a,
                user: g,
                currentUser: E,
                onViewBlockedProfileClick: () => S(!1)
            })
          : g.isNonUserBot()
            ? (0, r.jsx)(p.Z, {
                  ...a,
                  user: g,
                  currentUser: E
              })
            : g.bot
              ? (0, r.jsx)(_.Z, {
                    ...a,
                    user: g,
                    currentUser: E
                })
              : (0, r.jsx)(h.Z, {
                    ...a,
                    user: g,
                    currentUser: E
                });
}
