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
  I = n("796918"),
  p = n("22035"),
  T = n("513532"),
  g = n("741595"),
  A = n("884486"),
  N = n("974842"),
  v = n("359380"),
  R = n("308083"),
  O = n("689938"),
  L = n("653196");
let P = [R.ClanSetupSteps.FOUNDATIONAL_INTRO, R.ClanSetupSteps.GAMES, R.ClanSetupSteps.PLAYSTYLE, R.ClanSetupSteps.PERSONALITY_INTRO, R.ClanSetupSteps.UTILITY_TRAITS, R.ClanSetupSteps.INTERESTS, R.ClanSetupSteps.DESCRIPTION, R.ClanSetupSteps.PRIMETIME, R.ClanSetupSteps.IDENTITY_INTRO, R.ClanSetupSteps.CUSTOMIZE_TAG_BADGE, R.ClanSetupSteps.CUSTOMIZE_BANNER, R.ClanSetupSteps.APPLICATION_INTRO, R.ClanSetupSteps.MEMBER_APPLICATION],
  M = {
    [R.ClanSetupSteps.FOUNDATIONAL_INTRO]: [R.ClanSetupSteps.GAMES, R.ClanSetupSteps.PLAYSTYLE],
    [R.ClanSetupSteps.PERSONALITY_INTRO]: [R.ClanSetupSteps.UTILITY_TRAITS, R.ClanSetupSteps.INTERESTS, R.ClanSetupSteps.DESCRIPTION, R.ClanSetupSteps.PRIMETIME],
    [R.ClanSetupSteps.IDENTITY_INTRO]: [R.ClanSetupSteps.CUSTOMIZE_TAG_BADGE, R.ClanSetupSteps.CUSTOMIZE_BANNER],
    [R.ClanSetupSteps.APPLICATION_INTRO]: [R.ClanSetupSteps.MEMBER_APPLICATION]
  },
  x = e => {
    var t, n;
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
      verificationForm: I,
      furthestStep: p
    } = r, T = d === P.length - 1, g = null != I && I.formFields.some(e => !(0, f.isTermsFormField)(e)), A = s.useMemo(() => ({
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
    return (0, a.jsxs)("div", {
      className: L.footer,
      children: [(0, a.jsx)("div", {
        className: L.progressContainer,
        children: Object.entries(M).map(e => {
          let [t, n] = e;
          return (0, a.jsx)("div", {
            className: L.progressStep,
            children: n.map(e => {
              let t = !A[e].disableNextStep && p >= e,
                n = e <= p;
              return (0, a.jsx)(o.Clickable, {
                "aria-label": O.default.Messages.STEP_NUMBER.format({
                  number: e
                }),
                onClick: () => n ? l(e) : null,
                className: i()(L.progressSubStep, {
                  [L.clickable]: n,
                  [L.progressStepFill]: t
                })
              }, "step-".concat(e))
            })
          }, "step-".concat(t))
        })
      }), (0, a.jsxs)("div", {
        className: L.buttonsContainer,
        children: [(0, a.jsx)(o.Button, {
          look: o.Button.Looks.OUTLINED,
          size: o.Button.Sizes.MEDIUM,
          color: o.Button.Colors.PRIMARY,
          onClick: () => {
            l(d - 1)
          },
          disabled: 0 === d,
          children: O.default.Messages.PAGINATION_PREVIOUS
        }), (0, a.jsxs)("div", {
          className: L.footerAlphaMsg,
          children: [(0, a.jsx)(c.default, {
            className: L.footerAlphaTag
          }), (0, a.jsx)(o.Text, {
            variant: "text-sm/medium",
            children: "This is currently in Alpha, use test servers only!"
          })]
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
          disabled: null !== (n = null === (t = A[d]) || void 0 === t ? void 0 : t.disableNextStep) && void 0 !== n && n,
          children: O.default.Messages.PAGINATION_NEXT
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
    errors: f
  } = (0, r.useStateFromStoresObject)([h.default], () => {
    var e, n;
    let a = h.default.getStateForGuild(t);
    return {
      progress: null !== (e = a.progress) && void 0 !== e ? e : (0, h.newClanProgress)(),
      errors: null !== (n = a.errors) && void 0 !== n ? n : {}
    }
  }), {
    requiredGameId: M,
    gameApplicationIds: y,
    playstyle: D,
    interests: b,
    description: U,
    tag: j,
    primetime: G,
    currentStep: w,
    furthestStep: k
  } = c, F = (0, r.useStateFromStores)([d.default], () => d.default.useReducedMotion), [B, H] = s.useState(!0);
  s.useEffect(() => {
    u.default.getDetectableGames()
  }, []);
  let V = s.useCallback(e => E.updateClanSetup(t, {
      currentStep: e,
      furthestStep: null == k || e > k ? e : k
    }), [t, k]),
    Y = s.useCallback(e => E.updateClanSetup(t, e), [t]),
    W = s.useCallback(() => {
      H(!1), setTimeout(() => n(R.ClanSetupModalPages.SIGN), 199)
    }, [n]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(o.Button, {
      className: L.closeButton,
      look: o.Button.Looks.OUTLINED,
      size: o.Button.Sizes.MEDIUM,
      color: o.Button.Colors.PRIMARY,
      onClick: l,
      children: O.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
    }), (0, a.jsxs)("div", {
      className: i()(L.mainContent, L.fadeIn, {
        [L.fadeOut]: !B
      }),
      children: [(0, a.jsx)(o.Sequencer, {
        step: w,
        steps: P,
        sideMargin: 24,
        verticalMargin: 24,
        className: L.sequencer,
        innerClassName: L.sequencer,
        animatedNodeClassName: L.sequencer,
        children: (0, a.jsx)(o.ScrollerThin, {
          className: L.scroller,
          fade: !0,
          children: (() => {
            switch (w) {
              case R.ClanSetupSteps.GAMES:
                return (0, a.jsx)(S.default, {
                  handleUpdate: Y,
                  gameApplicationIds: y,
                  requiredGameId: M,
                  error: f.gameApplicationIds
                });
              case R.ClanSetupSteps.PLAYSTYLE:
                return (0, a.jsx)(g.default, {
                  handleUpdate: Y,
                  playstyle: D,
                  error: f.playstyle
                });
              case R.ClanSetupSteps.UTILITY_TRAITS:
                return (0, a.jsx)(v.default, {
                  requiredGameId: M,
                  handleUpdate: Y,
                  interests: b
                });
              case R.ClanSetupSteps.INTERESTS:
                return (0, a.jsx)(I.default, {
                  handleUpdate: Y,
                  interests: b,
                  error: f.interests
                });
              case R.ClanSetupSteps.DESCRIPTION:
                return (0, a.jsx)(m.default, {
                  handleUpdate: Y,
                  description: U,
                  wildcardDescriptors: c.wildcardDescriptors,
                  errors: f
                });
              case R.ClanSetupSteps.PRIMETIME:
                return (0, a.jsx)(A.default, {
                  handleUpdate: Y,
                  selectedTimes: G,
                  error: f.primetime
                });
              case R.ClanSetupSteps.CUSTOMIZE_TAG_BADGE:
                return (0, a.jsx)(N.default, {
                  handleUpdate: Y,
                  tag: j,
                  error: f.tag,
                  badge: c.badgeKind,
                  primaryColor: c.badgePrimaryColor,
                  secondaryColor: c.badgeSecondaryColor,
                  furthestStep: k
                });
              case R.ClanSetupSteps.CUSTOMIZE_BANNER:
                return (0, a.jsx)(C.default, {
                  handleUpdate: Y,
                  progress: c,
                  guildId: t
                });
              case R.ClanSetupSteps.MEMBER_APPLICATION:
                return (0, a.jsx)(T.default, {
                  guildId: t
                });
              case R.ClanSetupSteps.FOUNDATIONAL_INTRO:
                return (0, a.jsx)(p.default, {
                  stepNum: 1,
                  title: O.default.Messages.CLAN_SETUP_FOUNDATIONAL_INTRO_TITLE,
                  subtitle: O.default.Messages.CLAN_SETUP_FOUNDATIONAL_INTRO_SUBTITLE
                });
              case R.ClanSetupSteps.PERSONALITY_INTRO:
                return (0, a.jsx)(p.default, {
                  stepNum: 2,
                  title: O.default.Messages.CLAN_SETUP_PERSONALITY_INTRO_TITLE,
                  subtitle: O.default.Messages.CLAN_SETUP_PERSONALITY_INTRO_SUBTITLE
                });
              case R.ClanSetupSteps.IDENTITY_INTRO:
                return (0, a.jsx)(p.default, {
                  stepNum: 3,
                  title: O.default.Messages.CLAN_SETUP_IDENTITY_INTRO_TITLE,
                  subtitle: O.default.Messages.CLAN_SETUP_IDENTITY_INTRO_SUBTITLE
                });
              case R.ClanSetupSteps.APPLICATION_INTRO:
                return (0, a.jsx)(p.default, {
                  stepNum: 4,
                  title: O.default.Messages.CLAN_SETUP_APPLICATION_INTRO_TITLE,
                  subtitle: O.default.Messages.CLAN_SETUP_APPLICATION_INTRO_SUBTITLE
                });
              default:
                return null
            }
          })()
        })
      }), (0, a.jsx)(x, {
        setCurrentStep: V,
        progress: c,
        onLastStep: W
      })]
    }), (0, a.jsx)("div", {
      className: i()(L.overviewSidebar, {
        [L.fadeOut]: F && !B
      }),
      children: (0, a.jsx)(_.default, {
        guildId: t
      })
    })]
  })
}