"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("71970"),
  i = n("481060"),
  r = n("886722");
let o = s.forwardRef(function(e, t) {
  let {
    title: n,
    subtitle: s
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: r.sectionHeader,
      children: [(0, a.jsxs)("div", {
        className: r.sectionHeaderTitle,
        children: [(0, a.jsx)(l.TrophyIcon, {
          color: "currentColor"
        }), (0, a.jsx)(i.Heading, {
          variant: "heading-md/medium",
          color: "header-primary",
          children: n
        })]
      }), null != s && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          className: r.sectionHeaderSpacer
        }), (0, a.jsx)(i.Text, {
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
t.default = s.memo(o)