n.d(s, {
  Z: function() {
return a;
  }
});
var i = n(735250);
n(470079);
var l = n(120356),
  t = n.n(l),
  o = n(629738);

function a(e) {
  let {
icon: s,
description: n,
iconClassName: l,
color: a
  } = e;
  return (0, i.jsxs)('div', {
className: o.perkRow,
children: [
  (0, i.jsx)('div', {
    className: o.perkIconContainer,
    children: (0, i.jsx)(s, {
      color: null != a ? a : 'currentColor',
      className: t()(o.perkIcon, l)
    })
  }),
  (0, i.jsx)('div', {
    className: o.perkDescription,
    children: n
  })
]
  });
}