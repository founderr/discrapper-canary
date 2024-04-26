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
  I = a("796918"),
  p = a("22035"),
  T = a("513532"),
  g = a("741595"),
  A = a("754961"),
  N = a("974842"),
  v = a("359380"),
  R = a("308083"),
  L = a("689938"),
  O = a("653196");
let P = [R.ClanSetupSteps.FOUNDATIONAL_INTRO, R.ClanSetupSteps.GAMES, R.ClanSetupSteps.PLAYSTYLE, R.ClanSetupSteps.PERSONALITY_INTRO, R.ClanSetupSteps.UTILITY_TRAITS, R.ClanSetupSteps.INTERESTS, R.ClanSetupSteps.DESCRIPTION, R.ClanSetupSteps.IDENTITY_INTRO, R.ClanSetupSteps.CUSTOMIZE_TAG_BADGE, R.ClanSetupSteps.CUSTOMIZE_BANNER, R.ClanSetupSteps.APPLICATION_INTRO, R.ClanSetupSteps.MEMBER_APPLICATION],
  M = [
    [R.ClanSetupSteps.GAMES, R.ClanSetupSteps.PLAYSTYLE],
    [R.ClanSetupSteps.UTILITY_TRAITS, R.ClanSetupSteps.INTERESTS, R.ClanSetupSteps.DESCRIPTION],
    [R.ClanSetupSteps.CUSTOMIZE_TAG_BADGE, R.ClanSetupSteps.CUSTOMIZE_BANNER],
    [R.ClanSetupSteps.MEMBER_APPLICATION]
  ],
  x = e => {
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
        case R.ClanSetupSteps.GAMES:
          return 0 === r.size;
        case R.ClanSetupSteps.PLAYSTYLE:
          return u === R.ClanPlaystyles.NONE;
        case R.ClanSetupSteps.INTERESTS:
          return 0 === d.size;
        case R.ClanSetupSteps.DESCRIPTION:
          return 0 === E.length;
        case R.ClanSetupSteps.CUSTOMIZE_TAG_BADGE:
          return h.length < 2;
        case R.ClanSetupSteps.MEMBER_APPLICATION:
          return !m;
        default:
          return !1
      }
    }, [i, E.length, r.size, m, d.size, u, h.length]), I = 0 === i, p = s.useCallback(() => {
      i === P.length - 1 ? l() : a(i + 1)
    }, [i, l, a]), T = s.useCallback(() => {
      a(i - 1)
    }, [i, a]), g = s.useCallback(e => {
      a(e)
    }, [a]);
    return (0, n.jsxs)("div", {
      className: O.footer,
      children: [(0, n.jsx)(A.ClanSetupProgress, {
        sections: M,
        furthestStep: C,
        onStepClick: g
      }), (0, n.jsx)(A.ClanSetupProgressButtons, {
        className: O.footerButtons,
        isBackDisabled: I,
        isNextDisabled: S,
        onNextClick: p,
        onBackClick: T,
        children: (0, n.jsxs)("div", {
          className: O.footerAlphaMsg,
          children: [(0, n.jsx)(c.default, {
            className: O.footerAlphaTag
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
    requiredGameId: A,
    gameApplicationIds: M,
    playstyle: y,
    interests: D,
    description: b,
    tag: U,
    currentStep: j,
    furthestStep: G
  } = c, w = (0, r.useStateFromStores)([d.default], () => d.default.useReducedMotion), [k, F] = s.useState(!0);
  s.useEffect(() => {
    u.default.getDetectableGames()
  }, []);
  let B = s.useCallback(e => E.updateClanSetup(t, {
      currentStep: e,
      furthestStep: null == G || e > G ? e : G
    }), [t, G]),
    H = s.useCallback(e => E.updateClanSetup(t, e), [t]),
    V = s.useCallback(() => {
      F(!1), setTimeout(() => a(R.ClanSetupModalPages.SIGN), 199)
    }, [a]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(o.Button, {
      className: O.closeButton,
      look: o.Button.Looks.OUTLINED,
      size: o.Button.Sizes.MEDIUM,
      color: o.Button.Colors.PRIMARY,
      onClick: l,
      children: L.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
    }), (0, n.jsxs)("div", {
      className: i()(O.mainContent, O.fadeIn, {
        [O.fadeOut]: !k
      }),
      children: [(0, n.jsx)(o.Sequencer, {
        step: j,
        steps: P,
        sideMargin: 24,
        verticalMargin: 24,
        className: O.sequencer,
        innerClassName: O.sequencer,
        animatedNodeClassName: O.sequencer,
        children: (0, n.jsx)(o.ScrollerThin, {
          className: O.scroller,
          fade: !0,
          children: (() => {
            switch (j) {
              case R.ClanSetupSteps.GAMES:
                return (0, n.jsx)(S.default, {
                  handleUpdate: H,
                  gameApplicationIds: M,
                  requiredGameId: A,
                  error: null == f ? void 0 : f.gameApplicationIds
                });
              case R.ClanSetupSteps.PLAYSTYLE:
                return (0, n.jsx)(g.default, {
                  handleUpdate: H,
                  playstyle: y,
                  error: null == f ? void 0 : f.playstyle
                });
              case R.ClanSetupSteps.UTILITY_TRAITS:
                return (0, n.jsx)(v.default, {
                  requiredGameId: A,
                  handleUpdate: H,
                  interests: D
                });
              case R.ClanSetupSteps.INTERESTS:
                return (0, n.jsx)(I.default, {
                  handleUpdate: H,
                  interests: D,
                  error: null == f ? void 0 : f.interests
                });
              case R.ClanSetupSteps.DESCRIPTION:
                return (0, n.jsx)(m.default, {
                  handleUpdate: H,
                  description: b,
                  wildcardDescriptors: c.wildcardDescriptors,
                  errors: f
                });
              case R.ClanSetupSteps.CUSTOMIZE_TAG_BADGE:
                return (0, n.jsx)(N.default, {
                  handleUpdate: H,
                  tag: U,
                  error: null == f ? void 0 : f.tag,
                  badge: c.badgeKind,
                  primaryColor: c.badgePrimaryColor,
                  secondaryColor: c.badgeSecondaryColor,
                  furthestStep: G
                });
              case R.ClanSetupSteps.CUSTOMIZE_BANNER:
                return (0, n.jsx)(C.default, {
                  handleUpdate: H,
                  progress: c,
                  guildId: t
                });
              case R.ClanSetupSteps.MEMBER_APPLICATION:
                return (0, n.jsx)(T.default, {
                  guildId: t
                });
              case R.ClanSetupSteps.FOUNDATIONAL_INTRO:
                return (0, n.jsx)(p.default, {
                  stepNum: 1,
                  title: L.default.Messages.CLAN_SETUP_FOUNDATIONAL_INTRO_TITLE,
                  subtitle: L.default.Messages.CLAN_SETUP_FOUNDATIONAL_INTRO_SUBTITLE
                });
              case R.ClanSetupSteps.PERSONALITY_INTRO:
                return (0, n.jsx)(p.default, {
                  stepNum: 2,
                  title: L.default.Messages.CLAN_SETUP_PERSONALITY_INTRO_TITLE,
                  subtitle: L.default.Messages.CLAN_SETUP_PERSONALITY_INTRO_SUBTITLE
                });
              case R.ClanSetupSteps.IDENTITY_INTRO:
                return (0, n.jsx)(p.default, {
                  stepNum: 3,
                  title: L.default.Messages.CLAN_SETUP_IDENTITY_INTRO_TITLE,
                  subtitle: L.default.Messages.CLAN_SETUP_IDENTITY_INTRO_SUBTITLE
                });
              case R.ClanSetupSteps.APPLICATION_INTRO:
                return (0, n.jsx)(p.default, {
                  stepNum: 4,
                  title: L.default.Messages.CLAN_SETUP_APPLICATION_INTRO_TITLE,
                  subtitle: L.default.Messages.CLAN_SETUP_APPLICATION_INTRO_SUBTITLE
                });
              default:
                return null
            }
          })()
        })
      }), (0, n.jsx)(x, {
        setCurrentStep: B,
        progress: c,
        onLastStep: V
      })]
    }), (0, n.jsx)("div", {
      className: O.divider
    }), (0, n.jsx)("div", {
      className: i()(O.overviewSidebar, {
        [O.fadeOut]: w && !k
      }),
      children: (0, n.jsx)(_.default, {
        guildId: t
      })
    })]
  })
}