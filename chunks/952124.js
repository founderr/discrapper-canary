n.d(t, {
    Z: function () {
        return h;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(481060),
    o = n(100527),
    s = n(906732),
    l = n(299206),
    u = n(389052),
    c = n(622724),
    d = n(785717),
    _ = n(621853),
    E = n(475413),
    f = n(689938);
function h(e) {
    let { user: t, guildId: n, viewProfileItem: h } = e,
        { trackUserProfileAction: p } = (0, d.KZ)(),
        { analyticsLocations: m, newestAnalyticsLocation: I } = (0, s.ZP)(o.Z.USER_PROFILE_OVERFLOW_MENU),
        T = (0, i.e7)([_.Z], () => _.Z.getUserProfile(t.id)),
        g = null == T ? void 0 : T.application,
        S = (0, u.Z)({
            user: t,
            location: I,
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
        A = (0, c.Z)({
            user: t,
            guildId: n,
            location: I,
            color: 'danger',
            onAction: () =>
                p({
                    action: 'REPORT',
                    analyticsLocations: m
                })
        }),
        v = [
            [h],
            [S, A],
            [
                (0, l.Z)({
                    id: null == g ? void 0 : g.id,
                    label: f.Z.Messages.COPY_ID_APP,
                    onSuccess: () =>
                        p({
                            action: 'COPY_APP_ID',
                            analyticsLocations: m
                        })
                })
            ]
        ];
    return v.every((e) => e.every((e) => null == e))
        ? null
        : (0, r.jsx)(a.Popout, {
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(a.Menu, {
                      navId: 'user-bot-profile-overflow-menu',
                      onSelect: void 0,
                      onClose: t,
                      'aria-label': f.Z.Messages.PROFILE_ACTIONS_MENU_LABEL,
                      children: v.map((e, t) => (0, r.jsx)(a.MenuGroup, { children: e.map((e) => e) }, t))
                  });
              },
              children: (e) =>
                  (0, r.jsx)(E.oY, {
                      action: 'PRESS_OPTIONS',
                      icon: a.MoreHorizontalIcon,
                      tooltipText: f.Z.Messages.MORE,
                      ...e
                  })
          });
}
