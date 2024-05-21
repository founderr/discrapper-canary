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
  l = n("120356"),
  i = n.n(l),
  r = n("143927"),
  o = n("597312"),
  u = n("410030"),
  d = n("100527"),
  c = n("970606"),
  f = n("963202"),
  E = n("353093"),
  h = n("207796"),
  _ = n("497189"),
  C = n("304231"),
  m = n("526282"),
  S = n("490610"),
  p = n("981631"),
  g = n("424023");
let I = (e, t) => {
  switch (e) {
    case h.ClanDiscoveryGame.GENSHIN:
      return t === p.ThemeTypes.DARK ? g.genshinUpsellBackgroundImageDark : g.genshinUpsellBackgroundImageLight;
    case h.ClanDiscoveryGame.VALORANT:
      return t === p.ThemeTypes.DARK ? g.valorantUpsellBackgroundImageDark : g.valorantUpsellBackgroundImageLight
  }
};

function T() {
  let e = (0, h.useClanDiscoveryUIStore)(e => e.game, r.default),
    t = (0, h.useClanDiscoveryUIStore)(e => e.userUpsellScreen, r.default),
    n = (0, h.useClanDiscoveryUIStore)(e => e.setUserUpsellScreen, r.default),
    l = s.useCallback(() => {
      (0, c.trackClanUserInviteClicked)({
        location: d.default.CLAN_DISCOVERY
      }), n(h.ClanDiscoveryUserScreens.USER_ONBOARDING)
    }, [n]),
    f = (0, u.default)(),
    E = s.useMemo(() => I(e, f), [e, f]),
    _ = s.useMemo(() => {
      switch (e) {
        case h.ClanDiscoveryGame.GENSHIN:
          return f === p.ThemeTypes.DARK ? g.genshinOnboardingBackgroundImageDark : g.genshinOnboardingBackgroundImageLight;
        case h.ClanDiscoveryGame.VALORANT:
          return f === p.ThemeTypes.DARK ? g.valorantOnboardingBackgroundImageDark : g.valorantOnboardingBackgroundImageLight
      }
    }, [e, f]);
  switch (t) {
    case h.ClanDiscoveryUserScreens.USER_UPSELL:
      return (0, a.jsx)("div", {
        className: g.container,
        children: (0, a.jsx)(o.ScrollerThin, {
          className: g.upsellScroller,
          fade: !0,
          children: (0, a.jsxs)("div", {
            className: i()(E, g.userUpsell),
            children: [(0, a.jsx)("div", {
              className: g.backgroundImageBlur
            }), (0, a.jsxs)("div", {
              className: g.backgroundImageContent,
              children: [(0, a.jsx)(m.ClanDiscoveryUserUpsellBackgroundRings, {}), (0, a.jsx)(m.default, {
                selectedGame: e,
                onClick: l
              })]
            })]
          })
        })
      });
    case h.ClanDiscoveryUserScreens.USER_ONBOARDING:
      return (0, a.jsx)("div", {
        className: g.container,
        children: (0, a.jsxs)("div", {
          className: i()(_, g.userOnboarding),
          children: [(0, a.jsx)("div", {
            className: g.backgroundImageBlur
          }), (0, a.jsx)("div", {
            className: g.backgroundImageContent,
            children: (0, a.jsx)(C.default, {
              selectedGame: e,
              setScreen: n
            })
          })]
        })
      })
  }
}

function A() {
  let e = (0, h.useClanDiscoveryUIStore)(e => e.game, r.default),
    {
      guilds: t
    } = (0, f.useClanPrepilotExperimentForAllGuilds)({
      location: "ClanDiscoveryAdminContainer",
      includeConverted: !0
    }),
    n = s.useMemo(() => t.filter(e => !(0, E.isGuildAClan)(e)), [t]),
    l = (0, u.default)(),
    d = s.useMemo(() => I(e, l), [e, l]);
  return 0 === t.length ? null : (0, a.jsx)("div", {
    className: g.container,
    children: (0, a.jsxs)(o.ScrollerNone, {
      className: g.upsellScroller,
      fade: !0,
      children: [(0, a.jsxs)("div", {
        className: i()(d, g.adminUpsell),
        children: [(0, a.jsx)("div", {
          className: g.backgroundImageBlur
        }), (0, a.jsx)("div", {
          className: g.backgroundImageContent,
          children: (0, a.jsx)(_.default, {
            selectedGame: e,
            eligibleGuilds: n,
            eligibleGuildsIncludingConverted: t
          })
        })]
      }), (0, a.jsx)(S.default, {})]
    })
  })
}