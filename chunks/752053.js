"use strict";
var r = n(735250);
n(470079);
var i = n(780384),
  a = n(481060),
  o = n(410030),
  s = n(689938),
  c = n(82783),
  l = n(982240),
  d = n(533854);
t.Z = e => {
  let {
    onRetry: t
  } = e, n = (0, o.ZP)();
  return (0, r.jsxs)("div", {
    className: c.wrapper,
    children: [(0, r.jsx)("img", {
      className: c.__invalid_loadIssueImg,
      src: (0, i.wj)(n) ? l : d,
      alt: ""
    }), (0, r.jsx)(a.Heading, {
      className: c.heading1,
      variant: "heading-xl/semibold",
      children: s.Z.Messages.COLLECTIBLES_SHOP_ERROR_HEADING
    }), (0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      children: s.Z.Messages.COLLECTIBLES_SHOP_ERROR_SHOP_LOAD
    }), (0, r.jsx)(a.Button, {
      className: c.reload,
      size: a.Button.Sizes.MEDIUM,
      color: a.Button.Colors.BRAND,
      onClick: t,
      children: s.Z.Messages.ERRORS_RELOAD
    })]
  })
}