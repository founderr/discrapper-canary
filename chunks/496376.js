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
  c = a("246364"),
  f = a("931240"),
  E = a("650461"),
  h = a("620929"),
  _ = a("94963"),
  C = a("745628"),
  m = a("950279"),
  S = a("796918"),
  I = a("22035"),
  p = a("513532"),
  T = a("741595"),
  g = a("884486"),
  A = a("974842"),
  N = a("359380"),
  v = a("308083"),
  R = a("689938"),
  O = a("653196");
let L = [v.ClanSetupSteps.FOUNDATIONAL_INTRO, v.ClanSetupSteps.GAMES, v.ClanSetupSteps.PLAYSTYLE, v.ClanSetupSteps.PERSONALITY_INTRO, v.ClanSetupSteps.UTILITY_TRAITS, v.ClanSetupSteps.INTERESTS, v.ClanSetupSteps.DESCRIPTION, v.ClanSetupSteps.PRIMETIME, v.ClanSetupSteps.IDENTITY_INTRO, v.ClanSetupSteps.CUSTOMIZE_TAG_BADGE, v.ClanSetupSteps.CUSTOMIZE_BANNER, v.ClanSetupSteps.APPLICATION_INTRO, v.ClanSetupSteps.MEMBER_APPLICATION],
  M = {
    [v.ClanSetupSteps.FOUNDATIONAL_INTRO]: [v.ClanSetupSteps.GAMES, v.ClanSetupSteps.PLAYSTYLE],
    [v.ClanSetupSteps.PERSONALITY_INTRO]: [v.ClanSetupSteps.UTILITY_TRAITS, v.ClanSetupSteps.INTERESTS, v.ClanSetupSteps.DESCRIPTION, v.ClanSetupSteps.PRIMETIME],
    [v.ClanSetupSteps.IDENTITY_INTRO]: [v.ClanSetupSteps.CUSTOMIZE_TAG_BADGE, v.ClanSetupSteps.CUSTOMIZE_BANNER],
    [v.ClanSetupSteps.APPLICATION_INTRO]: [v.ClanSetupSteps.MEMBER_APPLICATION]
  },
  P = e => {
    var t, a;
    let {
      setCurrentStep: l,
      progress: r,
      onLastStep: u
    } = e, {
      currentStep: d,
      selectedGames: f,
      playstyle: E,
      interests: h,
      description: _,
      tag: C,
      primetime: m,
      verificationForm: S,
      furthestStep: I
    } = r, p = d === L.length - 1, T = null != S && S.formFields.some(e => !(0, c.isTermsFormField)(e)), g = s.useMemo(() => ({
      [v.ClanSetupSteps.FOUNDATIONAL_INTRO]: {
        disableNextStep: !1
      },
      [v.ClanSetupSteps.GAMES]: {
        disableNextStep: 0 === f.size
      },
      [v.ClanSetupSteps.PLAYSTYLE]: {
        disableNextStep: E === v.ClanPlaystyles.NONE
      },
      [v.ClanSetupSteps.PERSONALITY_INTRO]: {
        disableNextStep: !1
      },
      [v.ClanSetupSteps.UTILITY_TRAITS]: {
        disableNextStep: 0 === h.size
      },
      [v.ClanSetupSteps.INTERESTS]: {
        disableNextStep: 0 === h.size
      },
      [v.ClanSetupSteps.DESCRIPTION]: {
        disableNextStep: 0 === _.length
      },
      [v.ClanSetupSteps.PRIMETIME]: {
        disableNextStep: m.some(e => null == e.day || null == e.time)
      },
      [v.ClanSetupSteps.IDENTITY_INTRO]: {
        disableNextStep: !1
      },
      [v.ClanSetupSteps.CUSTOMIZE_TAG_BADGE]: {
        disableNextStep: C.length < 2
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
    }), [_.length, h.size, E, m, f.size, C.length, T]);
    return (0, n.jsxs)("div", {
      className: O.footer,
      children: [(0, n.jsx)("div", {
        className: O.progressContainer,
        children: Object.entries(M).map(e => {
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
                  [O.currentStep]: e === d,
                  [O.progressStepFill]: t || e === d
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
    errors: M
  } = (0, r.useStateFromStoresObject)([E.default], () => {
    var e, a;
    let n = E.default.getStateForGuild(t);
    return {
      progress: null !== (e = n.progress) && void 0 !== e ? e : (0, E.newClanProgress)(),
      errors: null !== (a = n.errors) && void 0 !== a ? a : {}
    }
  }), {
    requiredGameId: x,
    selectedGames: y,
    playstyle: D,
    interests: b,
    description: U,
    tag: j,
    primetime: G,
    currentStep: w,
    furthestStep: k
  } = c, F = (0, r.useStateFromStores)([d.default], () => d.default.useReducedMotion), [H, B] = s.useState(!0);
  s.useEffect(() => {
    u.default.getDetectableGames()
  }, []);
  let V = s.useCallback(e => f.updateClanSettings(t, {
      currentStep: e,
      furthestStep: null == k || e > k ? e : k
    }), [t, k]),
    Y = s.useCallback(e => f.updateClanSettings(t, e), [t]),
    W = s.useCallback(() => {
      B(!1), setTimeout(() => a(v.ClanSetupModalPages.SIGN), 199)
    }, [a]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(o.Button, {
      className: O.closeButton,
      look: o.Button.Looks.OUTLINED,
      size: o.Button.Sizes.SMALL,
      color: o.Button.Colors.PRIMARY,
      onClick: l,
      children: R.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
    }), (0, n.jsxs)("div", {
      className: i()(O.mainContent, O.fadeIn, {
        [O.fadeOut]: !H
      }),
      children: [(0, n.jsx)(o.Sequencer, {
        step: w,
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
            switch (w) {
              case v.ClanSetupSteps.GAMES:
                return (0, n.jsx)(m.default, {
                  handleUpdate: Y,
                  selectedGames: y,
                  requiredGameId: x,
                  error: M.selectedGames
                });
              case v.ClanSetupSteps.PLAYSTYLE:
                return (0, n.jsx)(T.default, {
                  handleUpdate: Y,
                  playstyle: D,
                  error: M.playstyle
                });
              case v.ClanSetupSteps.UTILITY_TRAITS:
                return (0, n.jsx)(N.default, {
                  requiredGameId: x,
                  handleUpdate: Y,
                  interests: b
                });
              case v.ClanSetupSteps.INTERESTS:
                return (0, n.jsx)(S.default, {
                  handleUpdate: Y,
                  interests: b,
                  error: M.interests
                });
              case v.ClanSetupSteps.DESCRIPTION:
                return (0, n.jsx)(C.default, {
                  handleUpdate: Y,
                  description: U,
                  error: M.description
                });
              case v.ClanSetupSteps.PRIMETIME:
                return (0, n.jsx)(g.default, {
                  handleUpdate: Y,
                  selectedTimes: G,
                  error: M.primetime
                });
              case v.ClanSetupSteps.CUSTOMIZE_TAG_BADGE:
                return (0, n.jsx)(A.default, {
                  handleUpdate: Y,
                  tag: j,
                  error: M.tag,
                  badge: c.badgeKind,
                  primaryColor: c.badgePrimaryColor,
                  secondaryColor: c.badgeSecondaryColor,
                  furthestStep: k
                });
              case v.ClanSetupSteps.CUSTOMIZE_BANNER:
                return (0, n.jsx)(_.default, {
                  handleUpdate: Y,
                  progress: c,
                  guildId: t
                });
              case v.ClanSetupSteps.MEMBER_APPLICATION:
                return (0, n.jsx)(p.default, {
                  guildId: t
                });
              case v.ClanSetupSteps.FOUNDATIONAL_INTRO:
                return (0, n.jsx)(I.default, {
                  stepNum: 1,
                  title: R.default.Messages.CLAN_SETUP_FOUNDATIONAL_INTRO_TITLE,
                  subtitle: R.default.Messages.CLAN_SETUP_FOUNDATIONAL_INTRO_SUBTITLE
                });
              case v.ClanSetupSteps.PERSONALITY_INTRO:
                return (0, n.jsx)(I.default, {
                  stepNum: 2,
                  title: R.default.Messages.CLAN_SETUP_PERSONALITY_INTRO_TITLE,
                  subtitle: R.default.Messages.CLAN_SETUP_PERSONALITY_INTRO_SUBTITLE
                });
              case v.ClanSetupSteps.IDENTITY_INTRO:
                return (0, n.jsx)(I.default, {
                  stepNum: 3,
                  title: R.default.Messages.CLAN_SETUP_IDENTITY_INTRO_TITLE,
                  subtitle: R.default.Messages.CLAN_SETUP_IDENTITY_INTRO_SUBTITLE
                });
              case v.ClanSetupSteps.APPLICATION_INTRO:
                return (0, n.jsx)(I.default, {
                  stepNum: 4,
                  title: R.default.Messages.CLAN_SETUP_APPLICATION_INTRO_TITLE,
                  subtitle: R.default.Messages.CLAN_SETUP_APPLICATION_INTRO_SUBTITLE
                });
              default:
                return null
            }
          })()
        })
      }), (0, n.jsx)(P, {
        setCurrentStep: V,
        progress: c,
        onLastStep: W
      })]
    }), (0, n.jsx)("div", {
      className: i()(O.overviewSidebar, {
        [O.fadeOut]: F && !H
      }),
      children: (0, n.jsx)(h.default, {
        guildId: t
      })
    })]
  })
}