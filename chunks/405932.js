"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var s = n("37983");
n("884691");
var r = n("225389"),
  l = n("77078"),
  a = n("135898"),
  i = function(e) {
    let {
      message: t
    } = e;
    return (0, s.jsxs)("div", {
      className: a.container,
      children: [(0, s.jsx)(r.CircleInformationIcon, {
        className: a.icon,
        width: 20,
        height: 20,
        color: l.tokens.colors.TEXT_WARNING
      }), (0, s.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "header-muted",
        children: t
      })]
    })
  }