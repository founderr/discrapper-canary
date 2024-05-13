"use strict";
n.r(t), n.d(t, {
  ClanDiscoveryAdminContainer: function() {
    return v
  },
  ClanDiscoveryUserContainer: function() {
    return N
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("143927"),
  o = n("597312"),
  u = n("442837"),
  d = n("410030"),
  c = n("970606"),
  f = n("963202"),
  E = n("430824"),
  h = n("496675"),
  _ = n("769727"),
  C = n("207796"),
  m = n("497189"),
  S = n("304231"),
  p = n("526282"),
  I = n("802001"),
  g = n("981631"),
  T = n("424023");
let A = (e, t) => {
  switch (e) {
    case C.ClanDiscoveryGame.GENSHIN:
      return t === g.ThemeTypes.DARK ? T.genshinUpsellBackgroundImageDark : T.genshinUpsellBackgroundImageLight;
    case C.ClanDiscoveryGame.VALORANT:
      return t === g.ThemeTypes.DARK ? T.valorantUpsellBackgroundImageDark : T.valorantUpsellBackgroundImageLight
  }
};

function N() {
  let e = (0, C.useClanDiscoveryUIStore)(e => e.game, r.default),
    t = (0, C.useClanDiscoveryUIStore)(e => e.userUpsellScreen, r.default),
    n = (0, C.useClanDiscoveryUIStore)(e => e.setUserUpsellScreen, r.default),
    l = s.useCallback(() => {
      (0, c.trackClanDiscoveryUserNuxClicked)(), n(C.ClanDiscoveryUserScreens.USER_ONBOARDING)
    }, [n]),
    u = (0, d.default)(),
    f = s.useMemo(() => A(e, u), [e, u]),
    E = s.useMemo(() => {
      switch (e) {
        case C.ClanDiscoveryGame.GENSHIN:
          return u === g.ThemeTypes.DARK ? T.genshinOnboardingBackgroundImageDark : T.genshinOnboardingBackgroundImageLight;
        case C.ClanDiscoveryGame.VALORANT:
          return u === g.ThemeTypes.DARK ? T.valorantOnboardingBackgroundImageDark : T.valorantOnboardingBackgroundImageLight
      }
    }, [e, u]);
  switch (t) {
    case C.ClanDiscoveryUserScreens.USER_UPSELL:
      return (0, a.jsx)("div", {
        className: T.container,
        children: (0, a.jsx)(o.ScrollerThin, {
          className: T.upsellScroller,
          fade: !0,
          children: (0, a.jsxs)("div", {
            className: i()(f, T.userUpsell),
            children: [(0, a.jsx)("div", {
              className: T.backgroundImageBlur
            }), (0, a.jsxs)("div", {
              className: T.backgroundImageContent,
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
        className: T.container,
        children: (0, a.jsxs)("div", {
          className: i()(E, T.userOnboarding),
          children: [(0, a.jsx)("div", {
            className: T.backgroundImageBlur
          }), (0, a.jsx)("div", {
            className: T.backgroundImageContent,
            children: (0, a.jsx)(S.default, {
              selectedGame: e,
              setScreen: n
            })
          })]
        })
      })
  }
}

function v() {
  let e = (0, C.useClanDiscoveryUIStore)(e => e.game, r.default),
    t = (0, u.useStateFromStoresArray)([E.default], () => Object.values(E.default.getGuilds())),
    {
      enableClanCreation: n,
      guilds: l
    } = (0, f.useAnyClanPrepilotExperiment)(t, "ClanDiscoveryAdminContainer", void 0, !0),
    c = (0, u.useStateFromStoresArray)([h.default], () => n ? l.filter(e => (0, I.isEligibleGuildForClanConversion)(e, [h.default])) : []);
  s.useEffect(() => {
    n ? 0 === c.length && n && (0, C.setClanDiscoveryMode)(C.ClanDiscoveryMode.ADMIN_UPSELL) : (0, C.setClanDiscoveryMode)(C.ClanDiscoveryMode.GET_STARTED)
  }, [c.length, n]);
  let S = (0, d.default)(),
    p = s.useMemo(() => A(e, S), [e, S]);
  return 0 === l.length ? null : (0, a.jsx)("div", {
    className: T.container,
    children: (0, a.jsxs)(o.ScrollerThin, {
      className: T.upsellScroller,
      fade: !0,
      children: [(0, a.jsxs)("div", {
        className: i()(p, T.adminUpsell),
        children: [(0, a.jsx)("div", {
          className: T.backgroundImageBlur
        }), (0, a.jsx)("div", {
          className: T.backgroundImageContent,
          children: (0, a.jsx)(m.default, {
            selectedGame: e,
            eligibleGuilds: c,
            eligibleGuildsIncludingConverted: l
          })
        })]
      }), (0, a.jsx)(_.ClanDiscoveryTopPicks, {
        limit: 10
      })]
    })
  })
}