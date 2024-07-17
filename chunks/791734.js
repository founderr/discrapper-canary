n.d(t, {
  Z: function() {
return u;
  }
});
var i = n(735250);
n(470079);
var s = n(120356),
  a = n.n(s),
  r = n(338545),
  l = n(780384),
  o = n(481060),
  c = n(410030),
  d = n(278560);

function u(e) {
  let {
selectedTab: t,
tabs: n,
onTabSelect: s,
backgroundStyle: u,
leading: _,
trailing: E,
tabColor: h,
selectedTabColor: I
  } = e, m = (0, l.wj)((0, c.ZP)()), g = null != I ? I : m ? 'text-muted' : 'header-primary';
  return (0, i.jsxs)('div', {
className: d.container,
children: [
  (0, i.jsx)(r.animated.div, {
    className: d.backdrop,
    style: u
  }),
  _,
  (0, i.jsx)(o.TabBar, {
    type: 'top',
    selectedItem: t,
    onItemSelect: s,
    className: d.tabs,
    children: n.map(e => {
      let n = t === e.id,
        s = n ? g : null != h ? h : 'header-primary';
      return (0, i.jsx)(o.TabBar.Item, {
        id: e.id,
        color: h,
        'aria-label': e.label,
        className: a()(d.tab, {
          [d.selected]: n
        }),
        children: (0, i.jsx)(o.Text, {
          variant: 'text-md/medium',
          color: s,
          children: e.label
        })
      }, e.id);
    })
  }),
  E
]
  });
}