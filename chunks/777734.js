"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("481060"),
  i = n("886722");
let r = s.forwardRef(function(e, t) {
  let {
    title: n,
    subtitle: s,
    icon: r
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: i.sectionHeader,
      children: [(0, a.jsxs)("div", {
        className: i.sectionHeaderTitle,
        children: [r, (0, a.jsx)(l.Heading, {
          variant: "heading-md/medium",
          color: "header-primary",
          children: n
        })]
      }), null != s && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          className: i.sectionHeaderSpacer
        }), (0, a.jsx)(l.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: s
        })]
      })]
    }), (0, a.jsx)("div", {
      ref: t
    })]
  })
});
t.default = s.memo(r)