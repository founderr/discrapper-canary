var s = n(735250);
n(470079);
var a = n(481060),
  i = n(858719),
  l = n(667633);
t.Z = e => {
  let {
    header: t,
    displayType: n
  } = e, r = (0, i.C7)(n);
  return (0, s.jsxs)("div", {
    className: l.counter,
    children: [(0, s.jsx)(a.Heading, {
      variant: "heading-xxl/medium",
      color: r > 0 ? "text-brand" : "text-muted",
      children: (0, s.jsx)(a.HeadingLevel, {
        children: null != r ? r : 0
      })
    }), (0, s.jsx)(a.Text, {
      variant: "text-sm/semibold",
      children: t
    })]
  })
}