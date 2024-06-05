"use strict";
s.r(t);
var a = s("735250");
s("470079");
var l = s("780384"),
  r = s("481060"),
  n = s("410030"),
  i = s("689938"),
  o = s("797056"),
  c = s("982240"),
  u = s("533854");
t.default = e => {
  let {
    onRetry: t
  } = e, s = (0, n.default)();
  return (0, a.jsxs)("div", {
    className: o.wrapper,
    children: [(0, a.jsx)("img", {
      className: o.__invalid_loadIssueImg,
      src: (0, l.isThemeDark)(s) ? c : u,
      alt: ""
    }), (0, a.jsx)(r.Heading, {
      className: o.heading1,
      variant: "heading-xl/semibold",
      children: i.default.Messages.COLLECTIBLES_SHOP_ERROR_HEADING
    }), (0, a.jsx)(r.Text, {
      variant: "text-md/normal",
      children: i.default.Messages.COLLECTIBLES_SHOP_ERROR_SHOP_LOAD
    }), (0, a.jsx)(r.Button, {
      className: o.reload,
      size: r.Button.Sizes.MEDIUM,
      color: r.Button.Colors.BRAND,
      onClick: t,
      children: i.default.Messages.ERRORS_RELOAD
    })]
  })
}