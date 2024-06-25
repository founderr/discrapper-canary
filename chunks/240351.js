var n = s(735250);
s(470079);
var a = s(481060),
  i = s(858719),
  r = s(667633);
t.Z = e => {
  let {
    header: t,
    displayType: s
  } = e, l = (0, i.C7)(s);
  return (0, n.jsxs)("div", {
    className: r.counter,
    children: [(0, n.jsx)(a.Heading, {
      variant: "heading-xxl/medium",
      color: l > 0 ? "text-brand" : "text-muted",
      children: (0, n.jsx)(a.HeadingLevel, {
        children: null != l ? l : 0
      })
    }), (0, n.jsx)(a.Text, {
      variant: "text-sm/semibold",
      children: t
    })]
  })
}