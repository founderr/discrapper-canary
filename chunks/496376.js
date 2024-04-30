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
  I = n("22035"),
  g = n("513532"),
  T = n("741595"),
  A = n("754961"),
  N = n("974842"),
  v = n("359380"),
  L = n("308083"),
  R = n("689938"),
  O = n("156610");
let M = [L.ClanSetupSteps.FOUNDATIONAL_INTRO, L.ClanSetupSteps.GAMES, L.ClanSetupSteps.PLAYSTYLE, L.ClanSetupSteps.PERSONALITY_INTRO, L.ClanSetupSteps.UTILITY_TRAITS, L.ClanSetupSteps.INTERESTS, L.ClanSetupSteps.DESCRIPTION, L.ClanSetupSteps.IDENTITY_INTRO, L.ClanSetupSteps.CUSTOMIZE_TAG_BADGE, L.ClanSetupSteps.CUSTOMIZE_BANNER, L.ClanSetupSteps.APPLICATION_INTRO, L.ClanSetupSteps.MEMBER_APPLICATION],
  P = [
    [L.ClanSetupSteps.GAMES, L.ClanSetupSteps.PLAYSTYLE],
    [L.ClanSetupSteps.UTILITY_TRAITS, L.ClanSetupSteps.INTERESTS, L.ClanSetupSteps.DESCRIPTION],
    [L.ClanSetupSteps.CUSTOMIZE_TAG_BADGE, L.ClanSetupSteps.CUSTOMIZE_BANNER],
    [L.ClanSetupSteps.MEMBER_APPLICATION]
  ],
  y = e => {
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
        case L.ClanSetupSteps.GAMES:
          return 0 === r.size;
        case L.ClanSetupSteps.PLAYSTYLE:
          return u === L.ClanPlaystyles.NONE;
        case L.ClanSetupSteps.INTERESTS:
          return 0 === d.size;
        case L.ClanSetupSteps.DESCRIPTION:
          return 0 === E.length;
        case L.ClanSetupSteps.CUSTOMIZE_TAG_BADGE:
          return h.length < 2;
        case L.ClanSetupSteps.MEMBER_APPLICATION:
          return !m;
        default:
          return !1
      }
    }, [i, E.length, r.size, m, d.size, u, h.length]), p = 0 === i, I = s.useCallback(() => {
      i === M.length - 1 ? l() : n(i + 1)
    }, [i, l, n]), g = s.useCallback(() => {
      n(i - 1)
    }, [i, n]), T = s.useCallback(e => {
      n(e)
    }, [n]);
    return (0, a.jsxs)("div", {
      className: O.footer,
      children: [(0, a.jsx)(A.ClanSetupProgress, {
        sections: P,
        furthestStep: C,
        onStepClick: T
      }), (0, a.jsx)(A.ClanSetupProgressButtons, {
        className: O.footerButtons,
        isBackDisabled: p,
        isNextDisabled: S,
        onNextClick: I,
        onBackClick: g,
        children: (0, a.jsxs)("div", {
          className: O.footerAlphaMsg,
          children: [(0, a.jsx)(c.default, {
            className: O.footerAlphaTag
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
    requiredGameId: A,
    gameApplicationIds: P,
    playstyle: x,
    interests: D,
    description: b,
    tag: U,
    currentStep: j,
    furthestStep: G
  } = c, w = (0, r.useStateFromStores)([d.default], () => d.default.useReducedMotion), [k, B] = s.useState(!0);
  s.useEffect(() => {
    u.default.getDetectableGames()
  }, []);
  let F = s.useCallback(e => E.updateClanSetup(t, {
      currentStep: e,
      furthestStep: null == G || e > G ? e : G
    }), [t, G]),
    H = s.useCallback(e => E.updateClanSetup(t, e), [t]),
    V = s.useCallback(e => H({
      gameApplicationIds: e
    }), [H]),
    Y = s.useCallback(e => H({
      playstyle: e
    }), [H]),
    W = s.useCallback(e => H({
      interests: e
    }), [H]),
    K = s.useCallback(() => {
      B(!1), setTimeout(() => n(L.ClanSetupModalPages.SIGN), 199)
    }, [n]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(o.Button, {
      className: O.closeButton,
      look: o.Button.Looks.OUTLINED,
      size: o.Button.Sizes.MEDIUM,
      color: o.Button.Colors.PRIMARY,
      onClick: l,
      children: R.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
    }), (0, a.jsxs)("div", {
      className: i()(O.mainContent, O.fadeIn, {
        [O.fadeOut]: !k
      }),
      children: [(0, a.jsx)(o.Sequencer, {
        step: j,
        steps: M,
        sideMargin: 24,
        verticalMargin: 24,
        className: O.sequencer,
        innerClassName: O.sequencer,
        animatedNodeClassName: O.sequencer,
        children: (0, a.jsx)(o.ScrollerThin, {
          className: O.scroller,
          fade: !0,
          children: (() => {
            switch (j) {
              case L.ClanSetupSteps.GAMES:
                return (0, a.jsx)(S.default, {
                  title: R.default.Messages.CLAN_SETUP_GAMES_TITLE,
                  description: R.default.Messages.CLAN_SETUP_GAMES_SUBTITLE,
                  handleUpdate: V,
                  gameApplicationIds: P,
                  requiredGameId: A,
                  error: null == f ? void 0 : f.gameApplicationIds
                });
              case L.ClanSetupSteps.PLAYSTYLE:
                return (0, a.jsx)(T.default, {
                  title: R.default.Messages.CLAN_SETUP_PLAYSTYLE_TITLE,
                  description: R.default.Messages.CLAN_SETUP_PLAYSTYLE_SUBTITLE,
                  handleUpdate: Y,
                  playstyle: x,
                  error: null == f ? void 0 : f.playstyle
                });
              case L.ClanSetupSteps.UTILITY_TRAITS:
                return (0, a.jsx)(v.default, {
                  title: R.default.Messages.CLAN_SETUP_UTILITY_TRAITS_TITLE,
                  description: R.default.Messages.CLAN_SETUP_UTILITY_TRAITS_SUBTITLE,
                  requiredGameId: A,
                  handleUpdate: W,
                  interests: D
                });
              case L.ClanSetupSteps.INTERESTS:
                return (0, a.jsx)(p.default, {
                  handleUpdate: H,
                  interests: D,
                  error: null == f ? void 0 : f.interests
                });
              case L.ClanSetupSteps.DESCRIPTION:
                return (0, a.jsx)(m.default, {
                  handleUpdate: H,
                  description: b,
                  wildcardDescriptors: c.wildcardDescriptors,
                  errors: f
                });
              case L.ClanSetupSteps.CUSTOMIZE_TAG_BADGE:
                return (0, a.jsx)(N.default, {
                  handleUpdate: H,
                  tag: U,
                  error: null == f ? void 0 : f.tag,
                  badge: c.badgeKind,
                  primaryColor: c.badgePrimaryColor,
                  secondaryColor: c.badgeSecondaryColor,
                  furthestStep: G
                });
              case L.ClanSetupSteps.CUSTOMIZE_BANNER:
                return (0, a.jsx)(C.default, {
                  handleUpdate: H,
                  progress: c,
                  guildId: t
                });
              case L.ClanSetupSteps.MEMBER_APPLICATION:
                return (0, a.jsx)(g.default, {
                  guildId: t
                });
              case L.ClanSetupSteps.FOUNDATIONAL_INTRO:
                return (0, a.jsx)(I.default, {
                  stepNum: 1,
                  title: R.default.Messages.CLAN_SETUP_FOUNDATIONAL_INTRO_TITLE,
                  subtitle: R.default.Messages.CLAN_SETUP_FOUNDATIONAL_INTRO_SUBTITLE
                });
              case L.ClanSetupSteps.PERSONALITY_INTRO:
                return (0, a.jsx)(I.default, {
                  stepNum: 2,
                  title: R.default.Messages.CLAN_SETUP_PERSONALITY_INTRO_TITLE,
                  subtitle: R.default.Messages.CLAN_SETUP_PERSONALITY_INTRO_SUBTITLE
                });
              case L.ClanSetupSteps.IDENTITY_INTRO:
                return (0, a.jsx)(I.default, {
                  stepNum: 3,
                  title: R.default.Messages.CLAN_SETUP_IDENTITY_INTRO_TITLE,
                  subtitle: R.default.Messages.CLAN_SETUP_IDENTITY_INTRO_SUBTITLE
                });
              case L.ClanSetupSteps.APPLICATION_INTRO:
                return (0, a.jsx)(I.default, {
                  stepNum: 4,
                  title: R.default.Messages.CLAN_SETUP_APPLICATION_INTRO_TITLE,
                  subtitle: R.default.Messages.CLAN_SETUP_APPLICATION_INTRO_SUBTITLE
                });
              default:
                return null
            }
          })()
        })
      }), (0, a.jsx)(y, {
        setCurrentStep: F,
        progress: c,
        onLastStep: K
      })]
    }), (0, a.jsx)("div", {
      className: O.divider
    }), (0, a.jsx)("div", {
      className: i()(O.overviewSidebar, {
        [O.fadeOut]: w && !k
      }),
      children: (0, a.jsx)(_.default, {
        guildId: t
      })
    })]
  })
}