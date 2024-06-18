"use strict";
t.d(s, {
  Z: function() {
    return a
  }
});
var n = t(735250);
t(470079);
var i = t(481060),
  l = t(618963);

function a(e) {
  let {
    children: s
  } = e;
  return (0, n.jsx)("div", {
    className: l.container,
    children: (0, n.jsx)(i.Text, {
      variant: "text-sm/normal",
      color: "text-normal",
      className: l.text,
      children: (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(i.CircleExclamationPointIcon, {
          size: "custom",
          width: 20,
          height: 20,
          color: "currentColor",
          className: l.noticeIcon,
          "aria-hidden": !0
        }), s]
      })
    })
  })
}