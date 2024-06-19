i.d(n, {
  Z: function() {
    return c
  }
});
var t = i(735250);
i(470079);
var l = i(120356),
  a = i.n(l),
  s = i(481060),
  r = i(665692),
  o = i(75169);

function c(e) {
  let {
    commands: n,
    className: i
  } = e;
  return (0, t.jsx)("div", {
    className: a()(o.list, i),
    children: n.map(e => (0, t.jsxs)("div", {
      className: o.row,
      children: [(0, t.jsxs)(s.Text, {
        className: o.commandName,
        variant: "text-md/semibold",
        color: "header-primary",
        children: [r.GI, e.displayName]
      }), (0, t.jsx)(s.Text, {
        variant: "text-md/normal",
        children: e.displayDescription
      })]
    }, e.id))
  })
}