"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("920906"),
  o = s("442837"),
  u = s("461920"),
  d = s("207532"),
  c = s("481060"),
  E = s("393238"),
  _ = s("110924"),
  f = s("607070"),
  h = s("869472"),
  C = s("759231"),
  m = s("272008"),
  T = s("113434"),
  g = s("918701"),
  A = s("566078"),
  p = s("46140"),
  N = s("689938"),
  S = s("700898");

function I(e) {
  let {
    children: t,
    isComplete: s,
    hasNextStep: n
  } = e;
  return (0, a.jsxs)("li", {
    className: i()(S.stepWrapper, {
      [S.stepWrapperComplete]: s
    }, {
      [S.stepWrapperWithNextStep]: n
    }),
    children: [(0, a.jsxs)("div", {
      className: S.stepIndicator,
      children: [(0, a.jsx)("div", {
        className: S.stepIconWrapper,
        children: s && (0, a.jsx)(u.CheckmarkBoldIcon, {
          className: S.stepIcon,
          color: c.tokens.colors.WHITE
        })
      }), n && (0, a.jsx)("div", {
        className: S.stepConnector
      })]
    }), (0, a.jsx)(c.Text, {
      className: S.stepContent,
      color: "text-muted",
      variant: "text-xs/medium",
      children: t
    })]
  })
}

function x(e) {
  let [t, s] = (0, r.useSpring)(() => ({})), l = n.useRef(!1), i = async () => {
    l.current = !0, await (0, m.manuallyStartConsoleQuest)(e.quest.id), l.current = !1
  }, o = (0, r.animated)(h.default);
  return (0, a.jsx)(c.Clickable, {
    className: S.microphoneUnitRefreshIconWrapper,
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
    children: (0, a.jsx)(o, {
      className: S.microphoneUnitRefreshIcon,
      style: e.useReducedMotion ? void 0 : t,
      height: 16,
      width: 16
    })
  })
}

function v(e) {
  return (0, a.jsxs)("div", {
    className: S.microphoneUnit,
    children: [(0, a.jsxs)("div", {
      className: S.microphoneUnitHeader,
      children: [(0, a.jsx)(C.default, {
        className: S.warningCircle,
        width: 16,
        height: 16
      }), (0, a.jsx)(c.Text, {
        variant: "text-xs/medium",
        children: N.default.Messages.QUESTS_MICROPHONE_UNIT_HEADER
      }), (0, a.jsx)(x, {
        ...e
      })]
    }), (0, a.jsx)(c.Text, {
      className: S.microphoneUnitBodyText,
      color: "text-muted",
      variant: "text-xxs/normal",
      children: (0, g.hasVariant)(e.quest, p.QuestVariants.IN_HOUSE_CONSOLE_QUEST) ? N.default.Messages.QUESTS_MICROPHONE_UNIT_BODY_ANY_GAME : N.default.Messages.QUESTS_MICROPHONE_UNIT_BODY.format({
        gameTitle: A.SharedQuestFields.build(e.quest.config).application.name
      })
    })]
  })
}
t.default = function(e) {
  let {
    onContentHeightChange: t,
    quest: s
  } = e, [l, i] = n.useState(!1), u = (0, o.useStateFromStores)([f.default], () => f.default.useReducedMotion), h = (0, T.useQuestTaskDetails)({
    quest: s,
    location: p.QuestsExperimentLocations.QUESTS_BAR
  }), {
    xboxAndPlaystationAccounts: C
  } = (0, T.useConnectedAccounts)(), {
    steps: m,
    hasConnectedAccounts: x,
    isProgressingQuestForLaunchedGame: R,
    isQuestComplete: O
  } = n.useMemo(() => {
    var e;
    let t = C.length > 0,
      a = t && (0, g.isQuestProgressingOnConsole)(s),
      n = (0, g.hasVariant)(s, p.QuestVariants.IN_HOUSE_CONSOLE_QUEST),
      l = A.SharedQuestFields.build(s.config).application.name,
      i = (null === (e = s.userStatus) || void 0 === e ? void 0 : e.completedAt) != null;
    return {
      steps: [{
        content: N.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CONNECT_ACCOUNT,
        isComplete: t || a || i
      }, {
        content: n ? N.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_ANY_GAME : N.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_GAME.format({
          gameTitle: l
        }),
        isComplete: a || i
      }, {
        content: N.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_PLAYTIME.format({
          numMinutes: h.targetMinutes
        }),
        isComplete: i
      }],
      hasConnectedAccounts: t,
      isProgressingQuestForLaunchedGame: a,
      isQuestComplete: i
    }
  }, [C, s, h]), {
    ref: L,
    height: M = 0
  } = (0, E.default)(), y = (0, _.default)(M), {
    expansionSpring: D
  } = (0, r.useSpring)({
    to: {
      expansionSpring: l ? 1 : 0
    },
    config: {
      tension: 300,
      friction: 12,
      clamp: !0
    },
    immediate: !0
  }), b = M - (null != y ? y : 0);
  return n.useLayoutEffect(() => {
    l && 0 !== b && t(b)
  }, [l, b, t]), (0, a.jsxs)("div", {
    className: S.wrapper,
    children: [(0, a.jsxs)(c.Clickable, {
      className: S.headingWrapper,
      onClick: () => {
        t(l ? -1 * M : M), i(!l)
      },
      children: [(0, a.jsx)(c.Heading, {
        className: S.heading,
        variant: "text-xs/medium",
        children: N.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_HEADING
      }), (0, a.jsx)(d.ChevronLargeDownIcon, {
        className: S.headingChevron,
        style: {
          transform: "rotate(".concat(l ? 180 : 0, "deg)")
        }
      })]
    }), (0, a.jsx)(r.animated.div, {
      className: S.stepsWrapperAnimated,
      style: {
        height: D.to({
          range: [0, 1],
          output: [0, M]
        })
      },
      children: (0, a.jsx)("div", {
        ref: L,
        children: (0, a.jsxs)("div", {
          className: S.stepsWrapperStatic,
          children: [(0, a.jsx)("ul", {
            children: m.map((e, t) => (0, a.jsx)(I, {
              isComplete: e.isComplete,
              hasNextStep: t < m.length - 1,
              children: e.content
            }, t))
          }), x && !R && !O && (0, a.jsx)(v, {
            useReducedMotion: u,
            quest: s
          })]
        })
      })
    })]
  })
}