s.d(t, {
  Z: function() {
return g;
  }
});
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(704215),
  l = s(780384),
  c = s(481060),
  d = s(37234),
  _ = s(410030),
  E = s(100527),
  u = s(605236),
  T = s(703656),
  I = s(709158),
  S = s(906739),
  N = s(981631),
  C = s(689938),
  m = s(217443),
  A = s(66094);

function g() {
  let e = (0, I.Z)(E.Z.USER_SETTINGS_GIFT_INVENTORY),
t = (0, S.Z)(),
s = (0, l.wj)((0, _.ZP)()),
i = a.useMemo(() => ({
  backgroundImage: 'url('.concat(t, ')')
}), [t]),
g = a.useCallback(() => {
  (0, d.xf)(), (0, T.uL)(N.Z5c.QUEST_HOME);
}, []),
h = a.useCallback(() => {
  (0, u.EW)(o.z.GIFT_INVENTORY_QUESTS_MOVED_TO_QUEST_HOME);
}, []);
  return !e || (0, u.un)(o.z.GIFT_INVENTORY_QUESTS_MOVED_TO_QUEST_HOME) ? null : (0, n.jsxs)('div', {
className: r()(m.container),
style: i,
children: [
  (0, n.jsx)('div', {
    className: m.buttonWrapper,
    children: (0, n.jsx)(c.CircleIconButton, {
      tooltip: C.Z.Messages.CLOSE,
      color: c.CircleIconButtonColors.SECONDARY,
      size: c.CircleIconButtonSizes.SIZE_24,
      onClick: h,
      icon: (0, n.jsx)(c.CloseSmallIcon, {
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
          (0, n.jsx)(c.Heading, {
            variant: 'heading-lg/bold',
            color: 'always-white',
            children: C.Z.Messages.QUESTS_HOME_MOVED_CALLOUT_TITLE
          })
        ]
      }),
      (0, n.jsx)(c.Text, {
        variant: 'text-md/medium',
        color: 'text-muted',
        children: C.Z.Messages.QUESTS_HOME_MOVED_CALLOUT_DESCRIPTION
      }),
      (0, n.jsx)(c.Button, {
        size: 'large',
        color: s ? c.ButtonColors.BRAND : c.ButtonColors.WHITE,
        className: m.button,
        onClick: g,
        innerClassName: m.innerButton,
        children: (0, n.jsx)(c.Text, {
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