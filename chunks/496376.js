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
  I = a("22035"),
  T = a("513532"),
  g = a("741595"),
  A = a("884486"),
  N = a("974842"),
  v = a("359380"),
  R = a("308083"),
  O = a("689938"),
  L = a("653196");
let M = [R.ClanSetupSteps.FOUNDATIONAL_INTRO, R.ClanSetupSteps.GAMES, R.ClanSetupSteps.PLAYSTYLE, R.ClanSetupSteps.PERSONALITY_INTRO, R.ClanSetupSteps.UTILITY_TRAITS, R.ClanSetupSteps.INTERESTS, R.ClanSetupSteps.DESCRIPTION, R.ClanSetupSteps.PRIMETIME, R.ClanSetupSteps.IDENTITY_INTRO, R.ClanSetupSteps.CUSTOMIZE_TAG_BADGE, R.ClanSetupSteps.CUSTOMIZE_BANNER, R.ClanSetupSteps.APPLICATION_INTRO, R.ClanSetupSteps.MEMBER_APPLICATION],
  P = {
    [R.ClanSetupSteps.FOUNDATIONAL_INTRO]: [R.ClanSetupSteps.GAMES, R.ClanSetupSteps.PLAYSTYLE],
    [R.ClanSetupSteps.PERSONALITY_INTRO]: [R.ClanSetupSteps.UTILITY_TRAITS, R.ClanSetupSteps.INTERESTS, R.ClanSetupSteps.DESCRIPTION, R.ClanSetupSteps.PRIMETIME],
    [R.ClanSetupSteps.IDENTITY_INTRO]: [R.ClanSetupSteps.CUSTOMIZE_TAG_BADGE, R.ClanSetupSteps.CUSTOMIZE_BANNER],
    [R.ClanSetupSteps.APPLICATION_INTRO]: [R.ClanSetupSteps.MEMBER_APPLICATION]
  },
  x = e => {
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
      primetime: S,
      verificationForm: p,
      furthestStep: I
    } = r, T = d === M.length - 1, g = null != p && p.formFields.some(e => !(0, f.isTermsFormField)(e)), A = s.useMemo(() => ({
      [R.ClanSetupSteps.FOUNDATIONAL_INTRO]: {
        disableNextStep: !1
      },
      [R.ClanSetupSteps.GAMES]: {
        disableNextStep: 0 === E.size
      },
      [R.ClanSetupSteps.PLAYSTYLE]: {
        disableNextStep: h === R.ClanPlaystyles.NONE
      },
      [R.ClanSetupSteps.PERSONALITY_INTRO]: {
        disableNextStep: !1
      },
      [R.ClanSetupSteps.UTILITY_TRAITS]: {
        disableNextStep: !1
      },
      [R.ClanSetupSteps.INTERESTS]: {
        disableNextStep: 0 === _.size
      },
      [R.ClanSetupSteps.DESCRIPTION]: {
        disableNextStep: 0 === C.length
      },
      [R.ClanSetupSteps.PRIMETIME]: {
        disableNextStep: S.some(e => null == e.day || null == e.time)
      },
      [R.ClanSetupSteps.IDENTITY_INTRO]: {
        disableNextStep: !1
      },
      [R.ClanSetupSteps.CUSTOMIZE_TAG_BADGE]: {
        disableNextStep: m.length < 2
      },
      [R.ClanSetupSteps.CUSTOMIZE_BANNER]: {
        disableNextStep: !1
      },
      [R.ClanSetupSteps.APPLICATION_INTRO]: {
        disableNextStep: !1
      },
      [R.ClanSetupSteps.MEMBER_APPLICATION]: {
        disableNextStep: !g
      }
    }), [C.length, _.size, h, S, E.size, m.length, g]);
    return (0, n.jsxs)("div", {
      className: L.footer,
      children: [(0, n.jsx)("div", {
        className: L.progressContainer,
        children: Object.entries(P).map(e => {
          let [t, a] = e;
          return (0, n.jsx)("div", {
            className: L.progressStep,
            children: a.map(e => {
              let t = !A[e].disableNextStep && I >= e,
                a = e <= I;
              return (0, n.jsx)(o.Clickable, {
                "aria-label": O.default.Messages.STEP_NUMBER.format({
                  number: e
                }),
                onClick: () => a ? l(e) : null,
                className: i()(L.progressSubStep, {
                  [L.clickable]: a,
                  [L.currentStep]: e === d,
                  [L.progressStepFill]: t || e === d
                })
              }, "step-".concat(e))
            })
          }, "step-".concat(t))
        })
      }), (0, n.jsxs)("div", {
        className: L.buttonsContainer,
        children: [(0, n.jsx)(o.Button, {
          look: o.Button.Looks.OUTLINED,
          size: o.Button.Sizes.MEDIUM,
          color: o.Button.Colors.PRIMARY,
          onClick: () => {
            l(d - 1)
          },
          disabled: 0 === d,
          children: O.default.Messages.PAGINATION_PREVIOUS
        }), (0, n.jsxs)("div", {
          className: L.footerAlphaMsg,
          children: [(0, n.jsx)(c.default, {
            className: L.footerAlphaTag
          }), (0, n.jsx)(o.Text, {
            variant: "text-sm/medium",
            children: "This is currently in Alpha, use test servers only!"
          })]
        }), (0, n.jsx)(o.Button, {
          look: o.Button.Looks.FILLED,
          size: o.Button.Sizes.MEDIUM,
          onClick: () => {
            if (T) {
              u();
              return
            }
            l(d + 1)
          },
          disabled: null !== (a = null === (t = A[d]) || void 0 === t ? void 0 : t.disableNextStep) && void 0 !== a && a,
          children: O.default.Messages.PAGINATION_NEXT
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
    var e, a;
    let n = h.default.getStateForGuild(t);
    return {
      progress: null !== (e = n.progress) && void 0 !== e ? e : (0, h.newClanProgress)(),
      errors: null !== (a = n.errors) && void 0 !== a ? a : {}
    }
  }), {
    requiredGameId: P,
    gameApplicationIds: y,
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
  let V = s.useCallback(e => E.updateClanSetup(t, {
      currentStep: e,
      furthestStep: null == k || e > k ? e : k
    }), [t, k]),
    Y = s.useCallback(e => E.updateClanSetup(t, e), [t]),
    W = s.useCallback(() => {
      B(!1), setTimeout(() => a(R.ClanSetupModalPages.SIGN), 199)
    }, [a]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(o.Button, {
      className: L.closeButton,
      look: o.Button.Looks.OUTLINED,
      size: o.Button.Sizes.SMALL,
      color: o.Button.Colors.PRIMARY,
      onClick: l,
      children: O.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
    }), (0, n.jsxs)("div", {
      className: i()(L.mainContent, L.fadeIn, {
        [L.fadeOut]: !H
      }),
      children: [(0, n.jsx)(o.Sequencer, {
        step: w,
        steps: M,
        sideMargin: 24,
        verticalMargin: 24,
        className: L.sequencer,
        innerClassName: L.sequencer,
        animatedNodeClassName: L.sequencer,
        children: (0, n.jsx)(o.ScrollerThin, {
          className: L.scroller,
          fade: !0,
          children: (() => {
            switch (w) {
              case R.ClanSetupSteps.GAMES:
                return (0, n.jsx)(S.default, {
                  handleUpdate: Y,
                  gameApplicationIds: y,
                  requiredGameId: P,
                  error: f.gameApplicationIds
                });
              case R.ClanSetupSteps.PLAYSTYLE:
                return (0, n.jsx)(g.default, {
                  handleUpdate: Y,
                  playstyle: D,
                  error: f.playstyle
                });
              case R.ClanSetupSteps.UTILITY_TRAITS:
                return (0, n.jsx)(v.default, {
                  requiredGameId: P,
                  handleUpdate: Y,
                  interests: b
                });
              case R.ClanSetupSteps.INTERESTS:
                return (0, n.jsx)(p.default, {
                  handleUpdate: Y,
                  interests: b,
                  error: f.interests
                });
              case R.ClanSetupSteps.DESCRIPTION:
                return (0, n.jsx)(m.default, {
                  handleUpdate: Y,
                  description: U,
                  wildcardDescriptors: c.wildcardDescriptors,
                  errors: f
                });
              case R.ClanSetupSteps.PRIMETIME:
                return (0, n.jsx)(A.default, {
                  handleUpdate: Y,
                  selectedTimes: G,
                  error: f.primetime
                });
              case R.ClanSetupSteps.CUSTOMIZE_TAG_BADGE:
                return (0, n.jsx)(N.default, {
                  handleUpdate: Y,
                  tag: j,
                  error: f.tag,
                  badge: c.badgeKind,
                  primaryColor: c.badgePrimaryColor,
                  secondaryColor: c.badgeSecondaryColor,
                  furthestStep: k
                });
              case R.ClanSetupSteps.CUSTOMIZE_BANNER:
                return (0, n.jsx)(C.default, {
                  handleUpdate: Y,
                  progress: c,
                  guildId: t
                });
              case R.ClanSetupSteps.MEMBER_APPLICATION:
                return (0, n.jsx)(T.default, {
                  guildId: t
                });
              case R.ClanSetupSteps.FOUNDATIONAL_INTRO:
                return (0, n.jsx)(I.default, {
                  stepNum: 1,
                  title: O.default.Messages.CLAN_SETUP_FOUNDATIONAL_INTRO_TITLE,
                  subtitle: O.default.Messages.CLAN_SETUP_FOUNDATIONAL_INTRO_SUBTITLE
                });
              case R.ClanSetupSteps.PERSONALITY_INTRO:
                return (0, n.jsx)(I.default, {
                  stepNum: 2,
                  title: O.default.Messages.CLAN_SETUP_PERSONALITY_INTRO_TITLE,
                  subtitle: O.default.Messages.CLAN_SETUP_PERSONALITY_INTRO_SUBTITLE
                });
              case R.ClanSetupSteps.IDENTITY_INTRO:
                return (0, n.jsx)(I.default, {
                  stepNum: 3,
                  title: O.default.Messages.CLAN_SETUP_IDENTITY_INTRO_TITLE,
                  subtitle: O.default.Messages.CLAN_SETUP_IDENTITY_INTRO_SUBTITLE
                });
              case R.ClanSetupSteps.APPLICATION_INTRO:
                return (0, n.jsx)(I.default, {
                  stepNum: 4,
                  title: O.default.Messages.CLAN_SETUP_APPLICATION_INTRO_TITLE,
                  subtitle: O.default.Messages.CLAN_SETUP_APPLICATION_INTRO_SUBTITLE
                });
              default:
                return null
            }
          })()
        })
      }), (0, n.jsx)(x, {
        setCurrentStep: V,
        progress: c,
        onLastStep: W
      })]
    }), (0, n.jsx)("div", {
      className: i()(L.overviewSidebar, {
        [L.fadeOut]: F && !H
      }),
      children: (0, n.jsx)(_.default, {
        guildId: t
      })
    })]
  })
}