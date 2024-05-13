"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var i = n("735250");
n("470079");
var r = n("442837"),
  a = n("481060"),
  s = n("100527"),
  o = n("906732"),
  l = n("389052"),
  u = n("622724"),
  d = n("314897"),
  _ = n("808268"),
  c = n("785717"),
  E = n("537387"),
  I = n("228168"),
  T = n("689938");

function f(e) {
  let {
    user: t,
    profileType: n,
    guildId: f,
    viewProfileItem: S
  } = e, h = (0, r.useStateFromStores)([d.default], () => d.default.getId() === t.id), {
    trackUserProfileAction: A
  } = (0, c.useUserProfileAnalyticsContext)(), {
    analyticsLocations: m,
    newestAnalyticsLocation: N
  } = (0, o.default)(s.default.USER_PROFILE_OVERFLOW_MENU), p = (0, l.default)({
    user: t,
    color: "danger",
    location: N,
    onBlock: () => A({
      action: "BLOCK",
      analyticsLocations: m
    }),
    onUnblock: () => A({
      action: "UNBLOCK",
      analyticsLocations: m
    })
  }), O = (0, u.default)({
    user: t,
    guildId: f,
    color: "danger",
    location: N,
    onAction: () => A({
      action: "REPORT",
      analyticsLocations: m
    })
  });
  if (h && n !== I.UserProfileTypes.FULL_SIZE) return null;
  let C = () => h ? null : (0, i.jsxs)(a.MenuGroup, {
    children: [p, O]
  });
  return (0, i.jsx)(o.AnalyticsLocationProvider, {
    value: m,
    children: (0, i.jsx)(a.Popout, {
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, i.jsxs)(a.Menu, {
          navId: "user-profile-overflow-menu",
          onSelect: void 0,
          onClose: t,
          "aria-label": T.default.Messages.PROFILE_ACTIONS_MENU_LABEL,
          children: [(0, i.jsx)(a.MenuGroup, {
            children: S
          }), C()]
        })
      },
      children: e => (0, i.jsx)(E.default, {
        text: T.default.Messages.MORE,
        icon: _.default,
        ...e
      })
    })
  })
}