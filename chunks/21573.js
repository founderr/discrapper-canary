"use strict";
t.r(r), t.d(r, {
  default: function() {
    return d
  }
}), t("222007");
var a = t("37983"),
  n = t("884691"),
  i = t("446674"),
  l = t("77078"),
  o = t("508815"),
  s = t("916523"),
  c = t("722109");

function d() {
  let e = (0, i.useStateFromStores)([s.default], () => s.default.allWithDescriptions(), [], i.statesWillNeverBeEqual),
    r = n.useMemo(() => e.map(e => {
      let [r, t, n] = e;
      return (0, a.jsx)(l.FormItem, {
        children: (0, a.jsx)(l.FormSwitch, {
          value: t,
          note: r,
          onChange: e => (0, o.toggle)(r, e),
          hideBorder: !0,
          children: n
        })
      }, r)
    }), [e]);
  return (0, a.jsxs)("div", {
    className: c.container,
    children: [(0, a.jsx)(l.Button, {
      onClick: o.clearAll,
      className: c.button,
      fullWidth: !0,
      children: "Clear all"
    }), (0, a.jsx)("div", {
      className: c.rowsContainer,
      children: r
    })]
  })
}