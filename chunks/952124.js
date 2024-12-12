r.d(n, {
    Z: function () {
        return g;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    s = r(481060),
    o = r(100527),
    l = r(906732),
    u = r(299206),
    c = r(389052),
    d = r(158508),
    f = r(622724),
    _ = r(785717),
    h = r(621853),
    p = r(475413),
    m = r(388032);
function g(e) {
    let { user: n, guildId: r, viewProfileItem: g } = e,
        { trackUserProfileAction: E } = (0, _.KZ)(),
        { analyticsLocations: v, newestAnalyticsLocation: I } = (0, l.ZP)(o.Z.USER_PROFILE_OVERFLOW_MENU),
        T = (0, a.e7)([h.Z], () => h.Z.getUserProfile(n.id)),
        b = null == T ? void 0 : T.application,
        y = (0, c.Z)({
            user: n,
            guildId: r,
            location: I,
            color: 'danger',
            onBlock: () =>
                E({
                    action: 'BLOCK',
                    analyticsLocations: v
                }),
            onUnblock: () =>
                E({
                    action: 'UNBLOCK',
                    analyticsLocations: v
                })
        }),
        S = (0, d.Z)({
            user: n,
            guildId: r,
            location: I,
            onIgnore: () =>
                E({
                    action: 'IGNORE',
                    analyticsLocations: v
                }),
            onUnignore: () =>
                E({
                    action: 'UNIGNORE',
                    analyticsLocations: v
                })
        }),
        A = (0, f.Z)({
            user: n,
            guildId: r,
            location: I,
            color: 'danger',
            onAction: () =>
                E({
                    action: 'REPORT',
                    analyticsLocations: v
                })
        }),
        N = [
            [g],
            [S, y, A],
            [
                (0, u.Z)({
                    id: null == b ? void 0 : b.id,
                    label: m.intl.string(m.t['+NP/b2']),
                    onSuccess: () =>
                        E({
                            action: 'COPY_APP_ID',
                            analyticsLocations: v
                        })
                })
            ]
        ];
    return N.every((e) => e.every((e) => null == e))
        ? null
        : (0, i.jsx)(s.Popout, {
              renderPopout: (e) => {
                  let { closePopout: n } = e;
                  return (0, i.jsx)(s.Menu, {
                      navId: 'user-bot-profile-overflow-menu',
                      onSelect: void 0,
                      onClose: n,
                      'aria-label': m.intl.string(m.t.AXIHpa),
                      children: N.map((e, n) => (0, i.jsx)(s.MenuGroup, { children: e.map((e) => e) }, n))
                  });
              },
              children: (e) =>
                  (0, i.jsx)(p.oY, {
                      action: 'PRESS_OPTIONS',
                      icon: s.MoreHorizontalIcon,
                      tooltipText: m.intl.string(m.t.UKOtz8),
                      ...e
                  })
          });
}
