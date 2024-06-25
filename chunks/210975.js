n.d(t, {
  m$: function() {
    return m
  },
  wV: function() {
    return p
  }
});
var i = n(470079),
  a = n(442837),
  l = n(470956),
  s = n(314897),
  r = n(592125),
  o = n(979651),
  c = n(441894);

function u(e) {
  let t = (0, a.e7)([o.Z], () => o.Z.getVoiceStatesForChannel(e)),
    n = i.useMemo(() => Object.keys(t), [t]);
  return (0, l.Yp)(e, n)
}

function d(e) {
  let t = (0, c.J)(e),
    n = (0, a.e7)([r.Z], () => {
      var t;
      return (null === (t = r.Z.getChannel(e)) || void 0 === t ? void 0 : t.isGuildStageVoice()) === !0
    });
  return t && !n
}

function h(e, t) {
  return !1
}

function p(e, t) {
  var n, i;
  let l = u(t),
    r = d(t),
    o = (0, a.e7)([s.default], () => s.default.getId());
  return r && l.has(o) && null != e && l.has(e) && (n = 0, i = 0, !1)
}

function m(e) {
  let t = u(e),
    n = d(e),
    l = (0, a.e7)([s.default], () => s.default.getId());
  return i.useMemo(() => !!(n && t.has(l)) && Array.from(t).every(e => {
    var t, n;
    return t = 0, n = 0, e === l
  }), [e, l, n, t])
}