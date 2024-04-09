"use strict";
r.r(t), r.d(t, {
  default: function() {
    return d
  }
}), r("47120");
var a = r("735250"),
  n = r("470079"),
  i = r("442837"),
  l = r("481060"),
  o = r("581612"),
  s = r("91311"),
  c = r("998699");

function d() {
  let e = (0, i.useStateFromStores)([s.default], () => s.default.allWithDescriptions(), [], i.statesWillNeverBeEqual),
    t = n.useMemo(() => e.map(e => {
      let [t, r, n] = e;
      return (0, a.jsx)(l.FormItem, {
        children: (0, a.jsx)(l.FormSwitch, {
          value: r,
          note: t,
          onChange: e => (0, o.toggle)(t, e),
          hideBorder: !0,
          children: n
        })
      }, t)
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
      children: t
    })]
  })
}