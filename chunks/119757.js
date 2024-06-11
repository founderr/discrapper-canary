"use strict";
n.r(t), n.d(t, {
  IconSelectOption: function() {
    return a
  }
});
var i = n("735250");
n("470079");
var r = n("481060"),
  s = n("380451");
let a = e => {
  let {
    title: t,
    subtitle: n,
    icon: a
  } = e;
  return (0, i.jsxs)("div", {
    className: s.wrapper,
    children: [null != a && (0, i.jsx)(a, {
      width: 16,
      height: 16,
      className: s.icon
    }), (0, i.jsx)(r.Text, {
      variant: "text-md/normal",
      className: s.title,
      children: t
    }), null != n && "" !== n ? (0, i.jsx)(r.Text, {
      variant: "text-xs/semibold",
      className: s.subtitle,
      children: n
    }) : null]
  })
}