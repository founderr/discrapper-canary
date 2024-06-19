n.d(t, {
  t: function() {
    return o
  }
});
var l = n(442837),
  i = n(273387),
  s = n(975984),
  r = n(306680),
  a = n(709054);

function o(e) {
  return (0, l.e7)([i.Z, r.ZP], () => {
    var t;
    if (null == e) return 0;
    let n = r.ZP.ackMessageId(e.id);
    if (null == n) return 0;
    let l = Object.values(null !== (t = i.Z.getDirectoryEntries(e.id)) && void 0 !== t ? t : {}).filter(e => {
      let t = a.default.fromTimestamp(new Date(e.createdAt).getTime());
      return (0, s.gX)(e) && t > n
    });
    return Math.min(s._N, l.length)
  }, [e])
}