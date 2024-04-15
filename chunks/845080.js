"use strict";
n.r(e), n.d(e, {
  default: function() {
    return s
  }
});
var r = n("735250"),
  u = n("470079"),
  c = n("778947"),
  i = n("901461");
let o = u.memo(c.default);

function s(t) {
  let {
    message: e,
    channel: n,
    author: u,
    compact: c,
    animateAvatar: s,
    guildId: a,
    isGroupStart: f = !0,
    roleIcon: l,
    hideTimestamp: d
  } = t;
  return !(0, i.default)(e) && (f || c) ? (0, r.jsx)(o, {
    message: e,
    channel: n,
    author: u,
    guildId: a,
    compact: c,
    animate: s,
    roleIcon: l,
    hideTimestamp: d
  }) : void 0
}