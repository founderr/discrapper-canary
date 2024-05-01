"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("143927"),
  o = a("597312"),
  u = a("780384"),
  d = a("626135"),
  c = a("792125"),
  f = a("769727"),
  E = a("207796"),
  h = a("497189"),
  _ = a("304231"),
  C = a("526282"),
  m = a("802001"),
  S = a("559469"),
  p = a("981631"),
  I = a("231338"),
  T = a("495257");

function g(e) {
  let {
    children: t,
    selectedGame: a,
    className: l
  } = e, r = s.useMemo(() => {
    switch (a) {
      case E.ClanDiscoveryGame.GENSHIN:
        return T.genshinBackgroundImage;
      case E.ClanDiscoveryGame.VALORANT:
        return T.valorantBackgroundImage
    }
  }, [a]), o = (0, c.getThemeClass)(I.ThemeTypes.DARK);
  return (0, n.jsx)(u.ThemeContextProvider, {
    theme: I.ThemeTypes.DARK,
    children: (0, n.jsx)("div", {
      className: i()(r, l, o),
      children: t
    })
  })
}

function A() {
  let e = (0, E.useClanDiscoveryUIStore)(e => e.game, r.default),
    [t, a] = s.useState(S.ClanDiscoveryUserScreens.USER_UPSELL),
    l = s.useCallback(() => {
      d.default.track(p.AnalyticEvents.CLAN_DISCOVERY_USER_NUX_CLICKED), a(S.ClanDiscoveryUserScreens.USER_ONBOARDING)
    }, [a]);
  switch (t) {
    case S.ClanDiscoveryUserScreens.USER_UPSELL:
      return (0, n.jsx)(o.ScrollerThin, {
        className: T.upsellScroller,
        fade: !0,
        children: (0, n.jsx)(g, {
          selectedGame: e,
          className: T.userUpsell,
          children: (0, n.jsx)(C.default, {
            selectedGame: e,
            onClick: l
          })
        })
      });
    case S.ClanDiscoveryUserScreens.USER_ONBOARDING:
      return (0, n.jsx)(g, {
        selectedGame: e,
        className: T.userOnboarding,
        children: (0, n.jsx)(_.default, {
          selectedGame: e,
          setScreen: a
        })
      })
  }
}

function N(e) {
  let {
    eligibleGuilds: t
  } = e, a = (0, E.useClanDiscoveryUIStore)(e => e.game, r.default);
  return (0, n.jsxs)(o.ScrollerThin, {
    className: T.upsellScroller,
    fade: !0,
    children: [(0, n.jsx)(g, {
      selectedGame: a,
      className: T.adminUpsell,
      children: (0, n.jsx)(h.default, {
        selectedGame: a,
        eligibleGuilds: t
      })
    }), (0, n.jsx)(f.ClanDiscoveryTopPicks, {
      limit: 10
    })]
  })
}
t.default = s.memo(function() {
  let e = (0, m.useGuildsEligibleForClanConversion)();
  return (0, n.jsx)("div", {
    className: T.container,
    children: 0 !== e.length ? (0, n.jsx)(N, {
      eligibleGuilds: e
    }) : (0, n.jsx)(A, {})
  })
})