"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("689938"),
  i = a("418571");
t.default = e => {
  let {
    stepNum: t,
    title: a,
    subtitle: r
  } = e;
  return (0, n.jsx)("div", {
    className: i.slideContent,
    children: (0, n.jsx)("div", {
      className: i.twoColumn,
      children: (0, n.jsxs)("div", {
        children: [(0, n.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          className: i.stepNum,
          children: l.default.Messages.STEP_NUMBER.format({
            number: t
          })
        }), (0, n.jsx)(s.Heading, {
          variant: "heading-xxl/medium",
          className: i.introTitle,
          children: a
        }), (0, n.jsx)(s.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          className: i.subtitle,
          children: r
        })]
      })
    })
  })
}