t.d(s, {
  Z: function() {
return g;
  }
});
var n = t(735250),
  a = t(470079),
  i = t(120356),
  r = t.n(i),
  o = t(704215),
  l = t(780384),
  c = t(481060),
  d = t(37234),
  _ = t(410030),
  E = t(605236),
  u = t(703656),
  I = t(709158),
  T = t(906739),
  S = t(46140),
  N = t(981631),
  C = t(689938),
  m = t(217443),
  A = t(66094);

function g() {
  let e = (0, I.Z)(S.dr.USER_SETTINGS_GIFT_INVENTORY),
s = (0, T.Z)(),
t = (0, l.wj)((0, _.ZP)()),
i = a.useMemo(() => ({
  backgroundImage: 'url('.concat(s, ')')
}), [s]),
g = a.useCallback(() => {
  (0, d.xf)(), (0, u.uL)(N.Z5c.QUEST_HOME);
}, []),
O = a.useCallback(() => {
  (0, E.EW)(o.z.GIFT_INVENTORY_QUESTS_MOVED_TO_QUEST_HOME);
}, []);
  return !e || (0, E.un)(o.z.GIFT_INVENTORY_QUESTS_MOVED_TO_QUEST_HOME) ? null : (0, n.jsxs)('div', {
className: r()(m.container),
style: i,
children: [
  (0, n.jsx)('div', {
    className: m.buttonWrapper,
    children: (0, n.jsx)(c.CircleIconButton, {
      tooltip: C.Z.Messages.CLOSE,
      color: c.CircleIconButtonColors.SECONDARY,
      size: c.CircleIconButtonSizes.SIZE_24,
      onClick: O,
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
        children: C.Z.Messages.QUESTS_HOME_MOVED_CALLOUT_DESCRIPTION_V2
      }),
      (0, n.jsx)(c.Button, {
        size: 'large',
        color: t ? c.ButtonColors.BRAND : c.ButtonColors.WHITE,
        className: m.button,
        onClick: g,
        innerClassName: m.innerButton,
        children: (0, n.jsx)(c.Text, {
          variant: 'text-md/medium',
          color: t ? 'always-white' : 'text-normal',
          children: C.Z.Messages.QUESTS_HOME_MOVED_CALLOUT_BUTTON
        })
      })
    ]
  })
]
  });
}