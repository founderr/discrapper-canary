"use strict";
n.r(t), n.d(t, {
  ClanDiscoveryAdminContainer: function() {
    return R
  },
  ClanDiscoveryUserContainer: function() {
    return v
  }
});
var a = n("735250"),
  s = n("470079"),
  i = n("120356"),
  l = n.n(i),
  r = n("143927"),
  o = n("597312"),
  u = n("442837"),
  d = n("393238"),
  c = n("410030"),
  f = n("970606"),
  E = n("963202"),
  h = n("430824"),
  _ = n("496675"),
  C = n("769727"),
  m = n("207796"),
  S = n("497189"),
  p = n("304231"),
  g = n("526282"),
  I = n("802001"),
  T = n("981631"),
  A = n("424023");
let N = (e, t) => {
  switch (e) {
    case m.ClanDiscoveryGame.GENSHIN:
      return t === T.ThemeTypes.DARK ? A.genshinUpsellBackgroundImageDark : A.genshinUpsellBackgroundImageLight;
    case m.ClanDiscoveryGame.VALORANT:
      return t === T.ThemeTypes.DARK ? A.valorantUpsellBackgroundImageDark : A.valorantUpsellBackgroundImageLight
  }
};

function v() {
  let e = (0, m.useClanDiscoveryUIStore)(e => e.game, r.default),
    t = (0, m.useClanDiscoveryUIStore)(e => e.userUpsellScreen, r.default),
    n = (0, m.useClanDiscoveryUIStore)(e => e.setUserUpsellScreen, r.default),
    i = s.useCallback(() => {
      (0, f.trackClanDiscoveryUserNuxClicked)(), n(m.ClanDiscoveryUserScreens.USER_ONBOARDING)
    }, [n]),
    u = (0, c.default)(),
    d = s.useMemo(() => N(e, u), [e, u]),
    E = s.useMemo(() => {
      switch (e) {
        case m.ClanDiscoveryGame.GENSHIN:
          return u === T.ThemeTypes.DARK ? A.genshinOnboardingBackgroundImageDark : A.genshinOnboardingBackgroundImageLight;
        case m.ClanDiscoveryGame.VALORANT:
          return u === T.ThemeTypes.DARK ? A.valorantOnboardingBackgroundImageDark : A.valorantOnboardingBackgroundImageLight
      }
    }, [e, u]);
  switch (t) {
    case m.ClanDiscoveryUserScreens.USER_UPSELL:
      return (0, a.jsx)("div", {
        className: A.container,
        children: (0, a.jsx)(o.ScrollerThin, {
          className: A.upsellScroller,
          fade: !0,
          children: (0, a.jsxs)("div", {
            className: l()(d, A.userUpsell),
            children: [(0, a.jsx)("div", {
              className: A.backgroundImageBlur
            }), (0, a.jsxs)("div", {
              className: A.backgroundImageContent,
              children: [(0, a.jsx)(g.ClanDiscoveryUserUpsellBackgroundRings, {}), (0, a.jsx)(g.default, {
                selectedGame: e,
                onClick: i
              })]
            })]
          })
        })
      });
    case m.ClanDiscoveryUserScreens.USER_ONBOARDING:
      return (0, a.jsx)("div", {
        className: A.container,
        children: (0, a.jsxs)("div", {
          className: l()(E, A.userOnboarding),
          children: [(0, a.jsx)("div", {
            className: A.backgroundImageBlur
          }), (0, a.jsx)("div", {
            className: A.backgroundImageContent,
            children: (0, a.jsx)(p.default, {
              selectedGame: e,
              setScreen: n
            })
          })]
        })
      })
  }
}

function R() {
  let e = (0, m.useClanDiscoveryUIStore)(e => e.game, r.default),
    t = (0, u.useStateFromStoresArray)([h.default], () => Object.values(h.default.getGuilds())),
    {
      enableClanCreation: n,
      guilds: i
    } = (0, E.useAnyClanPrepilotExperiment)(t, "ClanDiscoveryAdminContainer"),
    f = (0, u.useStateFromStoresArray)([_.default], () => n ? i.filter(e => (0, I.isEligibleGuildForClanConversion)(e, [_.default])) : []),
    {
      ref: p,
      width: g
    } = (0, d.default)();
  s.useEffect(() => {
    n ? 0 === f.length && n && (0, m.setClanDiscoveryMode)(m.ClanDiscoveryMode.ADMIN_UPSELL) : (0, m.setClanDiscoveryMode)(m.ClanDiscoveryMode.GET_STARTED)
  }, [f.length, n]);
  let T = (0, c.default)(),
    v = s.useMemo(() => N(e, T), [e, T]);
  return 0 === i.length ? null : (0, a.jsx)("div", {
    className: A.container,
    ref: p,
    children: (0, a.jsxs)(o.ScrollerNone, {
      className: A.upsellScroller,
      fade: !0,
      children: [(0, a.jsxs)("div", {
        className: l()(v, A.adminUpsell),
        children: [(0, a.jsx)("div", {
          className: A.backgroundImageBlur
        }), (0, a.jsx)("div", {
          className: A.backgroundImageContent,
          children: (0, a.jsx)(S.default, {
            selectedGame: e,
            eligibleGuilds: f,
            eligibleGuildsIncludingConverted: i
          })
        })]
      }), (0, a.jsx)(C.ClanDiscoveryTopPicks, {
        width: null != g ? g : 1024,
        limit: 10
      })]
    })
  })
}