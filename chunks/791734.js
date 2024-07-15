n.d(t, {
  Z: function() {
return u;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(338545),
  o = n(481060),
  c = n(689938),
  d = n(278560);

function u(e) {
  let {
icon: t,
title: n,
selectedTab: a,
tabs: u,
onTabSelect: _,
searchQuery: E,
onSearch: h,
onSearchClear: I,
onSearchSubmit: m,
scrollPosition: g,
showSearch: p = !0
  } = e, T = c.Z.Messages.GLOBAL_DISCOVERY_SEARCH_PLACEHOLDER.format({
title: n
  }), S = s.useCallback(e => {
'Enter' === e.key && (null == m || m(null != E ? E : ''));
  }, [
m,
E
  ]);
  return (0, i.jsx)('div', {
className: d.container,
children: (0, i.jsxs)('div', {
  className: d.innerContainer,
  children: [
    (0, i.jsx)(l.animated.div, {
      className: d.backdrop,
      style: {
        opacity: null == g ? void 0 : g.to([
          0,
          100
        ], [
          0,
          1
        ])
      }
    }),
    (0, i.jsx)('div', {
      className: d.icon,
      children: t
    }),
    (0, i.jsx)(o.TabBar, {
      type: 'top',
      selectedItem: a,
      onItemSelect: _,
      className: d.tabs,
      children: u.map(e => (0, i.jsx)(o.TabBar.Item, {
        id: e,
        className: r()(d.tab, {
          [d.selected]: a.id === e.id
        }),
        children: e.label
      }, e.id))
    }),
    p && null != h ? (0, i.jsx)('div', {
      className: d.search,
      children: (0, i.jsx)(o.SearchBar, {
        placeholder: T,
        query: null != E ? E : '',
        onChange: h,
        onClear: I,
        onKeyDown: S
      })
    }) : null
  ]
})
  });
}