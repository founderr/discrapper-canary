t.d(n, {
  w: function() {
    return a
  }
});
var r = t(470079),
  o = t(442837),
  s = t(470956),
  l = t(592125),
  u = t(979651),
  i = t(441894);

function a(e, n) {
  var t, a;
  let c = function(e) {
    let n = (0, o.e7)([u.Z], () => u.Z.getVoiceStatesForChannel(e)),
      t = r.useMemo(() => Object.keys(n), [n]);
    return (0, s.Yp)(e, t)
  }(n);
  return function(e) {
    let n = (0, i.J)(e),
      t = (0, o.e7)([l.Z], () => {
        var n;
        return (null === (n = l.Z.getChannel(e)) || void 0 === n ? void 0 : n.isGuildStageVoice()) === !0
      });
    return n && !t
  }(n) && c.has(e) && (t = 0, a = 0, !1)
}