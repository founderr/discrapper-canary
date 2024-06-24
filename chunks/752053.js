"use strict";
var n = s(735250);
s(470079);
var r = s(780384),
  a = s(481060),
  i = s(410030),
  l = s(689938),
  o = s(82783),
  c = s(982240),
  u = s(533854);
t.Z = e => {
  let {
    onRetry: t
  } = e, s = (0, i.ZP)();
  return (0, n.jsxs)("div", {
    className: o.wrapper,
    children: [(0, n.jsx)("img", {
      className: o.__invalid_loadIssueImg,
      src: (0, r.wj)(s) ? c : u,
      alt: ""
    }), (0, n.jsx)(a.Heading, {
      className: o.heading1,
      variant: "heading-xl/semibold",
      children: l.Z.Messages.COLLECTIBLES_SHOP_ERROR_HEADING
    }), (0, n.jsx)(a.Text, {
      variant: "text-md/normal",
      children: l.Z.Messages.COLLECTIBLES_SHOP_ERROR_SHOP_LOAD
    }), (0, n.jsx)(a.Button, {
      className: o.reload,
      size: a.Button.Sizes.MEDIUM,
      color: a.Button.Colors.BRAND,
      onClick: t,
      children: l.Z.Messages.ERRORS_RELOAD
    })]
  })
}