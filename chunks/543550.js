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
  i = n("120356"),
  l = n.n(i),
  r = n("143927"),
  o = n("597312"),
  u = n("442837"),
  d = n("410030"),
  c = n("970606"),
  f = n("963202"),
  E = n("430824"),
  h = n("769727"),
  _ = n("207796"),
  C = n("497189"),
  m = n("304231"),
  S = n("526282"),
  p = n("802001"),
  g = n("981631"),
  I = n("424023");
let T = (e, t) => {
  switch (e) {
    case _.ClanDiscoveryGame.GENSHIN:
      return t === g.ThemeTypes.DARK ? I.genshinUpsellBackgroundImageDark : I.genshinUpsellBackgroundImageLight;
    case _.ClanDiscoveryGame.VALORANT:
      return t === g.ThemeTypes.DARK ? I.valorantUpsellBackgroundImageDark : I.valorantUpsellBackgroundImageLight
  }
};

function A() {
  let e = (0, _.useClanDiscoveryUIStore)(e => e.game, r.default),
    t = (0, _.useClanDiscoveryUIStore)(e => e.userUpsellScreen, r.default),
    n = (0, _.useClanDiscoveryUIStore)(e => e.setUserUpsellScreen, r.default),
    i = s.useCallback(() => {
      (0, c.trackClanDiscoveryUserNuxClicked)(), n(_.ClanDiscoveryUserScreens.USER_ONBOARDING)
    }, [n]),
    u = (0, d.default)(),
    f = s.useMemo(() => T(e, u), [e, u]),
    E = s.useMemo(() => {
      switch (e) {
        case _.ClanDiscoveryGame.GENSHIN:
          return u === g.ThemeTypes.DARK ? I.genshinOnboardingBackgroundImageDark : I.genshinOnboardingBackgroundImageLight;
        case _.ClanDiscoveryGame.VALORANT:
          return u === g.ThemeTypes.DARK ? I.valorantOnboardingBackgroundImageDark : I.valorantOnboardingBackgroundImageLight
      }
    }, [e, u]);
  switch (t) {
    case _.ClanDiscoveryUserScreens.USER_UPSELL:
      return (0, a.jsx)("div", {
        className: I.container,
        children: (0, a.jsx)(o.ScrollerThin, {
          className: I.upsellScroller,
          fade: !0,
          children: (0, a.jsxs)("div", {
            className: l()(f, I.userUpsell),
            children: [(0, a.jsx)("div", {
              className: I.backgroundImageBlur
            }), (0, a.jsxs)("div", {
              className: I.backgroundImageContent,
              children: [(0, a.jsx)(S.ClanDiscoveryUserUpsellBackgroundRings, {}), (0, a.jsx)(S.default, {
                selectedGame: e,
                onClick: i
              })]
            })]
          })
        })
      });
    case _.ClanDiscoveryUserScreens.USER_ONBOARDING:
      return (0, a.jsx)("div", {
        className: I.container,
        children: (0, a.jsxs)("div", {
          className: l()(E, I.userOnboarding),
          children: [(0, a.jsx)("div", {
            className: I.backgroundImageBlur
          }), (0, a.jsx)("div", {
            className: I.backgroundImageContent,
            children: (0, a.jsx)(m.default, {
              selectedGame: e,
              setScreen: n
            })
          })]
        })
      })
  }
}

function N() {
  let e = (0, _.useClanDiscoveryUIStore)(e => e.game, r.default),
    t = (0, _.useClanDiscoveryUIStore)(e => e.setMode, r.default),
    n = (0, u.useStateFromStoresArray)([E.default], () => Object.values(E.default.getGuilds())),
    i = (0, f.useAnyClanPrepilotExperimentEnabled)(n, "clan_discovery_admin_upsell"),
    c = (0, p.useGuildsEligibleForClanConversion)("ClanDiscoveryAdminContainer");
  s.useEffect(() => {
    (!i || 0 === c.length && i) && t(_.ClanDiscoveryMode.GET_STARTED)
  }, [c.length, i, t]);
  let m = (0, d.default)(),
    S = s.useMemo(() => T(e, m), [e, m]);
  return 0 === c.length ? null : (0, a.jsx)("div", {
    className: I.container,
    children: (0, a.jsxs)(o.ScrollerThin, {
      className: I.upsellScroller,
      fade: !0,
      children: [(0, a.jsxs)("div", {
        className: l()(S, I.adminUpsell),
        children: [(0, a.jsx)("div", {
          className: I.backgroundImageBlur
        }), (0, a.jsx)("div", {
          className: I.backgroundImageContent,
          children: (0, a.jsx)(C.default, {
            selectedGame: e,
            eligibleGuilds: c
          })
        })]
      }), (0, a.jsx)(h.ClanDiscoveryTopPicks, {
        limit: 10
      })]
    })
  })
}