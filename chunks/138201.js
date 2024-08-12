n.d(s, {
  Z: function() {
return r;
  }
});
var i = n(735250);
n(470079);
var l = n(120356),
  t = n.n(l),
  o = n(246618);

function r(e) {
  let {
icon: s,
description: n,
iconClassName: l,
color: r
  } = e;
  return (0, i.jsxs)('div', {
className: o.perkRow,
children: [
  (0, i.jsx)('div', {
    className: o.perkIconContainer,
    children: (0, i.jsx)(s, {
      color: null != r ? r : 'currentColor',
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