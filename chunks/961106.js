"use strict";
i.r(t), i.d(t, {
  default: function() {
    return _
  }
}), i("47120"), i("610138"), i("216116"), i("78328"), i("815648");
var n = i("735250"),
  a = i("470079"),
  l = i("120356"),
  s = i.n(l),
  r = i("399606"),
  o = i("481060"),
  c = i("626135"),
  d = i("463571"),
  u = i("894653"),
  h = i("34674"),
  p = i("132871"),
  m = i("147890"),
  f = i("981631"),
  g = i("689938"),
  C = i("125129");

function _(e) {
  let {
    className: t
  } = e, i = (0, p.useApplicationDirectoryHistory)(e => e.guildId), l = (0, r.useStateFromStores)([u.default], () => u.default.getCategories()), _ = a.useMemo(() => [(0, h.getAllCategory)(), ...l], [l]), I = (0, p.getCurrentView)(), x = e => {
    let t = _.find(t => t.id === e);
    c.default.track(f.AnalyticEvents.APP_DIRECTORY_CATEGORY_CLICKED, {
      category: t.name,
      category_id: t.id,
      current_page: null == I ? void 0 : I.type,
      guild_id: i
    }), (0, m.goToCategory)({
      categoryId: t.id
    })
  };
  return (0, n.jsx)("nav", {
    className: s()(C.container, t),
    children: _.map(e => {
      let t = e.id,
        i = e.name,
        a = (0, h.getCategoryIcon)(e),
        l = new URLSearchParams;
      return l.set("category_id", t.toString()), (0, n.jsx)(d.default, {
        href: "".concat(f.Routes.APPLICATION_DIRECTORY_SEARCH, "?").concat(l),
        children: (0, n.jsxs)(o.Clickable, {
          className: C.category,
          "aria-label": g.default.Messages.APP_DIRECTORY_CATEGORY_BUTTON_A11Y_LABEL.format({
            categoryName: i
          }),
          onClick: () => x(t),
          children: [(0, n.jsx)(a, {
            className: C.icon,
            width: "24",
            height: "24"
          }), (0, n.jsx)(o.Text, {
            variant: "text-md/normal",
            children: i
          })]
        })
      }, t)
    })
  })
}