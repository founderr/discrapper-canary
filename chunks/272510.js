n.d(t, {
    Z: function () {
        return h;
    }
});
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(100527),
    s = n(906732),
    o = n(299206),
    l = n(389052),
    u = n(710631),
    c = n(622724),
    d = n(785717),
    f = n(475413),
    _ = n(388032);
function h(e) {
    let { user: t, guildId: n, viewProfileItem: h } = e,
        { trackUserProfileAction: p } = (0, d.KZ)(),
        { analyticsLocations: m, newestAnalyticsLocation: g } = (0, s.ZP)(a.Z.USER_PROFILE_OVERFLOW_MENU),
        E = (0, u.Z)({
            user: t,
            guildId: n,
            onAction: () =>
                p({
                    action: 'PRESS_INVITE_TO_SERVER',
                    analyticsLocations: m
                })
        }),
        v = (0, l.Z)({
            user: t,
            location: g,
            color: 'danger',
            onBlock: () =>
                p({
                    action: 'BLOCK',
                    analyticsLocations: m
                }),
            onUnblock: () =>
                p({
                    action: 'UNBLOCK',
                    analyticsLocations: m
                })
        }),
        I = (0, c.Z)({
            user: t,
            guildId: n,
            location: g,
            color: 'danger',
            onAction: () =>
                p({
                    action: 'REPORT',
                    analyticsLocations: m
                })
        }),
        S = (0, c.T)({
            user: t,
            guildId: n,
            location: g,
            color: 'danger',
            onAction: () =>
                p({
                    action: 'REPORT',
                    analyticsLocations: m
                })
        }),
        T = [
            [h, E],
            [v, I, S],
            [
                (0, o.Z)({
                    id: t.id,
                    label: _.intl.string(_.t['/AXYnJ']),
                    onSuccess: () =>
                        p({
                            action: 'COPY_USER_ID',
                            analyticsLocations: m
                        })
                })
            ]
        ];
    return T.every((e) => e.every((e) => null == e))
        ? null
        : (0, r.jsx)(s.Gt, {
              value: m,
              children: (0, r.jsx)(i.Popout, {
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, r.jsx)(i.Menu, {
                          navId: 'user-profile-overflow-menu',
                          onSelect: void 0,
                          onClose: t,
                          'aria-label': _.intl.string(_.t.AXIHpa),
                          children: T.map((e, t) => (0, r.jsx)(i.MenuGroup, { children: e.map((e) => e) }, t))
                      });
                  },
                  children: (e) =>
                      (0, r.jsx)(f.oY, {
                          action: 'PRESS_OPTIONS',
                          icon: i.MoreHorizontalIcon,
                          tooltipText: _.intl.string(_.t.UKOtz8),
                          ...e
                      })
              })
          });
}
