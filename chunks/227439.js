"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("37983"),
  r = n("884691"),
  l = n("93332"),
  a = n("913491");
let s = r.memo(l.default);

function o(e) {
  let {
    message: t,
    channel: n,
    author: r,
    compact: l,
    animateAvatar: o,
    guildId: u,
    isGroupStart: c = !0,
    roleIcon: d,
    hideTimestamp: f
  } = e;
  return !(0, a.default)(t) && (c || l) ? (0, i.jsx)(s, {
    message: t,
    channel: n,
    author: r,
    guildId: u,
    compact: l,
    animate: o,
    roleIcon: d,
    hideTimestamp: f
  }) : void 0
}