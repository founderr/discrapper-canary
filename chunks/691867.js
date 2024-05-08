"use strict";
r.r(t), r.d(t, {
  default: function() {
    return d
  }
}), r("47120");
var a = r("735250"),
  i = r("470079"),
  l = r("442837"),
  n = r("481060"),
  o = r("581612"),
  c = r("91311"),
  s = r("867952");

function d() {
  let e = (0, l.useStateFromStores)([c.default], () => c.default.allWithDescriptions(), [], l.statesWillNeverBeEqual),
    t = i.useMemo(() => e.map(e => {
      let [t, r, i] = e;
      return (0, a.jsx)(n.FormItem, {
        children: (0, a.jsx)(n.FormSwitch, {
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
    children: [(0, a.jsx)(n.Button, {
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