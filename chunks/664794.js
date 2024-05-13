"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
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
  I = n("689938");

function T(e) {
  let {
    user: t,
    guildId: n,
    viewProfileItem: T
  } = e, f = (0, r.useStateFromStores)([d.default], () => d.default.getId() === t.id), {
    trackUserProfileAction: S
  } = (0, c.useUserProfileAnalyticsContext)(), {
    analyticsLocations: h,
    newestAnalyticsLocation: A
  } = (0, o.default)(s.default.USER_PROFILE_OVERFLOW_MENU), m = (0, l.default)({
    user: t,
    color: "danger",
    location: A,
    onBlock: () => S({
      action: "BLOCK",
      analyticsLocations: h
    }),
    onUnblock: () => S({
      action: "UNBLOCK",
      analyticsLocations: h
    })
  }), N = (0, u.default)({
    user: t,
    guildId: n,
    color: "danger",
    location: A,
    onAction: () => S({
      action: "REPORT",
      analyticsLocations: h
    })
  });
  return f ? null : (0, i.jsx)(o.AnalyticsLocationProvider, {
    value: h,
    children: (0, i.jsx)(a.Popout, {
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, i.jsxs)(a.Menu, {
          navId: "user-profile-overflow-menu",
          onSelect: void 0,
          onClose: t,
          "aria-label": I.default.Messages.PROFILE_ACTIONS_MENU_LABEL,
          children: [(0, i.jsx)(a.MenuGroup, {
            children: T
          }), (0, i.jsxs)(a.MenuGroup, {
            children: [m, N]
          })]
        })
      },
      children: e => (0, i.jsx)(E.default, {
        text: I.default.Messages.MORE,
        icon: _.default,
        ...e
      })
    })
  })
}