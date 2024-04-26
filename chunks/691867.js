"use strict";
t.r(r), t.d(r, {
  default: function() {
    return d
  }
}), t("47120");
var a = t("735250"),
  i = t("470079"),
  l = t("442837"),
  n = t("481060"),
  o = t("581612"),
  c = t("91311"),
  s = t("867952");

function d() {
  let e = (0, l.useStateFromStores)([c.default], () => c.default.allWithDescriptions(), [], l.statesWillNeverBeEqual),
    r = i.useMemo(() => e.map(e => {
      let [r, t, i] = e;
      return (0, a.jsx)(n.FormItem, {
        children: (0, a.jsx)(n.FormSwitch, {
          value: t,
          note: r,
          onChange: e => (0, o.toggle)(r, e),
          hideBorder: !0,
          children: i
        })
      }, r)
    }), [e]);
  return (0, a.jsxs)("div", {
    className: s.container,
    children: [(0, a.jsx)(n.Button, {
      onClick: o.clearAll,
      className: s.button,
      fullWidth: !0,
      children: "Clear all"
    }), (0, a.jsx)("div", {
      className: s.rowsContainer,
      children: r
    })]
  })
}