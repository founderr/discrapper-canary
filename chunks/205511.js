n(47120);
var s = n(735250),
  o = n(470079),
  r = n(120356),
  a = n.n(r),
  l = n(442837),
  i = n(481060),
  c = n(607070),
  u = n(617136),
  d = n(272008),
  p = n(113434),
  x = n(497505),
  m = n(918701),
  g = n(566078),
  h = n(667105),
  C = n(585857),
  f = n(693900),
  E = n(46140),
  S = n(689938),
  v = n(517107);

function T(e) {
  let {
    children: t,
    isComplete: n,
    hasNextStep: o
  } = e;
  return (0, s.jsxs)("li", {
    className: a()(v.stepWrapper, {
      [v.stepWrapperComplete]: n
    }, {
      [v.stepWrapperWithNextStep]: o
    }),
    children: [(0, s.jsxs)("div", {
      className: v.stepIndicator,
      children: [(0, s.jsx)("div", {
        className: v.stepIconWrapper,
        children: n && (0, s.jsx)(i.CheckmarkBoldIcon, {
          className: v.stepIcon,
          color: i.tokens.colors.WHITE
        })
      }), o && (0, s.jsx)("div", {
        className: v.stepConnector
      })]
    }), (0, s.jsx)("div", {
      className: v.stepContent,
      children: t
    })]
  })
}

function j(e) {
  let {
    quest: t,
    useReducedMotion: n
  } = e, [r, a] = o.useState([]), l = (0, h.g2)({
    useReducedMotion: n,
    className: v.microphoneUnitRefreshIcon
  }), c = async () => {
    l.startAnimation(), a((await (0, d.CS)(t.id)).errorHints), l.stopAnimation()
  }, {
    header: p,
    renderBody: C
  } = o.useMemo(() => {
    let e = r.length > 0,
      n = () => (0, s.jsx)("div", {
        children: r.map((e, t) => (0, s.jsx)(i.Text, {
          className: v.microphoneUnitBodyText,
          color: "text-muted",
          variant: "text-xxs/normal",
          children: e
        }, t))
      });
    if ((0, m.zK)(t, E.S7.IN_HOUSE_CONSOLE_QUEST)) return {
      header: e ? S.Z.Messages.QUESTS_ANY_GAME_NOT_DETECTED : S.Z.Messages.QUESTS_MICROPHONE_UNIT_HEADER,
      renderBody: e ? n : () => (0, s.jsx)(i.Text, {
        className: v.microphoneUnitBodyText,
        color: "text-muted",
        variant: "text-xxs/normal",
        children: S.Z.Messages.QUESTS_MICROPHONE_UNIT_BODY_ANY_GAME
      })
    };
    let o = g.r.build(t.config).application.name;
    return {
      header: e ? S.Z.Messages.QUESTS_GAME_NOT_DETECTED.format({
        gameTitle: o
      }) : S.Z.Messages.QUESTS_LAUNCHED_GAME.format({
        gameTitle: o
      }),
      renderBody: e ? n : () => (0, s.jsx)(i.Text, {
        className: v.microphoneUnitBodyText,
        color: "text-muted",
        variant: "text-xxs/normal",
        children: S.Z.Messages.QUESTS_MICROPHONE_UNIT_BODY.format({
          gameTitle: o
        })
      })
    }
  }, [t, r]);
  return (0, s.jsxs)("div", {
    className: v.microphoneUnit,
    children: [(0, s.jsxs)("div", {
      className: v.microphoneUnitHeader,
      children: [(0, s.jsx)(i.CircleExclamationPointIcon, {
        size: "custom",
        color: "currentColor",
        className: 0 === r.length ? v.warningCircle : v.errorCircle,
        width: 16,
        height: 16
      }), (0, s.jsx)(i.Text, {
        variant: "text-xs/medium",
        children: p
      }), (0, s.jsx)(i.Clickable, {
        className: v.microphoneUnitRefreshIconWrapper,
        onClick: () => {
          (0, u._3)({
            questId: t.id,
            questContent: x.jn.QUEST_BAR_V2,
            questContentCTA: u.jZ.DEFIBRILLATOR
          }), c()
        },
        children: l.render()
      })]
    }), C()]
  })
}

function N(e) {
  let {
    text: t
  } = e;
  return (0, s.jsx)(i.Text, {
    color: "text-muted",
    variant: "text-xs/medium",
    children: t
  })
}
t.Z = function(e) {
  let {
    quest: t
  } = e, n = (0, l.e7)([c.Z], () => c.Z.useReducedMotion), r = (0, p.Rf)({
    quest: t,
    location: E.dr.QUESTS_BAR
  }), a = (0, p.z6)(), {
    steps: u,
    hasConnectedAccounts: d,
    isProgressingQuestForLaunchedGame: x,
    isQuestComplete: h
  } = o.useMemo(() => {
    var e;
    let n = a.xboxAndPlaystationAccounts.length > 0,
      o = n && (0, m.Bz)(t),
      l = (0, m.zK)(t, E.S7.IN_HOUSE_CONSOLE_QUEST),
      i = g.r.build(t.config).application.name,
      c = (null === (e = t.userStatus) || void 0 === e ? void 0 : e.completedAt) != null;
    return {
      steps: [{
        renderContent: () => (0, s.jsx)(C.Q, {
          ...a
        }),
        isComplete: n || o || c
      }, {
        renderContent: () => (0, s.jsx)(N, {
          text: l ? S.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_ANY_GAME : S.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_GAME.format({
            gameTitle: i
          })
        }),
        isComplete: o || c
      }, {
        renderContent: () => (0, s.jsx)(N, {
          text: S.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_PLAYTIME.format({
            numMinutes: r.targetMinutes
          })
        }),
        isComplete: c
      }],
      hasConnectedAccounts: n,
      isProgressingQuestForLaunchedGame: o,
      isQuestComplete: c
    }
  }, [a, t, r]);
  return (0, s.jsxs)("div", {
    className: v.wrapper,
    children: [(0, s.jsx)("div", {
      className: v.headingWrapper,
      children: (0, s.jsx)(i.Heading, {
        className: v.heading,
        variant: "text-xs/medium",
        children: S.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_HEADING
      })
    }), (0, s.jsx)(f.n, {
      children: (0, s.jsxs)("div", {
        className: v.stepsWrapper,
        children: [(0, s.jsx)("ul", {
          children: u.map((e, t) => (0, s.jsx)(T, {
            isComplete: e.isComplete,
            hasNextStep: t < u.length - 1,
            children: e.renderContent()
          }, t))
        }), d && !x && !h && (0, s.jsx)(j, {
          useReducedMotion: n,
          quest: t
        })]
      })
    })]
  })
}