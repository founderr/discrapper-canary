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
  i = n("120356"),
  l = n.n(i),
  r = n("143927"),
  o = n("597312"),
  u = n("393238"),
  d = n("410030"),
  c = n("100527"),
  f = n("970606"),
  E = n("769727"),
  h = n("207796"),
  _ = n("497189"),
  C = n("304231"),
  m = n("526282"),
  p = n("878241"),
  S = n("981631"),
  g = n("424023");
let I = (e, t) => {
  switch (e) {
    case h.ClanDiscoveryGame.GENSHIN:
      return t === S.ThemeTypes.DARK ? g.genshinUpsellBackgroundImageDark : g.genshinUpsellBackgroundImageLight;
    case h.ClanDiscoveryGame.VALORANT:
      return t === S.ThemeTypes.DARK ? g.valorantUpsellBackgroundImageDark : g.valorantUpsellBackgroundImageLight
  }
};

function T() {
  let e = (0, h.useClanDiscoveryUIStore)(e => e.game, r.default),
    t = (0, h.useClanDiscoveryUIStore)(e => e.userUpsellScreen, r.default),
    n = (0, h.useClanDiscoveryUIStore)(e => e.setUserUpsellScreen, r.default),
    i = s.useCallback(() => {
      (0, f.trackClanUserInviteClicked)({
        location: c.default.CLAN_DISCOVERY
      }), n(h.ClanDiscoveryUserScreens.USER_ONBOARDING)
    }, [n]),
    u = (0, d.default)(),
    E = s.useMemo(() => I(e, u), [e, u]),
    _ = s.useMemo(() => {
      switch (e) {
        case h.ClanDiscoveryGame.GENSHIN:
          return u === S.ThemeTypes.DARK ? g.genshinOnboardingBackgroundImageDark : g.genshinOnboardingBackgroundImageLight;
        case h.ClanDiscoveryGame.VALORANT:
          return u === S.ThemeTypes.DARK ? g.valorantOnboardingBackgroundImageDark : g.valorantOnboardingBackgroundImageLight
      }
    }, [e, u]);
  switch (t) {
    case h.ClanDiscoveryUserScreens.USER_UPSELL:
      return (0, a.jsx)("div", {
        className: g.container,
        children: (0, a.jsx)(o.ScrollerThin, {
          className: g.upsellScroller,
          fade: !0,
          children: (0, a.jsxs)("div", {
            className: l()(E, g.userUpsell),
            children: [(0, a.jsx)("div", {
              className: g.backgroundImageBlur
            }), (0, a.jsxs)("div", {
              className: g.backgroundImageContent,
              children: [(0, a.jsx)(m.ClanDiscoveryUserUpsellBackgroundRings, {}), (0, a.jsx)(m.default, {
                selectedGame: e,
                onClick: i
              })]
            })]
          })
        })
      });
    case h.ClanDiscoveryUserScreens.USER_ONBOARDING:
      return (0, a.jsx)("div", {
        className: g.container,
        children: (0, a.jsxs)("div", {
          className: l()(_, g.userOnboarding),
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
    t = (0, p.useGuildsEligibleForClan)("ClanDiscoveryAdminContainer", !0),
    n = t.length > 0,
    i = s.useMemo(() => t.filter(e => !e.hasFeature(S.GuildFeatures.CLAN)), [t]),
    {
      ref: c,
      width: f
    } = (0, u.default)();
  s.useEffect(() => {
    n ? 0 === i.length && n && (0, h.setClanDiscoveryMode)(h.ClanDiscoveryMode.ADMIN_UPSELL) : (0, h.setClanDiscoveryMode)(h.ClanDiscoveryMode.GET_STARTED)
  }, [i.length, n]);
  let C = (0, d.default)(),
    m = s.useMemo(() => I(e, C), [e, C]);
  return 0 === t.length ? null : (0, a.jsx)("div", {
    className: g.container,
    ref: c,
    children: (0, a.jsxs)(o.ScrollerNone, {
      className: g.upsellScroller,
      fade: !0,
      children: [(0, a.jsxs)("div", {
        className: l()(m, g.adminUpsell),
        children: [(0, a.jsx)("div", {
          className: g.backgroundImageBlur
        }), (0, a.jsx)("div", {
          className: g.backgroundImageContent,
          children: (0, a.jsx)(_.default, {
            selectedGame: e,
            eligibleGuilds: i,
            eligibleGuildsIncludingConverted: t
          })
        })]
      }), (0, a.jsx)(E.ClanDiscoveryTopPicks, {
        width: null != f ? f : 1024,
        limit: 10
      })]
    })
  })
}