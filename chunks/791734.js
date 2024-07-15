n.d(t, {
  Z: function() {
return c;
  }
});
var i = n(735250);
n(470079);
var s = n(120356),
  a = n.n(s),
  r = n(338545),
  l = n(481060),
  o = n(278560);

function c(e) {
  let {
selectedTab: t,
tabs: n,
onTabSelect: s,
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
    onItemSelect: s,
    className: o.tabs,
    children: n.map(e => (0, i.jsx)(l.TabBar.Item, {
      id: e,
      className: a()(o.tab, {
        [o.selected]: t.id === e.id
      }),
      children: e.label
    }, e.id))
  }),
  u
]
  });
}