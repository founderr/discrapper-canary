"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("735250"),
  r = n("470079"),
  s = n("778947"),
  l = n("901461");
let o = r.memo(s.default);

function u(e) {
  let {
    message: t,
    channel: n,
    author: r,
    compact: s,
    animateAvatar: u,
    guildId: a,
    isGroupStart: d = !0,
    roleIcon: c,
    hideTimestamp: f
  } = e;
  return !(0, l.default)(t) && (d || s) ? (0, i.jsx)(o, {
    message: t,
    channel: n,
    author: r,
    guildId: a,
    compact: s,
    animate: u,
    roleIcon: c,
    hideTimestamp: f
  }) : void 0
}