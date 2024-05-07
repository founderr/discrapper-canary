"use strict";
n.r(t), n.d(t, {
  ClanDiscoveryAdminContainer: function() {
    return T
  },
  ClanDiscoveryUserContainer: function() {
    return I
  }
});
var a = n("735250"),
  s = n("470079"),
  i = n("120356"),
  l = n.n(i),
  r = n("143927"),
  o = n("597312"),
  u = n("442837"),
  d = n("970606"),
  c = n("963202"),
  f = n("430824"),
  E = n("769727"),
  h = n("207796"),
  _ = n("497189"),
  C = n("304231"),
  m = n("526282"),
  S = n("802001"),
  p = n("495257");
let g = e => {
  switch (e) {
    case h.ClanDiscoveryGame.GENSHIN:
      return p.genshinUpsellBackgroundImage;
    case h.ClanDiscoveryGame.VALORANT:
      return p.valorantUpsellBackgroundImage
  }
};

function I() {
  let e = (0, h.useClanDiscoveryUIStore)(e => e.game, r.default),
    t = (0, h.useClanDiscoveryUIStore)(e => e.userUpsellScreen, r.default),
    n = (0, h.useClanDiscoveryUIStore)(e => e.setUserUpsellScreen, r.default),
    i = s.useCallback(() => {
      (0, d.trackClanDiscoveryUserNuxClicked)(), n(h.ClanDiscoveryUserScreens.USER_ONBOARDING)
    }, [n]),
    u = s.useMemo(() => g(e), [e]),
    c = s.useMemo(() => {
      switch (e) {
        case h.ClanDiscoveryGame.GENSHIN:
          return p.genshinOnboardingBackgroundImage;
        case h.ClanDiscoveryGame.VALORANT:
          return p.valorantOnboardingBackgroundImage
      }
    }, [e]);
  switch (t) {
    case h.ClanDiscoveryUserScreens.USER_UPSELL:
      return (0, a.jsx)("div", {
        className: p.container,
        children: (0, a.jsx)(o.ScrollerThin, {
          className: p.upsellScroller,
          fade: !0,
          children: (0, a.jsxs)("div", {
            className: l()(u, p.userUpsell),
            children: [(0, a.jsx)(m.ClanDiscoveryUserUpsellBackgroundRings, {}), (0, a.jsx)(m.default, {
              selectedGame: e,
              onClick: i
            })]
          })
        })
      });
    case h.ClanDiscoveryUserScreens.USER_ONBOARDING:
      return (0, a.jsx)("div", {
        className: p.container,
        children: (0, a.jsx)("div", {
          className: l()(c, p.userOnboarding),
          children: (0, a.jsx)(C.default, {
            selectedGame: e,
            setScreen: n
          })
        })
      })
  }
}

function T() {
  let e = (0, h.useClanDiscoveryUIStore)(e => e.game, r.default),
    t = (0, h.useClanDiscoveryUIStore)(e => e.setMode, r.default),
    n = (0, u.useStateFromStoresArray)([f.default], () => Object.values(f.default.getGuilds())),
    i = (0, c.useAnyClanPrepilotExperimentEnabled)(n, "clan_discovery_admin_upsell"),
    d = (0, S.useGuildsEligibleForClanConversion)();
  s.useEffect(() => {
    (!i || 0 === d.length && i) && t(h.ClanDiscoveryMode.GET_STARTED)
  }, [d.length, i, t]);
  let C = s.useMemo(() => g(e), [e]);
  return 0 === d.length ? null : (0, a.jsx)("div", {
    className: p.container,
    children: (0, a.jsxs)(o.ScrollerThin, {
      className: p.upsellScroller,
      fade: !0,
      children: [(0, a.jsx)("div", {
        className: l()(C, p.adminUpsell),
        children: (0, a.jsx)(_.default, {
          selectedGame: e,
          eligibleGuilds: d
        })
      }), (0, a.jsx)(E.ClanDiscoveryTopPicks, {
        limit: 10
      })]
    })
  })
}