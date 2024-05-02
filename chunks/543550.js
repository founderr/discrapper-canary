"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("143927"),
  o = n("597312"),
  u = n("780384"),
  d = n("626135"),
  c = n("792125"),
  f = n("769727"),
  E = n("207796"),
  h = n("497189"),
  _ = n("304231"),
  C = n("526282"),
  m = n("802001"),
  S = n("559469"),
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
      case E.ClanDiscoveryGame.GENSHIN:
        return T.genshinBackgroundImage;
      case E.ClanDiscoveryGame.VALORANT:
        return T.valorantBackgroundImage
    }
  }, [n]), o = (0, c.getThemeClass)(I.ThemeTypes.DARK);
  return (0, a.jsx)(u.ThemeContextProvider, {
    theme: I.ThemeTypes.DARK,
    children: (0, a.jsx)("div", {
      className: i()(r, l, o),
      children: t
    })
  })
}

function A() {
  let e = (0, E.useClanDiscoveryUIStore)(e => e.game, r.default),
    [t, n] = s.useState(S.ClanDiscoveryUserScreens.USER_UPSELL),
    l = s.useCallback(() => {
      d.default.track(p.AnalyticEvents.CLAN_DISCOVERY_USER_NUX_CLICKED), n(S.ClanDiscoveryUserScreens.USER_ONBOARDING)
    }, [n]);
  switch (t) {
    case S.ClanDiscoveryUserScreens.USER_UPSELL:
      return (0, a.jsx)(o.ScrollerThin, {
        className: T.upsellScroller,
        fade: !0,
        children: (0, a.jsx)(g, {
          selectedGame: e,
          className: T.userUpsell,
          children: (0, a.jsx)(C.default, {
            selectedGame: e,
            onClick: l
          })
        })
      });
    case S.ClanDiscoveryUserScreens.USER_ONBOARDING:
      return (0, a.jsx)(g, {
        selectedGame: e,
        className: T.userOnboarding,
        children: (0, a.jsx)(_.default, {
          selectedGame: e,
          setScreen: n
        })
      })
  }
}

function N(e) {
  let {
    eligibleGuilds: t
  } = e, n = (0, E.useClanDiscoveryUIStore)(e => e.game, r.default);
  return (0, a.jsxs)(o.ScrollerThin, {
    className: T.upsellScroller,
    fade: !0,
    children: [(0, a.jsx)(g, {
      selectedGame: n,
      className: T.adminUpsell,
      children: (0, a.jsx)(h.default, {
        selectedGame: n,
        eligibleGuilds: t
      })
    }), (0, a.jsx)(f.ClanDiscoveryTopPicks, {
      limit: 10
    })]
  })
}
t.default = s.memo(function() {
  let e = (0, m.useGuildsEligibleForClanConversion)();
  return (0, a.jsx)("div", {
    className: T.container,
    children: 0 !== e.length ? (0, a.jsx)(N, {
      eligibleGuilds: e
    }) : (0, a.jsx)(A, {})
  })
})