n.d(t, {
    Z: function () {
        return p;
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
    c = n(622724),
    d = n(785717),
    f = n(621853),
    _ = n(475413),
    h = n(388032);
function p(e) {
    let { user: t, guildId: n, viewProfileItem: p } = e,
        { trackUserProfileAction: m } = (0, d.KZ)(),
        { analyticsLocations: g, newestAnalyticsLocation: E } = (0, o.ZP)(s.Z.USER_PROFILE_OVERFLOW_MENU),
        v = (0, i.e7)([f.Z], () => f.Z.getUserProfile(t.id)),
        I = null == v ? void 0 : v.application,
        S = (0, u.Z)({
            user: t,
            location: E,
            color: 'danger',
            onBlock: () =>
                m({
                    action: 'BLOCK',
                    analyticsLocations: g
                }),
            onUnblock: () =>
                m({
                    action: 'UNBLOCK',
                    analyticsLocations: g
                })
        }),
        T = (0, c.Z)({
            user: t,
            guildId: n,
            location: E,
            color: 'danger',
            onAction: () =>
                m({
                    action: 'REPORT',
                    analyticsLocations: g
                })
        }),
        b = [
            [p],
            [S, T],
            [
                (0, l.Z)({
                    id: null == I ? void 0 : I.id,
                    label: h.intl.string(h.t['+NP/b2']),
                    onSuccess: () =>
                        m({
                            action: 'COPY_APP_ID',
                            analyticsLocations: g
                        })
                })
            ]
        ];
    return b.every((e) => e.every((e) => null == e))
        ? null
        : (0, r.jsx)(a.Popout, {
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(a.Menu, {
                      navId: 'user-bot-profile-overflow-menu',
                      onSelect: void 0,
                      onClose: t,
                      'aria-label': h.intl.string(h.t.AXIHpa),
                      children: b.map((e, t) => (0, r.jsx)(a.MenuGroup, { children: e.map((e) => e) }, t))
                  });
              },
              children: (e) =>
                  (0, r.jsx)(_.oY, {
                      action: 'PRESS_OPTIONS',
                      icon: a.MoreHorizontalIcon,
                      tooltipText: h.intl.string(h.t.UKOtz8),
                      ...e
                  })
          });
}
