"use strict";
n.r(t), n.d(t, {
  FloatingActionButton: function() {
    return i
  }
});
var s = n("735250");
n("470079");
var l = n("481060"),
  a = n("258568");
let i = e => {
  let {
    text: t,
    icon: n,
    onClick: i
  } = e;
  return (0, s.jsxs)(l.Button, {
    className: a.button,
    innerClassName: a.buttonInner,
    onClick: i,
    children: [(0, s.jsx)(n, {}), (0, s.jsx)(l.Text, {
      variant: "text-md/semibold",
      color: "none",
      children: t
    })]
  })
}