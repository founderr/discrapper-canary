n.d(t, {
  Z: function() {
    return o
  }
});
var l = n(442837),
  i = n(592125),
  s = n(938475),
  r = n(853856),
  a = n(981631);

function o(e) {
  return (0, l.cj)([s.ZP, i.Z, r.Z], () => {
    if (e !== a.I_8) return s.ZP.getVoiceStates(e);
    let t = r.Z.getFavoriteChannels(),
      n = {};
    for (let e in t) {
      let t = i.Z.getChannel(e);
      null != t && (n[e] = s.ZP.getVoiceStatesForChannel(t))
    }
    return n
  }, [e])
}