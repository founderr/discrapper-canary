n.d(s, {
  Z: function() {
return a;
  }
});
var i = n(735250);
n(470079);
var t = n(120356),
  l = n.n(t),
  o = n(629738);

function a(e) {
  let {
icon: s,
description: n,
iconClassName: t,
color: a
  } = e;
  return (0, i.jsxs)('div', {
className: o.perkRow,
children: [
  (0, i.jsx)('div', {
    className: o.perkIconContainer,
    children: (0, i.jsx)(s, {
      color: null != a ? a : 'currentColor',
      className: l()(o.perkIcon, t)
    })
  }),
  (0, i.jsx)('div', {
    className: o.perkDescription,
    children: n
  })
]
  });
}