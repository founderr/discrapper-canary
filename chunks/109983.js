"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var l = s("735250");
s("470079");
var a = s("481060"),
  i = s("208479"),
  n = s("216019");

function d(e) {
  let {
    icon: t,
    message: s,
    onClick: d,
    autoFocus: r
  } = e;
  return (0, l.jsxs)("button", {
    className: i.container,
    onClick: d,
    autoFocus: r,
    children: [(0, l.jsx)("img", {
      className: i.icon,
      alt: "",
      src: t
    }), (0, l.jsx)(a.Text, {
      className: i.text,
      variant: "text-md/bold",
      children: s
    }), (0, l.jsx)("img", {
      className: i.arrow,
      alt: "",
      src: n
    })]
  })
}