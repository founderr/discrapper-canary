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
  f = s("607070"),
  h = s("113434"),
  m = s("918701"),
  C = s("46140"),
  T = s("981631"),
  g = s("689938"),
  A = s("700898");

function p(e) {
  let {
    children: t,
    isComplete: s,
    hasNextStep: n
  } = e;
  return (0, a.jsxs)("li", {
    className: i()(A.stepWrapper, {
      [A.stepWrapperComplete]: s
    }, {
      [A.stepWrapperWithNextStep]: n
    }),
    children: [(0, a.jsxs)("div", {
      className: A.stepIndicator,
      children: [(0, a.jsx)("div", {
        className: A.stepIconWrapper,
        children: s && (0, a.jsx)(u.CheckmarkBoldIcon, {
          className: A.stepIcon,
          color: c.tokens.colors.WHITE
        })
      }), n && (0, a.jsx)("div", {
        className: A.stepConnector
      })]
    }), (0, a.jsx)(c.Text, {
      className: A.stepContent,
      color: "text-muted",
      variant: "text-xs/medium",
      children: t
    })]
  })
}
t.default = function(e) {
  let {
    onContentHeightChange: t,
    quest: s
  } = e, [l, i] = n.useState(!1);
  (0, o.useStateFromStores)([f.default], () => f.default.useReducedMotion);
  let {
    xboxAndPlaystationAccounts: u
  } = (0, h.useConnectedAccounts)(), N = n.useMemo(() => {
    let e = (0, m.getQuestTaskDetails)({
        quest: s,
        location: C.QuestsExperimentLocations.QUESTS_BAR
      }),
      t = u.length > 0,
      a = t && (0, m.isQuestProgressingOnConsole)(s),
      n = a && e.progressSeconds >= e.targetSeconds;
    return [{
      content: g.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CONNECT_ACCOUNT,
      isComplete: t
    }, {
      content: g.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_GAME,
      isComplete: a
    }, {
      content: g.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_PLAYTIME.format({
        numMinutes: e.targetMinutes
      }),
      isComplete: n
    }]
  }, [u, s]), {
    ref: S,
    height: I = 0
  } = (0, _.default)(), {
    expansionSpring: R
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
  });
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: A.wrapper,
      children: [(0, a.jsxs)(c.Clickable, {
        className: A.headingWrapper,
        onClick: () => {
          t(l ? -1 * I : I), i(!l)
        },
        children: [(0, a.jsx)(c.Heading, {
          className: A.heading,
          variant: "text-xs/medium",
          children: g.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_HEADING
        }), (0, a.jsx)(d.ChevronLargeDownIcon, {
          className: A.headingChevron,
          style: {
            transform: "rotate(".concat(l ? 180 : 0, "deg)")
          }
        })]
      }), (0, a.jsx)(r.animated.div, {
        className: A.stepsWrapperAnimated,
        style: {
          height: R.to({
            range: [0, 1],
            output: [0, I]
          })
        },
        children: (0, a.jsx)("div", {
          ref: S,
          children: (0, a.jsx)("ul", {
            className: A.stepsWrapperStatic,
            children: N.map((e, t) => (0, a.jsx)(p, {
              isComplete: e.isComplete,
              hasNextStep: t < N.length - 1,
              children: e.content
            }, t))
          })
        })
      })]
    }), 0 === u.length && (0, a.jsx)("div", {
      className: A.ctaWrapper,
      children: (0, a.jsx)(c.Button, {
        fullWidth: !0,
        onClick: () => E.default.open(T.UserSettingsSections.CONNECTIONS),
        size: c.Button.Sizes.SMALL,
        children: g.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CTA
      })
    })]
  })
}