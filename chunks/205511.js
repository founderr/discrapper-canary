var s = n(735250),
  o = n(470079),
  r = n(120356),
  a = n.n(r),
  l = n(442837),
  i = n(481060),
  c = n(607070),
  d = n(617136),
  u = n(113434),
  p = n(497505),
  m = n(918701),
  x = n(566078),
  f = n(667105),
  g = n(585857),
  C = n(46140),
  _ = n(689938),
  h = n(778239);

function E(e) {
  let {
children: t,
isComplete: n,
hasNextStep: o
  } = e;
  return (0, s.jsxs)('li', {
className: a()(h.stepWrapper, {
  [h.stepWrapperComplete]: n
}, {
  [h.stepWrapperWithNextStep]: o
}),
children: [
  (0, s.jsxs)('div', {
    className: h.stepIndicator,
    children: [
      (0, s.jsx)('div', {
        className: h.stepIconWrapper,
        children: n && (0, s.jsx)(i.CheckmarkBoldIcon, {
          className: h.stepIcon,
          color: i.tokens.colors.WHITE
        })
      }),
      o && (0, s.jsx)('div', {
        className: h.stepConnector
      })
    ]
  }),
  (0, s.jsx)('div', {
    className: h.stepContent,
    children: t
  })
]
  });
}

function S(e) {
  let {
quest: t,
useReducedMotion: n
  } = e, r = (0, f.k3)(t.id, p.jn.QUEST_BAR_V2), l = (0, f.g2)({
useReducedMotion: n
  }), {
errorHints: c,
startingConsoleQuest: g,
startConsoleQuest: E
  } = (0, u.GI)({
questId: t.id,
beforeRequest: () => {
  (0, d._3)({
    questId: t.id,
    questContent: p.jn.QUEST_BAR_V2,
    questContentCTA: d.jZ.DEFIBRILLATOR
  }), l.startAnimation();
},
afterRequest: l.stopAnimation
  }), {
header: S,
renderBody: T
  } = o.useMemo(() => {
let e = c.length > 0,
  n = () => (0, s.jsx)('div', {
    children: c.map((e, t) => (0, s.jsx)(i.Text, {
      className: h.microphoneUnitBodyText,
      color: 'text-muted',
      variant: 'text-xxs/normal',
      children: e
    }, t))
  });
if ((0, m.zK)(t, C.S7.IN_HOUSE_CONSOLE_QUEST))
  return {
    header: e ? _.Z.Messages.QUESTS_ANY_GAME_NOT_DETECTED : _.Z.Messages.QUESTS_MICROPHONE_UNIT_HEADER,
    renderBody: e ? n : () => (0, s.jsx)(i.Text, {
      className: h.microphoneUnitBodyText,
      color: 'text-muted',
      variant: 'text-xxs/normal',
      children: _.Z.Messages.QUESTS_MICROPHONE_UNIT_BODY_ANY_GAME
    })
  };
let o = x.r.build(t.config).application.name;
return {
  header: e ? _.Z.Messages.QUESTS_GAME_NOT_DETECTED.format({
    gameTitle: o
  }) : _.Z.Messages.QUESTS_LAUNCHED_GAME.format({
    gameTitle: o
  }),
  renderBody: e ? n : () => (0, s.jsx)(i.Text, {
    className: h.microphoneUnitBodyText,
    color: 'text-muted',
    variant: 'text-xxs/normal',
    children: _.Z.Messages.QUESTS_MICROPHONE_UNIT_BODY.format({
      gameTitle: o
    })
  })
};
  }, [
t,
c
  ]);
  return (0, s.jsxs)('div', {
className: h.microphoneUnit,
children: [
  (0, s.jsxs)('div', {
    className: h.microphoneUnitHeader,
    children: [
      (0, s.jsx)(i.CircleExclamationPointIcon, {
        size: 'custom',
        color: 'currentColor',
        className: 0 === c.length ? h.warningCircle : h.errorCircle,
        width: 16,
        height: 16
      }),
      (0, s.jsx)(i.Text, {
        variant: 'text-xs/medium',
        children: S
      }),
      (0, s.jsx)(i.Clickable, {
        className: a()(h.microphoneUnitRefreshIconWrapper, {
          [h.disabled]: g
        }),
        onClick: () => E(),
        children: l.render()
      })
    ]
  }),
  (0, s.jsxs)('div', {
    className: a()({
      [h.opacity_50]: g
    }),
    children: [
      T(),
      0 === c.length ? null : (0, s.jsx)(i.Text, {
        className: h.microphoneUnitBodyText,
        color: 'text-muted',
        variant: 'text-xxs/normal',
        children: r
      })
    ]
  })
]
  });
}

function T(e) {
  let {
text: t
  } = e;
  return (0, s.jsx)(i.Text, {
color: 'text-muted',
variant: 'text-xs/medium',
children: t
  });
}
t.Z = function(e) {
  let {
quest: t,
taskDetails: n
  } = e, r = (0, l.e7)([c.Z], () => c.Z.useReducedMotion), a = (0, u.z6)(), {
steps: d,
hasConnectedAccounts: p,
isProgressingQuestForLaunchedGame: f,
isQuestComplete: v
  } = o.useMemo(() => {
var e;
let o = a.xboxAndPlaystationAccounts.length > 0,
  r = o && (0, m.Bz)(t),
  l = (0, m.zK)(t, C.S7.IN_HOUSE_CONSOLE_QUEST),
  i = x.r.build(t.config).application.name,
  c = (null === (e = t.userStatus) || void 0 === e ? void 0 : e.completedAt) != null;
return {
  steps: [{
      renderContent: () => (0, s.jsx)(g.Q, {
        ...a,
        quest: t
      }),
      isComplete: o || r || c
    },
    {
      renderContent: () => (0, s.jsx)(T, {
        text: l ? _.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_ANY_GAME : _.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_GAME.format({
          gameTitle: i
        })
      }),
      isComplete: r || c
    },
    {
      renderContent: () => (0, s.jsx)(T, {
        text: _.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_PLAYTIME.format({
          numMinutes: n.targetMinutes
        })
      }),
      isComplete: c
    }
  ],
  hasConnectedAccounts: o,
  isProgressingQuestForLaunchedGame: r,
  isQuestComplete: c
};
  }, [
a,
t,
n
  ]);
  return (0, s.jsxs)('div', {
className: h.wrapper,
children: [
  (0, s.jsx)('div', {
    className: h.headingWrapper,
    children: (0, s.jsx)(i.Heading, {
      className: h.heading,
      variant: 'text-xs/medium',
      children: _.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_HEADING
    })
  }),
  (0, s.jsxs)('div', {
    className: h.stepsWrapper,
    children: [
      (0, s.jsx)('ul', {
        children: d.map((e, t) => (0, s.jsx)(E, {
          isComplete: e.isComplete,
          hasNextStep: t < d.length - 1,
          children: e.renderContent()
        }, t))
      }),
      p && !f && !v && (0, s.jsx)(S, {
        useReducedMotion: r,
        quest: t
      })
    ]
  })
]
  });
};