"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("143927"),
  o = n("597312"),
  u = n("780384"),
  d = n("792125"),
  c = n("769727"),
  f = n("207796"),
  E = n("497189"),
  h = n("304231"),
  _ = n("526282"),
  C = n("802001"),
  m = n("559469"),
  S = n("231338"),
  p = n("495257");

function I(e) {
  let {
    children: t,
    selectedGame: n,
    className: l
  } = e, r = s.useMemo(() => {
    switch (n) {
      case f.ClanDiscoveryGame.GENSHIN:
        return p.genshinBackgroundImage;
      case f.ClanDiscoveryGame.VALORANT:
        return p.valorantBackgroundImage
    }
  }, [n]), o = (0, d.getThemeClass)(S.ThemeTypes.DARK);
  return (0, a.jsx)(u.ThemeContextProvider, {
    theme: S.ThemeTypes.DARK,
    children: (0, a.jsx)("div", {
      className: i()(r, l, o),
      children: t
    })
  })
}
t.default = s.memo(function() {
  let e = (0, C.useGuildsEligibleForClanConversion)(),
    t = (0, f.useClanDiscoveryUIStore)(e => e.game, r.default),
    [n, l] = s.useState(m.ClanDiscoveryUpsellScreens.USER_UPSELL),
    i = s.useCallback(() => {
      l(m.ClanDiscoveryUpsellScreens.USER_ONBOARDING)
    }, [l]),
    u = s.useMemo(() => {
      if (0 !== e.length) return (0, a.jsxs)(o.ScrollerThin, {
        className: p.upsellScroller,
        fade: !0,
        children: [(0, a.jsx)(I, {
          selectedGame: t,
          className: p.adminUpsell,
          children: (0, a.jsx)(E.default, {
            selectedGame: t,
            eligibleGuilds: e
          })
        }), (0, a.jsx)(c.ClanDiscoveryTopPicks, {
          limit: 10
        })]
      });
      switch (n) {
        case m.ClanDiscoveryUpsellScreens.USER_UPSELL:
          return (0, a.jsx)(o.ScrollerThin, {
            className: p.upsellScroller,
            fade: !0,
            children: (0, a.jsx)(I, {
              selectedGame: t,
              className: p.userUpsell,
              children: (0, a.jsx)(_.default, {
                selectedGame: t,
                onClick: i
              })
            })
          });
        case m.ClanDiscoveryUpsellScreens.USER_ONBOARDING:
          return (0, a.jsx)(I, {
            selectedGame: t,
            className: p.userOnboarding,
            children: (0, a.jsx)(h.default, {
              selectedGame: t,
              setScreen: l
            })
          })
      }
    }, [e, i, n, t]);
  return (0, a.jsx)("div", {
    className: p.container,
    children: u
  })
})