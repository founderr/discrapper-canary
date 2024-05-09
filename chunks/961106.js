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
  f = i("147890"),
  m = i("981631"),
  C = i("689938"),
  x = i("125129");

function _(e) {
  let {
    className: t
  } = e, i = (0, p.useApplicationDirectoryHistory)(e => e.guildId), l = (0, r.useStateFromStores)([u.default], () => u.default.getCategories()), _ = a.useMemo(() => [(0, h.getAllCategory)(), ...l], [l]), g = (0, p.getCurrentView)(), I = e => {
    let t = _.find(t => t.id === e);
    c.default.track(m.AnalyticEvents.APP_DIRECTORY_CATEGORY_CLICKED, {
      category: t.name,
      category_id: t.id,
      current_page: null == g ? void 0 : g.type,
      guild_id: i
    }), (0, f.goToCategory)({
      categoryId: t.id
    })
  };
  return (0, n.jsx)("nav", {
    className: s()(x.container, t),
    children: _.map(e => {
      let t = e.id,
        i = e.name,
        a = (0, h.getCategoryIcon)(e),
        l = new URLSearchParams;
      return l.set("category_id", t.toString()), (0, n.jsx)(d.default, {
        href: "".concat(m.Routes.APPLICATION_DIRECTORY_SEARCH, "?").concat(l),
        children: (0, n.jsxs)(o.Clickable, {
          className: x.category,
          "aria-label": C.default.Messages.APP_DIRECTORY_CATEGORY_BUTTON_A11Y_LABEL.format({
            categoryName: i
          }),
          onClick: () => I(t),
          children: [(0, n.jsx)(a, {
            className: x.icon,
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