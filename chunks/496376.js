"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("442837"),
  o = n("481060"),
  u = n("224706"),
  d = n("607070"),
  c = n("246364"),
  f = n("931240"),
  E = n("650461"),
  h = n("620929"),
  _ = n("745628"),
  C = n("950279"),
  m = n("796918"),
  S = n("22035"),
  I = n("513532"),
  T = n("741595"),
  p = n("884486"),
  g = n("974842"),
  A = n("359380"),
  N = n("308083"),
  v = n("689938"),
  R = n("653196");
let O = [N.ClanSetupSteps.FOUNDATIONAL_INTRO, N.ClanSetupSteps.GAMES, N.ClanSetupSteps.PLAYSTYLE, N.ClanSetupSteps.PERSONALITY_INTRO, N.ClanSetupSteps.UTILITY_TRAITS, N.ClanSetupSteps.INTERESTS, N.ClanSetupSteps.DESCRIPTION, N.ClanSetupSteps.PRIMETIME, N.ClanSetupSteps.IDENTITY_INTRO, N.ClanSetupSteps.CUSTOMIZE, N.ClanSetupSteps.APPLICATION_INTRO, N.ClanSetupSteps.MEMBER_APPLICATION],
  L = {
    [N.ClanSetupSteps.FOUNDATIONAL_INTRO]: [N.ClanSetupSteps.GAMES, N.ClanSetupSteps.PLAYSTYLE],
    [N.ClanSetupSteps.PERSONALITY_INTRO]: [N.ClanSetupSteps.INTERESTS, N.ClanSetupSteps.UTILITY_TRAITS, N.ClanSetupSteps.DESCRIPTION, N.ClanSetupSteps.PRIMETIME],
    [N.ClanSetupSteps.IDENTITY_INTRO]: [N.ClanSetupSteps.CUSTOMIZE],
    [N.ClanSetupSteps.APPLICATION_INTRO]: [N.ClanSetupSteps.MEMBER_APPLICATION]
  },
  M = e => {
    var t, n;
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
      verificationForm: S
    } = r, I = d === O.length - 1, T = null != S && S.formFields.some(e => !(0, c.isTermsFormField)(e)), p = s.useMemo(() => ({
      [N.ClanSetupSteps.FOUNDATIONAL_INTRO]: {
        disableNextStep: !1
      },
      [N.ClanSetupSteps.GAMES]: {
        disableNextStep: 0 === f.size
      },
      [N.ClanSetupSteps.PLAYSTYLE]: {
        disableNextStep: E === N.ClanPlaystyles.NONE
      },
      [N.ClanSetupSteps.PERSONALITY_INTRO]: {
        disableNextStep: !1
      },
      [N.ClanSetupSteps.UTILITY_TRAITS]: {
        disableNextStep: 0 === h.size
      },
      [N.ClanSetupSteps.INTERESTS]: {
        disableNextStep: 0 === h.size
      },
      [N.ClanSetupSteps.DESCRIPTION]: {
        disableNextStep: 0 === _.length
      },
      [N.ClanSetupSteps.PRIMETIME]: {
        disableNextStep: m.some(e => null == e.day || null == e.time)
      },
      [N.ClanSetupSteps.IDENTITY_INTRO]: {
        disableNextStep: !1
      },
      [N.ClanSetupSteps.CUSTOMIZE]: {
        disableNextStep: C.length < 2
      },
      [N.ClanSetupSteps.APPLICATION_INTRO]: {
        disableNextStep: !1
      },
      [N.ClanSetupSteps.MEMBER_APPLICATION]: {
        disableNextStep: !T
      }
    }), [_.length, h.size, E, m, f.size, C.length, T]);
    return (0, a.jsxs)("div", {
      className: R.footer,
      children: [(0, a.jsx)("div", {
        className: R.progressContainer,
        children: Object.entries(L).map(e => {
          let [t, n] = e;
          return (0, a.jsx)("div", {
            className: R.progressStep,
            children: n.map(e => {
              let t = !p[e].disableNextStep,
                n = e < d || t;
              return (0, a.jsx)(o.Clickable, {
                "aria-label": v.default.Messages.STEP_NUMBER.format({
                  number: e
                }),
                onClick: () => n ? l(e) : null,
                className: i()(R.progressSubStep, {
                  [R.clickable]: n,
                  [R.currentStep]: e === d,
                  [R.progressStepFill]: t
                })
              }, "step-".concat(e))
            })
          }, "step-".concat(t))
        })
      }), (0, a.jsxs)("div", {
        className: R.buttonsContainer,
        children: [(0, a.jsx)(o.Button, {
          look: o.Button.Looks.OUTLINED,
          size: o.Button.Sizes.MEDIUM,
          color: o.Button.Colors.PRIMARY,
          onClick: () => {
            l(d - 1)
          },
          disabled: 0 === d,
          children: v.default.Messages.PAGINATION_PREVIOUS
        }), (0, a.jsx)(o.Button, {
          look: o.Button.Looks.FILLED,
          size: o.Button.Sizes.MEDIUM,
          onClick: () => {
            if (I) {
              u();
              return
            }
            l(d + 1)
          },
          disabled: null !== (n = null === (t = p[d]) || void 0 === t ? void 0 : t.disableNextStep) && void 0 !== n && n,
          children: v.default.Messages.PAGINATION_NEXT
        })]
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
    errors: L
  } = (0, r.useStateFromStoresObject)([E.default], () => {
    var e, n;
    let a = E.default.getStateForGuild(t);
    return {
      progress: null !== (e = a.progress) && void 0 !== e ? e : (0, E.newClanProgress)(),
      errors: null !== (n = a.errors) && void 0 !== n ? n : {}
    }
  }), {
    requiredGameId: P,
    selectedGames: y,
    playstyle: x,
    interests: D,
    description: b,
    tag: U,
    primetime: j,
    currentStep: G
  } = c, w = (0, r.useStateFromStores)([d.default], () => d.default.useReducedMotion), [k, F] = s.useState(!0);
  s.useEffect(() => {
    u.default.getDetectableGames()
  }, []);
  let H = s.useCallback(e => f.updateClanSettings(t, {
      currentStep: e
    }), [t]),
    B = s.useCallback(e => f.updateClanSettings(t, e), [t]),
    V = s.useCallback(() => {
      F(!1), setTimeout(() => n(N.ClanSetupModalPages.SIGN), 199)
    }, [n]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(o.Button, {
      className: R.closeButton,
      look: o.Button.Looks.OUTLINED,
      size: o.Button.Sizes.SMALL,
      color: o.Button.Colors.PRIMARY,
      onClick: l,
      children: v.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
    }), (0, a.jsxs)("div", {
      className: i()(R.mainContent, R.fadeIn, {
        [R.fadeOut]: !k
      }),
      children: [(0, a.jsx)(o.Sequencer, {
        step: G,
        steps: O,
        sideMargin: 24,
        verticalMargin: 24,
        className: R.sequencer,
        innerClassName: R.sequencer,
        animatedNodeClassName: R.sequencer,
        children: (0, a.jsx)(o.ScrollerThin, {
          className: R.scroller,
          fade: !0,
          children: (() => {
            switch (G) {
              case N.ClanSetupSteps.GAMES:
                return (0, a.jsx)(C.default, {
                  handleUpdate: B,
                  selectedGames: y,
                  requiredGameId: P,
                  error: L.selectedGames
                });
              case N.ClanSetupSteps.PLAYSTYLE:
                return (0, a.jsx)(T.default, {
                  handleUpdate: B,
                  playstyle: x,
                  error: L.playstyle
                });
              case N.ClanSetupSteps.UTILITY_TRAITS:
                return (0, a.jsx)(A.default, {
                  requiredGameId: P,
                  handleUpdate: B,
                  interests: D
                });
              case N.ClanSetupSteps.INTERESTS:
                return (0, a.jsx)(m.default, {
                  handleUpdate: B,
                  interests: D,
                  error: L.interests
                });
              case N.ClanSetupSteps.DESCRIPTION:
                return (0, a.jsx)(_.default, {
                  handleUpdate: B,
                  description: b,
                  error: L.description
                });
              case N.ClanSetupSteps.PRIMETIME:
                return (0, a.jsx)(p.default, {
                  handleUpdate: B,
                  selectedTimes: j,
                  error: L.primetime
                });
              case N.ClanSetupSteps.CUSTOMIZE:
                return (0, a.jsx)(g.default, {
                  handleUpdate: B,
                  tag: U,
                  error: L.tag
                });
              case N.ClanSetupSteps.MEMBER_APPLICATION:
                return (0, a.jsx)(I.default, {
                  guildId: t
                });
              case N.ClanSetupSteps.FOUNDATIONAL_INTRO:
                return (0, a.jsx)(S.default, {
                  stepNum: 1,
                  title: v.default.Messages.CLAN_SETUP_FOUNDATIONAL_INTRO_TITLE,
                  subtitle: v.default.Messages.CLAN_SETUP_FOUNDATIONAL_INTRO_SUBTITLE
                });
              case N.ClanSetupSteps.PERSONALITY_INTRO:
                return (0, a.jsx)(S.default, {
                  stepNum: 2,
                  title: v.default.Messages.CLAN_SETUP_PERSONALITY_INTRO_TITLE,
                  subtitle: v.default.Messages.CLAN_SETUP_PERSONALITY_INTRO_SUBTITLE
                });
              case N.ClanSetupSteps.IDENTITY_INTRO:
                return (0, a.jsx)(S.default, {
                  stepNum: 3,
                  title: v.default.Messages.CLAN_SETUP_IDENTITY_INTRO_TITLE,
                  subtitle: v.default.Messages.CLAN_SETUP_IDENTITY_INTRO_SUBTITLE
                });
              case N.ClanSetupSteps.APPLICATION_INTRO:
                return (0, a.jsx)(S.default, {
                  stepNum: 4,
                  title: v.default.Messages.CLAN_SETUP_APPLICATION_INTRO_TITLE,
                  subtitle: v.default.Messages.CLAN_SETUP_APPLICATION_INTRO_SUBTITLE
                });
              default:
                return null
            }
          })()
        })
      }), (0, a.jsx)(M, {
        setCurrentStep: H,
        progress: c,
        onLastStep: V
      })]
    }), (0, a.jsx)("div", {
      className: i()(R.overviewSidebar, {
        [R.fadeOut]: w && !k
      }),
      children: (0, a.jsx)(h.default, {
        guildId: t
      })
    })]
  })
}