"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
});
var i = s("37983");
s("884691");
var l = s("77078"),
  n = s("145131"),
  a = s("997324"),
  r = e => {
    let {
      title: t,
      subtitle: s,
      icon: r
    } = e;
    return (0, i.jsxs)(n.default, {
      className: a.wrapper,
      align: n.default.Align.BASELINE,
      children: [null != r && (0, i.jsx)(r, {
        width: 16,
        height: 16,
        className: a.icon
      }), (0, i.jsx)(l.Text, {
        variant: "text-md/normal",
        className: a.title,
        children: t
      }), null != s && "" !== s ? (0, i.jsx)(l.Text, {
        variant: "text-xs/semibold",
        className: a.subtitle,
        children: s
      }) : null]
    })
  }