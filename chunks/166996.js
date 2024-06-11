"use strict";
a.r(t), a.d(t, {
  default: function() {
    return C
  }
}), a("47120"), a("610138"), a("216116"), a("78328"), a("815648");
var l = a("735250"),
  i = a("470079"),
  n = a("120356"),
  s = a.n(n),
  r = a("399606"),
  c = a("481060"),
  u = a("626135"),
  d = a("463571"),
  o = a("894653"),
  g = a("34674"),
  m = a("132871"),
  _ = a("981631"),
  p = a("811167");

function C(e) {
  let {
    currentCategoryId: t,
    className: a,
    countsByCategory: n,
    onView: C
  } = e, h = (0, m.useApplicationDirectoryHistory)(e => e.guildId), f = (0, r.useStateFromStores)([o.default], () => o.default.getCategories()), A = i.useMemo(() => [(0, g.getAllCategory)(), ...f], [f]), I = (0, m.getCurrentView)();
  return (0, l.jsx)(c.TabBar, {
    className: s()(p.container, a),
    selectedItem: t,
    type: "top-pill",
    onItemSelect: e => {
      if (e === t) return;
      let a = A.find(t => t.id === e);
      u.default.track(_.AnalyticEvents.APP_DIRECTORY_CATEGORY_CLICKED, {
        category: a.name,
        category_id: a.id,
        current_page: null == I ? void 0 : I.type,
        guild_id: h
      }), C(a)
    },
    orientation: "vertical",
    children: A.map(e => {
      var a;
      let i = e.id,
        r = e.name,
        u = (0, g.getCategoryIcon)(e),
        o = s()(p.category, {
          [p.activeCategory]: t === i
        }),
        m = new URLSearchParams;
      return m.set("category_id", i.toString()), (0, l.jsx)(c.TabBar.Item, {
        id: i,
        "aria-label": r,
        disableItemStyles: !0,
        children: (0, l.jsxs)(d.default, {
          href: "".concat(_.Routes.APPLICATION_DIRECTORY_SEARCH, "?").concat(m),
          className: o,
          children: [(0, l.jsx)(u, {
            className: p.icon,
            width: "24",
            height: "24"
          }), (0, l.jsx)(c.Text, {
            variant: "text-md/normal",
            children: r
          }), null != n ? (0, l.jsx)(c.Text, {
            className: p.count,
            variant: "text-md/normal",
            color: "text-muted",
            children: null !== (a = null == n ? void 0 : n[i]) && void 0 !== a ? a : 0
          }) : null]
        })
      }, i)
    })
  })
}