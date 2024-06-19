n(47120);
var s = n(735250),
  a = n(470079),
  i = n(120356),
  l = n.n(i),
  r = n(442837),
  o = n(481060),
  c = n(607070),
  d = n(272008),
  u = n(113434),
  E = n(918701),
  _ = n(566078),
  h = n(667105),
  m = n(585857),
  T = n(46140),
  C = n(689938),
  g = n(517107);

function p(e) {
  let {
    children: t,
    isComplete: n,
    hasNextStep: a
  } = e;
  return (0, s.jsxs)("li", {
    className: l()(g.stepWrapper, {
      [g.stepWrapperComplete]: n
    }, {
      [g.stepWrapperWithNextStep]: a
    }),
    children: [(0, s.jsxs)("div", {
      className: g.stepIndicator,
      children: [(0, s.jsx)("div", {
        className: g.stepIconWrapper,
        children: n && (0, s.jsx)(o.CheckmarkBoldIcon, {
          className: g.stepIcon,
          color: o.tokens.colors.WHITE
        })
      }), a && (0, s.jsx)("div", {
        className: g.stepConnector
      })]
    }), (0, s.jsx)("div", {
      className: g.stepContent,
      children: t
    })]
  })
}

function N(e) {
  let {
    quest: t,
    useReducedMotion: n
  } = e, [i, l] = a.useState([]), r = (0, h.g2)({
    useReducedMotion: n,
    className: g.microphoneUnitRefreshIcon
  }), c = async () => {
    r.startAnimation(), l((await (0, d.CS)(t.id)).errorHints), r.stopAnimation()
  }, {
    header: u,
    renderBody: m
  } = a.useMemo(() => {
    let e = i.length > 0,
      n = () => (0, s.jsx)("div", {
        children: i.map((e, t) => (0, s.jsx)(o.Text, {
          className: g.microphoneUnitBodyText,
          color: "text-muted",
          variant: "text-xxs/normal",
          children: e
        }, t))
      });
    if ((0, E.zK)(t, T.S7.IN_HOUSE_CONSOLE_QUEST)) return {
      header: e ? C.Z.Messages.QUESTS_ANY_GAME_NOT_DETECTED : C.Z.Messages.QUESTS_MICROPHONE_UNIT_HEADER,
      renderBody: e ? n : () => (0, s.jsx)(o.Text, {
        className: g.microphoneUnitBodyText,
        color: "text-muted",
        variant: "text-xxs/normal",
        children: C.Z.Messages.QUESTS_MICROPHONE_UNIT_BODY_ANY_GAME
      })
    };
    let a = _.r.build(t.config).application.name;
    return {
      header: e ? C.Z.Messages.QUESTS_GAME_NOT_DETECTED.format({
        gameTitle: a
      }) : C.Z.Messages.QUESTS_LAUNCHED_GAME.format({
        gameTitle: a
      }),
      renderBody: e ? n : () => (0, s.jsx)(o.Text, {
        className: g.microphoneUnitBodyText,
        color: "text-muted",
        variant: "text-xxs/normal",
        children: C.Z.Messages.QUESTS_MICROPHONE_UNIT_BODY.format({
          gameTitle: a
        })
      })
    }
  }, [t, i]);
  return (0, s.jsxs)("div", {
    className: g.microphoneUnit,
    children: [(0, s.jsxs)("div", {
      className: g.microphoneUnitHeader,
      children: [(0, s.jsx)(o.CircleExclamationPointIcon, {
        size: "custom",
        color: "currentColor",
        className: 0 === i.length ? g.warningCircle : g.errorCircle,
        width: 16,
        height: 16
      }), (0, s.jsx)(o.Text, {
        variant: "text-xs/medium",
        children: u
      }), (0, s.jsx)(o.Clickable, {
        className: g.microphoneUnitRefreshIconWrapper,
        onClick: () => c(),
        children: r.render()
      })]
    }), m()]
  })
}

function I(e) {
  let {
    text: t
  } = e;
  return (0, s.jsx)(o.Text, {
    color: "text-muted",
    variant: "text-xs/medium",
    children: t
  })
}
t.Z = function(e) {
  let {
    quest: t
  } = e, n = (0, r.e7)([c.Z], () => c.Z.useReducedMotion), i = (0, u.Rf)({
    quest: t,
    location: T.dr.QUESTS_BAR
  }), l = (0, u.z6)(), {
    steps: d,
    hasConnectedAccounts: h,
    isProgressingQuestForLaunchedGame: A,
    isQuestComplete: f
  } = a.useMemo(() => {
    var e;
    let n = l.xboxAndPlaystationAccounts.length > 0,
      a = n && (0, E.Bz)(t),
      r = (0, E.zK)(t, T.S7.IN_HOUSE_CONSOLE_QUEST),
      o = _.r.build(t.config).application.name,
      c = (null === (e = t.userStatus) || void 0 === e ? void 0 : e.completedAt) != null;
    return {
      steps: [{
        renderContent: () => (0, s.jsx)(m.Q, {
          ...l
        }),
        isComplete: n || a || c
      }, {
        renderContent: () => (0, s.jsx)(I, {
          text: r ? C.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_ANY_GAME : C.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_GAME.format({
            gameTitle: o
          })
        }),
        isComplete: a || c
      }, {
        renderContent: () => (0, s.jsx)(I, {
          text: C.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_PLAYTIME.format({
            numMinutes: i.targetMinutes
          })
        }),
        isComplete: c
      }],
      hasConnectedAccounts: n,
      isProgressingQuestForLaunchedGame: a,
      isQuestComplete: c
    }
  }, [l, t, i]);
  return (0, s.jsxs)("div", {
    className: g.wrapper,
    children: [(0, s.jsx)("div", {
      className: g.headingWrapper,
      children: (0, s.jsx)(o.Heading, {
        className: g.heading,
        variant: "text-xs/medium",
        children: C.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_HEADING
      })
    }), (0, s.jsxs)("div", {
      className: g.stepsWrapper,
      children: [(0, s.jsx)("ul", {
        children: d.map((e, t) => (0, s.jsx)(p, {
          isComplete: e.isComplete,
          hasNextStep: t < d.length - 1,
          children: e.renderContent()
        }, t))
      }), h && !A && !f && (0, s.jsx)(N, {
        useReducedMotion: n,
        quest: t
      })]
    })]
  })
}