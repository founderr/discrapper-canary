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
  _ = n("745628"),
  h = n("950279"),
  C = n("796918"),
  m = n("741595"),
  S = n("884486"),
  I = n("974842"),
  T = n("308083"),
  p = n("689938"),
  g = n("653196");
let A = [T.ClanSetupSteps.GAMES, T.ClanSetupSteps.PLAYSTYLE, T.ClanSetupSteps.INTERESTS, T.ClanSetupSteps.DESCRIPTION, T.ClanSetupSteps.PRIMETIME, T.ClanSetupSteps.CUSTOMIZE],
  N = e => {
    let {
      currentStep: t,
      setCurrentStep: n,
      selectedGames: l,
      playstyle: r,
      interests: u,
      description: d,
      tag: c,
      primetime: f,
      onLastStep: E
    } = e, _ = t === A.length, h = s.useMemo(() => ({
      [T.ClanSetupSteps.GAMES]: {
        disableNextStep: 0 === l.size
      },
      [T.ClanSetupSteps.PLAYSTYLE]: {
        disableNextStep: r === T.ClanPlaystyles.NONE
      },
      [T.ClanSetupSteps.INTERESTS]: {
        disableNextStep: 0 === u.size
      },
      [T.ClanSetupSteps.DESCRIPTION]: {
        disableNextStep: 0 === d.length
      },
      [T.ClanSetupSteps.PRIMETIME]: {
        disableNextStep: f.some(e => null == e.day || null == e.time)
      },
      [T.ClanSetupSteps.CUSTOMIZE]: {
        disableNextStep: 0 === c.length
      }
    }), [d.length, u.size, r, f, l.size, c.length]);
    return (0, a.jsxs)("div", {
      className: g.footer,
      children: [(0, a.jsx)("div", {
        className: g.progressContainer,
        children: A.map(e => (0, a.jsx)("div", {
          className: i()(g.progressStep, {
            [g.progressStepFilled]: e <= t
          })
        }, "step-".concat(e)))
      }), (0, a.jsxs)("div", {
        className: g.buttonsContainer,
        children: [(0, a.jsx)(o.Button, {
          look: o.Button.Looks.OUTLINED,
          size: o.Button.Sizes.MEDIUM,
          color: o.Button.Colors.PRIMARY,
          onClick: () => {
            n(t - 1)
          },
          disabled: 1 === t,
          children: p.default.Messages.PAGINATION_PREVIOUS
        }), (0, a.jsx)(o.Text, {
          variant: "text-sm/semibold",
          color: "text-muted",
          children: p.default.Messages.CLAN_SETUP_STEPS.format({
            currentStep: t,
            totalSteps: A.length
          })
        }), (0, a.jsx)(o.Button, {
          look: o.Button.Looks.FILLED,
          size: o.Button.Sizes.MEDIUM,
          onClick: () => {
            if (_) {
              E();
              return
            }
            n(t + 1)
          },
          disabled: h[t].disableNextStep,
          children: p.default.Messages.PAGINATION_NEXT
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
    selectedGames: v,
    playstyle: R,
    interests: O,
    description: L,
    tag: M,
    primetime: P,
    currentStep: y
  } = (0, r.useStateFromStoresObject)([f.default], () => {
    var e;
    return null !== (e = f.default.getState(t)) && void 0 !== e ? e : (0, f.newClanProgress)()
  }), D = (0, r.useStateFromStores)([d.default], () => d.default.useReducedMotion), [x, b] = s.useState(!0);
  s.useEffect(() => {
    u.default.getDetectableGames()
  }, []);
  let U = s.useCallback(e => c.updateClanSettings(t, {
      currentStep: e
    }), [t]),
    j = s.useCallback(e => c.updateClanSettings(t, e), [t]),
    G = s.useCallback(() => {
      b(!1), setTimeout(() => n(T.ClanSetupModalPages.SIGN), 199)
    }, [n]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(o.Button, {
      className: g.closeButton,
      look: o.Button.Looks.OUTLINED,
      size: o.Button.Sizes.SMALL,
      color: o.Button.Colors.PRIMARY,
      onClick: l,
      children: p.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
    }), (0, a.jsxs)("div", {
      className: i()(g.mainContent, g.fadeIn, {
        [g.fadeOut]: !x
      }),
      children: [(0, a.jsx)(o.Sequencer, {
        step: y,
        steps: A,
        sideMargin: 24,
        verticalMargin: 24,
        className: g.sequencer,
        innerClassName: g.sequencer,
        animatedNodeClassName: g.sequencer,
        children: (0, a.jsx)(o.ScrollerThin, {
          className: g.scroller,
          fade: !0,
          children: (() => {
            switch (y) {
              case T.ClanSetupSteps.GAMES:
                return (0, a.jsx)(h.default, {
                  handleUpdate: j,
                  selectedGames: v
                });
              case T.ClanSetupSteps.PLAYSTYLE:
                return (0, a.jsx)(m.default, {
                  handleUpdate: j,
                  playstyle: R
                });
              case T.ClanSetupSteps.INTERESTS:
                return (0, a.jsx)(C.default, {
                  handleUpdate: j,
                  interests: O
                });
              case T.ClanSetupSteps.DESCRIPTION:
                return (0, a.jsx)(_.default, {
                  handleUpdate: j,
                  description: L
                });
              case T.ClanSetupSteps.PRIMETIME:
                return (0, a.jsx)(S.default, {
                  handleUpdate: j,
                  selectedTimes: P
                });
              case T.ClanSetupSteps.CUSTOMIZE:
                return (0, a.jsx)(I.default, {
                  handleUpdate: j,
                  tag: M
                })
            }
          })()
        })
      }), (0, a.jsx)(N, {
        currentStep: y,
        setCurrentStep: U,
        selectedGames: v,
        playstyle: R,
        interests: O,
        description: L,
        primetime: P,
        tag: M,
        onLastStep: G
      })]
    }), (0, a.jsx)("div", {
      className: i()(g.overviewSidebar, {
        [g.fadeOut]: D && !x
      }),
      children: (0, a.jsx)(E.default, {
        guildId: t
      })
    })]
  })
}