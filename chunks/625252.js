s.d(t, {
  Z: function() {
return g;
  }
});
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(948789),
  l = s(704215),
  c = s(780384),
  d = s(481060),
  _ = s(37234),
  E = s(410030),
  u = s(100527),
  T = s(605236),
  I = s(709158),
  S = s(906739),
  N = s(981631),
  C = s(689938),
  m = s(217443),
  A = s(66094);

function g() {
  let e = (0, I.Z)(u.Z.USER_SETTINGS_GIFT_INVENTORY),
t = (0, S.Z)(),
s = (0, c.wj)((0, E.ZP)()),
i = a.useMemo(() => ({
  backgroundImage: 'url('.concat(t, ')')
}), [t]),
g = a.useCallback(() => {
  (0, _.xf)(), (0, o.uL)(N.Z5c.QUEST_HOME);
}, []),
h = a.useCallback(() => {
  (0, T.EW)(l.z.GIFT_INVENTORY_QUESTS_MOVED_TO_QUEST_HOME);
}, []);
  return !e || (0, T.un)(l.z.GIFT_INVENTORY_QUESTS_MOVED_TO_QUEST_HOME) ? null : (0, n.jsxs)('div', {
className: r()(m.container),
style: i,
children: [
  (0, n.jsx)('div', {
    className: m.buttonWrapper,
    children: (0, n.jsx)(d.CircleIconButton, {
      tooltip: C.Z.Messages.CLOSE,
      color: d.CircleIconButtonColors.SECONDARY,
      size: d.CircleIconButtonSizes.SIZE_24,
      onClick: h,
      icon: (0, n.jsx)(d.CloseSmallIcon, {
        size: 'xs',
        color: 'currentColor',
        className: m.closeIcon
      })
    })
  }),
  (0, n.jsxs)('div', {
    className: m.textContainer,
    children: [
      (0, n.jsxs)('div', {
        className: m.headerContainer,
        children: [
          (0, n.jsx)('img', {
            alt: '',
            src: A,
            className: m.icon
          }),
          (0, n.jsx)(d.Heading, {
            variant: 'heading-lg/bold',
            color: 'always-white',
            children: C.Z.Messages.QUESTS_HOME_MOVED_CALLOUT_TITLE
          })
        ]
      }),
      (0, n.jsx)(d.Text, {
        variant: 'text-md/medium',
        color: 'text-muted',
        children: C.Z.Messages.QUESTS_HOME_MOVED_CALLOUT_DESCRIPTION
      }),
      (0, n.jsx)(d.Button, {
        size: 'large',
        color: s ? d.ButtonColors.BRAND : d.ButtonColors.WHITE,
        className: m.button,
        onClick: g,
        innerClassName: m.innerButton,
        children: (0, n.jsx)(d.Text, {
          variant: 'text-md/medium',
          color: s ? 'always-white' : 'text-normal',
          children: C.Z.Messages.QUESTS_HOME_MOVED_CALLOUT_BUTTON
        })
      })
    ]
  })
]
  });
}