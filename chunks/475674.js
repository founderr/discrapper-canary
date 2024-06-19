n.d(t, {
  Z: function() {
    return d
  }
});
var l = n(442837),
  i = n(199902),
  s = n(314897),
  a = n(858340),
  r = n(959457),
  o = n(557457),
  c = n(614963),
  u = n(981631);

function d(e) {
  let t = (0, o.Wc)(e),
    n = e.stream.guildId,
    d = e.stream.ownerId;
  return (0, l.e7)([r.Z, a.Z, s.default, i.Z], () => {
    if (null == d) return null;
    let e = d === s.default.getId();
    if (!e && null == i.Z.getActiveStreamForUser(d, n)) return null;
    let l = e && null != a.Z.getHookError(u.K3D.SOUND);
    return (0, c.Z)(r.Z.getQuality(), r.Z.getStatsHistory(n, d, e), l, t)
  }, [t, n, d])
}