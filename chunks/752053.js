"use strict";
s.r(t);
var a = s("735250");
s("470079");
var l = s("780384"),
  n = s("481060"),
  r = s("410030"),
  i = s("689938"),
  o = s("797056"),
  u = s("982240"),
  c = s("533854");
t.default = e => {
  let {
    onRetry: t
  } = e, s = (0, r.default)();
  return (0, a.jsxs)("div", {
    className: o.wrapper,
    children: [(0, a.jsx)("img", {
      className: o.__invalid_loadIssueImg,
      src: (0, l.isThemeDark)(s) ? u : c,
      alt: ""
    }), (0, a.jsx)(n.Heading, {
      className: o.heading1,
      variant: "heading-xl/semibold",
      children: i.default.Messages.COLLECTIBLES_SHOP_ERROR_HEADING
    }), (0, a.jsx)(n.Text, {
      variant: "text-md/normal",
      children: i.default.Messages.COLLECTIBLES_SHOP_ERROR_SHOP_LOAD
    }), (0, a.jsx)(n.Button, {
      className: o.reload,
      size: n.Button.Sizes.MEDIUM,
      color: n.Button.Colors.BRAND,
      onClick: t,
      children: i.default.Messages.ERRORS_RELOAD
    })]
  })
}