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
  _ = n("620929"),
  h = n("745628"),
  C = n("950279"),
  m = n("796918"),
  S = n("22035"),
  I = n("513532"),
  T = n("741595"),
  p = n("884486"),
  g = n("974842"),
  N = n("308083"),
  A = n("689938"),
  R = n("653196");
let O = [N.ClanSetupSteps.FOUNDATIONAL_INTRO, N.ClanSetupSteps.GAMES, N.ClanSetupSteps.PLAYSTYLE, N.ClanSetupSteps.PERSONALITY_INTRO, N.ClanSetupSteps.INTERESTS, N.ClanSetupSteps.DESCRIPTION, N.ClanSetupSteps.PRIMETIME, N.ClanSetupSteps.IDENTITY_INTRO, N.ClanSetupSteps.CUSTOMIZE, N.ClanSetupSteps.APPLICATION_INTRO, N.ClanSetupSteps.MEMBER_APPLICATION],
  v = {
    [N.ClanSetupSteps.FOUNDATIONAL_INTRO]: [N.ClanSetupSteps.GAMES, N.ClanSetupSteps.PLAYSTYLE],
    [N.ClanSetupSteps.PERSONALITY_INTRO]: [N.ClanSetupSteps.INTERESTS, N.ClanSetupSteps.DESCRIPTION, N.ClanSetupSteps.PRIMETIME],
    [N.ClanSetupSteps.IDENTITY_INTRO]: [N.ClanSetupSteps.CUSTOMIZE],
    [N.ClanSetupSteps.APPLICATION_INTRO]: [N.ClanSetupSteps.MEMBER_APPLICATION]
  },
  L = e => {
    var t, n;
    let {
      currentStep: l,
      setCurrentStep: i,
      selectedGames: r,
      playstyle: u,
      interests: d,
      description: f,
      tag: E,
      primetime: _,
      verificationForm: h,
      onLastStep: C
    } = e, m = 0 === l, S = l === O.length - 1, I = null != h && h.formFields.some(e => !(0, c.isTermsFormField)(e)), T = s.useMemo(() => ({
      [N.ClanSetupSteps.FOUNDATIONAL_INTRO]: {
        disableNextStep: !1
      },
      [N.ClanSetupSteps.GAMES]: {
        disableNextStep: 0 === r.size
      },
      [N.ClanSetupSteps.PLAYSTYLE]: {
        disableNextStep: u === N.ClanPlaystyles.NONE
      },
      [N.ClanSetupSteps.PERSONALITY_INTRO]: {
        disableNextStep: !1
      },
      [N.ClanSetupSteps.INTERESTS]: {
        disableNextStep: 0 === d.size
      },
      [N.ClanSetupSteps.DESCRIPTION]: {
        disableNextStep: 0 === f.length
      },
      [N.ClanSetupSteps.PRIMETIME]: {
        disableNextStep: _.some(e => null == e.day || null == e.time)
      },
      [N.ClanSetupSteps.IDENTITY_INTRO]: {
        disableNextStep: !1
      },
      [N.ClanSetupSteps.CUSTOMIZE]: {
        disableNextStep: E.length < 2
      },
      [N.ClanSetupSteps.APPLICATION_INTRO]: {
        disableNextStep: !1
      },
      [N.ClanSetupSteps.MEMBER_APPLICATION]: {
        disableNextStep: !I
      }
    }), [f.length, d.size, u, _, r.size, E.length, I]);
    return (0, a.jsxs)("div", {
      className: R.footer,
      children: [(0, a.jsx)("div", {
        className: R.progressContainer,
        children: Object.entries(v).map(e => {
          let [t, n] = e, s = n.includes(l) ? n.indexOf(l) / n.length : Number(t) < l ? 1 : 0;
          return (0, a.jsx)("div", {
            className: R.progressStep,
            children: (0, a.jsx)("div", {
              className: R.progressStepFill,
              style: {
                width: "".concat(100 * s, "%")
              }
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
            i(l - 1)
          },
          disabled: m,
          children: A.default.Messages.PAGINATION_PREVIOUS
        }), (0, a.jsx)(o.Button, {
          look: o.Button.Looks.FILLED,
          size: o.Button.Sizes.MEDIUM,
          onClick: () => {
            if (S) {
              C();
              return
            }
            i(l + 1)
          },
          disabled: null !== (n = null === (t = T[l]) || void 0 === t ? void 0 : t.disableNextStep) && void 0 !== n && n,
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
    errors: v
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
    description: D,
    tag: x,
    primetime: b,
    currentStep: U,
    verificationForm: j
  } = c, G = (0, r.useStateFromStores)([d.default], () => d.default.useReducedMotion), [w, k] = s.useState(!0);
  s.useEffect(() => {
    u.default.getDetectableGames()
  }, []);
  let F = s.useCallback(e => f.updateClanSettings(t, {
      currentStep: e
    }), [t]),
    B = s.useCallback(e => f.updateClanSettings(t, e), [t]),
    H = s.useCallback(() => {
      k(!1), setTimeout(() => n(N.ClanSetupModalPages.SIGN), 199)
    }, [n]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(o.Button, {
      className: R.closeButton,
      look: o.Button.Looks.OUTLINED,
      size: o.Button.Sizes.SMALL,
      color: o.Button.Colors.PRIMARY,
      onClick: l,
      children: A.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
    }), (0, a.jsxs)("div", {
      className: i()(R.mainContent, R.fadeIn, {
        [R.fadeOut]: !w
      }),
      children: [(0, a.jsx)(o.Sequencer, {
        step: U,
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
            switch (U) {
              case N.ClanSetupSteps.GAMES:
                return (0, a.jsx)(C.default, {
                  handleUpdate: B,
                  selectedGames: P,
                  error: v.selectedGames
                });
              case N.ClanSetupSteps.PLAYSTYLE:
                return (0, a.jsx)(T.default, {
                  handleUpdate: B,
                  playstyle: M,
                  error: v.playstyle
                });
              case N.ClanSetupSteps.INTERESTS:
                return (0, a.jsx)(m.default, {
                  handleUpdate: B,
                  interests: y,
                  error: v.interests
                });
              case N.ClanSetupSteps.DESCRIPTION:
                return (0, a.jsx)(h.default, {
                  handleUpdate: B,
                  description: D,
                  error: v.description
                });
              case N.ClanSetupSteps.PRIMETIME:
                return (0, a.jsx)(p.default, {
                  handleUpdate: B,
                  selectedTimes: b,
                  error: v.primetime
                });
              case N.ClanSetupSteps.CUSTOMIZE:
                return (0, a.jsx)(g.default, {
                  handleUpdate: B,
                  tag: x,
                  error: v.tag
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
        currentStep: U,
        setCurrentStep: F,
        selectedGames: P,
        playstyle: M,
        interests: y,
        description: D,
        primetime: b,
        verificationForm: j,
        tag: x,
        onLastStep: H
      })]
    }), (0, a.jsx)("div", {
      className: i()(R.overviewSidebar, {
        [R.fadeOut]: G && !w
      }),
      children: (0, a.jsx)(_.default, {
        guildId: t
      })
    })]
  })
}