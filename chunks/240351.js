"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("481060"),
  i = n("858719"),
  l = n("838870");
t.default = e => {
  let {
    header: t,
    displayType: n
  } = e, r = (0, i.useActionTotalsForDisplayType)(n);
  return (0, a.jsxs)("div", {
    className: l.counter,
    children: [(0, a.jsx)(s.Heading, {
      variant: "heading-xxl/medium",
      color: r > 0 ? "text-brand" : "text-muted",
      children: (0, a.jsx)(s.HeadingLevel, {
        children: null != r ? r : 0
      })
    }), (0, a.jsx)(s.Text, {
      variant: "text-sm/semibold",
      children: t
    })]
  })
}