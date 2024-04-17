"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("689938"),
  i = n("597338");
t.default = e => {
  let {
    stepNum: t,
    title: n,
    subtitle: r
  } = e;
  return (0, a.jsx)("div", {
    className: i.slideContent,
    children: (0, a.jsx)("div", {
      className: i.twoColumn,
      children: (0, a.jsxs)("div", {
        children: [(0, a.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          className: i.stepNum,
          children: l.default.Messages.STEP_NUMBER.format({
            number: t
          })
        }), (0, a.jsx)(s.Heading, {
          variant: "heading-xxl/medium",
          className: i.introTitle,
          children: n
        }), (0, a.jsx)(s.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          className: i.subtitle,
          children: r
        })]
      })
    })
  })
}