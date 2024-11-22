n.d(t, {
    Z: function () {
        return m;
    }
});
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    s = n(100527),
    o = n(906732),
    l = n(299206),
    u = n(389052),
    c = n(158508),
    d = n(622724),
    f = n(785717),
    _ = n(621853),
    p = n(475413),
    h = n(388032);
function m(e) {
    let { user: t, guildId: n, viewProfileItem: m } = e,
        { trackUserProfileAction: g } = (0, f.KZ)(),
        { analyticsLocations: E, newestAnalyticsLocation: v } = (0, o.ZP)(s.Z.USER_PROFILE_OVERFLOW_MENU),
        I = (0, i.e7)([_.Z], () => _.Z.getUserProfile(t.id)),
        b = null == I ? void 0 : I.application,
        T = (0, u.Z)({
            user: t,
            guildId: n,
            location: v,
            color: 'danger',
            onBlock: () =>
                g({
                    action: 'BLOCK',
                    analyticsLocations: E
                }),
            onUnblock: () =>
                g({
                    action: 'UNBLOCK',
                    analyticsLocations: E
                })
        }),
        S = (0, c.Z)({
            user: t,
            guildId: n,
            location: v,
            onIgnore: () =>
                g({
                    action: 'IGNORE',
                    analyticsLocations: E
                }),
            onUnignore: () =>
                g({
                    action: 'UNIGNORE',
                    analyticsLocations: E
                })
        }),
        y = (0, d.Z)({
            user: t,
            guildId: n,
            location: v,
            color: 'danger',
            onAction: () =>
                g({
                    action: 'REPORT',
                    analyticsLocations: E
                })
        }),
        A = [
            [m],
            [S, T, y],
            [
                (0, l.Z)({
                    id: null == b ? void 0 : b.id,
                    label: h.intl.string(h.t['+NP/b2']),
                    onSuccess: () =>
                        g({
                            action: 'COPY_APP_ID',
                            analyticsLocations: E
                        })
                })
            ]
        ];
    return A.every((e) => e.every((e) => null == e))
        ? null
        : (0, r.jsx)(a.Popout, {
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(a.Menu, {
                      navId: 'user-bot-profile-overflow-menu',
                      onSelect: void 0,
                      onClose: t,
                      'aria-label': h.intl.string(h.t.AXIHpa),
                      children: A.map((e, t) => (0, r.jsx)(a.MenuGroup, { children: e.map((e) => e) }, t))
                  });
              },
              children: (e) =>
                  (0, r.jsx)(p.oY, {
                      action: 'PRESS_OPTIONS',
                      icon: a.MoreHorizontalIcon,
                      tooltipText: h.intl.string(h.t.UKOtz8),
                      ...e
                  })
          });
}
