"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("37983");
n("884691");
var i = n("225389"),
  s = n("77078"),
  r = n("135898"),
  o = function(e) {
    let {
      message: t
    } = e;
    return (0, l.jsxs)("div", {
      className: r.container,
      children: [(0, l.jsx)(i.CircleInformationIcon, {
        className: r.icon,
        width: 20,
        height: 20,
        color: s.tokens.colors.TEXT_WARNING
      }), (0, l.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "header-muted",
        children: t
      })]
    })
  }