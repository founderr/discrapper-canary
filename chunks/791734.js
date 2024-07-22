n.d(t, {
  Z: function() {
return d;
  }
});
var i = n(735250);
n(470079);
var s = n(120356),
  a = n.n(s),
  r = n(780384),
  l = n(481060),
  o = n(410030),
  c = n(278560);

function d(e) {
  let {
selectedTab: t,
tabs: n,
onTabSelect: s
  } = e, d = (0, o.ZP)(), u = (0, r.wj)(d);
  return (0, i.jsx)(l.TabBar, {
type: 'top',
selectedItem: t,
onItemSelect: s,
className: c.tabs,
children: n.map(e => {
  let n = t === e.id;
  return (0, i.jsx)(l.TabBar.Item, {
    id: e.id,
    color: 'text-muted',
    'aria-label': e.label,
    className: a()(c.tab, {
      [c.selected]: n
    }),
    children: (0, i.jsx)(l.Text, {
      variant: 'text-md/medium',
      color: n ? 'header-primary' : u ? 'text-muted' : 'header-primary',
      children: e.label
    })
  }, e.id);
})
  });
}