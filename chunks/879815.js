var s = n(442837),
  i = n(314897),
  l = n(131951),
  a = n(979651);
t.Z = e => (0, s.cj)([a.Z, l.Z, i.default], () => (function(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Z,
    s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.Z,
    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.default,
    o = null != e ? n.getVoiceState(e.getGuildId(), r.getId()) : null;
  return {
    selfDeaf: s.isSelfDeaf(),
    deaf: null !== (t = null == o ? void 0 : o.deaf) && void 0 !== t && t
  }
})(e, a.Z, l.Z, i.default))