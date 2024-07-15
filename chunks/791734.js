n.d(t, {
  Z: function() {
return c;
  }
});
var i = n(735250);
n(470079);
var a = n(120356),
  s = n.n(a),
  r = n(338545),
  l = n(481060),
  o = n(278560);

function c(e) {
  let {
selectedTab: t,
tabs: n,
onTabSelect: a,
backgroundStyle: c,
leading: d,
trailing: u
  } = e;
  return (0, i.jsxs)('div', {
className: o.container,
children: [
  (0, i.jsx)(r.animated.div, {
    className: o.backdrop,
    style: c
  }),
  d,
  (0, i.jsx)(l.TabBar, {
    type: 'top',
    selectedItem: t,
    onItemSelect: a,
    className: o.tabs,
    children: n.map(e => (0, i.jsx)(l.TabBar.Item, {
      id: e,
      className: s()(o.tab, {
        [o.selected]: t.id === e.id
      }),
      children: e.label
    }, e.id))
  }),
  u
]
  });
}