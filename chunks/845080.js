t.d(n, {
  Z: function() {
    return s
  }
});
var i = t(735250),
  r = t(470079),
  l = t(778947),
  o = t(901461);
let u = r.memo(l.ZP);

function s(e) {
  let {
    message: n,
    channel: t,
    author: r,
    compact: l,
    animateAvatar: s,
    guildId: a,
    isGroupStart: c = !0,
    roleIcon: d,
    hideTimestamp: _
  } = e;
  return !(0, o.Z)(n) && (c || l) ? (0, i.jsx)(u, {
    message: n,
    channel: t,
    author: r,
    guildId: a,
    compact: l,
    animate: s,
    roleIcon: d,
    hideTimestamp: _
  }) : void 0
}