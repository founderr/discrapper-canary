"use strict";
n.r(t), n.d(t, {
  ClanDiscoveryAdminContainer: function() {
    return R
  },
  ClanDiscoveryUserContainer: function() {
    return v
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("920906"),
  o = n("143927"),
  u = n("597312"),
  d = n("481060"),
  c = n("393238"),
  f = n("410030"),
  E = n("963202"),
  h = n("353093"),
  C = n("702646"),
  _ = n("207796"),
  m = n("497189"),
  S = n("304231"),
  p = n("895068"),
  I = n("490610"),
  g = n("981631"),
  T = n("689938"),
  A = n("424023");
let N = (e, t) => {
  switch (e) {
    case _.ClanDiscoveryGame.GENSHIN:
      return t === g.ThemeTypes.DARK ? A.genshinUpsellBackgroundImageDark : A.genshinUpsellBackgroundImageLight;
    case _.ClanDiscoveryGame.VALORANT:
      return t === g.ThemeTypes.DARK ? A.valorantUpsellBackgroundImageDark : A.valorantUpsellBackgroundImageLight
  }
};

function v() {
  let e = (0, _.useClanDiscoveryUIStore)(e => e.game, o.default),
    t = (0, _.useClanDiscoveryUIStore)(e => e.userUpsellScreen, o.default),
    n = (0, _.useClanDiscoveryUIStore)(e => e.setUserUpsellScreen, o.default),
    {
      ref: l,
      width: u
    } = (0, c.default)(),
    [E, h] = s.useState(0),
    m = (0, r.useSpring)({
      from: {
        scrollHeight: 0
      },
      to: {
        scrollHeight: E
      }
    }),
    I = (0, f.default)(),
    T = s.useMemo(() => N(e, I), [e, I]),
    v = s.useCallback(e => {
      h(e.currentTarget.scrollTop)
    }, [h]),
    R = s.useMemo(() => {
      switch (e) {
        case _.ClanDiscoveryGame.GENSHIN:
          return I === g.ThemeTypes.DARK ? A.genshinOnboardingBackgroundImageDark : A.genshinOnboardingBackgroundImageLight;
        case _.ClanDiscoveryGame.VALORANT:
          return I === g.ThemeTypes.DARK ? A.valorantOnboardingBackgroundImageDark : A.valorantOnboardingBackgroundImageLight
      }
    }, [e, I]),
    O = (0, d.useToken)(d.tokens.colors.BG_MOD_STRONG);
  switch (t) {
    case _.ClanDiscoveryUserScreens.USER_UPSELL:
      return (0, a.jsxs)("div", {
        ref: l,
        className: A.container,
        children: [(0, a.jsxs)("div", {
          className: A.toolbar,
          style: {
            width: u
          },
          children: [(0, a.jsx)(r.animated.div, {
            className: A.toolbarBackground,
            style: {
              width: u,
              opacity: m.scrollHeight.to([100, 364], [0, 1]),
              borderBottom: m.scrollHeight.to([100, 364], [0, 1]).to(e => "1px solid ".concat(O.hex({
                opacity: e
              })))
            }
          }), (0, a.jsx)(C.default, {})]
        }), (0, a.jsxs)("div", {
          className: A.upsellContainer,
          children: [(0, a.jsxs)(r.animated.div, {
            className: A.backgroundImageContainer,
            style: {
              opacity: m.scrollHeight.to([100, 364], [1, 0])
            },
            children: [(0, a.jsx)("div", {
              className: T
            }), (0, a.jsx)("div", {
              className: A.backgroundImageBlur
            })]
          }), (0, a.jsx)("div", {
            className: i()(A.backgroundImageContent, A.userUpsell),
            children: (0, a.jsx)(p.default, {
              onScroll: v,
              width: null != u ? u : 0,
              isAnimating: !1,
              variant: p.ClanDiscoveryListVariant.UPSELL
            })
          })]
        })]
      });
    case _.ClanDiscoveryUserScreens.USER_ONBOARDING:
      return (0, a.jsx)("div", {
        className: A.container,
        children: (0, a.jsxs)("div", {
          className: i()(R, A.userOnboarding),
          children: [(0, a.jsx)("div", {
            className: A.backgroundImageBlur
          }), (0, a.jsx)("div", {
            className: A.backgroundImageContent,
            children: (0, a.jsx)(S.default, {
              selectedGame: e,
              setScreen: n
            })
          })]
        })
      })
  }
}

function R() {
  let e = (0, _.useClanDiscoveryUIStore)(e => e.started, o.default),
    t = (0, _.useClanDiscoveryUIStore)(e => e.game, o.default),
    {
      enableApplication: n
    } = (0, E.useClanPrePilotApplicationExperiment)("ClanDiscoveryAdminContainer"),
    {
      guilds: l
    } = (0, E.useClanPrepilotExperimentForAllGuilds)({
      location: "ClanDiscoveryAdminContainer",
      includeConverted: !0
    }),
    r = s.useMemo(() => l.filter(e => !(0, h.isGuildAClan)(e)), [l]),
    d = (0, f.default)(),
    c = s.useMemo(() => N(t, d), [t, d]),
    C = !e && n;
  return 0 === l.length ? null : (0, a.jsx)("div", {
    className: A.container,
    children: (0, a.jsxs)(u.ScrollerNone, {
      className: A.upsellScroller,
      fade: !0,
      children: [(0, a.jsxs)("div", {
        className: i()(c, A.adminUpsell),
        children: [(0, a.jsx)("div", {
          className: A.backgroundImageBlur
        }), (0, a.jsx)("div", {
          className: A.backgroundImageContent,
          children: (0, a.jsx)(m.default, {
            isBrowseButtonVisible: C,
            selectedGame: t,
            eligibleGuilds: r,
            eligibleGuildsIncludingConverted: l
          })
        })]
      }), (0, a.jsx)(I.default, {
        title: T.default.Messages.CLAN_DISCOVERY_INSPIRATION_TITLE,
        subtitle: C ? T.default.Messages.CLAN_DISCOVERY_PILOT_SUBTITLE.format() : void 0
      })]
    })
  })
}