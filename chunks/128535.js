n(47120);
var i = n(735250);
n(470079);
var s = n(120356),
  a = n.n(s),
  r = n(442837),
  l = n(481060),
  o = n(607070),
  c = n(358085),
  u = n(617136),
  d = n(113434),
  _ = n(566078),
  E = n(667105),
  I = n(689938),
  m = n(787248);
let T = e => 0 === e.length ? m.warning : m.danger,
  h = (e, t) => 0 === e.length ? I.Z.Messages.QUESTS_LAUNCHED_GAME.format({
gameTitle: t
  }) : I.Z.Messages.QUESTS_GAME_NOT_DETECTED.format({
gameTitle: t
  }),
  N = (e, t, n) => {
if (0 === e.length)
  return (0, i.jsx)(l.Text, {
    variant: 'text-sm/medium',
    color: 'text-muted',
    children: I.Z.Messages.QUESTS_MICROPHONE_UNIT_BODY.format({
      gameTitle: t
    })
  });
let s = [
  (0, c.isWeb)() ? I.Z.Messages.QUEST_PROGRESS_NO_GAME_WEB : I.Z.Messages.QUEST_PROGRESS_NO_GAME,
  ...e.map(e => e.message),
  n
];
return (0, i.jsx)(i.Fragment, {
  children: s.map((e, t) => (0, i.jsxs)(l.Text, {
    tag: 'span',
    variant: 'text-sm/medium',
    color: 'text-muted',
    children: [
      e,
      ' '
    ]
  }, t))
});
  };
t.Z = function(e) {
  let t = _.r.build(e.quest.config).application.name,
n = (0, r.e7)([o.Z], () => o.Z.useReducedMotion),
s = (0, E.k3)(e.quest.id, e.location),
c = (0, E.g2)({
  useReducedMotion: n,
  className: m.refreshIcon
}),
{
  errorHints: f,
  startingConsoleQuest: C,
  startConsoleQuest: p
} = (0, d.GI)({
  questId: e.quest.id,
  beforeRequest: () => {
    c.startAnimation(), (0, u._3)({
      questId: e.quest.id,
      questContent: e.location,
      questContentCTA: u.jZ.DEFIBRILLATOR
    });
  },
  afterRequest: c.stopAnimation
});
  return (0, i.jsxs)('div', {
className: a()(m.container, {
  [m.inFlight]: C
}),
children: [
  (0, i.jsxs)('div', {
    className: m.info,
    children: [
      (0, i.jsxs)('div', {
        className: m.header,
        children: [
          (0, i.jsx)(l.CircleExclamationPointIcon, {
            className: a()(m.headerIcon, T(f)),
            size: 'custom',
            color: 'currentColor',
            width: 16,
            height: 16
          }),
          (0, i.jsx)(l.Text, {
            variant: 'text-sm/semibold',
            children: h(f, t)
          })
        ]
      }),
      N(f, t, s)
    ]
  }),
  (0, i.jsx)('div', {
    className: m.cta,
    children: (0, i.jsx)(l.Button, {
      color: l.ButtonColors.PRIMARY,
      onClick: p,
      disabled: C,
      children: (0, i.jsxs)('div', {
        className: m.ctaInner,
        children: [
          c.render(),
          I.Z.Messages.QUESTS_MICROHPONE_UNIT_BUTTON_CTA
        ]
      })
    })
  })
]
  });
};