"use strict";
n.r(t), n.d(t, {
  FloatingActionButton: function() {
    return i
  }
});
var a = n("735250");
n("470079");
var l = n("481060"),
  s = n("775452");
let i = e => {
  let {
    text: t,
    icon: n,
    onClick: i
  } = e;
  return (0, a.jsxs)(l.Button, {
    className: s.button,
    innerClassName: s.buttonInner,
    onClick: i,
    children: [(0, a.jsx)(n, {}), (0, a.jsx)(l.Text, {
      variant: "text-md/semibold",
      color: "none",
      children: t
    })]
  })
}