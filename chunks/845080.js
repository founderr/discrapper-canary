"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var r = n("735250"),
  i = n("470079"),
  a = n("778947"),
  l = n("901461");
let o = i.memo(a.default);

function s(e) {
  let {
    message: t,
    channel: n,
    author: i,
    compact: a,
    animateAvatar: s,
    guildId: u,
    isGroupStart: c = !0,
    roleIcon: d,
    hideTimestamp: f
  } = e;
  return !(0, l.default)(t) && (c || a) ? (0, r.jsx)(o, {
    message: t,
    channel: n,
    author: i,
    guildId: u,
    compact: a,
    animate: s,
    roleIcon: d,
    hideTimestamp: f
  }) : void 0
}