var s = n(735250);
n(470079);
var a = n(120356),
  i = n.n(a),
  r = n(481060),
  l = n(827069);
t.Z = e => {
  let {
    icon: t,
    iconClassName: n,
    header: a,
    description: o
  } = e;
  return (0, s.jsxs)("div", {
    className: l.container,
    children: [(0, s.jsx)("div", {
      className: l.circle,
      children: (0, s.jsx)(t, {
        className: i()(l.icon, n),
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor"
      })
    }), (0, s.jsxs)("div", {
      children: [(0, s.jsx)(r.Heading, {
        variant: "heading-md/bold",
        className: l.header,
        children: (0, s.jsx)(r.HeadingLevel, {
          children: a
        })
      }), (0, s.jsx)(r.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        children: o
      })]
    })]
  })
}