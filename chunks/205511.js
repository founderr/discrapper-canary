n(47120);
var s = n(735250),
  o = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(442837),
  i = n(481060),
  c = n(607070),
  u = n(272008),
  d = n(113434),
  p = n(918701),
  x = n(566078),
  m = n(667105),
  g = n(585857),
  C = n(46140),
  h = n(689938),
  S = n(517107);

function E(e) {
  let {
    children: t,
    isComplete: n,
    hasNextStep: o
  } = e;
  return (0, s.jsxs)("li", {
    className: r()(S.stepWrapper, {
      [S.stepWrapperComplete]: n
    }, {
      [S.stepWrapperWithNextStep]: o
    }),
    children: [(0, s.jsxs)("div", {
      className: S.stepIndicator,
      children: [(0, s.jsx)("div", {
        className: S.stepIconWrapper,
        children: n && (0, s.jsx)(i.CheckmarkBoldIcon, {
          className: S.stepIcon,
          color: i.tokens.colors.WHITE
        })
      }), o && (0, s.jsx)("div", {
        className: S.stepConnector
      })]
    }), (0, s.jsx)("div", {
      className: S.stepContent,
      children: t
    })]
  })
}

function f(e) {
  let {
    quest: t,
    useReducedMotion: n
  } = e, [a, r] = o.useState([]), l = (0, m.g2)({
    useReducedMotion: n,
    className: S.microphoneUnitRefreshIcon
  }), c = async () => {
    l.startAnimation(), r((await (0, u.CS)(t.id)).errorHints), l.stopAnimation()
  }, {
    header: d,
    renderBody: g
  } = o.useMemo(() => {
    let e = a.length > 0,
      n = () => (0, s.jsx)("div", {
        children: a.map((e, t) => (0, s.jsx)(i.Text, {
          className: S.microphoneUnitBodyText,
          color: "text-muted",
          variant: "text-xxs/normal",
          children: e
        }, t))
      });
    if ((0, p.zK)(t, C.S7.IN_HOUSE_CONSOLE_QUEST)) return {
      header: e ? h.Z.Messages.QUESTS_ANY_GAME_NOT_DETECTED : h.Z.Messages.QUESTS_MICROPHONE_UNIT_HEADER,
      renderBody: e ? n : () => (0, s.jsx)(i.Text, {
        className: S.microphoneUnitBodyText,
        color: "text-muted",
        variant: "text-xxs/normal",
        children: h.Z.Messages.QUESTS_MICROPHONE_UNIT_BODY_ANY_GAME
      })
    };
    let o = x.r.build(t.config).application.name;
    return {
      header: e ? h.Z.Messages.QUESTS_GAME_NOT_DETECTED.format({
        gameTitle: o
      }) : h.Z.Messages.QUESTS_LAUNCHED_GAME.format({
        gameTitle: o
      }),
      renderBody: e ? n : () => (0, s.jsx)(i.Text, {
        className: S.microphoneUnitBodyText,
        color: "text-muted",
        variant: "text-xxs/normal",
        children: h.Z.Messages.QUESTS_MICROPHONE_UNIT_BODY.format({
          gameTitle: o
        })
      })
    }
  }, [t, a]);
  return (0, s.jsxs)("div", {
    className: S.microphoneUnit,
    children: [(0, s.jsxs)("div", {
      className: S.microphoneUnitHeader,
      children: [(0, s.jsx)(i.CircleExclamationPointIcon, {
        size: "custom",
        color: "currentColor",
        className: 0 === a.length ? S.warningCircle : S.errorCircle,
        width: 16,
        height: 16
      }), (0, s.jsx)(i.Text, {
        variant: "text-xs/medium",
        children: d
      }), (0, s.jsx)(i.Clickable, {
        className: S.microphoneUnitRefreshIconWrapper,
        onClick: () => c(),
        children: l.render()
      })]
    }), g()]
  })
}

function N(e) {
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
  } = e, n = (0, l.e7)([c.Z], () => c.Z.useReducedMotion), a = (0, d.Rf)({
    quest: t,
    location: C.dr.QUESTS_BAR
  }), r = (0, d.z6)(), {
    steps: u,
    hasConnectedAccounts: m,
    isProgressingQuestForLaunchedGame: T,
    isQuestComplete: v
  } = o.useMemo(() => {
    var e;
    let n = r.xboxAndPlaystationAccounts.length > 0,
      o = n && (0, p.Bz)(t),
      l = (0, p.zK)(t, C.S7.IN_HOUSE_CONSOLE_QUEST),
      i = x.r.build(t.config).application.name,
      c = (null === (e = t.userStatus) || void 0 === e ? void 0 : e.completedAt) != null;
    return {
      steps: [{
        renderContent: () => (0, s.jsx)(g.Q, {
          ...r
        }),
        isComplete: n || o || c
      }, {
        renderContent: () => (0, s.jsx)(N, {
          text: l ? h.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_ANY_GAME : h.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_GAME.format({
            gameTitle: i
          })
        }),
        isComplete: o || c
      }, {
        renderContent: () => (0, s.jsx)(N, {
          text: h.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_PLAYTIME.format({
            numMinutes: a.targetMinutes
          })
        }),
        isComplete: c
      }],
      hasConnectedAccounts: n,
      isProgressingQuestForLaunchedGame: o,
      isQuestComplete: c
    }
  }, [r, t, a]);
  return (0, s.jsxs)("div", {
    className: S.wrapper,
    children: [(0, s.jsx)("div", {
      className: S.headingWrapper,
      children: (0, s.jsx)(i.Heading, {
        className: S.heading,
        variant: "text-xs/medium",
        children: h.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_HEADING
      })
    }), (0, s.jsxs)("div", {
      className: S.stepsWrapper,
      children: [(0, s.jsx)("ul", {
        children: u.map((e, t) => (0, s.jsx)(E, {
          isComplete: e.isComplete,
          hasNextStep: t < u.length - 1,
          children: e.renderContent()
        }, t))
      }), m && !T && !v && (0, s.jsx)(f, {
        useReducedMotion: n,
        quest: t
      })]
    })]
  })
}