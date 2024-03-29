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
  c = n("77498"),
  f = n("931240"),
  E = n("650461"),
  h = n("620929"),
  _ = n("745628"),
  C = n("950279"),
  S = n("796918"),
  m = n("741595"),
  I = n("884486"),
  p = n("974842"),
  T = n("308083"),
  g = n("689938"),
  A = n("653196");
let N = [T.ClanSetupSteps.GAMES, T.ClanSetupSteps.PLAYSTYLE, T.ClanSetupSteps.INTERESTS, T.ClanSetupSteps.DESCRIPTION, T.ClanSetupSteps.PRIMETIME, T.ClanSetupSteps.CUSTOMIZE],
  R = e => {
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
    } = e, h = t === N.length, _ = s.useMemo(() => ({
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
      className: A.footer,
      children: [(0, a.jsx)("div", {
        className: A.progressContainer,
        children: N.map(e => (0, a.jsx)("div", {
          className: i()(A.progressStep, {
            [A.progressStepFilled]: e <= t
          })
        }, "step-".concat(e)))
      }), (0, a.jsxs)("div", {
        className: A.buttonsContainer,
        children: [(0, a.jsx)(o.Button, {
          look: o.Button.Looks.OUTLINED,
          size: o.Button.Sizes.MEDIUM,
          color: o.Button.Colors.PRIMARY,
          onClick: () => {
            n(t - 1)
          },
          disabled: 1 === t,
          children: g.default.Messages.PAGINATION_PREVIOUS
        }), (0, a.jsx)(o.Text, {
          variant: "text-sm/semibold",
          color: "text-muted",
          children: g.default.Messages.CLAN_SETUP_STEPS.format({
            currentStep: t,
            totalSteps: N.length
          })
        }), (0, a.jsx)(o.Button, {
          look: o.Button.Looks.FILLED,
          size: o.Button.Sizes.MEDIUM,
          color: o.Button.Colors.PRIMARY,
          onClick: () => {
            if (h) {
              E();
              return
            }
            n(t + 1)
          },
          disabled: _[t].disableNextStep,
          children: g.default.Messages.PAGINATION_NEXT
        })]
      })]
    })
  };
t.default = e => {
  let {
    guildId: t,
    setPage: n,
    currentStep: l,
    setCurrentStep: O,
    onClose: v
  } = e, {
    selectedGames: L,
    playstyle: P,
    interests: M,
    description: y,
    tag: D,
    primetime: x
  } = (0, r.useStateFromStoresObject)([E.default], () => {
    var e;
    return null !== (e = E.default.getState(t)) && void 0 !== e ? e : (0, E.newClanProgress)()
  }), b = (0, r.useStateFromStores)([d.default], () => d.default.useReducedMotion), [U, j] = s.useState(!0);
  s.useEffect(() => {
    u.default.getDetectableGames()
  }, []);
  let G = (0, r.useStateFromStoresObject)([c.default], () => {
      let e = {};
      return Array.from(L).forEach(t => {
        let n = c.default.getDetectableGame(t);
        null != n && (e[t] = n)
      }), e
    }),
    w = s.useCallback(e => f.updateClanSettings(t, e), [t]),
    k = s.useCallback(() => {
      j(!1), setTimeout(() => n(T.ClanSetupModalPages.SIGN), 500)
    }, [n]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(o.Button, {
      className: A.closeButton,
      look: o.Button.Looks.OUTLINED,
      size: o.Button.Sizes.SMALL,
      color: o.Button.Colors.PRIMARY,
      onClick: v,
      children: g.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
    }), (0, a.jsxs)("div", {
      className: i()(A.mainContent, A.fadeIn, {
        [A.fadeOut]: !U
      }),
      children: [(0, a.jsx)(o.Sequencer, {
        step: l,
        steps: N,
        sideMargin: 24,
        verticalMargin: 24,
        className: A.sequencer,
        innerClassName: A.sequencer,
        animatedNodeClassName: A.sequencer,
        children: (0, a.jsx)(o.ScrollerAuto, {
          className: A.scroller,
          children: (() => {
            switch (l) {
              case T.ClanSetupSteps.GAMES:
                return (0, a.jsx)(C.default, {
                  handleUpdate: w,
                  selectedGames: L,
                  gameDetails: G
                });
              case T.ClanSetupSteps.PLAYSTYLE:
                return (0, a.jsx)(m.default, {
                  handleUpdate: w,
                  playstyle: P
                });
              case T.ClanSetupSteps.INTERESTS:
                return (0, a.jsx)(S.default, {
                  handleUpdate: w,
                  interests: M
                });
              case T.ClanSetupSteps.DESCRIPTION:
                return (0, a.jsx)(_.default, {
                  handleUpdate: w,
                  description: y
                });
              case T.ClanSetupSteps.PRIMETIME:
                return (0, a.jsx)(I.default, {
                  handleUpdate: w,
                  selectedTimes: x
                });
              case T.ClanSetupSteps.CUSTOMIZE:
                return (0, a.jsx)(p.default, {
                  handleUpdate: w,
                  tag: D
                })
            }
          })()
        })
      }), (0, a.jsx)(R, {
        currentStep: l,
        setCurrentStep: O,
        selectedGames: L,
        playstyle: P,
        interests: M,
        description: y,
        primetime: x,
        tag: D,
        onLastStep: k
      })]
    }), (0, a.jsx)("div", {
      className: i()(A.overviewSidebar, {
        [A.fadeOut]: b && !U
      }),
      children: (0, a.jsx)(h.default, {
        guildId: t,
        gameDetails: G
      })
    })]
  })
}