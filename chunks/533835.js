t.r(n),
    t.d(n, {
        default: function () {
            return v;
        }
    }),
    t(47120);
var i = t(200651),
    l = t(192379),
    o = t(512722),
    r = t.n(o),
    s = t(442837),
    c = t(100527),
    a = t(922611),
    d = t(699516),
    u = t(594174),
    f = t(971393),
    m = t(787018),
    x = t(752342),
    I = t(886794),
    p = t(910364);
let h = [c.Z.BITE_SIZE_PROFILE_POPOUT, c.Z.PROFILE_PANEL];
function v(e) {
    let { user: n, ...t } = e,
        o = (0, s.e7)([u.default], () => u.default.getCurrentUser());
    r()(null != o, 'UserProfileModalWrapper: currentUser cannot be undefined');
    let { isBlocked: c, isIgnored: v } = (0, s.cj)([d.Z], () => ({
            isBlocked: d.Z.isBlocked(n.id),
            isIgnored: d.Z.isIgnored(n.id)
        })),
        g = (0, a.Do)({ location: 'UserProfileModalWrapper' }),
        [Z, _] = l.useState(c || (g && (v || c))),
        j = (0, f.sS)({ location: 'UserProfileModalWrapper' });
    l.useEffect(() => {
        _(c);
    }, [c]);
    let b = !h.some((e) => {
        var n;
        return (null !== (n = t.sourceAnalyticsLocations) && void 0 !== n ? n : []).includes(e);
    });
    return Z && j && b && !g
        ? (0, i.jsx)(m.Z, {
              user: n,
              currentUser: o,
              onViewBlockedProfileClick: () => _(!1),
              ...t
          })
        : Z && b && g
          ? (0, i.jsx)(m.W, {
                user: n,
                currentUser: o,
                onViewBlockedProfileClick: () => _(!1),
                ...t
            })
          : n.isNonUserBot()
            ? (0, i.jsx)(I.Z, {
                  ...t,
                  user: n,
                  currentUser: o
              })
            : n.bot
              ? (0, i.jsx)(x.Z, {
                    ...t,
                    user: n,
                    currentUser: o
                })
              : (0, i.jsx)(p.Z, {
                    ...t,
                    user: n,
                    currentUser: o
                });
}
