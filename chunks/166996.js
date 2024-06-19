a.d(n, {
  Z: function() {
    return h
  }
}), a(47120), a(610138), a(216116), a(78328), a(815648);
var t = a(735250),
  i = a(470079),
  l = a(120356),
  s = a.n(l),
  r = a(399606),
  c = a(481060),
  o = a(626135),
  d = a(463571),
  u = a(894653),
  g = a(34674),
  m = a(132871),
  _ = a(981631),
  C = a(635463);

function h(e) {
  let {
    currentCategoryId: n,
    className: a,
    countsByCategory: l,
    onView: h
  } = e, p = (0, m.useApplicationDirectoryHistory)(e => e.guildId), x = (0, r.e7)([u.Z], () => u.Z.getCategories()), I = i.useMemo(() => [(0, g.KQ)(), ...x], [x]), R = (0, m.getCurrentView)();
  return (0, t.jsx)(c.TabBar, {
    className: s()(C.container, a),
    selectedItem: n,
    type: "top-pill",
    onItemSelect: e => {
      if (e === n) return;
      let a = I.find(n => n.id === e);
      o.default.track(_.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
        category: a.name,
        category_id: a.id,
        current_page: null == R ? void 0 : R.type,
        guild_id: p
      }), h(a)
    },
    orientation: "vertical",
    children: I.map(e => {
      var a;
      let i = e.id,
        r = e.name,
        o = (0, g.tu)(e),
        u = s()(C.category, {
          [C.activeCategory]: n === i
        }),
        m = new URLSearchParams;
      return m.set("category_id", i.toString()), (0, t.jsx)(c.TabBar.Item, {
        id: i,
        "aria-label": r,
        disableItemStyles: !0,
        children: (0, t.jsxs)(d.Z, {
          href: "".concat(_.Z5c.APPLICATION_DIRECTORY_SEARCH, "?").concat(m),
          className: u,
          children: [(0, t.jsx)(o, {
            className: C.icon,
            color: "currentColor"
          }), (0, t.jsx)(c.Text, {
            variant: "text-md/normal",
            children: r
          }), null != l ? (0, t.jsx)(c.Text, {
            className: C.count,
            variant: "text-md/normal",
            color: "text-muted",
            children: null !== (a = null == l ? void 0 : l[i]) && void 0 !== a ? a : 0
          }) : null]
        })
      }, i)
    })
  })
}