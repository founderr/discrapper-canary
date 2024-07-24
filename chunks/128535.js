n(47120);
var i = n(735250);
n(470079);
var a = n(120356),
  s = n.n(a),
  r = n(442837),
  l = n(481060),
  o = n(607070),
  c = n(358085),
  d = n(617136),
  u = n(113434),
  _ = n(566078),
  E = n(667105),
  m = n(689938),
  I = n(787248);
let T = e => 0 === e.length ? I.warning : I.danger,
  h = (e, t) => 0 === e.length ? m.Z.Messages.QUESTS_LAUNCHED_GAME.format({
gameTitle: t
  }) : m.Z.Messages.QUESTS_GAME_NOT_DETECTED.format({
gameTitle: t
  }),
  N = (e, t, n) => {
if (0 === e.length)
  return (0, i.jsx)(l.Text, {
    variant: 'text-sm/medium',
    color: 'text-muted',
    children: m.Z.Messages.QUESTS_MICROPHONE_UNIT_BODY.format({
      gameTitle: t
    })
  });
let a = [
  (0, c.isWeb)() ? m.Z.Messages.QUEST_PROGRESS_NO_GAME_WEB : m.Z.Messages.QUEST_PROGRESS_NO_GAME,
  ...e,
  n
];
return (0, i.jsx)(i.Fragment, {
  children: a.map((e, t) => (0, i.jsxs)(l.Text, {
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
a = (0, E.k3)(e.quest.id, e.location),
c = (0, E.g2)({
  useReducedMotion: n,
  className: I.refreshIcon
}),
{
  errorHints: f,
  startingConsoleQuest: p,
  startConsoleQuest: C
} = (0, u.GI)({
  questId: e.quest.id,
  beforeRequest: () => {
    c.startAnimation(), (0, d._3)({
      questId: e.quest.id,
      questContent: e.location,
      questContentCTA: d.jZ.DEFIBRILLATOR
    });
  },
  afterRequest: c.stopAnimation
});
  return (0, i.jsxs)('div', {
className: s()(I.container, {
  [I.inFlight]: p
}),
children: [
  (0, i.jsxs)('div', {
    className: I.info,
    children: [
      (0, i.jsxs)('div', {
        className: I.header,
        children: [
          (0, i.jsx)(l.CircleExclamationPointIcon, {
            className: s()(I.headerIcon, T(f)),
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
      N(f, t, a)
    ]
  }),
  (0, i.jsx)('div', {
    className: I.cta,
    children: (0, i.jsx)(l.Button, {
      color: l.ButtonColors.PRIMARY,
      onClick: C,
      disabled: p,
      children: (0, i.jsxs)('div', {
        className: I.ctaInner,
        children: [
          c.render(),
          m.Z.Messages.QUESTS_MICROHPONE_UNIT_BUTTON_CTA
        ]
      })
    })
  })
]
  });
};