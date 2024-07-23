t.d(s, {
  Z: function() {
return h;
  }
});
var n = t(735250),
  a = t(470079),
  i = t(120356),
  r = t.n(i),
  o = t(948789),
  l = t(704215),
  c = t(780384),
  d = t(481060),
  _ = t(37234),
  E = t(410030),
  u = t(100527),
  T = t(605236),
  I = t(709158),
  S = t(906739),
  N = t(981631),
  C = t(689938),
  m = t(74242),
  A = t(66094);

function h() {
  let e = (0, I.Z)(u.Z.USER_SETTINGS_GIFT_INVENTORY),
s = (0, S.Z)(),
t = (0, c.wj)((0, E.ZP)()),
i = a.useMemo(() => ({
  backgroundImage: 'url('.concat(s, ')')
}), [s]),
h = a.useCallback(() => {
  (0, _.xf)(), (0, o.uL)(N.Z5c.QUEST_HOME);
}, []),
g = a.useCallback(() => {
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
      onClick: g,
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
        color: t ? d.ButtonColors.BRAND : d.ButtonColors.WHITE,
        className: m.button,
        onClick: h,
        innerClassName: m.innerButton,
        children: (0, n.jsx)(d.Text, {
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