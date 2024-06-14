"use strict";
s.r(t);
var n = s("735250"),
  a = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("442837"),
  o = s("461920"),
  u = s("481060"),
  d = s("393238"),
  c = s("110924"),
  E = s("607070"),
  _ = s("759231"),
  f = s("272008"),
  h = s("113434"),
  C = s("918701"),
  m = s("566078"),
  T = s("667105"),
  g = s("46140"),
  A = s("689938"),
  p = s("700898");

function N(e) {
  let {
    children: t,
    isComplete: s,
    hasNextStep: a
  } = e;
  return (0, n.jsxs)("li", {
    className: i()(p.stepWrapper, {
      [p.stepWrapperComplete]: s
    }, {
      [p.stepWrapperWithNextStep]: a
    }),
    children: [(0, n.jsxs)("div", {
      className: p.stepIndicator,
      children: [(0, n.jsx)("div", {
        className: p.stepIconWrapper,
        children: s && (0, n.jsx)(o.CheckmarkBoldIcon, {
          className: p.stepIcon,
          color: u.tokens.colors.WHITE
        })
      }), a && (0, n.jsx)("div", {
        className: p.stepConnector
      })]
    }), (0, n.jsx)(u.Text, {
      className: p.stepContent,
      color: "text-muted",
      variant: "text-xs/medium",
      children: t
    })]
  })
}

function S(e) {
  let {
    quest: t,
    useReducedMotion: s
  } = e, a = (0, T.useAnimatedRefreshIcon)({
    useReducedMotion: s,
    className: p.microphoneUnitRefreshIcon,
    size: 16
  }), l = async () => {
    a.startAnimation(), await (0, f.manuallyStartConsoleQuest)(t.id), a.stopAnimation()
  };
  return (0, n.jsx)(u.Clickable, {
    className: p.microphoneUnitRefreshIconWrapper,
    onClick: () => l(),
    children: a.render()
  })
}

function I(e) {
  return (0, n.jsxs)("div", {
    className: p.microphoneUnit,
    children: [(0, n.jsxs)("div", {
      className: p.microphoneUnitHeader,
      children: [(0, n.jsx)(_.default, {
        className: p.warningCircle,
        width: 16,
        height: 16
      }), (0, n.jsx)(u.Text, {
        variant: "text-xs/medium",
        children: A.default.Messages.QUESTS_MICROPHONE_UNIT_HEADER
      }), (0, n.jsx)(S, {
        ...e
      })]
    }), (0, n.jsx)(u.Text, {
      className: p.microphoneUnitBodyText,
      color: "text-muted",
      variant: "text-xxs/normal",
      children: (0, C.hasVariant)(e.quest, g.QuestVariants.IN_HOUSE_CONSOLE_QUEST) ? A.default.Messages.QUESTS_MICROPHONE_UNIT_BODY_ANY_GAME : A.default.Messages.QUESTS_MICROPHONE_UNIT_BODY.format({
        gameTitle: m.SharedQuestFields.build(e.quest.config).application.name
      })
    })]
  })
}
t.default = function(e) {
  let {
    onContentHeightChange: t,
    quest: s
  } = e, l = (0, r.useStateFromStores)([E.default], () => E.default.useReducedMotion), i = (0, h.useQuestTaskDetails)({
    quest: s,
    location: g.QuestsExperimentLocations.QUESTS_BAR
  }), {
    xboxAndPlaystationAccounts: o
  } = (0, h.useConnectedAccounts)(), {
    steps: _,
    hasConnectedAccounts: f,
    isProgressingQuestForLaunchedGame: T,
    isQuestComplete: S
  } = a.useMemo(() => {
    var e;
    let t = o.length > 0,
      n = t && (0, C.isQuestProgressingOnConsole)(s),
      a = (0, C.hasVariant)(s, g.QuestVariants.IN_HOUSE_CONSOLE_QUEST),
      l = m.SharedQuestFields.build(s.config).application.name,
      r = (null === (e = s.userStatus) || void 0 === e ? void 0 : e.completedAt) != null;
    return {
      steps: [{
        content: A.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CONNECT_ACCOUNT,
        isComplete: t || n || r
      }, {
        content: a ? A.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_ANY_GAME : A.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_GAME.format({
          gameTitle: l
        }),
        isComplete: n || r
      }, {
        content: A.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_PLAYTIME.format({
          numMinutes: i.targetMinutes
        }),
        isComplete: r
      }],
      hasConnectedAccounts: t,
      isProgressingQuestForLaunchedGame: n,
      isQuestComplete: r
    }
  }, [o, s, i]), {
    ref: x,
    height: R = 0
  } = (0, d.default)(), v = (0, c.default)(R), O = R - (null != v ? v : 0);
  return a.useLayoutEffect(() => {
    0 !== O && t(O)
  }, [O, t]), (0, n.jsxs)("div", {
    className: p.wrapper,
    children: [(0, n.jsx)("div", {
      className: p.headingWrapper,
      children: (0, n.jsx)(u.Heading, {
        className: p.heading,
        variant: "text-xs/medium",
        children: A.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_HEADING
      })
    }), (0, n.jsx)("div", {
      ref: x,
      children: (0, n.jsxs)("div", {
        className: p.stepsWrapper,
        children: [(0, n.jsx)("ul", {
          children: _.map((e, t) => (0, n.jsx)(N, {
            isComplete: e.isComplete,
            hasNextStep: t < _.length - 1,
            children: e.content
          }, t))
        }), f && !T && !S && (0, n.jsx)(I, {
          useReducedMotion: l,
          quest: s
        })]
      })
    })]
  })
}