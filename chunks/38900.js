var n = s(735250);
s(470079);
var r = s(120356),
  a = s.n(r),
  o = s(425391),
  i = s(995184),
  l = s(87203),
  c = s(445968);
let d = () => 4 * Math.random() + 8,
  u = [
d(),
d(),
d()
  ];
t.Z = () => (0, n.jsx)('div', {
  className: o.skeletons,
  children: u.map(e => (0, n.jsxs)('div', {
className: o.cardsContainer,
children: [
  (0, n.jsx)('div', {
    className: a()(l.skeleton, i.shopBanner),
    children: (0, n.jsx)('div', {
      className: l.bannerBody
    })
  }),
  Array.from({
    length: e
  }, (e, t) => t).map(e => (0, n.jsx)('div', {
    className: a()(l.skeleton, c.shopCard),
    children: (0, n.jsxs)('div', {
      className: l.cardBody,
      children: [
        (0, n.jsx)('div', {
          className: l.cardAvatar
        }),
        (0, n.jsx)('div', {
          className: l.cardTitle
        }),
        (0, n.jsx)('div', {
          className: l.cardDescription
        }),
        (0, n.jsx)('div', {
          className: l.cardSummary
        })
      ]
    })
  }, e))
]
  }, e))
});