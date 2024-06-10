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
  E = s("230711"),
  _ = s("393238"),
  f = s("110924"),
  h = s("607070"),
  m = s("869472"),
  C = s("759231"),
  T = s("272008"),
  g = s("113434"),
  A = s("918701"),
  p = s("566078"),
  N = s("46140"),
  S = s("981631"),
  I = s("689938"),
  x = s("700898");

function R(e) {
  let {
    children: t,
    isComplete: s,
    hasNextStep: n
  } = e;
  return (0, a.jsxs)("li", {
    className: i()(x.stepWrapper, {
      [x.stepWrapperComplete]: s
    }, {
      [x.stepWrapperWithNextStep]: n
    }),
    children: [(0, a.jsxs)("div", {
      className: x.stepIndicator,
      children: [(0, a.jsx)("div", {
        className: x.stepIconWrapper,
        children: s && (0, a.jsx)(u.CheckmarkBoldIcon, {
          className: x.stepIcon,
          color: c.tokens.colors.WHITE
        })
      }), n && (0, a.jsx)("div", {
        className: x.stepConnector
      })]
    }), (0, a.jsx)(c.Text, {
      className: x.stepContent,
      color: "text-muted",
      variant: "text-xs/medium",
      children: t
    })]
  })
}

function v(e) {
  let [t, s] = (0, r.useSpring)(() => ({})), l = n.useRef(!1), i = async () => {
    l.current = !0, await (0, T.manuallyStartConsoleQuest)(e.quest.id), l.current = !1
  }, o = (0, r.animated)(m.default);
  return (0, a.jsx)(c.Clickable, {
    className: x.microphoneUnitRefreshIconWrapper,
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
      className: x.microphoneUnitRefreshIcon,
      style: e.useReducedMotion ? void 0 : t,
      height: 16,
      width: 16
    })
  })
}

function M(e) {
  return (0, a.jsxs)("div", {
    className: x.microphoneUnit,
    children: [(0, a.jsxs)("div", {
      className: x.microphoneUnitHeader,
      children: [(0, a.jsx)(C.default, {
        className: x.warningCircle,
        width: 16,
        height: 16
      }), (0, a.jsx)(c.Text, {
        variant: "text-xs/medium",
        children: I.default.Messages.QUESTS_MICROPHONE_UNIT_HEADER
      }), (0, a.jsx)(v, {
        ...e
      })]
    }), (0, a.jsx)(c.Text, {
      className: x.microphoneUnitBodyText,
      color: "text-muted",
      variant: "text-xxs/normal",
      children: (0, A.hasVariant)(e.quest, N.QuestVariants.IN_HOUSE_CONSOLE_QUEST) ? I.default.Messages.QUESTS_MICROPHONE_UNIT_BODY_ANY_GAME : I.default.Messages.QUESTS_MICROPHONE_UNIT_BODY.format({
        gameTitle: p.SharedQuestFields.build(e.quest.config).application.name
      })
    })]
  })
}
t.default = function(e) {
  let {
    onContentHeightChange: t,
    quest: s
  } = e, [l, i] = n.useState(!1), u = (0, o.useStateFromStores)([h.default], () => h.default.useReducedMotion), {
    xboxAndPlaystationAccounts: m
  } = (0, g.useConnectedAccounts)(), {
    steps: C,
    hasConnectedAccounts: T,
    isProgressingQuestForLaunchedGame: p
  } = n.useMemo(() => {
    let e = (0, A.getQuestTaskDetails)({
        quest: s,
        location: N.QuestsExperimentLocations.QUESTS_BAR
      }),
      t = m.length > 0,
      a = t && (0, A.isQuestProgressingOnConsole)(s),
      n = a && e.progressSeconds >= e.targetSeconds;
    return {
      steps: [{
        content: I.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CONNECT_ACCOUNT,
        isComplete: t
      }, {
        content: I.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_GAME,
        isComplete: a
      }, {
        content: I.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_PLAYTIME.format({
          numMinutes: e.targetMinutes
        }),
        isComplete: n
      }],
      hasConnectedAccounts: t,
      isProgressingQuestForLaunchedGame: a,
      isPlaytimeComplete: n
    }
  }, [m, s]), {
    ref: v,
    height: L = 0
  } = (0, _.default)(), O = (0, f.default)(L), {
    expansionSpring: y
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
  }), D = L - (null != O ? O : 0);
  return n.useLayoutEffect(() => {
    l && 0 !== D && t(D)
  }, [l, D, t]), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: x.wrapper,
      children: [(0, a.jsxs)(c.Clickable, {
        className: x.headingWrapper,
        onClick: () => {
          t(l ? -1 * L : L), i(!l)
        },
        children: [(0, a.jsx)(c.Heading, {
          className: x.heading,
          variant: "text-xs/medium",
          children: I.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_HEADING
        }), (0, a.jsx)(d.ChevronLargeDownIcon, {
          className: x.headingChevron,
          style: {
            transform: "rotate(".concat(l ? 180 : 0, "deg)")
          }
        })]
      }), (0, a.jsx)(r.animated.div, {
        className: x.stepsWrapperAnimated,
        style: {
          height: y.to({
            range: [0, 1],
            output: [0, L]
          })
        },
        children: (0, a.jsx)("div", {
          ref: v,
          children: (0, a.jsxs)("div", {
            className: x.stepsWrapperStatic,
            children: [(0, a.jsx)("ul", {
              children: C.map((e, t) => (0, a.jsx)(R, {
                isComplete: e.isComplete,
                hasNextStep: t < C.length - 1,
                children: e.content
              }, t))
            }), T && !p && (0, a.jsx)(M, {
              useReducedMotion: u,
              quest: s
            })]
          })
        })
      })]
    }), 0 === m.length && (0, a.jsx)("div", {
      className: x.ctaWrapper,
      children: (0, a.jsx)(c.Button, {
        fullWidth: !0,
        onClick: () => E.default.open(S.UserSettingsSections.CONNECTIONS),
        size: c.Button.Sizes.SMALL,
        children: I.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CTA
      })
    })]
  })
}