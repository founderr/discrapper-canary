t.d(n, {
  Z: function() {
    return s
  }
});
var i = t(470079),
  l = t(442837),
  r = t(339085),
  u = t(889564);
let o = [];

function s(e) {
  let n = (0, l.e7)([r.Z], () => r.Z.getGuildEmoji(e), [e]);
  return i.useMemo(() => null == n ? o : n.filter(n => (0, u.Kt)(n, e)), [n, e])
}