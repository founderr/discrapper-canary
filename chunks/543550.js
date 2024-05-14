"use strict";
n.r(t), n.d(t, {
  ClanDiscoveryAdminContainer: function() {
    return L
  },
  ClanDiscoveryUserContainer: function() {
    return R
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("143927"),
  o = n("597312"),
  u = n("442837"),
  d = n("393238"),
  c = n("410030"),
  f = n("100527"),
  E = n("970606"),
  h = n("963202"),
  _ = n("430824"),
  C = n("496675"),
  m = n("769727"),
  S = n("207796"),
  p = n("497189"),
  g = n("304231"),
  I = n("526282"),
  T = n("802001"),
  A = n("981631"),
  N = n("424023");
let v = (e, t) => {
  switch (e) {
    case S.ClanDiscoveryGame.GENSHIN:
      return t === A.ThemeTypes.DARK ? N.genshinUpsellBackgroundImageDark : N.genshinUpsellBackgroundImageLight;
    case S.ClanDiscoveryGame.VALORANT:
      return t === A.ThemeTypes.DARK ? N.valorantUpsellBackgroundImageDark : N.valorantUpsellBackgroundImageLight
  }
};

function R() {
  let e = (0, S.useClanDiscoveryUIStore)(e => e.game, r.default),
    t = (0, S.useClanDiscoveryUIStore)(e => e.userUpsellScreen, r.default),
    n = (0, S.useClanDiscoveryUIStore)(e => e.setUserUpsellScreen, r.default),
    l = s.useCallback(() => {
      (0, E.trackClanUserInviteClicked)({
        location: f.default.CLAN_DISCOVERY
      }), n(S.ClanDiscoveryUserScreens.USER_ONBOARDING)
    }, [n]),
    u = (0, c.default)(),
    d = s.useMemo(() => v(e, u), [e, u]),
    h = s.useMemo(() => {
      switch (e) {
        case S.ClanDiscoveryGame.GENSHIN:
          return u === A.ThemeTypes.DARK ? N.genshinOnboardingBackgroundImageDark : N.genshinOnboardingBackgroundImageLight;
        case S.ClanDiscoveryGame.VALORANT:
          return u === A.ThemeTypes.DARK ? N.valorantOnboardingBackgroundImageDark : N.valorantOnboardingBackgroundImageLight
      }
    }, [e, u]);
  switch (t) {
    case S.ClanDiscoveryUserScreens.USER_UPSELL:
      return (0, a.jsx)("div", {
        className: N.container,
        children: (0, a.jsx)(o.ScrollerThin, {
          className: N.upsellScroller,
          fade: !0,
          children: (0, a.jsxs)("div", {
            className: i()(d, N.userUpsell),
            children: [(0, a.jsx)("div", {
              className: N.backgroundImageBlur
            }), (0, a.jsxs)("div", {
              className: N.backgroundImageContent,
              children: [(0, a.jsx)(I.ClanDiscoveryUserUpsellBackgroundRings, {}), (0, a.jsx)(I.default, {
                selectedGame: e,
                onClick: l
              })]
            })]
          })
        })
      });
    case S.ClanDiscoveryUserScreens.USER_ONBOARDING:
      return (0, a.jsx)("div", {
        className: N.container,
        children: (0, a.jsxs)("div", {
          className: i()(h, N.userOnboarding),
          children: [(0, a.jsx)("div", {
            className: N.backgroundImageBlur
          }), (0, a.jsx)("div", {
            className: N.backgroundImageContent,
            children: (0, a.jsx)(g.default, {
              selectedGame: e,
              setScreen: n
            })
          })]
        })
      })
  }
}

function L() {
  let e = (0, S.useClanDiscoveryUIStore)(e => e.game, r.default),
    t = (0, u.useStateFromStoresArray)([_.default], () => Object.values(_.default.getGuilds())),
    {
      enableClanCreation: n,
      guilds: l
    } = (0, h.useAnyClanPrepilotExperiment)(t, "ClanDiscoveryAdminContainer"),
    f = (0, u.useStateFromStoresArray)([C.default], () => n ? l.filter(e => (0, T.isEligibleGuildForClanConversion)(e, [C.default])) : []),
    {
      ref: E,
      width: g
    } = (0, d.default)();
  s.useEffect(() => {
    n ? 0 === f.length && n && (0, S.setClanDiscoveryMode)(S.ClanDiscoveryMode.ADMIN_UPSELL) : (0, S.setClanDiscoveryMode)(S.ClanDiscoveryMode.GET_STARTED)
  }, [f.length, n]);
  let I = (0, c.default)(),
    A = s.useMemo(() => v(e, I), [e, I]);
  return 0 === l.length ? null : (0, a.jsx)("div", {
    className: N.container,
    ref: E,
    children: (0, a.jsxs)(o.ScrollerNone, {
      className: N.upsellScroller,
      fade: !0,
      children: [(0, a.jsxs)("div", {
        className: i()(A, N.adminUpsell),
        children: [(0, a.jsx)("div", {
          className: N.backgroundImageBlur
        }), (0, a.jsx)("div", {
          className: N.backgroundImageContent,
          children: (0, a.jsx)(p.default, {
            selectedGame: e,
            eligibleGuilds: f,
            eligibleGuildsIncludingConverted: l
          })
        })]
      }), (0, a.jsx)(m.ClanDiscoveryTopPicks, {
        width: null != g ? g : 1024,
        limit: 10
      })]
    })
  })
}