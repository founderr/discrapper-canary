"use strict";
n.r(t), n.d(t, {
  ClanDiscoveryAdminContainer: function() {
    return N
  },
  ClanDiscoveryUserContainer: function() {
    return A
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("143927"),
  o = n("597312"),
  u = n("780384"),
  d = n("963202"),
  c = n("626135"),
  f = n("792125"),
  E = n("769727"),
  h = n("207796"),
  _ = n("497189"),
  C = n("304231"),
  S = n("526282"),
  m = n("802001"),
  p = n("981631"),
  I = n("231338"),
  T = n("495257");

function g(e) {
  let {
    children: t,
    selectedGame: n,
    className: l
  } = e, r = s.useMemo(() => {
    switch (n) {
      case h.ClanDiscoveryGame.GENSHIN:
        return T.genshinBackgroundImage;
      case h.ClanDiscoveryGame.VALORANT:
        return T.valorantBackgroundImage
    }
  }, [n]), o = (0, f.getThemeClass)(I.ThemeTypes.DARK);
  return (0, a.jsx)(u.ThemeContextProvider, {
    theme: I.ThemeTypes.DARK,
    children: (0, a.jsx)("div", {
      className: i()(r, l, o),
      children: t
    })
  })
}

function A() {
  let e = (0, h.useClanDiscoveryUIStore)(e => e.game, r.default),
    t = (0, h.useClanDiscoveryUIStore)(e => e.userUpsellScreen, r.default),
    n = (0, h.useClanDiscoveryUIStore)(e => e.setUserUpsellScreen, r.default),
    l = s.useCallback(() => {
      c.default.track(p.AnalyticEvents.CLAN_DISCOVERY_USER_NUX_CLICKED), n(h.ClanDiscoveryUserScreens.USER_ONBOARDING)
    }, [n]);
  switch (t) {
    case h.ClanDiscoveryUserScreens.USER_UPSELL:
      return (0, a.jsx)("div", {
        className: T.container,
        children: (0, a.jsx)(o.ScrollerThin, {
          className: T.upsellScroller,
          fade: !0,
          children: (0, a.jsx)(g, {
            selectedGame: e,
            className: T.userUpsell,
            children: (0, a.jsx)(S.default, {
              selectedGame: e,
              onClick: l
            })
          })
        })
      });
    case h.ClanDiscoveryUserScreens.USER_ONBOARDING:
      return (0, a.jsx)("div", {
        className: T.container,
        children: (0, a.jsx)(g, {
          selectedGame: e,
          className: T.userOnboarding,
          children: (0, a.jsx)(C.default, {
            selectedGame: e,
            setScreen: n
          })
        })
      })
  }
}

function N() {
  let e = (0, h.useClanDiscoveryUIStore)(e => e.game, r.default),
    t = (0, h.useClanDiscoveryUIStore)(e => e.setMode, r.default),
    n = (0, d.useClanPrepilotExperimentEnabled)("clan_discovery_admin_upsell"),
    l = (0, m.useGuildsEligibleForClanConversion)();
  return (s.useEffect(() => {
    (!n || 0 === l.length && n) && t(h.ClanDiscoveryMode.GET_STARTED)
  }, [l.length, n, t]), 0 === l.length) ? null : (0, a.jsx)("div", {
    className: T.container,
    children: (0, a.jsxs)(o.ScrollerThin, {
      className: T.upsellScroller,
      fade: !0,
      children: [(0, a.jsx)(g, {
        selectedGame: e,
        className: T.adminUpsell,
        children: (0, a.jsx)(_.default, {
          selectedGame: e,
          eligibleGuilds: l
        })
      }), (0, a.jsx)(E.ClanDiscoveryTopPicks, {
        limit: 10
      })]
    })
  })
}