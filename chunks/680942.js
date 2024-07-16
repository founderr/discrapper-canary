var n = s(735250),
  r = s(470079),
  a = s(481060),
  o = s(727637),
  i = s(906732),
  l = s(241553),
  c = s(333867),
  d = s(884697),
  u = s(231338),
  p = s(689938),
  g = s(918259);
let f = {
  dark: [{
  box: '#FFF19E',
  ribbon: '#FF484B'
},
{
  box: '#17B5E2',
  ribbon: '#FFFFFF'
},
{
  box: '#FFE1A6',
  ribbon: '#C29CFF'
},
{
  box: '#60DA81',
  ribbon: '#FFF597'
},
{
  box: '#E4578A',
  ribbon: '#BEC4FF'
},
{
  box: '#AFE0FC',
  ribbon: '#FF9356'
},
{
  box: '#DB6D6D',
  ribbon: '#67DA9C'
}
  ],
  light: [{
  box: '#FFF19E',
  ribbon: '#FF484B'
},
{
  box: '#025D90',
  ribbon: '#70FFF8'
},
{
  box: '#C29CFF',
  ribbon: '#255FA3'
},
{
  box: '#6AC082',
  ribbon: '#DED052'
},
{
  box: '#AC448B',
  ribbon: '#4845B8'
},
{
  box: '#175B82',
  ribbon: '#F9D249'
},
{
  box: '#B54141',
  ribbon: '#026530'
}
  ]
};
t.Z = e => {
  let {
product: t,
returnRef: s,
onSuccess: C,
tooltipDelay: m,
isGiftEasterEggEnabled: _,
disableCustomColor: h = !1
  } = e, {
analyticsLocations: b
  } = (0, i.ZP)(), x = r.useRef(null), I = (0, o.Z)(x), E = h ? u.BR.DARK : u.BR.LIGHT;
  return (0, d.x6)(t) ? null : (0, n.jsx)(a.Tooltip, {
text: p.Z.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER,
delay: m,
children: e => (0, n.jsx)(a.Button, {
  ...e,
  buttonRef: x,
  className: g.giftButton,
  color: h ? a.ButtonColors.BRAND : a.ButtonColors.CUSTOM,
  look: a.Button.Looks.FILLED,
  size: a.ButtonSizes.ICON,
  innerClassName: g.giftButtonInner,
  'aria-label': p.Z.Messages.PREMIUM_GIFTING_BUTTON,
  onClick: e => {
    e.stopPropagation(), (0, c.Z)({
      skuId: t.skuId,
      isGift: !0,
      analyticsLocations: b,
      returnRef: s,
      onClose: null != C ? e => {
        e && C();
      } : void 0
    });
  },
  children: _ ? (0, n.jsx)(l.e, {
    hovered: I,
    isContentDismissed: !0,
    themeOverride: E,
    boxColors: f
  }) : (0, n.jsx)(a.GiftIcon, {
    size: 'md',
    color: 'currentColor'
  })
})
  });
};