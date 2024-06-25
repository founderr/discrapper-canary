var n = s(735250);
s(470079);
var a = s(120356),
  i = s.n(a),
  r = s(481060),
  l = s(827069);
t.Z = e => {
  let {
    icon: t,
    iconClassName: s,
    header: a,
    description: o
  } = e;
  return (0, n.jsxs)("div", {
    className: l.container,
    children: [(0, n.jsx)("div", {
      className: l.circle,
      children: (0, n.jsx)(t, {
        className: i()(l.icon, s),
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor"
      })
    }), (0, n.jsxs)("div", {
      children: [(0, n.jsx)(r.Heading, {
        variant: "heading-md/bold",
        className: l.header,
        children: (0, n.jsx)(r.HeadingLevel, {
          children: a
        })
      }), (0, n.jsx)(r.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        children: o
      })]
    })]
  })
}