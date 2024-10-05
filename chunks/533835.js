t.r(n),
    t.d(n, {
        default: function () {
            return x;
        }
    }),
    t(47120);
var s = t(735250),
    i = t(470079),
    o = t(512722),
    l = t.n(o),
    r = t(442837),
    c = t(100527),
    a = t(699516),
    d = t(594174),
    u = t(971393),
    _ = t(787018),
    I = t(752342),
    E = t(886794),
    f = t(910364);
let m = [c.Z.BITE_SIZE_PROFILE_POPOUT, c.Z.PROFILE_PANEL];
function x(e) {
    let { user: n, ...t } = e,
        o = (0, r.e7)([d.default], () => d.default.getCurrentUser());
    l()(null != o, 'UserProfileModalWrapper: currentUser cannot be undefined');
    let c = (0, r.e7)([a.Z], () => a.Z.isBlocked(n.id)),
        [x, Z] = i.useState(c),
        p = (0, u.sS)({ location: 'UserProfileModalWrapper' });
    i.useEffect(() => {
        Z(c);
    }, [c]);
    let h = !m.some((e) => {
        var n;
        return (null !== (n = t.sourceAnalyticsLocations) && void 0 !== n ? n : []).includes(e);
    });
    return x && p && h
        ? (0, s.jsx)(_.Z, {
              user: n,
              currentUser: o,
              onViewBlockedProfileClick: () => Z(!1),
              ...t
          })
        : n.isNonUserBot()
          ? (0, s.jsx)(E.Z, {
                ...t,
                user: n,
                currentUser: o
            })
          : n.bot
            ? (0, s.jsx)(I.Z, {
                  ...t,
                  user: n,
                  currentUser: o
              })
            : (0, s.jsx)(f.Z, {
                  ...t,
                  user: n,
                  currentUser: o
              });
}
