"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var l = n("37983");
n("884691");
var a = n("77078"),
  s = n("194250"),
  r = n("782340"),
  i = n("11644");

function u(e) {
  let {
    isSlideReady: t,
    ...n
  } = e;
  return (0, l.jsxs)("div", {
    className: i.slideContainer,
    children: [(0, l.jsxs)("div", {
      className: i.header,
      children: [(0, l.jsx)(a.Heading, {
        variant: "heading-xl/semibold",
        children: r.default.Messages.GUILD_EVENT_CREATE_HEADER
      }), (0, l.jsx)(a.Text, {
        color: "header-secondary",
        className: i.text,
        variant: "text-sm/normal",
        children: r.default.Messages.GUILD_EVENT_CREATE_BODY
      })]
    }), (0, l.jsx)(s.default, {
      ...n,
      canSetFocus: t
    })]
  })
}