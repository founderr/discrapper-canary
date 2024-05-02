"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("442837"),
  o = n("481060"),
  u = n("224706"),
  d = n("607070"),
  c = n("132580"),
  f = n("246364"),
  E = n("931240"),
  h = n("650461"),
  _ = n("620929"),
  C = n("94963"),
  m = n("745628"),
  S = n("950279"),
  p = n("796918"),
  I = n("513532"),
  T = n("741595"),
  g = n("754961"),
  A = n("974842"),
  N = n("359380"),
  v = n("308083"),
  R = n("689938"),
  L = n("156610");
let O = [v.ClanSetupSteps.GAMES, v.ClanSetupSteps.PLAYSTYLE, v.ClanSetupSteps.UTILITY_TRAITS, v.ClanSetupSteps.INTERESTS, v.ClanSetupSteps.DESCRIPTION, v.ClanSetupSteps.CUSTOMIZE_TAG_BADGE, v.ClanSetupSteps.CUSTOMIZE_BANNER, v.ClanSetupSteps.MEMBER_APPLICATION],
  M = e => {
    let {
      progress: t,
      setCurrentStep: n,
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
      i === O.length - 1 ? l() : n(i + 1)
    }, [i, l, n]), T = s.useCallback(() => {
      n(i - 1)
    }, [i, n]), A = s.useCallback(e => {
      n(e)
    }, [n]), N = s.useMemo(() => [{
      index: v.ClanSetupSteps.GAMES,
      name: R.default.Messages.CLAN_SETUP_GAMES_STEP
    }, {
      index: v.ClanSetupSteps.PLAYSTYLE,
      name: R.default.Messages.CLAN_SETUP_PLAYSTYLE_STEP
    }, {
      index: v.ClanSetupSteps.UTILITY_TRAITS,
      name: R.default.Messages.CLAN_SETUP_UTILITY_TRAITS_STEP
    }, {
      index: v.ClanSetupSteps.INTERESTS,
      name: R.default.Messages.CLAN_SETUP_INTERESTS_STEP
    }, {
      index: v.ClanSetupSteps.DESCRIPTION,
      name: R.default.Messages.CLAN_SETUP_DESCRIPTION_STEP
    }, {
      index: v.ClanSetupSteps.CUSTOMIZE_TAG_BADGE,
      name: R.default.Messages.CLAN_SETUP_TAG_STEP
    }, {
      index: v.ClanSetupSteps.CUSTOMIZE_BANNER,
      name: R.default.Messages.CLAN_SETUP_BANNER_STEP
    }, {
      index: v.ClanSetupSteps.MEMBER_APPLICATION,
      name: R.default.Messages.CLAN_SETUP_APPLICATIONS_STEP
    }], []);
    return (0, a.jsxs)("div", {
      className: L.footer,
      children: [(0, a.jsx)(g.ClanSetupProgress, {
        steps: N,
        currentStepIndex: i,
        furthestStepIndex: C,
        onStepClick: A
      }), (0, a.jsx)(g.ClanSetupProgressButtons, {
        className: L.footerButtons,
        isBackDisabled: p,
        isNextDisabled: S,
        onNextClick: I,
        onBackClick: T,
        children: (0, a.jsxs)("div", {
          className: L.footerAlphaMsg,
          children: [(0, a.jsx)(c.default, {
            className: L.footerAlphaTag
          }), (0, a.jsx)(o.Text, {
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
    setPage: n,
    onClose: l
  } = e, {
    progress: c,
    errors: f
  } = (0, r.useStateFromStoresObject)([h.default], () => {
    var e;
    let n = h.default.getStateForGuild(t);
    return {
      progress: null !== (e = n.progress) && void 0 !== e ? e : h.DEFAULT_CLAN_PROGRESS,
      errors: n.errors
    }
  }), {
    requiredGameId: g,
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
      k(!1), setTimeout(() => n(v.ClanSetupModalPages.SIGN), 199)
    }, [n]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(o.Button, {
      className: L.closeButton,
      look: o.Button.Looks.OUTLINED,
      size: o.Button.Sizes.MEDIUM,
      color: o.Button.Colors.PRIMARY,
      onClick: l,
      children: R.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
    }), (0, a.jsxs)("div", {
      className: i()(L.mainContent, L.fadeIn, {
        [L.fadeOut]: !w
      }),
      children: [(0, a.jsx)(o.Sequencer, {
        step: U,
        steps: O,
        sideMargin: 24,
        verticalMargin: 24,
        className: L.sequencer,
        innerClassName: L.sequencer,
        animatedNodeClassName: L.sequencer,
        children: (0, a.jsx)(o.ScrollerThin, {
          className: L.scroller,
          fade: !0,
          children: (() => {
            switch (U) {
              case v.ClanSetupSteps.GAMES:
                return (0, a.jsx)(S.default, {
                  title: R.default.Messages.CLAN_SETUP_GAMES_TITLE,
                  description: R.default.Messages.CLAN_SETUP_GAMES_SUBTITLE,
                  handleUpdate: H,
                  gameApplicationIds: P,
                  requiredGameId: g,
                  error: null == f ? void 0 : f.gameApplicationIds
                });
              case v.ClanSetupSteps.PLAYSTYLE:
                return (0, a.jsx)(T.default, {
                  title: R.default.Messages.CLAN_SETUP_PLAYSTYLE_TITLE,
                  description: R.default.Messages.CLAN_SETUP_PLAYSTYLE_SUBTITLE,
                  handleUpdate: V,
                  playstyle: x,
                  error: null == f ? void 0 : f.playstyle
                });
              case v.ClanSetupSteps.UTILITY_TRAITS:
                return (0, a.jsx)(N.default, {
                  title: R.default.Messages.CLAN_SETUP_UTILITY_TRAITS_TITLE,
                  description: R.default.Messages.CLAN_SETUP_UTILITY_TRAITS_SUBTITLE,
                  requiredGameId: g,
                  handleUpdate: Y,
                  interests: y
                });
              case v.ClanSetupSteps.INTERESTS:
                return (0, a.jsx)(p.default, {
                  handleUpdate: F,
                  interests: y,
                  error: null == f ? void 0 : f.interests
                });
              case v.ClanSetupSteps.DESCRIPTION:
                return (0, a.jsx)(m.default, {
                  handleUpdate: F,
                  description: D,
                  wildcardDescriptors: c.wildcardDescriptors,
                  errors: f
                });
              case v.ClanSetupSteps.CUSTOMIZE_TAG_BADGE:
                return (0, a.jsx)(A.default, {
                  handleUpdate: F,
                  tag: b,
                  error: null == f ? void 0 : f.tag,
                  badge: c.badgeKind,
                  primaryColor: c.badgePrimaryColor,
                  secondaryColor: c.badgeSecondaryColor,
                  furthestStep: j
                });
              case v.ClanSetupSteps.CUSTOMIZE_BANNER:
                return (0, a.jsx)(C.default, {
                  handleUpdate: F,
                  progress: c,
                  guildId: t
                });
              case v.ClanSetupSteps.MEMBER_APPLICATION:
                return (0, a.jsx)(I.default, {
                  guildId: t
                })
            }
          })()
        })
      }), (0, a.jsx)(M, {
        setCurrentStep: B,
        progress: c,
        onLastStep: W
      })]
    }), (0, a.jsx)("div", {
      className: L.divider
    }), (0, a.jsx)("div", {
      className: i()(L.overviewSidebar, {
        [L.fadeOut]: G && !w
      }),
      children: (0, a.jsx)(_.default, {
        guildId: t
      })
    })]
  })
}