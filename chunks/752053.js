"use strict";
a.r(t);
var s = a("735250");
a("470079");
var r = a("780384"),
  n = a("481060"),
  l = a("410030"),
  o = a("689938"),
  i = a("797056"),
  c = a("982240"),
  u = a("533854");
t.default = e => {
  let {
    onRetry: t
  } = e, a = (0, l.default)();
  return (0, s.jsxs)("div", {
    className: i.wrapper,
    children: [(0, s.jsx)("img", {
      className: i.__invalid_loadIssueImg,
      src: (0, r.isThemeDark)(a) ? c : u,
      alt: ""
    }), (0, s.jsx)(n.Heading, {
      className: i.heading1,
      variant: "heading-xl/semibold",
      children: o.default.Messages.COLLECTIBLES_SHOP_ERROR_HEADING
    }), (0, s.jsx)(n.Text, {
      variant: "text-md/normal",
      children: o.default.Messages.COLLECTIBLES_SHOP_ERROR_SHOP_LOAD
    }), (0, s.jsx)(n.Button, {
      className: i.reload,
      size: n.Button.Sizes.MEDIUM,
      color: n.Button.Colors.BRAND,
      onClick: t,
      children: o.default.Messages.ERRORS_RELOAD
    })]
  })
}