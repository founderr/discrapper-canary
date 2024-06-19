var s = n(735250);
n(470079);
var a = n(120356),
  i = n.n(a),
  l = n(481060),
  r = n(827069);
t.Z = e => {
  let {
    icon: t,
    iconClassName: n,
    header: a,
    description: o
  } = e;
  return (0, s.jsxs)("div", {
    className: r.container,
    children: [(0, s.jsx)("div", {
      className: r.circle,
      children: (0, s.jsx)(t, {
        className: i()(r.icon, n),
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor"
      })
    }), (0, s.jsxs)("div", {
      children: [(0, s.jsx)(l.Heading, {
        variant: "heading-md/bold",
        className: r.header,
        children: (0, s.jsx)(l.HeadingLevel, {
          children: a
        })
      }), (0, s.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        children: o
      })]
    })]
  })
}