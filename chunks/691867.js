"use strict";
r.r(t), r.d(t, {
  default: function() {
    return d
  }
}), r("47120");
var a = r("735250"),
  i = r("470079"),
  n = r("442837"),
  l = r("481060"),
  o = r("581612"),
  c = r("91311"),
  s = r("987113");

function d() {
  let e = (0, n.useStateFromStores)([c.default], () => c.default.allWithDescriptions(), [], n.statesWillNeverBeEqual),
    t = i.useMemo(() => e.map(e => {
      let [t, r, i] = e;
      return (0, a.jsx)(l.FormItem, {
        children: (0, a.jsx)(l.FormSwitch, {
          value: r,
          note: t,
          onChange: e => (0, o.toggle)(t, e),
          hideBorder: !0,
          children: i
        })
      }, t)
    }), [e]);
  return (0, a.jsxs)("div", {
    className: s.container,
    children: [(0, a.jsx)(l.Button, {
      onClick: o.clearAll,
      className: s.button,
      fullWidth: !0,
      children: "Clear all"
    }), (0, a.jsx)("div", {
      className: s.rowsContainer,
      children: t
    })]
  })
}