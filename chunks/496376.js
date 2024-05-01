"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("442837"),
  o = a("481060"),
  u = a("224706"),
  d = a("607070"),
  c = a("132580"),
  f = a("246364"),
  E = a("931240"),
  h = a("650461"),
  _ = a("620929"),
  C = a("94963"),
  m = a("745628"),
  S = a("950279"),
  p = a("796918"),
  I = a("513532"),
  g = a("741595"),
  T = a("754961"),
  A = a("974842"),
  N = a("359380"),
  v = a("308083"),
  L = a("689938"),
  R = a("156610");
let O = [v.ClanSetupSteps.GAMES, v.ClanSetupSteps.PLAYSTYLE, v.ClanSetupSteps.UTILITY_TRAITS, v.ClanSetupSteps.INTERESTS, v.ClanSetupSteps.DESCRIPTION, v.ClanSetupSteps.CUSTOMIZE_TAG_BADGE, v.ClanSetupSteps.CUSTOMIZE_BANNER, v.ClanSetupSteps.MEMBER_APPLICATION],
  M = e => {
    let {
      progress: t,
      setCurrentStep: a,
      onLastStep: l
    } = e, {
      currentStep: i,
      gameApplicationIds: r,
      playstyle: u,
      interests: d,
      description: E,
      tag: h,
      verificationForm: _,
      furthestStep: C
    } = t, m = s.useMemo(() => null != _ && _.formFields.some(e => !(0, f.isTermsFormField)(e)), [_]), S = s.useMemo(() => {
      switch (i) {
        case v.ClanSetupSteps.GAMES:
          return 0 === r.size;
        case v.ClanSetupSteps.PLAYSTYLE:
          return u === v.ClanPlaystyles.NONE;
        case v.ClanSetupSteps.INTERESTS:
          return 0 === d.size;
        case v.ClanSetupSteps.DESCRIPTION:
          return 0 === E.length;
        case v.ClanSetupSteps.CUSTOMIZE_TAG_BADGE:
          return h.length < 2;
        case v.ClanSetupSteps.MEMBER_APPLICATION:
          return !m;
        default:
          return !1
      }
    }, [i, E.length, r.size, m, d.size, u, h.length]), p = 0 === i, I = s.useCallback(() => {
      i === O.length - 1 ? l() : a(i + 1)
    }, [i, l, a]), g = s.useCallback(() => {
      a(i - 1)
    }, [i, a]), A = s.useCallback(e => {
      a(e)
    }, [a]), N = s.useMemo(() => [{
      index: v.ClanSetupSteps.GAMES,
      name: L.default.Messages.CLAN_SETUP_GAMES_STEP
    }, {
      index: v.ClanSetupSteps.PLAYSTYLE,
      name: L.default.Messages.CLAN_SETUP_PLAYSTYLE_STEP
    }, {
      index: v.ClanSetupSteps.UTILITY_TRAITS,
      name: L.default.Messages.CLAN_SETUP_UTILITY_TRAITS_STEP
    }, {
      index: v.ClanSetupSteps.INTERESTS,
      name: L.default.Messages.CLAN_SETUP_INTERESTS_STEP
    }, {
      index: v.ClanSetupSteps.DESCRIPTION,
      name: L.default.Messages.CLAN_SETUP_DESCRIPTION_STEP
    }, {
      index: v.ClanSetupSteps.CUSTOMIZE_TAG_BADGE,
      name: L.default.Messages.CLAN_SETUP_TAG_STEP
    }, {
      index: v.ClanSetupSteps.CUSTOMIZE_BANNER,
      name: L.default.Messages.CLAN_SETUP_BANNER_STEP
    }, {
      index: v.ClanSetupSteps.MEMBER_APPLICATION,
      name: L.default.Messages.CLAN_SETUP_APPLICATIONS_STEP
    }], []);
    return (0, n.jsxs)("div", {
      className: R.footer,
      children: [(0, n.jsx)(T.ClanSetupProgress, {
        steps: N,
        currentStepIndex: i,
        furthestStepIndex: C,
        onStepClick: A
      }), (0, n.jsx)(T.ClanSetupProgressButtons, {
        className: R.footerButtons,
        isBackDisabled: p,
        isNextDisabled: S,
        onNextClick: I,
        onBackClick: g,
        children: (0, n.jsxs)("div", {
          className: R.footerAlphaMsg,
          children: [(0, n.jsx)(c.default, {
            className: R.footerAlphaTag
          }), (0, n.jsx)(o.Text, {
            variant: "text-sm/medium",
            children: "This is currently in Alpha, use test servers only!"
          })]
        })
      })]
    })
  };
t.default = e => {
  let {
    guildId: t,
    setPage: a,
    onClose: l
  } = e, {
    progress: c,
    errors: f
  } = (0, r.useStateFromStoresObject)([h.default], () => {
    var e;
    let a = h.default.getStateForGuild(t);
    return {
      progress: null !== (e = a.progress) && void 0 !== e ? e : h.DEFAULT_CLAN_PROGRESS,
      errors: a.errors
    }
  }), {
    requiredGameId: T,
    gameApplicationIds: P,
    playstyle: x,
    interests: y,
    description: D,
    tag: b,
    currentStep: U,
    furthestStep: j
  } = c, G = (0, r.useStateFromStores)([d.default], () => d.default.useReducedMotion), [w, k] = s.useState(!0);
  s.useEffect(() => {
    u.default.getDetectableGames()
  }, []);
  let B = s.useCallback(e => E.updateClanSetup(t, {
      currentStep: e,
      furthestStep: null == j || e > j ? e : j
    }), [t, j]),
    F = s.useCallback(e => E.updateClanSetup(t, e), [t]),
    H = s.useCallback(e => F({
      gameApplicationIds: e
    }), [F]),
    V = s.useCallback(e => F({
      playstyle: e
    }), [F]),
    Y = s.useCallback(e => F({
      interests: e
    }), [F]),
    W = s.useCallback(() => {
      k(!1), setTimeout(() => a(v.ClanSetupModalPages.SIGN), 199)
    }, [a]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(o.Button, {
      className: R.closeButton,
      look: o.Button.Looks.OUTLINED,
      size: o.Button.Sizes.MEDIUM,
      color: o.Button.Colors.PRIMARY,
      onClick: l,
      children: L.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
    }), (0, n.jsxs)("div", {
      className: i()(R.mainContent, R.fadeIn, {
        [R.fadeOut]: !w
      }),
      children: [(0, n.jsx)(o.Sequencer, {
        step: U,
        steps: O,
        sideMargin: 24,
        verticalMargin: 24,
        className: R.sequencer,
        innerClassName: R.sequencer,
        animatedNodeClassName: R.sequencer,
        children: (0, n.jsx)(o.ScrollerThin, {
          className: R.scroller,
          fade: !0,
          children: (() => {
            switch (U) {
              case v.ClanSetupSteps.GAMES:
                return (0, n.jsx)(S.default, {
                  title: L.default.Messages.CLAN_SETUP_GAMES_TITLE,
                  description: L.default.Messages.CLAN_SETUP_GAMES_SUBTITLE,
                  handleUpdate: H,
                  gameApplicationIds: P,
                  requiredGameId: T,
                  error: null == f ? void 0 : f.gameApplicationIds
                });
              case v.ClanSetupSteps.PLAYSTYLE:
                return (0, n.jsx)(g.default, {
                  title: L.default.Messages.CLAN_SETUP_PLAYSTYLE_TITLE,
                  description: L.default.Messages.CLAN_SETUP_PLAYSTYLE_SUBTITLE,
                  handleUpdate: V,
                  playstyle: x,
                  error: null == f ? void 0 : f.playstyle
                });
              case v.ClanSetupSteps.UTILITY_TRAITS:
                return (0, n.jsx)(N.default, {
                  title: L.default.Messages.CLAN_SETUP_UTILITY_TRAITS_TITLE,
                  description: L.default.Messages.CLAN_SETUP_UTILITY_TRAITS_SUBTITLE,
                  requiredGameId: T,
                  handleUpdate: Y,
                  interests: y
                });
              case v.ClanSetupSteps.INTERESTS:
                return (0, n.jsx)(p.default, {
                  handleUpdate: F,
                  interests: y,
                  error: null == f ? void 0 : f.interests
                });
              case v.ClanSetupSteps.DESCRIPTION:
                return (0, n.jsx)(m.default, {
                  handleUpdate: F,
                  description: D,
                  wildcardDescriptors: c.wildcardDescriptors,
                  errors: f
                });
              case v.ClanSetupSteps.CUSTOMIZE_TAG_BADGE:
                return (0, n.jsx)(A.default, {
                  handleUpdate: F,
                  tag: b,
                  error: null == f ? void 0 : f.tag,
                  badge: c.badgeKind,
                  primaryColor: c.badgePrimaryColor,
                  secondaryColor: c.badgeSecondaryColor,
                  furthestStep: j
                });
              case v.ClanSetupSteps.CUSTOMIZE_BANNER:
                return (0, n.jsx)(C.default, {
                  handleUpdate: F,
                  progress: c,
                  guildId: t
                });
              case v.ClanSetupSteps.MEMBER_APPLICATION:
                return (0, n.jsx)(I.default, {
                  guildId: t
                })
            }
          })()
        })
      }), (0, n.jsx)(M, {
        setCurrentStep: B,
        progress: c,
        onLastStep: W
      })]
    }), (0, n.jsx)("div", {
      className: R.divider
    }), (0, n.jsx)("div", {
      className: i()(R.overviewSidebar, {
        [R.fadeOut]: G && !w
      }),
      children: (0, n.jsx)(_.default, {
        guildId: t
      })
    })]
  })
}