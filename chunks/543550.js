"use strict";
n.r(t), n.d(t, {
  ClanDiscoveryAdminContainer: function() {
    return A
  },
  ClanDiscoveryUserContainer: function() {
    return T
  }
});
var a = n("735250"),
  s = n("470079"),
  i = n("120356"),
  l = n.n(i),
  r = n("143927"),
  o = n("597312"),
  u = n("442837"),
  d = n("963202"),
  c = n("430824"),
  f = n("626135"),
  E = n("769727"),
  h = n("207796"),
  _ = n("497189"),
  C = n("304231"),
  m = n("526282"),
  S = n("802001"),
  p = n("981631"),
  g = n("495257");
let I = e => {
  switch (e) {
    case h.ClanDiscoveryGame.GENSHIN:
      return g.genshinUpsellBackgroundImage;
    case h.ClanDiscoveryGame.VALORANT:
      return g.valorantUpsellBackgroundImage
  }
};

function T() {
  let e = (0, h.useClanDiscoveryUIStore)(e => e.game, r.default),
    t = (0, h.useClanDiscoveryUIStore)(e => e.userUpsellScreen, r.default),
    n = (0, h.useClanDiscoveryUIStore)(e => e.setUserUpsellScreen, r.default),
    i = s.useCallback(() => {
      f.default.track(p.AnalyticEvents.CLAN_DISCOVERY_USER_NUX_CLICKED), n(h.ClanDiscoveryUserScreens.USER_ONBOARDING)
    }, [n]),
    u = s.useMemo(() => I(e), [e]),
    d = s.useMemo(() => {
      switch (e) {
        case h.ClanDiscoveryGame.GENSHIN:
          return g.genshinOnboardingBackgroundImage;
        case h.ClanDiscoveryGame.VALORANT:
          return g.valorantOnboardingBackgroundImage
      }
    }, [e]);
  switch (t) {
    case h.ClanDiscoveryUserScreens.USER_UPSELL:
      return (0, a.jsx)("div", {
        className: g.container,
        children: (0, a.jsx)(o.ScrollerThin, {
          className: g.upsellScroller,
          fade: !0,
          children: (0, a.jsxs)("div", {
            className: l()(u, g.userUpsell),
            children: [(0, a.jsx)(m.ClanDiscoveryUserUpsellBackgroundRings, {}), (0, a.jsx)(m.default, {
              selectedGame: e,
              onClick: i
            })]
          })
        })
      });
    case h.ClanDiscoveryUserScreens.USER_ONBOARDING:
      return (0, a.jsx)("div", {
        className: g.container,
        children: (0, a.jsx)("div", {
          className: l()(d, g.userOnboarding),
          children: (0, a.jsx)(C.default, {
            selectedGame: e,
            setScreen: n
          })
        })
      })
  }
}

function A() {
  let e = (0, h.useClanDiscoveryUIStore)(e => e.game, r.default),
    t = (0, h.useClanDiscoveryUIStore)(e => e.setMode, r.default),
    n = (0, u.useStateFromStoresArray)([c.default], () => Object.values(c.default.getGuilds())),
    i = (0, d.useAnyClanPrepilotExperimentEnabled)(n, "clan_discovery_admin_upsell"),
    f = (0, S.useGuildsEligibleForClanConversion)();
  s.useEffect(() => {
    (!i || 0 === f.length && i) && t(h.ClanDiscoveryMode.GET_STARTED)
  }, [f.length, i, t]);
  let C = s.useMemo(() => I(e), [e]);
  return 0 === f.length ? null : (0, a.jsx)("div", {
    className: g.container,
    children: (0, a.jsxs)(o.ScrollerThin, {
      className: g.upsellScroller,
      fade: !0,
      children: [(0, a.jsx)("div", {
        className: l()(C, g.adminUpsell),
        children: (0, a.jsx)(_.default, {
          selectedGame: e,
          eligibleGuilds: f
        })
      }), (0, a.jsx)(E.ClanDiscoveryTopPicks, {
        limit: 10
      })]
    })
  })
}