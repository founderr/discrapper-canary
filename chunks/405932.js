"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("37983");
n("884691");
var s = n("225389"),
  i = n("77078"),
  r = n("135898"),
  o = function(e) {
    let {
      message: t
    } = e;
    return (0, l.jsxs)("div", {
      className: r.container,
      children: [(0, l.jsx)(s.CircleInformationIcon, {
        className: r.icon,
        width: 20,
        height: 20,
        color: i.tokens.colors.TEXT_WARNING
      }), (0, l.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "header-muted",
        children: t
      })]
    })
  }