"use strict";
s.r(t), s("47120");
var n = s("735250"),
  a = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("920906"),
  o = s("442837"),
  u = s("461920"),
  d = s("481060"),
  c = s("393238"),
  E = s("110924"),
  f = s("607070"),
  _ = s("869472"),
  h = s("759231"),
  C = s("272008"),
  m = s("113434"),
  T = s("918701"),
  g = s("566078"),
  A = s("46140"),
  p = s("689938"),
  N = s("700898");

function S(e) {
  let {
    children: t,
    isComplete: s,
    hasNextStep: a
  } = e;
  return (0, n.jsxs)("li", {
    className: i()(N.stepWrapper, {
      [N.stepWrapperComplete]: s
    }, {
      [N.stepWrapperWithNextStep]: a
    }),
    children: [(0, n.jsxs)("div", {
      className: N.stepIndicator,
      children: [(0, n.jsx)("div", {
        className: N.stepIconWrapper,
        children: s && (0, n.jsx)(u.CheckmarkBoldIcon, {
          className: N.stepIcon,
          color: d.tokens.colors.WHITE
        })
      }), a && (0, n.jsx)("div", {
        className: N.stepConnector
      })]
    }), (0, n.jsx)(d.Text, {
      className: N.stepContent,
      color: "text-muted",
      variant: "text-xs/medium",
      children: t
    })]
  })
}

function I(e) {
  let [t, s] = (0, r.useSpring)(() => ({})), l = a.useRef(!1), i = async () => {
    l.current = !0, await (0, C.manuallyStartConsoleQuest)(e.quest.id), l.current = !1
  }, o = (0, r.animated)(_.default);
  return (0, n.jsx)(d.Clickable, {
    className: N.microphoneUnitRefreshIconWrapper,
    onClick: () => {
      i(), s({
        from: {
          rotate: "0deg"
        },
        to: {
          rotate: "360deg"
        },
        config: {
          tension: 750,
          mass: 5,
          friction: 100
        },
        loop: () => l.current,
        immediate: e.useReducedMotion
      })
    },
    children: (0, n.jsx)(o, {
      className: N.microphoneUnitRefreshIcon,
      style: e.useReducedMotion ? void 0 : t,
      height: 16,
      width: 16
    })
  })
}

function x(e) {
  return (0, n.jsxs)("div", {
    className: N.microphoneUnit,
    children: [(0, n.jsxs)("div", {
      className: N.microphoneUnitHeader,
      children: [(0, n.jsx)(h.default, {
        className: N.warningCircle,
        width: 16,
        height: 16
      }), (0, n.jsx)(d.Text, {
        variant: "text-xs/medium",
        children: p.default.Messages.QUESTS_MICROPHONE_UNIT_HEADER
      }), (0, n.jsx)(I, {
        ...e
      })]
    }), (0, n.jsx)(d.Text, {
      className: N.microphoneUnitBodyText,
      color: "text-muted",
      variant: "text-xxs/normal",
      children: (0, T.hasVariant)(e.quest, A.QuestVariants.IN_HOUSE_CONSOLE_QUEST) ? p.default.Messages.QUESTS_MICROPHONE_UNIT_BODY_ANY_GAME : p.default.Messages.QUESTS_MICROPHONE_UNIT_BODY.format({
        gameTitle: g.SharedQuestFields.build(e.quest.config).application.name
      })
    })]
  })
}
t.default = function(e) {
  let {
    onContentHeightChange: t,
    quest: s
  } = e, l = (0, o.useStateFromStores)([f.default], () => f.default.useReducedMotion), i = (0, m.useQuestTaskDetails)({
    quest: s,
    location: A.QuestsExperimentLocations.QUESTS_BAR
  }), {
    xboxAndPlaystationAccounts: r
  } = (0, m.useConnectedAccounts)(), {
    steps: u,
    hasConnectedAccounts: _,
    isProgressingQuestForLaunchedGame: h,
    isQuestComplete: C
  } = a.useMemo(() => {
    var e;
    let t = r.length > 0,
      n = t && (0, T.isQuestProgressingOnConsole)(s),
      a = (0, T.hasVariant)(s, A.QuestVariants.IN_HOUSE_CONSOLE_QUEST),
      l = g.SharedQuestFields.build(s.config).application.name,
      o = (null === (e = s.userStatus) || void 0 === e ? void 0 : e.completedAt) != null;
    return {
      steps: [{
        content: p.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CONNECT_ACCOUNT,
        isComplete: t || n || o
      }, {
        content: a ? p.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_ANY_GAME : p.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_GAME.format({
          gameTitle: l
        }),
        isComplete: n || o
      }, {
        content: p.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_PLAYTIME.format({
          numMinutes: i.targetMinutes
        }),
        isComplete: o
      }],
      hasConnectedAccounts: t,
      isProgressingQuestForLaunchedGame: n,
      isQuestComplete: o
    }
  }, [r, s, i]), {
    ref: I,
    height: R = 0
  } = (0, c.default)(), v = (0, E.default)(R), M = R - (null != v ? v : 0);
  return a.useLayoutEffect(() => {
    0 !== M && t(M)
  }, [M, t]), (0, n.jsxs)("div", {
    className: N.wrapper,
    children: [(0, n.jsx)("div", {
      className: N.headingWrapper,
      children: (0, n.jsx)(d.Heading, {
        className: N.heading,
        variant: "text-xs/medium",
        children: p.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_HEADING
      })
    }), (0, n.jsx)("div", {
      ref: I,
      children: (0, n.jsxs)("div", {
        className: N.stepsWrapper,
        children: [(0, n.jsx)("ul", {
          children: u.map((e, t) => (0, n.jsx)(S, {
            isComplete: e.isComplete,
            hasNextStep: t < u.length - 1,
            children: e.content
          }, t))
        }), _ && !h && !C && (0, n.jsx)(x, {
          useReducedMotion: l,
          quest: s
        })]
      })
    })]
  })
}