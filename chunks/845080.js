"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("735250"),
  r = n("470079"),
  l = n("778947"),
  s = n("901461");
let u = r.memo(l.default);

function o(e) {
  let {
    message: t,
    channel: n,
    author: r,
    compact: l,
    animateAvatar: o,
    guildId: a,
    isGroupStart: d = !0,
    roleIcon: c,
    hideTimestamp: f
  } = e;
  return !(0, s.default)(t) && (d || l) ? (0, i.jsx)(u, {
    message: t,
    channel: n,
    author: r,
    guildId: a,
    compact: l,
    animate: o,
    roleIcon: c,
    hideTimestamp: f
  }) : void 0
}