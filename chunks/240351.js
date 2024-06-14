"use strict";
s.r(t);
var n = s("735250");
s("470079");
var a = s("481060"),
  l = s("858719"),
  i = s("838870");
t.default = e => {
  let {
    header: t,
    displayType: s
  } = e, r = (0, l.useActionTotalsForDisplayType)(s);
  return (0, n.jsxs)("div", {
    className: i.counter,
    children: [(0, n.jsx)(a.Heading, {
      variant: "heading-xxl/medium",
      color: r > 0 ? "text-brand" : "text-muted",
      children: (0, n.jsx)(a.HeadingLevel, {
        children: null != r ? r : 0
      })
    }), (0, n.jsx)(a.Text, {
      variant: "text-sm/semibold",
      children: t
    })]
  })
}