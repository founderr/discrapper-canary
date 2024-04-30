"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("143927"),
  o = a("597312"),
  u = a("780384"),
  d = a("792125"),
  c = a("769727"),
  f = a("207796"),
  E = a("497189"),
  h = a("304231"),
  _ = a("526282"),
  C = a("802001"),
  m = a("559469"),
  S = a("231338"),
  p = a("495257");

function I(e) {
  let {
    children: t,
    selectedGame: a,
    className: l
  } = e, r = s.useMemo(() => {
    switch (a) {
      case f.ClanDiscoveryGame.GENSHIN:
        return p.genshinBackgroundImage;
      case f.ClanDiscoveryGame.VALORANT:
        return p.valorantBackgroundImage
    }
  }, [a]), o = (0, d.getThemeClass)(S.ThemeTypes.DARK);
  return (0, n.jsx)(u.ThemeContextProvider, {
    theme: S.ThemeTypes.DARK,
    children: (0, n.jsx)("div", {
      className: i()(r, l, o),
      children: t
    })
  })
}
t.default = s.memo(function() {
  let e = (0, C.useGuildsEligibleForClanConversion)(),
    t = (0, f.useClanDiscoveryUIStore)(e => e.game, r.default),
    [a, l] = s.useState(m.ClanDiscoveryUpsellScreens.USER_UPSELL),
    i = s.useCallback(() => {
      l(m.ClanDiscoveryUpsellScreens.USER_ONBOARDING)
    }, [l]),
    u = s.useMemo(() => {
      if (0 !== e.length) return (0, n.jsxs)(o.ScrollerThin, {
        className: p.upsellScroller,
        fade: !0,
        children: [(0, n.jsx)(I, {
          selectedGame: t,
          className: p.adminUpsell,
          children: (0, n.jsx)(E.default, {
            selectedGame: t,
            eligibleGuilds: e
          })
        }), (0, n.jsx)(c.ClanDiscoveryTopPicks, {
          limit: 10
        })]
      });
      switch (a) {
        case m.ClanDiscoveryUpsellScreens.USER_UPSELL:
          return (0, n.jsx)(o.ScrollerThin, {
            className: p.upsellScroller,
            fade: !0,
            children: (0, n.jsx)(I, {
              selectedGame: t,
              className: p.userUpsell,
              children: (0, n.jsx)(_.default, {
                selectedGame: t,
                onClick: i
              })
            })
          });
        case m.ClanDiscoveryUpsellScreens.USER_ONBOARDING:
          return (0, n.jsx)(I, {
            selectedGame: t,
            className: p.userOnboarding,
            children: (0, n.jsx)(h.default, {
              selectedGame: t,
              setScreen: l
            })
          })
      }
    }, [e, i, a, t]);
  return (0, n.jsx)("div", {
    className: p.container,
    children: u
  })
})