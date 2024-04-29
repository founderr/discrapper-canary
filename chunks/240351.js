"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("858719"),
  i = a("838870");
t.default = e => {
  let {
    header: t,
    displayType: a
  } = e, r = (0, l.useActionTotalsForDisplayType)(a);
  return (0, n.jsxs)("div", {
    className: i.counter,
    children: [(0, n.jsx)(s.Heading, {
      variant: "heading-xxl/medium",
      color: r > 0 ? "text-brand" : "text-muted",
      children: (0, n.jsx)(s.HeadingLevel, {
        children: null != r ? r : 0
      })
    }), (0, n.jsx)(s.Text, {
      variant: "text-sm/semibold",
      children: t
    })]
  })
}