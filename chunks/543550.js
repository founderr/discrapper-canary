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
  T = n("424023");
let g = (e, t) => {
  switch (e) {
    case h.ClanDiscoveryGame.GENSHIN:
      return t === p.ThemeTypes.DARK ? T.genshinUpsellBackgroundImageDark : T.genshinUpsellBackgroundImageLight;
    case h.ClanDiscoveryGame.VALORANT:
      return t === p.ThemeTypes.DARK ? T.valorantUpsellBackgroundImageDark : T.valorantUpsellBackgroundImageLight
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
    E = s.useMemo(() => g(e, f), [e, f]),
    _ = s.useMemo(() => {
      switch (e) {
        case h.ClanDiscoveryGame.GENSHIN:
          return f === p.ThemeTypes.DARK ? T.genshinOnboardingBackgroundImageDark : T.genshinOnboardingBackgroundImageLight;
        case h.ClanDiscoveryGame.VALORANT:
          return f === p.ThemeTypes.DARK ? T.valorantOnboardingBackgroundImageDark : T.valorantOnboardingBackgroundImageLight
      }
    }, [e, f]);
  switch (t) {
    case h.ClanDiscoveryUserScreens.USER_UPSELL:
      return (0, a.jsx)("div", {
        className: T.container,
        children: (0, a.jsx)(o.ScrollerThin, {
          className: T.upsellScroller,
          fade: !0,
          children: (0, a.jsxs)("div", {
            className: i()(E, T.userUpsell),
            children: [(0, a.jsx)("div", {
              className: T.backgroundImageBlur
            }), (0, a.jsxs)("div", {
              className: T.backgroundImageContent,
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
        className: T.container,
        children: (0, a.jsxs)("div", {
          className: i()(_, T.userOnboarding),
          children: [(0, a.jsx)("div", {
            className: T.backgroundImageBlur
          }), (0, a.jsx)("div", {
            className: T.backgroundImageContent,
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
    C = s.useMemo(() => g(t, c), [t, c]),
    m = !e && n;
  return 0 === l.length ? null : (0, a.jsx)("div", {
    className: T.container,
    children: (0, a.jsxs)(o.ScrollerNone, {
      className: T.upsellScroller,
      fade: !0,
      children: [(0, a.jsxs)("div", {
        className: i()(C, T.adminUpsell),
        children: [(0, a.jsx)("div", {
          className: T.backgroundImageBlur
        }), (0, a.jsx)("div", {
          className: T.backgroundImageContent,
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