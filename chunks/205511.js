"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("920906"),
  o = s("442837"),
  u = s("461920"),
  d = s("481060"),
  c = s("393238"),
  E = s("110924"),
  _ = s("607070"),
  f = s("869472"),
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
    hasNextStep: n
  } = e;
  return (0, a.jsxs)("li", {
    className: i()(N.stepWrapper, {
      [N.stepWrapperComplete]: s
    }, {
      [N.stepWrapperWithNextStep]: n
    }),
    children: [(0, a.jsxs)("div", {
      className: N.stepIndicator,
      children: [(0, a.jsx)("div", {
        className: N.stepIconWrapper,
        children: s && (0, a.jsx)(u.CheckmarkBoldIcon, {
          className: N.stepIcon,
          color: d.tokens.colors.WHITE
        })
      }), n && (0, a.jsx)("div", {
        className: N.stepConnector
      })]
    }), (0, a.jsx)(d.Text, {
      className: N.stepContent,
      color: "text-muted",
      variant: "text-xs/medium",
      children: t
    })]
  })
}

function I(e) {
  let [t, s] = (0, r.useSpring)(() => ({})), l = n.useRef(!1), i = async () => {
    l.current = !0, await (0, C.manuallyStartConsoleQuest)(e.quest.id), l.current = !1
  }, o = (0, r.animated)(f.default);
  return (0, a.jsx)(d.Clickable, {
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
    children: (0, a.jsx)(o, {
      className: N.microphoneUnitRefreshIcon,
      style: e.useReducedMotion ? void 0 : t,
      height: 16,
      width: 16
    })
  })
}

function x(e) {
  return (0, a.jsxs)("div", {
    className: N.microphoneUnit,
    children: [(0, a.jsxs)("div", {
      className: N.microphoneUnitHeader,
      children: [(0, a.jsx)(h.default, {
        className: N.warningCircle,
        width: 16,
        height: 16
      }), (0, a.jsx)(d.Text, {
        variant: "text-xs/medium",
        children: p.default.Messages.QUESTS_MICROPHONE_UNIT_HEADER
      }), (0, a.jsx)(I, {
        ...e
      })]
    }), (0, a.jsx)(d.Text, {
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
  } = e, l = (0, o.useStateFromStores)([_.default], () => _.default.useReducedMotion), i = (0, m.useQuestTaskDetails)({
    quest: s,
    location: A.QuestsExperimentLocations.QUESTS_BAR
  }), {
    xboxAndPlaystationAccounts: r
  } = (0, m.useConnectedAccounts)(), {
    steps: u,
    hasConnectedAccounts: f,
    isProgressingQuestForLaunchedGame: h,
    isQuestComplete: C
  } = n.useMemo(() => {
    var e;
    let t = r.length > 0,
      a = t && (0, T.isQuestProgressingOnConsole)(s),
      n = (0, T.hasVariant)(s, A.QuestVariants.IN_HOUSE_CONSOLE_QUEST),
      l = g.SharedQuestFields.build(s.config).application.name,
      o = (null === (e = s.userStatus) || void 0 === e ? void 0 : e.completedAt) != null;
    return {
      steps: [{
        content: p.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CONNECT_ACCOUNT,
        isComplete: t || a || o
      }, {
        content: n ? p.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_ANY_GAME : p.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_GAME.format({
          gameTitle: l
        }),
        isComplete: a || o
      }, {
        content: p.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_PLAYTIME.format({
          numMinutes: i.targetMinutes
        }),
        isComplete: o
      }],
      hasConnectedAccounts: t,
      isProgressingQuestForLaunchedGame: a,
      isQuestComplete: o
    }
  }, [r, s, i]), {
    ref: I,
    height: v = 0
  } = (0, c.default)(), R = (0, E.default)(v), O = v - (null != R ? R : 0);
  return n.useLayoutEffect(() => {
    0 !== O && t(O)
  }, [O, t]), (0, a.jsxs)("div", {
    className: N.wrapper,
    children: [(0, a.jsx)("div", {
      className: N.headingWrapper,
      children: (0, a.jsx)(d.Heading, {
        className: N.heading,
        variant: "text-xs/medium",
        children: p.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_HEADING
      })
    }), (0, a.jsx)("div", {
      ref: I,
      children: (0, a.jsxs)("div", {
        className: N.stepsWrapper,
        children: [(0, a.jsx)("ul", {
          children: u.map((e, t) => (0, a.jsx)(S, {
            isComplete: e.isComplete,
            hasNextStep: t < u.length - 1,
            children: e.content
          }, t))
        }), f && !h && !C && (0, a.jsx)(x, {
          useReducedMotion: l,
          quest: s
        })]
      })
    })]
  })
}