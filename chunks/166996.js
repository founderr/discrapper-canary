n.d(a, {
  Z: function() {
    return h
  }
}), n(47120), n(610138), n(216116), n(78328), n(815648);
var t = n(735250),
  i = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(399606),
  c = n(481060),
  o = n(626135),
  d = n(463571),
  u = n(894653),
  g = n(34674),
  m = n(132871),
  _ = n(981631),
  C = n(635463);

function h(e) {
  let {
    currentCategoryId: a,
    className: n,
    countsByCategory: l,
    onView: h
  } = e, p = (0, m.useApplicationDirectoryHistory)(e => e.guildId), x = (0, r.e7)([u.Z], () => u.Z.getCategories()), R = i.useMemo(() => [(0, g.KQ)(), ...x], [x]), I = (0, m.getCurrentView)();
  return (0, t.jsx)(c.TabBar, {
    className: s()(C.container, n),
    selectedItem: a,
    type: "top-pill",
    onItemSelect: e => {
      if (e === a) return;
      let n = R.find(a => a.id === e);
      o.default.track(_.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
        category: n.name,
        category_id: n.id,
        current_page: null == I ? void 0 : I.type,
        guild_id: p
      }), h(n)
    },
    orientation: "vertical",
    children: R.map(e => {
      var n;
      let i = e.id,
        r = e.name,
        o = (0, g.tu)(e),
        u = s()(C.category, {
          [C.activeCategory]: a === i
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
            children: null !== (n = null == l ? void 0 : l[i]) && void 0 !== n ? n : 0
          }) : null]
        })
      }, i)
    })
  })
}