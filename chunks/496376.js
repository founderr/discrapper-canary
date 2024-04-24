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
  A = a("974842"),
  N = a("359380"),
  v = a("308083"),
  R = a("689938"),
  O = a("653196");
let L = [v.ClanSetupSteps.FOUNDATIONAL_INTRO, v.ClanSetupSteps.GAMES, v.ClanSetupSteps.PLAYSTYLE, v.ClanSetupSteps.PERSONALITY_INTRO, v.ClanSetupSteps.UTILITY_TRAITS, v.ClanSetupSteps.INTERESTS, v.ClanSetupSteps.DESCRIPTION, v.ClanSetupSteps.IDENTITY_INTRO, v.ClanSetupSteps.CUSTOMIZE_TAG_BADGE, v.ClanSetupSteps.CUSTOMIZE_BANNER, v.ClanSetupSteps.APPLICATION_INTRO, v.ClanSetupSteps.MEMBER_APPLICATION],
  P = {
    [v.ClanSetupSteps.FOUNDATIONAL_INTRO]: [v.ClanSetupSteps.GAMES, v.ClanSetupSteps.PLAYSTYLE],
    [v.ClanSetupSteps.PERSONALITY_INTRO]: [v.ClanSetupSteps.UTILITY_TRAITS, v.ClanSetupSteps.INTERESTS, v.ClanSetupSteps.DESCRIPTION],
    [v.ClanSetupSteps.IDENTITY_INTRO]: [v.ClanSetupSteps.CUSTOMIZE_TAG_BADGE, v.ClanSetupSteps.CUSTOMIZE_BANNER],
    [v.ClanSetupSteps.APPLICATION_INTRO]: [v.ClanSetupSteps.MEMBER_APPLICATION]
  },
  M = e => {
    var t, a;
    let {
      setCurrentStep: l,
      progress: r,
      onLastStep: u
    } = e, {
      currentStep: d,
      gameApplicationIds: E,
      playstyle: h,
      interests: _,
      description: C,
      tag: m,
      verificationForm: S,
      furthestStep: I
    } = r, p = d === L.length - 1, T = null != S && S.formFields.some(e => !(0, f.isTermsFormField)(e)), g = s.useMemo(() => ({
      [v.ClanSetupSteps.FOUNDATIONAL_INTRO]: {
        disableNextStep: !1
      },
      [v.ClanSetupSteps.GAMES]: {
        disableNextStep: 0 === E.size
      },
      [v.ClanSetupSteps.PLAYSTYLE]: {
        disableNextStep: h === v.ClanPlaystyles.NONE
      },
      [v.ClanSetupSteps.PERSONALITY_INTRO]: {
        disableNextStep: !1
      },
      [v.ClanSetupSteps.UTILITY_TRAITS]: {
        disableNextStep: !1
      },
      [v.ClanSetupSteps.INTERESTS]: {
        disableNextStep: 0 === _.size
      },
      [v.ClanSetupSteps.DESCRIPTION]: {
        disableNextStep: 0 === C.length
      },
      [v.ClanSetupSteps.IDENTITY_INTRO]: {
        disableNextStep: !1
      },
      [v.ClanSetupSteps.CUSTOMIZE_TAG_BADGE]: {
        disableNextStep: m.length < 2
      },
      [v.ClanSetupSteps.CUSTOMIZE_BANNER]: {
        disableNextStep: !1
      },
      [v.ClanSetupSteps.APPLICATION_INTRO]: {
        disableNextStep: !1
      },
      [v.ClanSetupSteps.MEMBER_APPLICATION]: {
        disableNextStep: !T
      }
    }), [C.length, _.size, h, E.size, m.length, T]);
    return (0, n.jsxs)("div", {
      className: O.footer,
      children: [(0, n.jsx)("div", {
        className: O.progressContainer,
        children: Object.entries(P).map(e => {
          let [t, a] = e;
          return (0, n.jsx)("div", {
            className: O.progressStep,
            children: a.map(e => {
              let t = !g[e].disableNextStep && I >= e,
                a = e <= I;
              return (0, n.jsx)(o.Clickable, {
                "aria-label": R.default.Messages.STEP_NUMBER.format({
                  number: e
                }),
                onClick: () => a ? l(e) : null,
                className: i()(O.progressSubStep, {
                  [O.clickable]: a,
                  [O.progressStepFill]: t
                })
              }, "step-".concat(e))
            })
          }, "step-".concat(t))
        })
      }), (0, n.jsxs)("div", {
        className: O.buttonsContainer,
        children: [(0, n.jsx)(o.Button, {
          look: o.Button.Looks.OUTLINED,
          size: o.Button.Sizes.MEDIUM,
          color: o.Button.Colors.PRIMARY,
          onClick: () => {
            l(d - 1)
          },
          disabled: 0 === d,
          children: R.default.Messages.PAGINATION_PREVIOUS
        }), (0, n.jsxs)("div", {
          className: O.footerAlphaMsg,
          children: [(0, n.jsx)(c.default, {
            className: O.footerAlphaTag
          }), (0, n.jsx)(o.Text, {
            variant: "text-sm/medium",
            children: "This is currently in Alpha, use test servers only!"
          })]
        }), (0, n.jsx)(o.Button, {
          look: o.Button.Looks.FILLED,
          size: o.Button.Sizes.MEDIUM,
          onClick: () => {
            if (p) {
              u();
              return
            }
            l(d + 1)
          },
          disabled: null !== (a = null === (t = g[d]) || void 0 === t ? void 0 : t.disableNextStep) && void 0 !== a && a,
          children: R.default.Messages.PAGINATION_NEXT
        })]
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
    requiredGameId: P,
    gameApplicationIds: x,
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
      F(!1), setTimeout(() => a(v.ClanSetupModalPages.SIGN), 199)
    }, [a]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(o.Button, {
      className: O.closeButton,
      look: o.Button.Looks.OUTLINED,
      size: o.Button.Sizes.MEDIUM,
      color: o.Button.Colors.PRIMARY,
      onClick: l,
      children: R.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
    }), (0, n.jsxs)("div", {
      className: i()(O.mainContent, O.fadeIn, {
        [O.fadeOut]: !k
      }),
      children: [(0, n.jsx)(o.Sequencer, {
        step: j,
        steps: L,
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
              case v.ClanSetupSteps.GAMES:
                return (0, n.jsx)(S.default, {
                  handleUpdate: H,
                  gameApplicationIds: x,
                  requiredGameId: P,
                  error: null == f ? void 0 : f.gameApplicationIds
                });
              case v.ClanSetupSteps.PLAYSTYLE:
                return (0, n.jsx)(g.default, {
                  handleUpdate: H,
                  playstyle: y,
                  error: null == f ? void 0 : f.playstyle
                });
              case v.ClanSetupSteps.UTILITY_TRAITS:
                return (0, n.jsx)(N.default, {
                  requiredGameId: P,
                  handleUpdate: H,
                  interests: D
                });
              case v.ClanSetupSteps.INTERESTS:
                return (0, n.jsx)(I.default, {
                  handleUpdate: H,
                  interests: D,
                  error: null == f ? void 0 : f.interests
                });
              case v.ClanSetupSteps.DESCRIPTION:
                return (0, n.jsx)(m.default, {
                  handleUpdate: H,
                  description: b,
                  wildcardDescriptors: c.wildcardDescriptors,
                  errors: f
                });
              case v.ClanSetupSteps.CUSTOMIZE_TAG_BADGE:
                return (0, n.jsx)(A.default, {
                  handleUpdate: H,
                  tag: U,
                  error: null == f ? void 0 : f.tag,
                  badge: c.badgeKind,
                  primaryColor: c.badgePrimaryColor,
                  secondaryColor: c.badgeSecondaryColor,
                  furthestStep: G
                });
              case v.ClanSetupSteps.CUSTOMIZE_BANNER:
                return (0, n.jsx)(C.default, {
                  handleUpdate: H,
                  progress: c,
                  guildId: t
                });
              case v.ClanSetupSteps.MEMBER_APPLICATION:
                return (0, n.jsx)(T.default, {
                  guildId: t
                });
              case v.ClanSetupSteps.FOUNDATIONAL_INTRO:
                return (0, n.jsx)(p.default, {
                  stepNum: 1,
                  title: R.default.Messages.CLAN_SETUP_FOUNDATIONAL_INTRO_TITLE,
                  subtitle: R.default.Messages.CLAN_SETUP_FOUNDATIONAL_INTRO_SUBTITLE
                });
              case v.ClanSetupSteps.PERSONALITY_INTRO:
                return (0, n.jsx)(p.default, {
                  stepNum: 2,
                  title: R.default.Messages.CLAN_SETUP_PERSONALITY_INTRO_TITLE,
                  subtitle: R.default.Messages.CLAN_SETUP_PERSONALITY_INTRO_SUBTITLE
                });
              case v.ClanSetupSteps.IDENTITY_INTRO:
                return (0, n.jsx)(p.default, {
                  stepNum: 3,
                  title: R.default.Messages.CLAN_SETUP_IDENTITY_INTRO_TITLE,
                  subtitle: R.default.Messages.CLAN_SETUP_IDENTITY_INTRO_SUBTITLE
                });
              case v.ClanSetupSteps.APPLICATION_INTRO:
                return (0, n.jsx)(p.default, {
                  stepNum: 4,
                  title: R.default.Messages.CLAN_SETUP_APPLICATION_INTRO_TITLE,
                  subtitle: R.default.Messages.CLAN_SETUP_APPLICATION_INTRO_SUBTITLE
                });
              default:
                return null
            }
          })()
        })
      }), (0, n.jsx)(M, {
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