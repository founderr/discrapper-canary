"use strict";
s.r(t), s("47120");
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
  f = s("759231"),
  _ = s("272008"),
  h = s("113434"),
  m = s("918701"),
  C = s("566078"),
  T = s("667105"),
  g = s("46140"),
  p = s("689938"),
  A = s("700898");

function N(e) {
  let {
    children: t,
    isComplete: s,
    hasNextStep: a
  } = e;
  return (0, n.jsxs)("li", {
    className: i()(A.stepWrapper, {
      [A.stepWrapperComplete]: s
    }, {
      [A.stepWrapperWithNextStep]: a
    }),
    children: [(0, n.jsxs)("div", {
      className: A.stepIndicator,
      children: [(0, n.jsx)("div", {
        className: A.stepIconWrapper,
        children: s && (0, n.jsx)(o.CheckmarkBoldIcon, {
          className: A.stepIcon,
          color: u.tokens.colors.WHITE
        })
      }), a && (0, n.jsx)("div", {
        className: A.stepConnector
      })]
    }), (0, n.jsx)(u.Text, {
      className: A.stepContent,
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
  } = e, [l, i] = a.useState([]), r = (0, T.useAnimatedRefreshIcon)({
    useReducedMotion: s,
    className: A.microphoneUnitRefreshIcon,
    size: 16
  }), o = async () => {
    r.startAnimation(), i((await (0, _.manuallyStartConsoleQuest)(t.id)).errorHints), r.stopAnimation()
  }, {
    header: d,
    renderBody: c
  } = a.useMemo(() => {
    let e = l.length > 0,
      s = () => (0, n.jsx)("div", {
        children: l.map((e, t) => (0, n.jsx)(u.Text, {
          className: A.microphoneUnitBodyText,
          color: "text-muted",
          variant: "text-xxs/normal",
          children: e
        }, t))
      });
    if ((0, m.hasVariant)(t, g.QuestVariants.IN_HOUSE_CONSOLE_QUEST)) return {
      header: e ? p.default.Messages.QUESTS_ANY_GAME_NOT_DETECTED : p.default.Messages.QUESTS_MICROPHONE_UNIT_HEADER,
      renderBody: e ? s : () => (0, n.jsx)(u.Text, {
        className: A.microphoneUnitBodyText,
        color: "text-muted",
        variant: "text-xxs/normal",
        children: p.default.Messages.QUESTS_MICROPHONE_UNIT_BODY_ANY_GAME
      })
    };
    let a = C.SharedQuestFields.build(t.config).application.name;
    return {
      header: e ? p.default.Messages.QUESTS_GAME_NOT_DETECTED.format({
        gameTitle: a
      }) : p.default.Messages.QUESTS_LAUNCHED_GAME.format({
        gameTitle: a
      }),
      renderBody: e ? s : () => (0, n.jsx)(u.Text, {
        className: A.microphoneUnitBodyText,
        color: "text-muted",
        variant: "text-xxs/normal",
        children: p.default.Messages.QUESTS_MICROPHONE_UNIT_BODY.format({
          gameTitle: a
        })
      })
    }
  }, [t, l]);
  return (0, n.jsxs)("div", {
    className: A.microphoneUnit,
    children: [(0, n.jsxs)("div", {
      className: A.microphoneUnitHeader,
      children: [(0, n.jsx)(f.default, {
        className: 0 === l.length ? A.warningCircle : A.errorCircle,
        width: 16,
        height: 16
      }), (0, n.jsx)(u.Text, {
        variant: "text-xs/medium",
        children: d
      }), (0, n.jsx)(u.Clickable, {
        className: A.microphoneUnitRefreshIconWrapper,
        onClick: () => o(),
        children: r.render()
      })]
    }), c()]
  })
}
t.default = function(e) {
  var t;
  let {
    onContentHeightChange: s,
    quest: l
  } = e, i = (0, r.useStateFromStores)([E.default], () => E.default.useReducedMotion), o = (0, h.useQuestTaskDetails)({
    quest: l,
    location: g.QuestsExperimentLocations.QUESTS_BAR
  }), {
    xboxAndPlaystationAccounts: f
  } = (0, h.useConnectedAccounts)(), {
    steps: _,
    hasConnectedAccounts: T,
    isProgressingQuestForLaunchedGame: I,
    isQuestComplete: x
  } = a.useMemo(() => {
    var e;
    let t = f.length > 0,
      s = t && (0, m.isQuestProgressingOnConsole)(l),
      n = (0, m.hasVariant)(l, g.QuestVariants.IN_HOUSE_CONSOLE_QUEST),
      a = C.SharedQuestFields.build(l.config).application.name,
      i = (null === (e = l.userStatus) || void 0 === e ? void 0 : e.completedAt) != null;
    return {
      steps: [{
        content: p.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CONNECT_ACCOUNT,
        isComplete: t || s || i
      }, {
        content: n ? p.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_ANY_GAME : p.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_GAME.format({
          gameTitle: a
        }),
        isComplete: s || i
      }, {
        content: p.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_PLAYTIME.format({
          numMinutes: o.targetMinutes
        }),
        isComplete: i
      }],
      hasConnectedAccounts: t,
      isProgressingQuestForLaunchedGame: s,
      isQuestComplete: i
    }
  }, [f, l, o]), {
    ref: R,
    height: v = 0
  } = (0, d.default)(), M = null !== (t = (0, c.default)(v)) && void 0 !== t ? t : 0;
  return a.useLayoutEffect(() => {
    if (0 === M) return;
    let e = v - M;
    0 !== e && s(e)
  }, [v, M, s]), (0, n.jsxs)("div", {
    className: A.wrapper,
    children: [(0, n.jsx)("div", {
      className: A.headingWrapper,
      children: (0, n.jsx)(u.Heading, {
        className: A.heading,
        variant: "text-xs/medium",
        children: p.default.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_HEADING
      })
    }), (0, n.jsx)("div", {
      ref: R,
      children: (0, n.jsxs)("div", {
        className: A.stepsWrapper,
        children: [(0, n.jsx)("ul", {
          children: _.map((e, t) => (0, n.jsx)(N, {
            isComplete: e.isComplete,
            hasNextStep: t < _.length - 1,
            children: e.content
          }, t))
        }), T && !I && !x && (0, n.jsx)(S, {
          useReducedMotion: i,
          quest: l
        })]
      })
    })]
  })
}