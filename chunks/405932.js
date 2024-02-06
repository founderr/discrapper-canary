"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var r = n("37983");
n("884691");
var s = n("225389"),
  l = n("77078"),
  i = n("135898"),
  a = function(e) {
    let {
      message: t
    } = e;
    return (0, r.jsxs)("div", {
      className: i.container,
      children: [(0, r.jsx)(s.CircleInformationIcon, {
        className: i.icon,
        width: 20,
        height: 20,
        color: l.tokens.colors.TEXT_WARNING
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "header-muted",
        children: t
      })]
    })
  }