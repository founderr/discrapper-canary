t.r(n),
    t.d(n, {
        default: function () {
            return Z;
        }
    }),
    t(47120);
var o = t(735250),
    i = t(470079),
    s = t(512722),
    l = t.n(s),
    c = t(442837),
    r = t(100527),
    a = t(699516),
    d = t(594174),
    u = t(971393),
    _ = t(787018),
    I = t(752342),
    E = t(886794),
    f = t(910364);
let p = [r.Z.BITE_SIZE_PROFILE_POPOUT, r.Z.PROFILE_PANEL];
function Z(e) {
    let { user: n, ...t } = e,
        s = (0, c.e7)([d.default], () => d.default.getCurrentUser());
    l()(null != s, 'UserProfileModalWrapper: currentUser cannot be undefined');
    let r = (0, c.e7)([a.Z], () => a.Z.isBlocked(n.id)),
        [Z, h] = i.useState(r),
        x = (0, u.sS)({ location: 'UserProfileModalWrapper' });
    i.useEffect(() => {
        h(r);
    }, [r]);
    let m = !p.some((e) => {
        var n;
        return (null !== (n = t.sourceAnalyticsLocations) && void 0 !== n ? n : []).includes(e);
    });
    return Z && x && m
        ? (0, o.jsx)(_.Z, {
              user: n,
              currentUser: s,
              onViewBlockedProfileClick: () => h(!1),
              ...t
          })
        : n.isNonUserBot()
          ? (0, o.jsx)(E.Z, {
                ...t,
                user: n,
                currentUser: s
            })
          : n.bot
            ? (0, o.jsx)(I.Z, {
                  ...t,
                  user: n,
                  currentUser: s
              })
            : (0, o.jsx)(f.Z, {
                  ...t,
                  user: n,
                  currentUser: s
              });
}
