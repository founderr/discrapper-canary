n(47120);
var s = n(735250),
  o = n(470079),
  r = n(120356),
  a = n.n(r),
  l = n(442837),
  i = n(481060),
  c = n(607070),
  u = n(272008),
  d = n(113434),
  p = n(918701),
  x = n(566078),
  m = n(667105),
  g = n(585857),
  h = n(693900),
  C = n(46140),
  f = n(689938),
  E = n(517107);

function S(e) {
  let {
    children: t,
    isComplete: n,
    hasNextStep: o
  } = e;
  return (0, s.jsxs)("li", {
    className: a()(E.stepWrapper, {
      [E.stepWrapperComplete]: n
    }, {
      [E.stepWrapperWithNextStep]: o
    }),
    children: [(0, s.jsxs)("div", {
      className: E.stepIndicator,
      children: [(0, s.jsx)("div", {
        className: E.stepIconWrapper,
        children: n && (0, s.jsx)(i.CheckmarkBoldIcon, {
          className: E.stepIcon,
          color: i.tokens.colors.WHITE
        })
      }), o && (0, s.jsx)("div", {
        className: E.stepConnector
      })]
    }), (0, s.jsx)("div", {
      className: E.stepContent,
      children: t
    })]
  })
}

function v(e) {
  let {
    quest: t,
    useReducedMotion: n
  } = e, [r, a] = o.useState([]), l = (0, m.g2)({
    useReducedMotion: n,
    className: E.microphoneUnitRefreshIcon
  }), c = async () => {
    l.startAnimation(), a((await (0, u.CS)(t.id)).errorHints), l.stopAnimation()
  }, {
    header: d,
    renderBody: g
  } = o.useMemo(() => {
    let e = r.length > 0,
      n = () => (0, s.jsx)("div", {
        children: r.map((e, t) => (0, s.jsx)(i.Text, {
          className: E.microphoneUnitBodyText,
          color: "text-muted",
          variant: "text-xxs/normal",
          children: e
        }, t))
      });
    if ((0, p.zK)(t, C.S7.IN_HOUSE_CONSOLE_QUEST)) return {
      header: e ? f.Z.Messages.QUESTS_ANY_GAME_NOT_DETECTED : f.Z.Messages.QUESTS_MICROPHONE_UNIT_HEADER,
      renderBody: e ? n : () => (0, s.jsx)(i.Text, {
        className: E.microphoneUnitBodyText,
        color: "text-muted",
        variant: "text-xxs/normal",
        children: f.Z.Messages.QUESTS_MICROPHONE_UNIT_BODY_ANY_GAME
      })
    };
    let o = x.r.build(t.config).application.name;
    return {
      header: e ? f.Z.Messages.QUESTS_GAME_NOT_DETECTED.format({
        gameTitle: o
      }) : f.Z.Messages.QUESTS_LAUNCHED_GAME.format({
        gameTitle: o
      }),
      renderBody: e ? n : () => (0, s.jsx)(i.Text, {
        className: E.microphoneUnitBodyText,
        color: "text-muted",
        variant: "text-xxs/normal",
        children: f.Z.Messages.QUESTS_MICROPHONE_UNIT_BODY.format({
          gameTitle: o
        })
      })
    }
  }, [t, r]);
  return (0, s.jsxs)("div", {
    className: E.microphoneUnit,
    children: [(0, s.jsxs)("div", {
      className: E.microphoneUnitHeader,
      children: [(0, s.jsx)(i.CircleExclamationPointIcon, {
        size: "custom",
        color: "currentColor",
        className: 0 === r.length ? E.warningCircle : E.errorCircle,
        width: 16,
        height: 16
      }), (0, s.jsx)(i.Text, {
        variant: "text-xs/medium",
        children: d
      }), (0, s.jsx)(i.Clickable, {
        className: E.microphoneUnitRefreshIconWrapper,
        onClick: () => c(),
        children: l.render()
      })]
    }), g()]
  })
}

function T(e) {
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
  } = e, n = (0, l.e7)([c.Z], () => c.Z.useReducedMotion), r = (0, d.Rf)({
    quest: t,
    location: C.dr.QUESTS_BAR
  }), a = (0, d.z6)(), {
    steps: u,
    hasConnectedAccounts: m,
    isProgressingQuestForLaunchedGame: j,
    isQuestComplete: N
  } = o.useMemo(() => {
    var e;
    let n = a.xboxAndPlaystationAccounts.length > 0,
      o = n && (0, p.Bz)(t),
      l = (0, p.zK)(t, C.S7.IN_HOUSE_CONSOLE_QUEST),
      i = x.r.build(t.config).application.name,
      c = (null === (e = t.userStatus) || void 0 === e ? void 0 : e.completedAt) != null;
    return {
      steps: [{
        renderContent: () => (0, s.jsx)(g.Q, {
          ...a
        }),
        isComplete: n || o || c
      }, {
        renderContent: () => (0, s.jsx)(T, {
          text: l ? f.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_ANY_GAME : f.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_GAME.format({
            gameTitle: i
          })
        }),
        isComplete: o || c
      }, {
        renderContent: () => (0, s.jsx)(T, {
          text: f.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_PLAYTIME.format({
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
    className: E.wrapper,
    children: [(0, s.jsx)("div", {
      className: E.headingWrapper,
      children: (0, s.jsx)(i.Heading, {
        className: E.heading,
        variant: "text-xs/medium",
        children: f.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_HEADING
      })
    }), (0, s.jsx)(h.n, {
      children: (0, s.jsxs)("div", {
        className: E.stepsWrapper,
        children: [(0, s.jsx)("ul", {
          children: u.map((e, t) => (0, s.jsx)(S, {
            isComplete: e.isComplete,
            hasNextStep: t < u.length - 1,
            children: e.renderContent()
          }, t))
        }), m && !j && !N && (0, s.jsx)(v, {
          useReducedMotion: n,
          quest: t
        })]
      })
    })]
  })
}