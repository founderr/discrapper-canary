"use strict";
var r = n(735250);
n(470079);
var a = n(780384),
  i = n(481060),
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
      src: (0, a.wj)(n) ? l : d,
      alt: ""
    }), (0, r.jsx)(i.Heading, {
      className: c.heading1,
      variant: "heading-xl/semibold",
      children: s.Z.Messages.COLLECTIBLES_SHOP_ERROR_HEADING
    }), (0, r.jsx)(i.Text, {
      variant: "text-md/normal",
      children: s.Z.Messages.COLLECTIBLES_SHOP_ERROR_SHOP_LOAD
    }), (0, r.jsx)(i.Button, {
      className: c.reload,
      size: i.Button.Sizes.MEDIUM,
      color: i.Button.Colors.BRAND,
      onClick: t,
      children: s.Z.Messages.ERRORS_RELOAD
    })]
  })
}