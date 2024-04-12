"use strict";
n.r(e), n.d(e, {
  default: function() {
    return o
  }
});
var u = n("735250"),
  r = n("470079"),
  c = n("778947"),
  a = n("901461");
let i = r.memo(c.default);

function o(t) {
  let {
    message: e,
    channel: n,
    author: r,
    compact: c,
    animateAvatar: o,
    guildId: s,
    isGroupStart: d = !0,
    roleIcon: l,
    hideTimestamp: f
  } = t;
  return !(0, a.default)(e) && (d || c) ? (0, u.jsx)(i, {
    message: e,
    channel: n,
    author: r,
    guildId: s,
    compact: c,
    animate: o,
    roleIcon: l,
    hideTimestamp: f
  }) : void 0
}