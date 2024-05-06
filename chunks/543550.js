"use strict";
n.r(t), n.d(t, {
  ClanDiscoveryAdminContainer: function() {
    return A
  },
  ClanDiscoveryUserContainer: function() {
    return g
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
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
  I = n("495257");
let T = e => {
  switch (e) {
    case h.ClanDiscoveryGame.GENSHIN:
      return I.genshinUpsellBackgroundImage;
    case h.ClanDiscoveryGame.VALORANT:
      return I.valorantUpsellBackgroundImage
  }
};

function g() {
  let e = (0, h.useClanDiscoveryUIStore)(e => e.game, r.default),
    t = (0, h.useClanDiscoveryUIStore)(e => e.userUpsellScreen, r.default),
    n = (0, h.useClanDiscoveryUIStore)(e => e.setUserUpsellScreen, r.default),
    l = s.useCallback(() => {
      f.default.track(p.AnalyticEvents.CLAN_DISCOVERY_USER_NUX_CLICKED), n(h.ClanDiscoveryUserScreens.USER_ONBOARDING)
    }, [n]),
    u = s.useMemo(() => T(e), [e]),
    d = s.useMemo(() => {
      switch (e) {
        case h.ClanDiscoveryGame.GENSHIN:
          return I.genshinOnboardingBackgroundImage;
        case h.ClanDiscoveryGame.VALORANT:
          return I.valorantOnboardingBackgroundImage
      }
    }, [e]);
  switch (t) {
    case h.ClanDiscoveryUserScreens.USER_UPSELL:
      return (0, a.jsx)("div", {
        className: I.container,
        children: (0, a.jsx)(o.ScrollerThin, {
          className: I.upsellScroller,
          fade: !0,
          children: (0, a.jsx)("div", {
            className: i()(u, I.userUpsell),
            children: (0, a.jsx)(m.default, {
              selectedGame: e,
              onClick: l
            })
          })
        })
      });
    case h.ClanDiscoveryUserScreens.USER_ONBOARDING:
      return (0, a.jsx)("div", {
        className: I.container,
        children: (0, a.jsx)("div", {
          className: i()(d, I.userOnboarding),
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
    l = (0, d.useAnyClanPrepilotExperimentEnabled)(n, "clan_discovery_admin_upsell"),
    f = (0, S.useGuildsEligibleForClanConversion)();
  s.useEffect(() => {
    (!l || 0 === f.length && l) && t(h.ClanDiscoveryMode.GET_STARTED)
  }, [f.length, l, t]);
  let C = s.useMemo(() => T(e), [e]);
  return 0 === f.length ? null : (0, a.jsx)("div", {
    className: I.container,
    children: (0, a.jsxs)(o.ScrollerThin, {
      className: I.upsellScroller,
      fade: !0,
      children: [(0, a.jsx)("div", {
        className: i()(C, I.adminUpsell),
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