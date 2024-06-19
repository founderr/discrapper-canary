t.d(n, {
  J: function() {
    return r
  },
  U: function() {
    return o
  }
});
var s = t(442837),
  l = t(650774),
  a = t(496675),
  i = t(231338);

function r(e) {
  return (0, s.e7)([a.Z], () => null != e && a.Z.can(i.Pl.MENTION_EVERYONE, e), [e])
}

function o(e) {
  let n = null == e ? void 0 : e.guild_id,
    t = (0, s.e7)([l.Z], () => l.Z.getMemberCount(n), [n]);
  return null == e || null != t && !(t > 5e4) && !0
}