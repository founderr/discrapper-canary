n(47120);
var o = n(735250),
  s = n(470079),
  r = n(120356),
  a = n.n(r),
  i = n(442837),
  l = n(481060),
  c = n(607070),
  d = n(617136),
  u = n(272008),
  p = n(113434),
  m = n(497505),
  x = n(918701),
  g = n(566078),
  C = n(667105),
  f = n(585857),
  h = n(693900),
  _ = n(46140),
  E = n(689938),
  S = n(517107);

function T(e) {
  let {
    children: t,
    isComplete: n,
    hasNextStep: s
  } = e;
  return (0, o.jsxs)("li", {
    className: a()(S.stepWrapper, {
      [S.stepWrapperComplete]: n
    }, {
      [S.stepWrapperWithNextStep]: s
    }),
    children: [(0, o.jsxs)("div", {
      className: S.stepIndicator,
      children: [(0, o.jsx)("div", {
        className: S.stepIconWrapper,
        children: n && (0, o.jsx)(l.CheckmarkBoldIcon, {
          className: S.stepIcon,
          color: l.tokens.colors.WHITE
        })
      }), s && (0, o.jsx)("div", {
        className: S.stepConnector
      })]
    }), (0, o.jsx)("div", {
      className: S.stepContent,
      children: t
    })]
  })
}

function v(e) {
  let {
    quest: t,
    useReducedMotion: n
  } = e, [r, a] = s.useState([]), i = (0, C.g2)({
    useReducedMotion: n,
    className: S.microphoneUnitRefreshIcon
  }), c = async () => {
    i.startAnimation(), a((await (0, u.CS)(t.id)).errorHints), i.stopAnimation()
  }, {
    header: p,
    renderBody: f
  } = s.useMemo(() => {
    let e = r.length > 0,
      n = () => (0, o.jsx)("div", {
        children: r.map((e, t) => (0, o.jsx)(l.Text, {
          className: S.microphoneUnitBodyText,
          color: "text-muted",
          variant: "text-xxs/normal",
          children: e
        }, t))
      });
    if ((0, x.zK)(t, _.S7.IN_HOUSE_CONSOLE_QUEST)) return {
      header: e ? E.Z.Messages.QUESTS_ANY_GAME_NOT_DETECTED : E.Z.Messages.QUESTS_MICROPHONE_UNIT_HEADER,
      renderBody: e ? n : () => (0, o.jsx)(l.Text, {
        className: S.microphoneUnitBodyText,
        color: "text-muted",
        variant: "text-xxs/normal",
        children: E.Z.Messages.QUESTS_MICROPHONE_UNIT_BODY_ANY_GAME
      })
    };
    let s = g.r.build(t.config).application.name;
    return {
      header: e ? E.Z.Messages.QUESTS_GAME_NOT_DETECTED.format({
        gameTitle: s
      }) : E.Z.Messages.QUESTS_LAUNCHED_GAME.format({
        gameTitle: s
      }),
      renderBody: e ? n : () => (0, o.jsx)(l.Text, {
        className: S.microphoneUnitBodyText,
        color: "text-muted",
        variant: "text-xxs/normal",
        children: E.Z.Messages.QUESTS_MICROPHONE_UNIT_BODY.format({
          gameTitle: s
        })
      })
    }
  }, [t, r]);
  return (0, o.jsxs)("div", {
    className: S.microphoneUnit,
    children: [(0, o.jsxs)("div", {
      className: S.microphoneUnitHeader,
      children: [(0, o.jsx)(l.CircleExclamationPointIcon, {
        size: "custom",
        color: "currentColor",
        className: 0 === r.length ? S.warningCircle : S.errorCircle,
        width: 16,
        height: 16
      }), (0, o.jsx)(l.Text, {
        variant: "text-xs/medium",
        children: p
      }), (0, o.jsx)(l.Clickable, {
        className: S.microphoneUnitRefreshIconWrapper,
        onClick: () => {
          (0, d._3)({
            questId: t.id,
            questContent: m.jn.QUEST_BAR_V2,
            questContentCTA: d.jZ.DEFIBRILLATOR
          }), c()
        },
        children: i.render()
      })]
    }), f()]
  })
}

function N(e) {
  let {
    text: t
  } = e;
  return (0, o.jsx)(l.Text, {
    color: "text-muted",
    variant: "text-xs/medium",
    children: t
  })
}
t.Z = function(e) {
  let {
    quest: t
  } = e, n = (0, i.e7)([c.Z], () => c.Z.useReducedMotion), r = (0, p.Rf)({
    quest: t,
    location: _.dr.QUESTS_BAR
  }), a = (0, p.z6)(), {
    steps: d,
    hasConnectedAccounts: u,
    isProgressingQuestForLaunchedGame: m,
    isQuestComplete: C
  } = s.useMemo(() => {
    var e;
    let n = a.xboxAndPlaystationAccounts.length > 0,
      s = n && (0, x.Bz)(t),
      i = (0, x.zK)(t, _.S7.IN_HOUSE_CONSOLE_QUEST),
      l = g.r.build(t.config).application.name,
      c = (null === (e = t.userStatus) || void 0 === e ? void 0 : e.completedAt) != null;
    return {
      steps: [{
        renderContent: () => (0, o.jsx)(f.Q, {
          ...a,
          quest: t
        }),
        isComplete: n || s || c
      }, {
        renderContent: () => (0, o.jsx)(N, {
          text: i ? E.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_ANY_GAME : E.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_GAME.format({
            gameTitle: l
          })
        }),
        isComplete: s || c
      }, {
        renderContent: () => (0, o.jsx)(N, {
          text: E.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_PLAYTIME.format({
            numMinutes: r.targetMinutes
          })
        }),
        isComplete: c
      }],
      hasConnectedAccounts: n,
      isProgressingQuestForLaunchedGame: s,
      isQuestComplete: c
    }
  }, [a, t, r]);
  return (0, o.jsxs)("div", {
    className: S.wrapper,
    children: [(0, o.jsx)("div", {
      className: S.headingWrapper,
      children: (0, o.jsx)(l.Heading, {
        className: S.heading,
        variant: "text-xs/medium",
        children: E.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_HEADING
      })
    }), (0, o.jsx)(h.n, {
      children: (0, o.jsxs)("div", {
        className: S.stepsWrapper,
        children: [(0, o.jsx)("ul", {
          children: d.map((e, t) => (0, o.jsx)(T, {
            isComplete: e.isComplete,
            hasNextStep: t < d.length - 1,
            children: e.renderContent()
          }, t))
        }), u && !m && !C && (0, o.jsx)(v, {
          useReducedMotion: n,
          quest: t
        })]
      })
    })]
  })
}