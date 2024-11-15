n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(512722),
    s = n.n(a),
    o = n(442837),
    l = n(699516),
    u = n(594174),
    c = n(971393),
    d = n(614417),
    f = n(601665),
    _ = n(103113),
    p = n(738953);
function h(e) {
    let { userId: t, user: n, ...a } = e,
        h = (0, o.e7)([u.default], () => u.default.getUser(t), [t]),
        m = null != n ? n : h;
    s()(null != m, 'UserProfilePopoutWrapper: user cannot be undefined');
    let g = (0, o.e7)([u.default], () => u.default.getCurrentUser());
    s()(null != g, 'UserProfilePopoutWrapper: currentUser cannot be undefined');
    let E = (0, o.e7)([l.Z], () => l.Z.isBlocked(m.id)),
        [v, b] = i.useState(E),
        I = (0, c.sS)({ location: 'UserProfilePopoutWrapper' });
    return v && I
        ? (0, r.jsx)(d.Z, {
              ...a,
              user: m,
              currentUser: g,
              onViewBlockedProfileClick: () => b(!1)
          })
        : m.isNonUserBot()
          ? (0, r.jsx)(_.Z, {
                ...a,
                user: m,
                currentUser: g
            })
          : m.bot
            ? (0, r.jsx)(f.Z, {
                  ...a,
                  user: m,
                  currentUser: g
              })
            : (0, r.jsx)(p.Z, {
                  ...a,
                  user: m,
                  currentUser: g
              });
}
