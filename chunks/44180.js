"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("735250");
n("470079");
var l = n("690172"),
  s = n("481060"),
  i = n("525533");

function r(e) {
  let {
    channel: t,
    iconColor: n,
    textColor: r = "text-secondary"
  } = e;
  return (0, a.jsxs)("div", {
    className: i.container,
    children: [(0, a.jsx)(l.VoiceNormalIcon, {
      width: 12,
      height: 12,
      color: n
    }), (0, a.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: r,
      className: i.label,
      children: t.name
    })]
  })
}