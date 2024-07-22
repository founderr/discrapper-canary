n.d(t, {
  Z: function() {
return r;
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  a = n(689938);

function r(e) {
  let {
tabs: t,
selectedTab: n,
onTabSelect: r,
onClose: l
  } = e;
  return (0, i.jsx)(s.Menu, {
navId: 'global-discovery-tabs-overflow-menu',
'aria-label': a.Z.Messages.GLOBAL_DISCOVERY_MORE_MENU_A11Y,
hideScroller: !0,
onClose: l,
onSelect: l,
children: (0, i.jsx)(s.MenuGroup, {
  children: t.map(e => {
    let {
      id: t,
      label: a
    } = e;
    return (0, i.jsx)(s.MenuItem, {
      id: t,
      label: a,
      icon: t === n ? s.CircleCheckIcon : void 0,
      action: () => r(t)
    }, t);
  })
}, 'overflow-tabs')
  });
}