l.d(n, {
  Z: function() {
    return s
  }
});
var t = l(442837),
  i = l(241155),
  r = l(430824);

function s(e, n) {
  return (0, t.cj)([r.Z, i.Z], () => {
    let l = r.Z.getGuild(e),
      t = null != l;
    return null == l && null != n && (l = i.Z.getCachedGuildByEventId(n)), {
      isMember: t,
      guild: l
    }
  }, [e, n])
}