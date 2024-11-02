t.r(n),
    t.d(n, {
        default: function () {
            return h;
        }
    }),
    t(47120);
var i = t(200651),
    l = t(192379),
    o = t(512722),
    s = t.n(o),
    r = t(442837),
    c = t(100527),
    a = t(699516),
    d = t(594174),
    u = t(971393),
    f = t(787018),
    m = t(752342),
    p = t(886794),
    x = t(910364);
let I = [c.Z.BITE_SIZE_PROFILE_POPOUT, c.Z.PROFILE_PANEL];
function h(e) {
    let { user: n, ...t } = e,
        o = (0, r.e7)([d.default], () => d.default.getCurrentUser());
    s()(null != o, 'UserProfileModalWrapper: currentUser cannot be undefined');
    let c = (0, r.e7)([a.Z], () => a.Z.isBlocked(n.id)),
        [h, v] = l.useState(c),
        g = (0, u.sS)({ location: 'UserProfileModalWrapper' });
    l.useEffect(() => {
        v(c);
    }, [c]);
    let Z = !I.some((e) => {
        var n;
        return (null !== (n = t.sourceAnalyticsLocations) && void 0 !== n ? n : []).includes(e);
    });
    return h && g && Z
        ? (0, i.jsx)(f.Z, {
              user: n,
              currentUser: o,
              onViewBlockedProfileClick: () => v(!1),
              ...t
          })
        : n.isNonUserBot()
          ? (0, i.jsx)(p.Z, {
                ...t,
                user: n,
                currentUser: o
            })
          : n.bot
            ? (0, i.jsx)(m.Z, {
                  ...t,
                  user: n,
                  currentUser: o
              })
            : (0, i.jsx)(x.Z, {
                  ...t,
                  user: n,
                  currentUser: o
              });
}
