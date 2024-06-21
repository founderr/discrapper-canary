t.d(n, {
  Z: function() {
    return o
  }
});
var i = t(735250),
  r = t(470079),
  l = t(901461),
  a = t(464891);
let u = r.memo(a.ZP);

function o(e) {
  let {
    message: n,
    channel: t,
    author: r,
    compact: a,
    animateAvatar: o,
    guildId: c,
    isGroupStart: s = !0,
    roleIcon: d,
    hideTimestamp: _
  } = e;
  return !(0, l.Z)(n) && (s || a) ? (0, i.jsx)(u, {
    message: n,
    channel: t,
    author: r,
    guildId: c,
    compact: a,
    animate: o,
    roleIcon: d,
    hideTimestamp: _
  }) : void 0
}