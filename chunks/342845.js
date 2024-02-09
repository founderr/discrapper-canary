"use strict";
l.r(t), l.d(t, {
  default: function() {
    return i
  }
});
var r = l("37983");
l("884691");
var a = l("943722"),
  n = l("808742"),
  s = l("49111"),
  i = e => {
    var t;
    let {
      className: l,
      hangStatusActivity: i,
      animate: o = !0
    } = e;
    if ((null == i ? void 0 : i.state) === s.HangStatusTypes.CUSTOM) return null != i.emoji ? (0, r.jsx)(a.ActivityEmoji, {
      emoji: i.emoji,
      className: l,
      hideTooltip: !0,
      animate: o
    }) : null;
    let u = null === (t = (0, n.getHangStatusDetails)(i)) || void 0 === t ? void 0 : t.icon;
    return null != u ? (0, r.jsx)("img", {
      src: u,
      alt: "",
      className: null != l ? l : void 0
    }) : null
  }