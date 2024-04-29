"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("143927"),
  o = a("597312"),
  u = a("207796"),
  d = a("497189"),
  c = a("304231"),
  f = a("526282"),
  E = a("183993"),
  h = a("559469"),
  _ = a("424023");

function C(e) {
  let {
    children: t,
    selectedGame: a,
    className: l
  } = e, r = s.useMemo(() => {
    switch (a) {
      case u.ClanDiscoveryGame.GENSHIN:
        return _.genshinBackgroundImage;
      case u.ClanDiscoveryGame.VALORANT:
        return _.valorantBackgroundImage
    }
  }, [a]);
  return (0, n.jsx)("div", {
    className: i()(r, l),
    children: t
  })
}
t.default = s.memo(function() {
  let e = (0, E.useEligibleGuildsForClans)(),
    t = (0, u.useClanDiscoveryUIStore)(e => e.game, r.default),
    [a, l] = s.useState(0 === e.length ? h.ClanDiscoveryUpsellScreens.USER_UPSELL : h.ClanDiscoveryUpsellScreens.ADMIN_UPSELL),
    i = s.useCallback(() => {
      l(h.ClanDiscoveryUpsellScreens.USER_ONBOARDING)
    }, [l]),
    m = s.useMemo(() => {
      switch (a) {
        case h.ClanDiscoveryUpsellScreens.ADMIN_UPSELL:
          return (0, n.jsx)(o.ScrollerThin, {
            className: _.upsellScroller,
            fade: !0,
            children: (0, n.jsx)(C, {
              selectedGame: t,
              className: _.adminUpsell,
              children: (0, n.jsx)(d.default, {
                selectedGame: t,
                guild: e[0]
              })
            })
          });
        case h.ClanDiscoveryUpsellScreens.USER_UPSELL:
          return (0, n.jsx)(o.ScrollerThin, {
            className: _.upsellScroller,
            fade: !0,
            children: (0, n.jsx)(C, {
              selectedGame: t,
              className: _.userUpsell,
              children: (0, n.jsx)(f.default, {
                selectedGame: t,
                onClick: i
              })
            })
          });
        case h.ClanDiscoveryUpsellScreens.USER_ONBOARDING:
          return (0, n.jsx)(C, {
            selectedGame: t,
            className: _.userOnboarding,
            children: (0, n.jsx)(c.default, {
              selectedGame: t,
              setScreen: l
            })
          })
      }
    }, [e, i, a, t]);
  return (0, n.jsx)("div", {
    className: _.container,
    children: m
  })
})