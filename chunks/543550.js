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
  u = n("410030"),
  d = n("100527"),
  c = n("970606"),
  f = n("963202"),
  E = n("353093"),
  C = n("207796"),
  h = n("497189"),
  _ = n("304231"),
  S = n("526282"),
  m = n("490610"),
  p = n("981631"),
  I = n("689938"),
  g = n("424023");
let T = (e, t) => {
  switch (e) {
    case C.ClanDiscoveryGame.GENSHIN:
      return t === p.ThemeTypes.DARK ? g.genshinUpsellBackgroundImageDark : g.genshinUpsellBackgroundImageLight;
    case C.ClanDiscoveryGame.VALORANT:
      return t === p.ThemeTypes.DARK ? g.valorantUpsellBackgroundImageDark : g.valorantUpsellBackgroundImageLight
  }
};

function A() {
  let e = (0, C.useClanDiscoveryUIStore)(e => e.game, r.default),
    t = (0, C.useClanDiscoveryUIStore)(e => e.userUpsellScreen, r.default),
    n = (0, C.useClanDiscoveryUIStore)(e => e.setUserUpsellScreen, r.default),
    l = s.useCallback(() => {
      (0, c.trackClanUserInviteClicked)({
        location: d.default.CLAN_DISCOVERY
      }), n(C.ClanDiscoveryUserScreens.USER_ONBOARDING)
    }, [n]),
    f = (0, u.default)(),
    E = s.useMemo(() => T(e, f), [e, f]),
    h = s.useMemo(() => {
      switch (e) {
        case C.ClanDiscoveryGame.GENSHIN:
          return f === p.ThemeTypes.DARK ? g.genshinOnboardingBackgroundImageDark : g.genshinOnboardingBackgroundImageLight;
        case C.ClanDiscoveryGame.VALORANT:
          return f === p.ThemeTypes.DARK ? g.valorantOnboardingBackgroundImageDark : g.valorantOnboardingBackgroundImageLight
      }
    }, [e, f]);
  switch (t) {
    case C.ClanDiscoveryUserScreens.USER_UPSELL:
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
              children: [(0, a.jsx)(S.ClanDiscoveryUserUpsellBackgroundRings, {}), (0, a.jsx)(S.default, {
                selectedGame: e,
                onClick: l
              })]
            })]
          })
        })
      });
    case C.ClanDiscoveryUserScreens.USER_ONBOARDING:
      return (0, a.jsx)("div", {
        className: g.container,
        children: (0, a.jsxs)("div", {
          className: i()(h, g.userOnboarding),
          children: [(0, a.jsx)("div", {
            className: g.backgroundImageBlur
          }), (0, a.jsx)("div", {
            className: g.backgroundImageContent,
            children: (0, a.jsx)(_.default, {
              selectedGame: e,
              setScreen: n
            })
          })]
        })
      })
  }
}

function N() {
  let e = (0, C.useClanDiscoveryUIStore)(e => e.started, r.default),
    t = (0, C.useClanDiscoveryUIStore)(e => e.game, r.default),
    {
      enableApplication: n
    } = (0, f.useClanPrePilotApplicationExperiment)("ClanDiscoveryAdminContainer"),
    {
      guilds: l
    } = (0, f.useClanPrepilotExperimentForAllGuilds)({
      location: "ClanDiscoveryAdminContainer",
      includeConverted: !0
    }),
    d = s.useMemo(() => l.filter(e => !(0, E.isGuildAClan)(e)), [l]),
    c = (0, u.default)(),
    _ = s.useMemo(() => T(t, c), [t, c]),
    S = !e && n;
  return 0 === l.length ? null : (0, a.jsx)("div", {
    className: g.container,
    children: (0, a.jsxs)(o.ScrollerNone, {
      className: g.upsellScroller,
      fade: !0,
      children: [(0, a.jsxs)("div", {
        className: i()(_, g.adminUpsell),
        children: [(0, a.jsx)("div", {
          className: g.backgroundImageBlur
        }), (0, a.jsx)("div", {
          className: g.backgroundImageContent,
          children: (0, a.jsx)(h.default, {
            isBrowseButtonVisible: S,
            selectedGame: t,
            eligibleGuilds: d,
            eligibleGuildsIncludingConverted: l
          })
        })]
      }), (0, a.jsx)(m.default, {
        title: I.default.Messages.CLAN_DISCOVERY_INSPIRATION_TITLE,
        subtitle: S ? I.default.Messages.CLAN_DISCOVERY_PILOT_SUBTITLE.format() : void 0
      })]
    })
  })
}