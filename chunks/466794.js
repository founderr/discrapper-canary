"use strict";
n.r(t), n.d(t, {
  NitroTooltipLabel: function() {
    return r
  }
});
var s = n("735250");
n("470079");
var l = n("481060"),
  a = n("466111"),
  i = n("278576");

function r(e) {
  let {
    tooltipText: t,
    textColor: n
  } = e;
  return (0, s.jsxs)("span", {
    className: i.tooltipTextContainer,
    children: [(0, s.jsx)(a.default, {
      className: i.nitroWheel
    }), (0, s.jsx)(l.Text, {
      className: i.tooltipText,
      variant: "text-sm/medium",
      color: null != n ? n : "text-normal",
      children: t
    })]
  })
}