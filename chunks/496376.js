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
  p = n("741595"),
  T = n("884486"),
  g = n("974842"),
  N = n("308083"),
  A = n("689938"),
  v = n("653196");
let R = [N.ClanSetupSteps.FOUNDATIONAL_INTRO, N.ClanSetupSteps.GAMES, N.ClanSetupSteps.PLAYSTYLE, N.ClanSetupSteps.PERSONALITY_INTRO, N.ClanSetupSteps.INTERESTS, N.ClanSetupSteps.DESCRIPTION, N.ClanSetupSteps.PRIMETIME, N.ClanSetupSteps.IDENTITY_INTRO, N.ClanSetupSteps.CUSTOMIZE, N.ClanSetupSteps.APPLICATION_INTRO, N.ClanSetupSteps.MEMBER_APPLICATION],
  O = {
    [N.ClanSetupSteps.FOUNDATIONAL_INTRO]: [N.ClanSetupSteps.GAMES, N.ClanSetupSteps.PLAYSTYLE],
    [N.ClanSetupSteps.PERSONALITY_INTRO]: [N.ClanSetupSteps.INTERESTS, N.ClanSetupSteps.DESCRIPTION, N.ClanSetupSteps.PRIMETIME],
    [N.ClanSetupSteps.IDENTITY_INTRO]: [N.ClanSetupSteps.CUSTOMIZE],
    [N.ClanSetupSteps.APPLICATION_INTRO]: [N.ClanSetupSteps.MEMBER_APPLICATION]
  },
  L = e => {
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
    } = r, I = d === R.length - 1, p = null != S && S.formFields.some(e => !(0, c.isTermsFormField)(e)), T = s.useMemo(() => ({
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
        disableNextStep: !p
      }
    }), [_.length, h.size, E, m, f.size, C.length, p]);
    return (0, a.jsxs)("div", {
      className: v.footer,
      children: [(0, a.jsx)("div", {
        className: v.progressContainer,
        children: Object.entries(O).map(e => {
          let [t, n] = e;
          return (0, a.jsx)("div", {
            className: v.progressStep,
            children: n.map(e => {
              let t = !T[e].disableNextStep,
                n = e < d || t;
              return (0, a.jsx)(o.Clickable, {
                "aria-label": A.default.Messages.STEP_NUMBER.format({
                  number: e
                }),
                onClick: () => n ? l(e) : null,
                className: i()(v.progressSubStep, {
                  [v.clickable]: n,
                  [v.currentStep]: e === d,
                  [v.progressStepFill]: t
                })
              }, "step-".concat(e))
            })
          }, "step-".concat(t))
        })
      }), (0, a.jsxs)("div", {
        className: v.buttonsContainer,
        children: [(0, a.jsx)(o.Button, {
          look: o.Button.Looks.OUTLINED,
          size: o.Button.Sizes.MEDIUM,
          color: o.Button.Colors.PRIMARY,
          onClick: () => {
            l(d - 1)
          },
          disabled: 0 === d,
          children: A.default.Messages.PAGINATION_PREVIOUS
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
          disabled: null !== (n = null === (t = T[d]) || void 0 === t ? void 0 : t.disableNextStep) && void 0 !== n && n,
          children: A.default.Messages.PAGINATION_NEXT
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
    errors: O
  } = (0, r.useStateFromStoresObject)([E.default], () => {
    var e, n;
    let a = E.default.getStateForGuild(t);
    return {
      progress: null !== (e = a.progress) && void 0 !== e ? e : (0, E.newClanProgress)(),
      errors: null !== (n = a.errors) && void 0 !== n ? n : {}
    }
  }), {
    selectedGames: P,
    playstyle: M,
    interests: y,
    description: x,
    tag: D,
    primetime: b,
    currentStep: U
  } = c, j = (0, r.useStateFromStores)([d.default], () => d.default.useReducedMotion), [G, w] = s.useState(!0);
  s.useEffect(() => {
    u.default.getDetectableGames()
  }, []);
  let k = s.useCallback(e => f.updateClanSettings(t, {
      currentStep: e
    }), [t]),
    F = s.useCallback(e => f.updateClanSettings(t, e), [t]),
    B = s.useCallback(() => {
      w(!1), setTimeout(() => n(N.ClanSetupModalPages.SIGN), 199)
    }, [n]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(o.Button, {
      className: v.closeButton,
      look: o.Button.Looks.OUTLINED,
      size: o.Button.Sizes.SMALL,
      color: o.Button.Colors.PRIMARY,
      onClick: l,
      children: A.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
    }), (0, a.jsxs)("div", {
      className: i()(v.mainContent, v.fadeIn, {
        [v.fadeOut]: !G
      }),
      children: [(0, a.jsx)(o.Sequencer, {
        step: U,
        steps: R,
        sideMargin: 24,
        verticalMargin: 24,
        className: v.sequencer,
        innerClassName: v.sequencer,
        animatedNodeClassName: v.sequencer,
        children: (0, a.jsx)(o.ScrollerThin, {
          className: v.scroller,
          fade: !0,
          children: (() => {
            switch (U) {
              case N.ClanSetupSteps.GAMES:
                return (0, a.jsx)(C.default, {
                  handleUpdate: F,
                  selectedGames: P,
                  error: O.selectedGames
                });
              case N.ClanSetupSteps.PLAYSTYLE:
                return (0, a.jsx)(p.default, {
                  handleUpdate: F,
                  playstyle: M,
                  error: O.playstyle
                });
              case N.ClanSetupSteps.INTERESTS:
                return (0, a.jsx)(m.default, {
                  handleUpdate: F,
                  interests: y,
                  error: O.interests
                });
              case N.ClanSetupSteps.DESCRIPTION:
                return (0, a.jsx)(_.default, {
                  handleUpdate: F,
                  description: x,
                  error: O.description
                });
              case N.ClanSetupSteps.PRIMETIME:
                return (0, a.jsx)(T.default, {
                  handleUpdate: F,
                  selectedTimes: b,
                  error: O.primetime
                });
              case N.ClanSetupSteps.CUSTOMIZE:
                return (0, a.jsx)(g.default, {
                  handleUpdate: F,
                  tag: D,
                  error: O.tag
                });
              case N.ClanSetupSteps.MEMBER_APPLICATION:
                return (0, a.jsx)(I.default, {
                  guildId: t
                });
              case N.ClanSetupSteps.FOUNDATIONAL_INTRO:
                return (0, a.jsx)(S.default, {
                  stepNum: 1,
                  title: A.default.Messages.CLAN_SETUP_FOUNDATIONAL_INTRO_TITLE,
                  subtitle: A.default.Messages.CLAN_SETUP_FOUNDATIONAL_INTRO_SUBTITLE
                });
              case N.ClanSetupSteps.PERSONALITY_INTRO:
                return (0, a.jsx)(S.default, {
                  stepNum: 2,
                  title: A.default.Messages.CLAN_SETUP_PERSONALITY_INTRO_TITLE,
                  subtitle: A.default.Messages.CLAN_SETUP_PERSONALITY_INTRO_SUBTITLE
                });
              case N.ClanSetupSteps.IDENTITY_INTRO:
                return (0, a.jsx)(S.default, {
                  stepNum: 3,
                  title: A.default.Messages.CLAN_SETUP_IDENTITY_INTRO_TITLE,
                  subtitle: A.default.Messages.CLAN_SETUP_IDENTITY_INTRO_SUBTITLE
                });
              case N.ClanSetupSteps.APPLICATION_INTRO:
                return (0, a.jsx)(S.default, {
                  stepNum: 4,
                  title: A.default.Messages.CLAN_SETUP_APPLICATION_INTRO_TITLE,
                  subtitle: A.default.Messages.CLAN_SETUP_APPLICATION_INTRO_SUBTITLE
                });
              default:
                return null
            }
          })()
        })
      }), (0, a.jsx)(L, {
        setCurrentStep: k,
        progress: c,
        onLastStep: B
      })]
    }), (0, a.jsx)("div", {
      className: i()(v.overviewSidebar, {
        [v.fadeOut]: j && !G
      }),
      children: (0, a.jsx)(h.default, {
        guildId: t
      })
    })]
  })
}