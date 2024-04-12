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
  _ = n("94963"),
  C = n("745628"),
  m = n("950279"),
  S = n("796918"),
  I = n("22035"),
  T = n("513532"),
  p = n("741595"),
  g = n("884486"),
  A = n("974842"),
  N = n("359380"),
  R = n("308083"),
  v = n("689938"),
  O = n("653196");
let L = [R.ClanSetupSteps.FOUNDATIONAL_INTRO, R.ClanSetupSteps.GAMES, R.ClanSetupSteps.PLAYSTYLE, R.ClanSetupSteps.PERSONALITY_INTRO, R.ClanSetupSteps.UTILITY_TRAITS, R.ClanSetupSteps.INTERESTS, R.ClanSetupSteps.DESCRIPTION, R.ClanSetupSteps.PRIMETIME, R.ClanSetupSteps.IDENTITY_INTRO, R.ClanSetupSteps.CUSTOMIZE_TAG_BADGE, R.ClanSetupSteps.CUSTOMIZE_BANNER, R.ClanSetupSteps.APPLICATION_INTRO, R.ClanSetupSteps.MEMBER_APPLICATION],
  M = {
    [R.ClanSetupSteps.FOUNDATIONAL_INTRO]: [R.ClanSetupSteps.GAMES, R.ClanSetupSteps.PLAYSTYLE],
    [R.ClanSetupSteps.PERSONALITY_INTRO]: [R.ClanSetupSteps.INTERESTS, R.ClanSetupSteps.UTILITY_TRAITS, R.ClanSetupSteps.DESCRIPTION, R.ClanSetupSteps.PRIMETIME],
    [R.ClanSetupSteps.IDENTITY_INTRO]: [R.ClanSetupSteps.CUSTOMIZE_TAG_BADGE, R.ClanSetupSteps.CUSTOMIZE_BANNER],
    [R.ClanSetupSteps.APPLICATION_INTRO]: [R.ClanSetupSteps.MEMBER_APPLICATION]
  },
  P = e => {
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
      verificationForm: S,
      furthestStep: I
    } = r, T = d === L.length - 1, p = null != S && S.formFields.some(e => !(0, c.isTermsFormField)(e)), g = s.useMemo(() => ({
      [R.ClanSetupSteps.FOUNDATIONAL_INTRO]: {
        disableNextStep: !1
      },
      [R.ClanSetupSteps.GAMES]: {
        disableNextStep: 0 === f.size
      },
      [R.ClanSetupSteps.PLAYSTYLE]: {
        disableNextStep: E === R.ClanPlaystyles.NONE
      },
      [R.ClanSetupSteps.PERSONALITY_INTRO]: {
        disableNextStep: !1
      },
      [R.ClanSetupSteps.UTILITY_TRAITS]: {
        disableNextStep: 0 === h.size
      },
      [R.ClanSetupSteps.INTERESTS]: {
        disableNextStep: 0 === h.size
      },
      [R.ClanSetupSteps.DESCRIPTION]: {
        disableNextStep: 0 === _.length
      },
      [R.ClanSetupSteps.PRIMETIME]: {
        disableNextStep: m.some(e => null == e.day || null == e.time)
      },
      [R.ClanSetupSteps.IDENTITY_INTRO]: {
        disableNextStep: !1
      },
      [R.ClanSetupSteps.CUSTOMIZE_TAG_BADGE]: {
        disableNextStep: C.length < 2
      },
      [R.ClanSetupSteps.CUSTOMIZE_BANNER]: {
        disableNextStep: !1
      },
      [R.ClanSetupSteps.APPLICATION_INTRO]: {
        disableNextStep: !1
      },
      [R.ClanSetupSteps.MEMBER_APPLICATION]: {
        disableNextStep: !p
      }
    }), [_.length, h.size, E, m, f.size, C.length, p]);
    return (0, a.jsxs)("div", {
      className: O.footer,
      children: [(0, a.jsx)("div", {
        className: O.progressContainer,
        children: Object.entries(M).map(e => {
          let [t, n] = e;
          return (0, a.jsx)("div", {
            className: O.progressStep,
            children: n.map(e => {
              let t = !g[e].disableNextStep && I >= e,
                n = e <= I;
              return (0, a.jsx)(o.Clickable, {
                "aria-label": v.default.Messages.STEP_NUMBER.format({
                  number: e
                }),
                onClick: () => n ? l(e) : null,
                className: i()(O.progressSubStep, {
                  [O.clickable]: n,
                  [O.currentStep]: e === d,
                  [O.progressStepFill]: t || e === d
                })
              }, "step-".concat(e))
            })
          }, "step-".concat(t))
        })
      }), (0, a.jsxs)("div", {
        className: O.buttonsContainer,
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
            if (T) {
              u();
              return
            }
            l(d + 1)
          },
          disabled: null !== (n = null === (t = g[d]) || void 0 === t ? void 0 : t.disableNextStep) && void 0 !== n && n,
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
    errors: M
  } = (0, r.useStateFromStoresObject)([E.default], () => {
    var e, n;
    let a = E.default.getStateForGuild(t);
    return {
      progress: null !== (e = a.progress) && void 0 !== e ? e : (0, E.newClanProgress)(),
      errors: null !== (n = a.errors) && void 0 !== n ? n : {}
    }
  }), {
    requiredGameId: y,
    selectedGames: x,
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
      B(!1), setTimeout(() => n(R.ClanSetupModalPages.SIGN), 199)
    }, [n]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(o.Button, {
      className: O.closeButton,
      look: o.Button.Looks.OUTLINED,
      size: o.Button.Sizes.SMALL,
      color: o.Button.Colors.PRIMARY,
      onClick: l,
      children: v.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
    }), (0, a.jsxs)("div", {
      className: i()(O.mainContent, O.fadeIn, {
        [O.fadeOut]: !H
      }),
      children: [(0, a.jsx)(o.Sequencer, {
        step: w,
        steps: L,
        sideMargin: 24,
        verticalMargin: 24,
        className: O.sequencer,
        innerClassName: O.sequencer,
        animatedNodeClassName: O.sequencer,
        children: (0, a.jsx)(o.ScrollerThin, {
          className: O.scroller,
          fade: !0,
          children: (() => {
            switch (w) {
              case R.ClanSetupSteps.GAMES:
                return (0, a.jsx)(m.default, {
                  handleUpdate: Y,
                  selectedGames: x,
                  requiredGameId: y,
                  error: M.selectedGames
                });
              case R.ClanSetupSteps.PLAYSTYLE:
                return (0, a.jsx)(p.default, {
                  handleUpdate: Y,
                  playstyle: D,
                  error: M.playstyle
                });
              case R.ClanSetupSteps.UTILITY_TRAITS:
                return (0, a.jsx)(N.default, {
                  requiredGameId: y,
                  handleUpdate: Y,
                  interests: b
                });
              case R.ClanSetupSteps.INTERESTS:
                return (0, a.jsx)(S.default, {
                  handleUpdate: Y,
                  interests: b,
                  error: M.interests
                });
              case R.ClanSetupSteps.DESCRIPTION:
                return (0, a.jsx)(C.default, {
                  handleUpdate: Y,
                  description: U,
                  error: M.description
                });
              case R.ClanSetupSteps.PRIMETIME:
                return (0, a.jsx)(g.default, {
                  handleUpdate: Y,
                  selectedTimes: G,
                  error: M.primetime
                });
              case R.ClanSetupSteps.CUSTOMIZE_TAG_BADGE:
                return (0, a.jsx)(A.default, {
                  handleUpdate: Y,
                  tag: j,
                  error: M.tag,
                  badge: c.badgeKind,
                  primaryColor: c.badgePrimaryColor,
                  secondaryColor: c.badgeSecondaryColor,
                  furthestStep: k
                });
              case R.ClanSetupSteps.CUSTOMIZE_BANNER:
                return (0, a.jsx)(_.default, {
                  handleUpdate: Y,
                  progress: c,
                  guildId: t
                });
              case R.ClanSetupSteps.MEMBER_APPLICATION:
                return (0, a.jsx)(T.default, {
                  guildId: t
                });
              case R.ClanSetupSteps.FOUNDATIONAL_INTRO:
                return (0, a.jsx)(I.default, {
                  stepNum: 1,
                  title: v.default.Messages.CLAN_SETUP_FOUNDATIONAL_INTRO_TITLE,
                  subtitle: v.default.Messages.CLAN_SETUP_FOUNDATIONAL_INTRO_SUBTITLE
                });
              case R.ClanSetupSteps.PERSONALITY_INTRO:
                return (0, a.jsx)(I.default, {
                  stepNum: 2,
                  title: v.default.Messages.CLAN_SETUP_PERSONALITY_INTRO_TITLE,
                  subtitle: v.default.Messages.CLAN_SETUP_PERSONALITY_INTRO_SUBTITLE
                });
              case R.ClanSetupSteps.IDENTITY_INTRO:
                return (0, a.jsx)(I.default, {
                  stepNum: 3,
                  title: v.default.Messages.CLAN_SETUP_IDENTITY_INTRO_TITLE,
                  subtitle: v.default.Messages.CLAN_SETUP_IDENTITY_INTRO_SUBTITLE
                });
              case R.ClanSetupSteps.APPLICATION_INTRO:
                return (0, a.jsx)(I.default, {
                  stepNum: 4,
                  title: v.default.Messages.CLAN_SETUP_APPLICATION_INTRO_TITLE,
                  subtitle: v.default.Messages.CLAN_SETUP_APPLICATION_INTRO_SUBTITLE
                });
              default:
                return null
            }
          })()
        })
      }), (0, a.jsx)(P, {
        setCurrentStep: V,
        progress: c,
        onLastStep: W
      })]
    }), (0, a.jsx)("div", {
      className: i()(O.overviewSidebar, {
        [O.fadeOut]: F && !H
      }),
      children: (0, a.jsx)(h.default, {
        guildId: t
      })
    })]
  })
}