"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("143927"),
  o = n("597312"),
  u = n("769727"),
  d = n("207796"),
  c = n("497189"),
  f = n("304231"),
  E = n("526282"),
  h = n("183993"),
  _ = n("559469"),
  C = n("495257");

function m(e) {
  let {
    children: t,
    selectedGame: n,
    className: l
  } = e, r = s.useMemo(() => {
    switch (n) {
      case d.ClanDiscoveryGame.GENSHIN:
        return C.genshinBackgroundImage;
      case d.ClanDiscoveryGame.VALORANT:
        return C.valorantBackgroundImage
    }
  }, [n]);
  return (0, a.jsx)("div", {
    className: i()(r, l),
    children: t
  })
}
t.default = s.memo(function() {
  let e = (0, h.useEligibleGuildsForClans)(),
    t = (0, d.useClanDiscoveryUIStore)(e => e.game, r.default),
    [n, l] = s.useState(_.ClanDiscoveryUpsellScreens.USER_UPSELL),
    i = s.useCallback(() => {
      l(_.ClanDiscoveryUpsellScreens.USER_ONBOARDING)
    }, [l]),
    S = s.useMemo(() => {
      if (0 !== e.length) return (0, a.jsxs)(o.ScrollerThin, {
        className: C.upsellScroller,
        fade: !0,
        children: [(0, a.jsx)(m, {
          selectedGame: t,
          className: C.adminUpsell,
          children: (0, a.jsx)(c.default, {
            selectedGame: t,
            guilds: e
          })
        }), (0, a.jsx)(u.ClanDiscoveryTopPicks, {
          limit: 10
        })]
      });
      switch (n) {
        case _.ClanDiscoveryUpsellScreens.USER_UPSELL:
          return (0, a.jsx)(o.ScrollerThin, {
            className: C.upsellScroller,
            fade: !0,
            children: (0, a.jsx)(m, {
              selectedGame: t,
              className: C.userUpsell,
              children: (0, a.jsx)(E.default, {
                selectedGame: t,
                onClick: i
              })
            })
          });
        case _.ClanDiscoveryUpsellScreens.USER_ONBOARDING:
          return (0, a.jsx)(m, {
            selectedGame: t,
            className: C.userOnboarding,
            children: (0, a.jsx)(f.default, {
              selectedGame: t,
              setScreen: l
            })
          })
      }
    }, [e, i, n, t]);
  return (0, a.jsx)("div", {
    className: C.container,
    children: S
  })
})