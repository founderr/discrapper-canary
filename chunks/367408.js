n.d(t, {
  M: function() {
    return d
  }
}), n(852437);
var l = n(70956),
  i = n(359119),
  s = n(116347),
  a = n(444957),
  r = n(403485),
  o = n(276618);
let c = 1 * l.Z.Millis.HOUR,
  u = 12 * l.Z.Millis.HOUR;

function d(e) {
  var t;
  let n = (0, a.h)(e),
    l = (0, r.h)(e),
    d = (0, o.o)(e);
  if (null == n || d || (0, s.tX)(l)) return;
  let h = l.some(e => e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_1),
    m = l.filter(e => null != e.dismiss_timestamp).sort((e, t) => t.dismiss_timestamp < e.dismiss_timestamp ? -1 : 1);
  if (m.length < 1 || ! function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      if (null == e) return !0;
      let n = new Date(e).getTime() + (t ? c : u);
      return new Date().getTime() >= n
    }(m[0].dismiss_timestamp, h)) return;
  let p = l.filter(e => null == e.dismiss_timestamp);
  return null !== (t = p.findLast(e => e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_1)) && void 0 !== t ? t : p.findLast(e => e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_2)
}