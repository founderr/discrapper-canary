var s = n(735250);
n(470079);
var i = n(481060),
  a = n(858719),
  l = n(667633);
t.Z = e => {
  let {
    header: t,
    displayType: n
  } = e, r = (0, a.C7)(n);
  return (0, s.jsxs)("div", {
    className: l.counter,
    children: [(0, s.jsx)(i.Heading, {
      variant: "heading-xxl/medium",
      color: r > 0 ? "text-brand" : "text-muted",
      children: (0, s.jsx)(i.HeadingLevel, {
        children: null != r ? r : 0
      })
    }), (0, s.jsx)(i.Text, {
      variant: "text-sm/semibold",
      children: t
    })]
  })
}