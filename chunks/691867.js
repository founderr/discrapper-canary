t.d(r, {
  Z: function() {
    return d
  }
}), t(47120);
var a = t(735250),
  i = t(470079),
  n = t(442837),
  o = t(481060),
  l = t(581612),
  c = t(91311),
  s = t(133982);

function d() {
  let e = (0, n.e7)([c.Z], () => c.Z.allWithDescriptions(), [], n.pF),
    r = i.useMemo(() => e.map(e => {
      let [r, t, i] = e;
      return (0, a.jsx)(o.FormItem, {
        children: (0, a.jsx)(o.FormSwitch, {
          value: t,
          note: r,
          onChange: e => (0, l.Z)(r, e),
          hideBorder: !0,
          children: i
        })
      }, r)
    }), [e]);
  return (0, a.jsxs)("div", {
    className: s.container,
    children: [(0, a.jsx)(o.Button, {
      onClick: l.q,
      className: s.button,
      fullWidth: !0,
      children: "Clear all"
    }), (0, a.jsx)("div", {
      className: s.rowsContainer,
      children: r
    })]
  })
}