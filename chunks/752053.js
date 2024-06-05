"use strict";
a.r(t);
var s = a("735250");
a("470079");
var l = a("780384"),
  r = a("481060"),
  n = a("410030"),
  i = a("689938"),
  o = a("797056"),
  c = a("982240"),
  u = a("533854");
t.default = e => {
  let {
    onRetry: t
  } = e, a = (0, n.default)();
  return (0, s.jsxs)("div", {
    className: o.wrapper,
    children: [(0, s.jsx)("img", {
      className: o.__invalid_loadIssueImg,
      src: (0, l.isThemeDark)(a) ? c : u,
      alt: ""
    }), (0, s.jsx)(r.Heading, {
      className: o.heading1,
      variant: "heading-xl/semibold",
      children: i.default.Messages.COLLECTIBLES_SHOP_ERROR_HEADING
    }), (0, s.jsx)(r.Text, {
      variant: "text-md/normal",
      children: i.default.Messages.COLLECTIBLES_SHOP_ERROR_SHOP_LOAD
    }), (0, s.jsx)(r.Button, {
      className: o.reload,
      size: r.Button.Sizes.MEDIUM,
      color: r.Button.Colors.BRAND,
      onClick: t,
      children: i.default.Messages.ERRORS_RELOAD
    })]
  })
}