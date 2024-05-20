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
  u = n("393238"),
  d = n("410030"),
  c = n("100527"),
  f = n("970606"),
  E = n("963202"),
  h = n("353093"),
  _ = n("769727"),
  C = n("207796"),
  m = n("497189"),
  S = n("304231"),
  p = n("526282"),
  g = n("981631"),
  I = n("424023");
let T = (e, t) => {
  switch (e) {
    case C.ClanDiscoveryGame.GENSHIN:
      return t === g.ThemeTypes.DARK ? I.genshinUpsellBackgroundImageDark : I.genshinUpsellBackgroundImageLight;
    case C.ClanDiscoveryGame.VALORANT:
      return t === g.ThemeTypes.DARK ? I.valorantUpsellBackgroundImageDark : I.valorantUpsellBackgroundImageLight
  }
};

function A() {
  let e = (0, C.useClanDiscoveryUIStore)(e => e.game, r.default),
    t = (0, C.useClanDiscoveryUIStore)(e => e.userUpsellScreen, r.default),
    n = (0, C.useClanDiscoveryUIStore)(e => e.setUserUpsellScreen, r.default),
    l = s.useCallback(() => {
      (0, f.trackClanUserInviteClicked)({
        location: c.default.CLAN_DISCOVERY
      }), n(C.ClanDiscoveryUserScreens.USER_ONBOARDING)
    }, [n]),
    u = (0, d.default)(),
    E = s.useMemo(() => T(e, u), [e, u]),
    h = s.useMemo(() => {
      switch (e) {
        case C.ClanDiscoveryGame.GENSHIN:
          return u === g.ThemeTypes.DARK ? I.genshinOnboardingBackgroundImageDark : I.genshinOnboardingBackgroundImageLight;
        case C.ClanDiscoveryGame.VALORANT:
          return u === g.ThemeTypes.DARK ? I.valorantOnboardingBackgroundImageDark : I.valorantOnboardingBackgroundImageLight
      }
    }, [e, u]);
  switch (t) {
    case C.ClanDiscoveryUserScreens.USER_UPSELL:
      return (0, a.jsx)("div", {
        className: I.container,
        children: (0, a.jsx)(o.ScrollerThin, {
          className: I.upsellScroller,
          fade: !0,
          children: (0, a.jsxs)("div", {
            className: i()(E, I.userUpsell),
            children: [(0, a.jsx)("div", {
              className: I.backgroundImageBlur
            }), (0, a.jsxs)("div", {
              className: I.backgroundImageContent,
              children: [(0, a.jsx)(p.ClanDiscoveryUserUpsellBackgroundRings, {}), (0, a.jsx)(p.default, {
                selectedGame: e,
                onClick: l
              })]
            })]
          })
        })
      });
    case C.ClanDiscoveryUserScreens.USER_ONBOARDING:
      return (0, a.jsx)("div", {
        className: I.container,
        children: (0, a.jsxs)("div", {
          className: i()(h, I.userOnboarding),
          children: [(0, a.jsx)("div", {
            className: I.backgroundImageBlur
          }), (0, a.jsx)("div", {
            className: I.backgroundImageContent,
            children: (0, a.jsx)(S.default, {
              selectedGame: e,
              setScreen: n
            })
          })]
        })
      })
  }
}

function N() {
  let e = (0, C.useClanDiscoveryUIStore)(e => e.game, r.default),
    {
      guilds: t
    } = (0, E.useClanPrepilotExperimentForAllGuilds)({
      location: "ClanDiscoveryAdminContainer",
      includeConverted: !0
    }),
    n = s.useMemo(() => t.filter(e => !(0, h.isGuildAClan)(e)), [t]),
    {
      ref: l,
      width: c
    } = (0, u.default)(),
    f = (0, d.default)(),
    S = s.useMemo(() => T(e, f), [e, f]);
  return 0 === t.length ? null : (0, a.jsx)("div", {
    className: I.container,
    ref: l,
    children: (0, a.jsxs)(o.ScrollerNone, {
      className: I.upsellScroller,
      fade: !0,
      children: [(0, a.jsxs)("div", {
        className: i()(S, I.adminUpsell),
        children: [(0, a.jsx)("div", {
          className: I.backgroundImageBlur
        }), (0, a.jsx)("div", {
          className: I.backgroundImageContent,
          children: (0, a.jsx)(m.default, {
            selectedGame: e,
            eligibleGuilds: n,
            eligibleGuildsIncludingConverted: t
          })
        })]
      }), (0, a.jsx)(_.ClanDiscoveryTopPicks, {
        width: null != c ? c : 1024,
        limit: 10
      })]
    })
  })
}