"use strict";
l.r(t);
var a = l("735250");
l("470079");
var s = l("780384"),
  r = l("481060"),
  n = l("410030"),
  i = l("689938"),
  o = l("797056"),
  c = l("982240"),
  u = l("533854");
t.default = e => {
  let {
    onRetry: t
  } = e, l = (0, n.default)();
  return (0, a.jsxs)("div", {
    className: o.wrapper,
    children: [(0, a.jsx)("img", {
      className: o.__invalid_loadIssueImg,
      src: (0, s.isThemeDark)(l) ? c : u,
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