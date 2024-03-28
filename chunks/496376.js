"use strict";
n.r(t), n("47120");
var a, s, l = n("735250"),
  i = n("470079"),
  r = n("803997"),
  o = n.n(r),
  u = n("718017"),
  d = n("442837"),
  c = n("481060"),
  f = n("224706"),
  E = n("77498"),
  h = n("430824"),
  _ = n("823379"),
  C = n("931240"),
  m = n("650461"),
  S = n("924801"),
  I = n("620929"),
  p = n("745628"),
  T = n("950279"),
  g = n("796918"),
  A = n("741595"),
  N = n("884486"),
  R = n("974842"),
  O = n("308083"),
  v = n("689938"),
  L = n("653196");
(s = a || (a = {}))[s.GAMES = 1] = "GAMES", s[s.PLAYSTYLE = 2] = "PLAYSTYLE", s[s.INTERESTS = 3] = "INTERESTS", s[s.DESCRIPTION = 4] = "DESCRIPTION", s[s.PRIMETIME = 5] = "PRIMETIME", s[s.CUSTOMIZE = 6] = "CUSTOMIZE";
let P = [1, 2, 3, 4, 5, 6],
  M = e => {
    let {
      guildId: t,
      selectedGames: n,
      gameDetails: a,
      playstyle: s,
      interests: r,
      primetime: o
    } = e, u = (0, d.useStateFromStores)([h.default], () => {
      var e, n;
      return null !== (n = null === (e = h.default.getGuild(t)) || void 0 === e ? void 0 : e.name) && void 0 !== n ? n : ""
    }), c = n.size > 0 ? Array.from(n).map(e => {
      var t;
      return null === (t = a[e]) || void 0 === t ? void 0 : t.name
    }).join(", ") : null, f = i.useMemo(() => {
      switch (s) {
        case O.ClanPlaystyles.SOCIAL:
          return v.default.Messages.CLAN_SETUP_PLAYSTYLE_SOCIAL_TITLE;
        case O.ClanPlaystyles.CASUAL:
          return v.default.Messages.CLAN_SETUP_PLAYSTYLE_CASUAL_TITLE;
        case O.ClanPlaystyles.COMPETITIVE:
          return v.default.Messages.CLAN_SETUP_PLAYSTYLE_COMPETITIVE_TITLE;
        case O.ClanPlaystyles.VERY_HARDCORE:
          return v.default.Messages.CLAN_SETUP_PLAYSTYLE_VERY_HARDCORE_TITLE;
        default:
          return null
      }
    }, [s]), E = r.size > 0 ? Array.from(r).join(", ") : null, C = o.length > 0 ? o.map(e => (0, S.primetimeToString)(e)).filter(_.isNotNullish) : [], m = C.length > 0 ? C.join(", ") : null;
    return (0, l.jsx)("div", {
      className: L.overviewSidebar,
      children: (0, l.jsx)(I.default, {
        guildName: u,
        gamesString: c,
        playstyleString: f,
        interestsString: E,
        timeString: m
      })
    })
  },
  y = e => {
    let {
      currentStep: t,
      setCurrentStep: n,
      selectedGames: a,
      playstyle: s,
      interests: r,
      description: u,
      tag: d,
      primetime: f,
      handleSubmit: E
    } = e, h = t === P.length, _ = i.useMemo(() => ({
      1: {
        disableNextStep: 0 === a.size
      },
      2: {
        disableNextStep: s === O.ClanPlaystyles.NONE
      },
      3: {
        disableNextStep: 0 === r.size
      },
      4: {
        disableNextStep: 0 === u.length
      },
      5: {
        disableNextStep: f.some(e => null == e.day || null == e.time)
      },
      6: {
        disableNextStep: 0 === d.length
      }
    }), [u.length, r.size, s, f, a.size, d.length]);
    return (0, l.jsxs)("div", {
      className: L.footer,
      children: [(0, l.jsx)("div", {
        className: L.progressContainer,
        children: P.map(e => (0, l.jsx)("div", {
          className: o()(L.progressStep, {
            [L.progressStepFilled]: e <= t
          })
        }, "step-".concat(e)))
      }), (0, l.jsxs)("div", {
        className: L.buttonsContainer,
        children: [(0, l.jsx)(c.Button, {
          look: c.Button.Looks.OUTLINED,
          size: c.Button.Sizes.MEDIUM,
          color: c.Button.Colors.PRIMARY,
          onClick: () => {
            n(t - 1)
          },
          disabled: 1 === t,
          children: v.default.Messages.PAGINATION_PREVIOUS
        }), (0, l.jsx)(c.Text, {
          variant: "text-sm/semibold",
          color: "text-muted",
          children: v.default.Messages.CLAN_SETUP_STEPS.format({
            currentStep: t,
            totalSteps: P.length
          })
        }), (0, l.jsx)(c.Button, {
          look: c.Button.Looks.FILLED,
          size: c.Button.Sizes.MEDIUM,
          color: c.Button.Colors.PRIMARY,
          onClick: () => {
            if (h) {
              E();
              return
            }
            n(t + 1)
          },
          disabled: _[t].disableNextStep,
          children: h ? v.default.Messages.FINISH : v.default.Messages.PAGINATION_NEXT
        })]
      })]
    })
  };
t.default = e => {
  let {
    guildId: t,
    onClose: n
  } = e, {
    selectedGames: a,
    playstyle: s,
    interests: r,
    description: o,
    tag: h,
    primetime: _
  } = (0, d.useStateFromStoresObject)([m.default], () => {
    var e;
    return null !== (e = m.default.getState(t)) && void 0 !== e ? e : (0, m.newClanProgress)()
  }), [S, I] = i.useState(1);
  i.useEffect(() => {
    f.default.getDetectableGames()
  }, []);
  let O = (0, d.useStateFromStoresObject)([E.default], () => {
      let e = {};
      return Array.from(a).forEach(t => {
        let n = E.default.getDetectableGame(t);
        null != n && (e[t] = n)
      }), e
    }),
    D = i.useCallback(e => C.updateClanSettings(t, e), [t]),
    x = i.useCallback(() => {
      C.convertGuildToClan(t, {
        selectedGames: a,
        playstyle: s,
        interests: r,
        description: o,
        tag: h,
        primetime: _
      }), n()
    }, [o, t, r, n, s, _, a, h]),
    b = (0, u.useSpring)({
      config: {
        duration: 300
      },
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      }
    });
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(c.Button, {
      className: L.closeButton,
      look: c.Button.Looks.OUTLINED,
      size: c.Button.Sizes.SMALL,
      color: c.Button.Colors.PRIMARY,
      onClick: n,
      children: v.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
    }), (0, l.jsxs)(u.animated.div, {
      className: L.mainContent,
      style: b,
      children: [(0, l.jsx)(c.Sequencer, {
        step: S,
        steps: P,
        sideMargin: 24,
        verticalMargin: 24,
        className: L.sequencer,
        innerClassName: L.sequencer,
        animatedNodeClassName: L.sequencer,
        children: (0, l.jsx)(c.ScrollerAuto, {
          className: L.scroller,
          children: (() => {
            switch (S) {
              case 1:
                return (0, l.jsx)(T.default, {
                  handleUpdate: D,
                  selectedGames: a,
                  gameDetails: O
                });
              case 2:
                return (0, l.jsx)(A.default, {
                  handleUpdate: D,
                  playstyle: s
                });
              case 3:
                return (0, l.jsx)(g.default, {
                  handleUpdate: D,
                  interests: r
                });
              case 4:
                return (0, l.jsx)(p.default, {
                  handleUpdate: D,
                  description: o
                });
              case 5:
                return (0, l.jsx)(N.default, {
                  handleUpdate: D,
                  selectedTimes: _
                });
              case 6:
                return (0, l.jsx)(R.default, {
                  handleUpdate: D,
                  tag: h
                })
            }
          })()
        })
      }), (0, l.jsx)(y, {
        currentStep: S,
        setCurrentStep: I,
        selectedGames: a,
        playstyle: s,
        interests: r,
        description: o,
        primetime: _,
        tag: h,
        handleSubmit: x
      })]
    }), (0, l.jsx)(M, {
      guildId: t,
      selectedGames: a,
      gameDetails: O,
      playstyle: s,
      interests: r,
      primetime: _
    })]
  })
}