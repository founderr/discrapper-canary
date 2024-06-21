t.d(n, {
  Z: function() {
    return o
  }
});
var i = t(735250),
  r = t(470079),
  l = t(778947),
  a = t(901461);
let u = r.memo(l.ZP);

function o(e) {
  let {
    message: n,
    channel: t,
    author: r,
    compact: l,
    animateAvatar: o,
    guildId: c,
    isGroupStart: s = !0,
    roleIcon: d,
    hideTimestamp: _
  } = e;
  return !(0, a.Z)(n) && (s || l) ? (0, i.jsx)(u, {
    message: n,
    channel: t,
    author: r,
    guildId: c,
    compact: l,
    animate: o,
    roleIcon: d,
    hideTimestamp: _
  }) : void 0
}