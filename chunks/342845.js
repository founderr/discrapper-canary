"use strict";
l.r(t), l.d(t, {
  default: function() {
    return r
  }
});
var a = l("37983");
l("884691");
var n = l("943722"),
  s = l("808742"),
  i = l("49111"),
  r = e => {
    var t;
    let {
      className: l,
      hangStatusActivity: r
    } = e;
    if ((null == r ? void 0 : r.state) === i.HangStatusTypes.CUSTOM) return null != r.emoji ? (0, a.jsx)(n.ActivityEmoji, {
      emoji: r.emoji,
      className: l,
      hideTooltip: !0
    }) : null;
    let u = null === (t = (0, s.getHangStatusDetails)(r)) || void 0 === t ? void 0 : t.icon;
    return null != u ? (0, a.jsx)("img", {
      src: u,
      alt: "",
      className: null != l ? l : void 0
    }) : null
  }