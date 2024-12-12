r.d(n, {
    Z: function () {
        return v;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(512722),
    l = r.n(o),
    u = r(442837),
    c = r(922611),
    d = r(695346),
    f = r(699516),
    _ = r(594174),
    h = r(971393),
    p = r(614417),
    m = r(601665),
    g = r(103113),
    E = r(738953);
function v(e) {
    let { userId: n, user: r, ...i } = e,
        o = (0, u.e7)([_.default], () => _.default.getUser(n), [n]),
        v = null != r ? r : o;
    l()(null != v, 'UserProfilePopoutWrapper: user cannot be undefined');
    let I = (0, u.e7)([_.default], () => _.default.getCurrentUser());
    l()(null != I, 'UserProfilePopoutWrapper: currentUser cannot be undefined');
    let { isBlocked: T, isIgnored: b } = (0, u.cj)([f.Z], () => ({
            isBlocked: f.Z.isBlocked(v.id),
            isIgnored: f.Z.isIgnored(v.id)
        })),
        y = (0, c.Do)({ location: 'UserProfileModalWrapper' }),
        [S, A] = s.useState(T || (y && (b || T))),
        N = (0, h.sS)({ location: 'UserProfilePopoutWrapper' }),
        C = d.Rt.useSetting();
    return S && N && !y
        ? (0, a.jsx)(p.Z, {
              ...i,
              user: v,
              currentUser: I,
              onViewBlockedProfileClick: () => A(!1)
          })
        : S && y && !(b && C)
          ? (0, a.jsx)(p.Y, {
                ...i,
                user: v,
                currentUser: I,
                onViewBlockedProfileClick: () => A(!1)
            })
          : v.isNonUserBot()
            ? (0, a.jsx)(g.Z, {
                  ...i,
                  user: v,
                  currentUser: I
              })
            : v.bot
              ? (0, a.jsx)(m.Z, {
                    ...i,
                    user: v,
                    currentUser: I
                })
              : (0, a.jsx)(E.Z, {
                    ...i,
                    user: v,
                    currentUser: I
                });
}
