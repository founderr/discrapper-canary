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
  c = n("931240"),
  f = n("650461"),
  E = n("620929"),
  h = n("745628"),
  _ = n("950279"),
  C = n("796918"),
  m = n("22035"),
  S = n("741595"),
  I = n("884486"),
  p = n("974842"),
  T = n("308083"),
  g = n("689938"),
  N = n("653196");
let A = [T.ClanSetupSteps.FOUNDATIONAL_INTRO, T.ClanSetupSteps.GAMES, T.ClanSetupSteps.PLAYSTYLE, T.ClanSetupSteps.PERSONALITY_INTRO, T.ClanSetupSteps.INTERESTS, T.ClanSetupSteps.DESCRIPTION, T.ClanSetupSteps.PRIMETIME, T.ClanSetupSteps.IDENTITY_INTRO, T.ClanSetupSteps.CUSTOMIZE, T.ClanSetupSteps.APPLICATION_INTRO, T.ClanSetupSteps.MEMBER_APPLICATION],
  O = {
    [T.ClanSetupSteps.FOUNDATIONAL_INTRO]: [T.ClanSetupSteps.GAMES, T.ClanSetupSteps.PLAYSTYLE],
    [T.ClanSetupSteps.PERSONALITY_INTRO]: [T.ClanSetupSteps.INTERESTS, T.ClanSetupSteps.DESCRIPTION, T.ClanSetupSteps.PRIMETIME],
    [T.ClanSetupSteps.IDENTITY_INTRO]: [T.ClanSetupSteps.CUSTOMIZE],
    [T.ClanSetupSteps.APPLICATION_INTRO]: [T.ClanSetupSteps.MEMBER_APPLICATION]
  },
  R = e => {
    var t, n;
    let {
      currentStep: l,
      setCurrentStep: i,
      selectedGames: r,
      playstyle: u,
      interests: d,
      description: c,
      tag: f,
      primetime: E,
      onLastStep: h
    } = e, _ = 0 === l, C = l === A.length - 1, m = s.useMemo(() => ({
      [T.ClanSetupSteps.FOUNDATIONAL_INTRO]: {
        disableNextStep: !1
      },
      [T.ClanSetupSteps.GAMES]: {
        disableNextStep: 0 === r.size
      },
      [T.ClanSetupSteps.PLAYSTYLE]: {
        disableNextStep: u === T.ClanPlaystyles.NONE
      },
      [T.ClanSetupSteps.PERSONALITY_INTRO]: {
        disableNextStep: !1
      },
      [T.ClanSetupSteps.INTERESTS]: {
        disableNextStep: 0 === d.size
      },
      [T.ClanSetupSteps.DESCRIPTION]: {
        disableNextStep: 0 === c.length
      },
      [T.ClanSetupSteps.PRIMETIME]: {
        disableNextStep: E.some(e => null == e.day || null == e.time)
      },
      [T.ClanSetupSteps.IDENTITY_INTRO]: {
        disableNextStep: !1
      },
      [T.ClanSetupSteps.CUSTOMIZE]: {
        disableNextStep: 0 === f.length
      },
      [T.ClanSetupSteps.APPLICATION_INTRO]: {
        disableNextStep: !1
      },
      [T.ClanSetupSteps.MEMBER_APPLICATION]: {
        disableNextStep: !1
      }
    }), [c.length, d.size, u, E, r.size, f.length]);
    return (0, a.jsxs)("div", {
      className: N.footer,
      children: [(0, a.jsx)("div", {
        className: N.progressContainer,
        children: Object.entries(O).map(e => {
          let [t, n] = e, s = n.includes(l) ? n.indexOf(l) / n.length : Number(t) < l ? 1 : 0;
          return (0, a.jsx)("div", {
            className: N.progressStep,
            children: (0, a.jsx)("div", {
              className: N.progressStepFill,
              style: {
                width: "".concat(100 * s, "%")
              }
            })
          }, "step-".concat(t))
        })
      }), (0, a.jsxs)("div", {
        className: N.buttonsContainer,
        children: [(0, a.jsx)(o.Button, {
          look: o.Button.Looks.OUTLINED,
          size: o.Button.Sizes.MEDIUM,
          color: o.Button.Colors.PRIMARY,
          onClick: () => {
            i(l - 1)
          },
          disabled: _,
          children: g.default.Messages.PAGINATION_PREVIOUS
        }), (0, a.jsx)(o.Button, {
          look: o.Button.Looks.FILLED,
          size: o.Button.Sizes.MEDIUM,
          onClick: () => {
            if (C) {
              h();
              return
            }
            i(l + 1)
          },
          disabled: null !== (n = null === (t = m[l]) || void 0 === t ? void 0 : t.disableNextStep) && void 0 !== n && n,
          children: g.default.Messages.PAGINATION_NEXT
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
    selectedGames: O,
    playstyle: v,
    interests: L,
    description: P,
    tag: M,
    primetime: y,
    currentStep: D
  } = (0, r.useStateFromStoresObject)([f.default], () => {
    var e;
    return null !== (e = f.default.getStateForGuild(t)) && void 0 !== e ? e : (0, f.newClanProgress)()
  }), x = (0, r.useStateFromStores)([d.default], () => d.default.useReducedMotion), [b, U] = s.useState(!0);
  s.useEffect(() => {
    u.default.getDetectableGames()
  }, []);
  let j = s.useCallback(e => c.updateClanSettings(t, {
      currentStep: e
    }), [t]),
    G = s.useCallback(e => c.updateClanSettings(t, e), [t]),
    w = s.useCallback(() => {
      U(!1), setTimeout(() => n(T.ClanSetupModalPages.SIGN), 199)
    }, [n]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(o.Button, {
      className: N.closeButton,
      look: o.Button.Looks.OUTLINED,
      size: o.Button.Sizes.SMALL,
      color: o.Button.Colors.PRIMARY,
      onClick: l,
      children: g.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
    }), (0, a.jsxs)("div", {
      className: i()(N.mainContent, N.fadeIn, {
        [N.fadeOut]: !b
      }),
      children: [(0, a.jsx)(o.Sequencer, {
        step: D,
        steps: A,
        sideMargin: 24,
        verticalMargin: 24,
        className: N.sequencer,
        innerClassName: N.sequencer,
        animatedNodeClassName: N.sequencer,
        children: (0, a.jsx)(o.ScrollerThin, {
          className: N.scroller,
          fade: !0,
          children: (() => {
            switch (D) {
              case T.ClanSetupSteps.GAMES:
                return (0, a.jsx)(_.default, {
                  handleUpdate: G,
                  selectedGames: O
                });
              case T.ClanSetupSteps.PLAYSTYLE:
                return (0, a.jsx)(S.default, {
                  handleUpdate: G,
                  playstyle: v
                });
              case T.ClanSetupSteps.INTERESTS:
                return (0, a.jsx)(C.default, {
                  handleUpdate: G,
                  interests: L
                });
              case T.ClanSetupSteps.DESCRIPTION:
                return (0, a.jsx)(h.default, {
                  handleUpdate: G,
                  description: P
                });
              case T.ClanSetupSteps.PRIMETIME:
                return (0, a.jsx)(I.default, {
                  handleUpdate: G,
                  selectedTimes: y
                });
              case T.ClanSetupSteps.CUSTOMIZE:
                return (0, a.jsx)(p.default, {
                  handleUpdate: G,
                  tag: M
                });
              case T.ClanSetupSteps.FOUNDATIONAL_INTRO:
                return (0, a.jsx)(m.default, {
                  stepNum: 1,
                  title: g.default.Messages.CLAN_SETUP_FOUNDATIONAL_INTRO_TITLE,
                  subtitle: g.default.Messages.CLAN_SETUP_FOUNDATIONAL_INTRO_SUBTITLE
                });
              case T.ClanSetupSteps.PERSONALITY_INTRO:
                return (0, a.jsx)(m.default, {
                  stepNum: 2,
                  title: g.default.Messages.CLAN_SETUP_PERSONALITY_INTRO_TITLE,
                  subtitle: g.default.Messages.CLAN_SETUP_PERSONALITY_INTRO_SUBTITLE
                });
              case T.ClanSetupSteps.IDENTITY_INTRO:
                return (0, a.jsx)(m.default, {
                  stepNum: 3,
                  title: g.default.Messages.CLAN_SETUP_IDENTITY_INTRO_TITLE,
                  subtitle: g.default.Messages.CLAN_SETUP_IDENTITY_INTRO_SUBTITLE
                });
              case T.ClanSetupSteps.APPLICATION_INTRO:
                return (0, a.jsx)(m.default, {
                  stepNum: 4,
                  title: g.default.Messages.CLAN_SETUP_APPLICATION_INTRO_TITLE,
                  subtitle: g.default.Messages.CLAN_SETUP_APPLICATION_INTRO_SUBTITLE
                });
              default:
                return null
            }
          })()
        })
      }), (0, a.jsx)(R, {
        currentStep: D,
        setCurrentStep: j,
        selectedGames: O,
        playstyle: v,
        interests: L,
        description: P,
        primetime: y,
        tag: M,
        onLastStep: w
      })]
    }), (0, a.jsx)("div", {
      className: i()(N.overviewSidebar, {
        [N.fadeOut]: x && !b
      }),
      children: (0, a.jsx)(E.default, {
        guildId: t
      })
    })]
  })
}