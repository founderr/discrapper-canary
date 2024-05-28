"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("481060"),
  l = s("858719"),
  i = s("838870");
t.default = e => {
  let {
    header: t,
    displayType: s
  } = e, r = (0, l.useActionTotalsForDisplayType)(s);
  return (0, a.jsxs)("div", {
    className: i.counter,
    children: [(0, a.jsx)(n.Heading, {
      variant: "heading-xxl/medium",
      color: r > 0 ? "text-brand" : "text-muted",
      children: (0, a.jsx)(n.HeadingLevel, {
        children: null != r ? r : 0
      })
    }), (0, a.jsx)(n.Text, {
      variant: "text-sm/semibold",
      children: t
    })]
  })
}