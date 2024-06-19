t.d(n, {
  Z: function() {
    return c
  }
});
var i = t(735250),
  s = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(481060),
  o = t(875078);

function c(e) {
  let {
    children: n,
    icon: t,
    title: l
  } = e;
  return (0, i.jsxs)("header", {
    className: o.header,
    children: [(0, i.jsxs)("div", {
      className: o.name,
      children: [s.cloneElement(t, {
        className: a()(t.props.className, o.icon),
        height: 24,
        width: 24
      }), (0, i.jsx)(r.Heading, {
        variant: "heading-md/semibold",
        className: o.title,
        children: l
      })]
    }), n]
  })
}