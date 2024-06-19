a.d(n, {
  Z: function() {
    return c
  }
});
var s = a(735250);
a(470079);
var l = a(120356),
  t = a.n(l),
  r = a(481060),
  i = a(259580),
  o = a(880912);

function c(e) {
  let {
    options: n,
    onClick: a,
    className: l,
    optionClassName: c,
    hideCaret: u
  } = e;
  return (0, s.jsx)("div", {
    className: t()(o.root, l),
    children: n.map((e, n) => (0, s.jsxs)(r.Clickable, {
      onClick: () => a(e),
      className: t()(o.option, c),
      children: [(0, s.jsx)(r.Text, {
        className: o.text,
        color: "none",
        variant: "text-md/normal",
        children: e.label
      }), !(null == u ? void 0 : u(e)) && (0, s.jsx)(i.Z, {
        className: o.caret,
        direction: i.Z.Directions.RIGHT
      })]
    }, n))
  })
}