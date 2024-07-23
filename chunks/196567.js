s.d(n, {
  Z: function() {
return c;
  }
});
var l = s(735250);
s(470079);
var t = s(120356),
  i = s.n(t),
  a = s(481060),
  r = s(96247);

function c(e) {
  let {
className: n,
copy: s,
bannerImage: t,
textColor: c = 'always-white',
hideGiftIcon: o = !1
  } = e;
  return (0, l.jsxs)('div', {
className: i()(r.bannerContainer, n),
children: [
  null == t ? null : (0, l.jsx)('img', {
    alt: '',
    className: r.banner,
    src: t
  }),
  (0, l.jsxs)('div', {
    className: r.textContainer,
    children: [
      !1 === o && (0, l.jsx)(a.GiftIcon, {
        size: 'md',
        color: 'currentColor',
        className: r.giftIcon
      }),
      (0, l.jsx)(a.Heading, {
        className: i()(r.textHeader, {
          [r.textHeaderWithGiftIcon]: !o
        }),
        color: c,
        variant: 'eyebrow',
        children: s
      })
    ]
  })
]
  });
}