"use strict";
a.r(t), a.d(t, {
  default: function() {
    return r
  }
});
var n = a("37983");
a("884691");
var l = a("943722"),
  s = a("808742"),
  i = a("49111"),
  r = e => {
    var t;
    let {
      className: a,
      hangStatusActivity: r
    } = e;
    if ((null == r ? void 0 : r.state) === i.HangStatusTypes.CUSTOM) return null != r.emoji ? (0, n.jsx)(l.ActivityEmoji, {
      emoji: r.emoji,
      className: a,
      hideTooltip: !0
    }) : null;
    let u = null === (t = (0, s.getHangStatusDetails)(r)) || void 0 === t ? void 0 : t.icon;
    return null != u ? (0, n.jsx)("img", {
      src: u,
      alt: "",
      className: null != a ? a : void 0
    }) : null
  }