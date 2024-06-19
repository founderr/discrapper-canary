n.d(t, {
  n3: function() {
    return a
  }
});
var l = n(823379),
  i = n(44136),
  s = n(354459);

function a(e, t, n) {
  return null == t || t.type === s.fO.ACTIVITY ? [] : [t.type === s.fO.STREAM ? e.find(e => e.type === s.fO.USER && e.id === (null == t ? void 0 : t.user.id) && e.id !== n && (0, i.ZP)(e)) : null, t.type === s.fO.USER ? e.find(e => e.type === s.fO.STREAM && e.user.id === (null == t ? void 0 : t.user.id) && null != e.streamId) : null, t.id !== n ? e.find(e => e.type === s.fO.USER && e.id === n && (0, i.ZP)(e)) : null].filter(l.lm)
}