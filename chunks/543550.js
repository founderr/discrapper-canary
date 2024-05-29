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
  h = n("207796"),
  _ = n("497189"),
  C = n("304231"),
  m = n("526282"),
  S = n("490610"),
  p = n("981631"),
  I = n("689938"),
  g = n("424023");
let T = (e, t) => {
  switch (e) {
    case h.ClanDiscoveryGame.GENSHIN:
      return t === p.ThemeTypes.DARK ? g.genshinUpsellBackgroundImageDark : g.genshinUpsellBackgroundImageLight;
    case h.ClanDiscoveryGame.VALORANT:
      return t === p.ThemeTypes.DARK ? g.valorantUpsellBackgroundImageDark : g.valorantUpsellBackgroundImageLight
  }
};

function A() {
  let e = (0, h.useClanDiscoveryUIStore)(e => e.game, r.default),
    t = (0, h.useClanDiscoveryUIStore)(e => e.userUpsellScreen, r.default),
    n = (0, h.useClanDiscoveryUIStore)(e => e.setUserUpsellScreen, r.default),
    l = s.useCallback(() => {
      (0, c.trackClanUserInviteClicked)({
        location: d.default.CLAN_DISCOVERY
      }), n(h.ClanDiscoveryUserScreens.USER_ONBOARDING)
    }, [n]),
    f = (0, u.default)(),
    E = s.useMemo(() => T(e, f), [e, f]),
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

function N() {
  let e = (0, h.useClanDiscoveryUIStore)(e => e.started, r.default),
    t = (0, h.useClanDiscoveryUIStore)(e => e.game, r.default),
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
    C = s.useMemo(() => T(t, c), [t, c]),
    m = !e && n;
  return 0 === l.length ? null : (0, a.jsx)("div", {
    className: g.container,
    children: (0, a.jsxs)(o.ScrollerNone, {
      className: g.upsellScroller,
      fade: !0,
      children: [(0, a.jsxs)("div", {
        className: i()(C, g.adminUpsell),
        children: [(0, a.jsx)("div", {
          className: g.backgroundImageBlur
        }), (0, a.jsx)("div", {
          className: g.backgroundImageContent,
          children: (0, a.jsx)(_.default, {
            isBrowseButtonVisible: m,
            selectedGame: t,
            eligibleGuilds: d,
            eligibleGuildsIncludingConverted: l
          })
        })]
      }), (0, a.jsx)(S.default, {
        title: I.default.Messages.CLAN_DISCOVERY_INSPIRATION_TITLE,
        subtitle: m ? I.default.Messages.CLAN_DISCOVERY_PILOT_SUBTITLE.format() : void 0
      })]
    })
  })
}