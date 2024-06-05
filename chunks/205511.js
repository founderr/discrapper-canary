"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("920906"),
  o = n("442837"),
  u = n("461920"),
  d = n("207532"),
  c = n("481060"),
  f = n("230711"),
  E = n("393238"),
  h = n("607070"),
  _ = n("113434"),
  C = n("918701"),
  m = n("46140"),
  S = n("981631"),
  p = n("689938"),
  I = n("700898");

function g(e) {
  let {
    children: t,
    isComplete: n,
    hasNextStep: s
  } = e;
  return (0, a.jsxs)("li", {
    className: i()(I.stepWrapper, {
      [I.stepWrapperComplete]: n
    }, {
      [I.stepWrapperWithNextStep]: s
    }),
    children: [(0, a.jsxs)("div", {
      className: I.stepIndicator,
      children: [(0, a.jsx)("div", {
        className: I.stepIconWrapper,
        children: n && (0, a.jsx)(u.CheckmarkBoldIcon, {
          className: I.stepIcon,
          color: c.tokens.colors.WHITE
        })
      }), s && (0, a.jsx)("div", {
        className: I.stepConnector
      })]
    }), (0, a.jsx)(c.Text, {
      className: I.stepContent,
      color: "text-muted",
      variant: "text-xs/medium",
      children: t
    })]
  })
}
t.default = function(e) {
  let {
    onContentHeightChange: t,
    quest: n
  } = e, [l, i] = s.useState(!1);
  (0, o.useStateFromStores)([h.default], () => h.default.useReducedMotion);
  let {
    xboxAndPlaystationAccounts: u
  } = (0, _.useConnectedAccounts)(), T = s.useMemo(() => {
    let e = (0, C.getQuestTaskDetails)({
        quest: n,
        location: m.QuestsExperimentLocations.QUESTS_BAR
      }),
      t = u.length > 0,
      a = t && (0, C.isQuestProgressingOnConsole)(n),
      s = a && e.progressSeconds >= e.targetSeconds;
    return [{
      content: p.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CONNECT_ACCOUNT,
      isComplete: t
    }, {
      content: p.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_GAME,
      isComplete: a
    }, {
      content: p.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_PLAYTIME.format({
        numMinutes: e.targetMinutes
      }),
      isComplete: s
    }]
  }, [u, n]), {
    ref: A,
    height: N = 0
  } = (0, E.default)(), {
    expansionSpring: v
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
      className: I.wrapper,
      children: [(0, a.jsxs)(c.Clickable, {
        className: I.headingWrapper,
        onClick: () => {
          t(l ? -1 * N : N), i(!l)
        },
        children: [(0, a.jsx)(c.Heading, {
          className: I.heading,
          variant: "text-xs/medium",
          children: p.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_HEADING
        }), (0, a.jsx)(d.ChevronLargeDownIcon, {
          className: I.headingChevron,
          style: {
            transform: "rotate(".concat(l ? 180 : 0, "deg)")
          }
        })]
      }), (0, a.jsx)(r.animated.div, {
        className: I.stepsWrapperAnimated,
        style: {
          height: v.to({
            range: [0, 1],
            output: [0, N]
          })
        },
        children: (0, a.jsx)("div", {
          ref: A,
          children: (0, a.jsx)("ul", {
            className: I.stepsWrapperStatic,
            children: T.map((e, t) => (0, a.jsx)(g, {
              isComplete: e.isComplete,
              hasNextStep: t < T.length - 1,
              children: e.content
            }, t))
          })
        })
      })]
    }), 0 === u.length && (0, a.jsx)("div", {
      className: I.ctaWrapper,
      children: (0, a.jsx)(c.Button, {
        fullWidth: !0,
        onClick: () => f.default.open(S.UserSettingsSections.CONNECTIONS),
        size: c.Button.Sizes.SMALL,
        children: p.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CTA
      })
    })]
  })
}