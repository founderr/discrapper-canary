n.d(t, {
  m$: function() {
    return p
  },
  wV: function() {
    return m
  }
});
var l = n(470079),
  i = n(442837),
  s = n(470956),
  a = n(314897),
  r = n(592125),
  o = n(979651),
  c = n(441894);

function u(e) {
  let t = (0, i.e7)([o.Z], () => o.Z.getVoiceStatesForChannel(e)),
    n = l.useMemo(() => Object.keys(t), [t]);
  return (0, s.Yp)(e, n)
}

function d(e) {
  let t = (0, c.J)(e),
    n = (0, i.e7)([r.Z], () => {
      var t;
      return (null === (t = r.Z.getChannel(e)) || void 0 === t ? void 0 : t.isGuildStageVoice()) === !0
    });
  return t && !n
}

function h(e, t) {
  return !1
}

function m(e, t) {
  var n, l;
  let s = u(t),
    r = d(t),
    o = (0, i.e7)([a.default], () => a.default.getId());
  return r && s.has(o) && null != e && s.has(e) && (n = 0, l = 0, !1)
}

function p(e) {
  let t = u(e),
    n = d(e),
    s = (0, i.e7)([a.default], () => a.default.getId());
  return l.useMemo(() => !!(n && t.has(s)) && Array.from(t).every(e => {
    var t, n;
    return t = 0, n = 0, e === s
  }), [e, s, n, t])
}