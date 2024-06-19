n.d(t, {
  Z: function() {
    return o
  }
});
var l = n(470079),
  i = n(566620),
  s = n(782769),
  a = n(451576);
let r = e => null != e && "" !== e;

function o(e, t) {
  let n = (0, s.z)(null != t ? t : void 0),
    o = (0, a.Z)(t),
    c = r(e) || o;
  return l.useEffect(() => {
    c && n && (0, i.w1)({
      guildId: e
    })
  }, [e, n, c]), c && n
}