"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var r = n("37983");
n("884691");
var s = n("225389"),
  i = n("77078"),
  a = n("352969"),
  l = function(e) {
    let {
      message: t
    } = e;
    return (0, r.jsxs)("div", {
      className: a.container,
      children: [(0, r.jsx)(s.CircleInformationIcon, {
        className: a.icon,
        width: 20,
        height: 20,
        color: i.tokens.colors.TEXT_WARNING
      }), (0, r.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "header-muted",
        children: t
      })]
    })
  }