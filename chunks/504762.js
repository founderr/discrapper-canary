"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("689938"),
  i = n("201953"),
  r = n("217110");

function o() {
  return (0, a.jsx)("div", {
    className: i.container,
    children: (0, a.jsxs)("div", {
      className: i.content,
      children: [(0, a.jsx)("img", {
        src: r,
        alt: l.default.Messages.CREATOR_MONETIZATION_NOTICE_ILLO_A11Y_LABEL
      }), (0, a.jsx)(s.Spacer, {
        size: 12
      }), (0, a.jsx)(s.Heading, {
        className: i.header,
        variant: "heading-lg/semibold",
        children: l.default.Messages.CREATOR_MONETIZATION_DISABLED_NOTICE_TITLE
      }), (0, a.jsx)(s.Spacer, {
        size: 8
      }), (0, a.jsx)(s.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: l.default.Messages.CREATOR_MONETIZATION_DISABLED_NOTICE_DESCRIPTION
      })]
    })
  })
}