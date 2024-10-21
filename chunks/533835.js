t.r(n),
    t.d(n, {
        default: function () {
            return p;
        }
    }),
    t(47120);
var i = t(735250),
    s = t(470079),
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
function p(e) {
    let { user: n, ...t } = e,
        o = (0, r.e7)([d.default], () => d.default.getCurrentUser());
    l()(null != o, 'UserProfileModalWrapper: currentUser cannot be undefined');
    let c = (0, r.e7)([a.Z], () => a.Z.isBlocked(n.id)),
        [p, x] = s.useState(c),
        Z = (0, u.sS)({ location: 'UserProfileModalWrapper' });
    s.useEffect(() => {
        x(c);
    }, [c]);
    let h = !m.some((e) => {
        var n;
        return (null !== (n = t.sourceAnalyticsLocations) && void 0 !== n ? n : []).includes(e);
    });
    return p && Z && h
        ? (0, i.jsx)(_.Z, {
              user: n,
              currentUser: o,
              onViewBlockedProfileClick: () => x(!1),
              ...t
          })
        : n.isNonUserBot()
          ? (0, i.jsx)(E.Z, {
                ...t,
                user: n,
                currentUser: o
            })
          : n.bot
            ? (0, i.jsx)(I.Z, {
                  ...t,
                  user: n,
                  currentUser: o
              })
            : (0, i.jsx)(f.Z, {
                  ...t,
                  user: n,
                  currentUser: o
              });
}
