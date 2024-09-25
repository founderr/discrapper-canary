n.d(t, {
    Z: function () {
        return p;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(512722),
    s = n.n(o),
    l = n(442837),
    u = n(699516),
    c = n(594174),
    d = n(971393),
    _ = n(614417),
    E = n(601665),
    f = n(103113),
    h = n(738953);
function p(e) {
    let { userId: t, user: n, ...r } = e,
        o = (0, l.e7)([c.default], () => c.default.getUser(t), [t]),
        p = null != n ? n : o;
    s()(null != p, 'UserProfilePopoutWrapper: user cannot be undefined');
    let m = (0, l.e7)([c.default], () => c.default.getCurrentUser());
    s()(null != m, 'UserProfilePopoutWrapper: currentUser cannot be undefined');
    let I = (0, l.e7)([u.Z], () => u.Z.isBlocked(p.id)),
        [T, g] = a.useState(I),
        S = (0, d.sS)({ location: 'UserProfilePopoutWrapper' });
    return T && S
        ? (0, i.jsx)(_.Z, {
              ...r,
              user: p,
              currentUser: m,
              onViewBlockedProfileClick: () => g(!1)
          })
        : p.isNonUserBot()
          ? (0, i.jsx)(f.Z, {
                ...r,
                user: p,
                currentUser: m
            })
          : p.bot
            ? (0, i.jsx)(E.Z, {
                  ...r,
                  user: p,
                  currentUser: m
              })
            : (0, i.jsx)(h.Z, {
                  ...r,
                  user: p,
                  currentUser: m
              });
}
