i.d(t, {
  Z: function() {
    return C
  }
}), i(47120), i(610138), i(216116), i(78328), i(815648);
var n = i(735250),
  s = i(470079),
  a = i(120356),
  r = i.n(a),
  l = i(399606),
  o = i(481060),
  c = i(626135),
  d = i(463571),
  u = i(894653),
  h = i(34674),
  m = i(132871),
  p = i(147890),
  _ = i(981631),
  x = i(689938),
  g = i(942320);

function C(e) {
  let {
    className: t
  } = e, i = (0, m.useApplicationDirectoryHistory)(e => e.guildId), a = (0, l.e7)([u.Z], () => u.Z.getCategories()), C = s.useMemo(() => [(0, h.KQ)(), ...a], [a]), I = (0, m.getCurrentView)(), f = e => {
    let t = C.find(t => t.id === e);
    c.default.track(_.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
      category: t.name,
      category_id: t.id,
      current_page: null == I ? void 0 : I.type,
      guild_id: i
    }), (0, p.goToCategory)({
      categoryId: t.id
    })
  };
  return (0, n.jsx)("nav", {
    className: r()(g.container, t),
    children: C.map(e => {
      let t = e.id,
        i = e.name,
        s = (0, h.tu)(e),
        a = new URLSearchParams;
      return a.set("category_id", t.toString()), (0, n.jsx)(d.Z, {
        href: "".concat(_.Z5c.APPLICATION_DIRECTORY_SEARCH, "?").concat(a),
        children: (0, n.jsxs)(o.Clickable, {
          className: g.category,
          "aria-label": x.Z.Messages.APP_DIRECTORY_CATEGORY_BUTTON_A11Y_LABEL.format({
            categoryName: i
          }),
          onClick: () => f(t),
          children: [(0, n.jsx)(s, {
            className: g.icon,
            size: "md",
            color: "currentColor"
          }), (0, n.jsx)(o.Text, {
            variant: "text-md/normal",
            children: i
          })]
        })
      }, t)
    })
  })
}