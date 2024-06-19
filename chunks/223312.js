a.d(s, {
  j: function() {
    return i
  }
}), a(47120);
var n = a(470079),
  t = a(442837),
  l = a(826581),
  r = a(246364);

function i(e) {
  let {
    guildId: s,
    applicationStatus: a,
    sortOrder: i
  } = e, o = (0, t.e7)([l.Z], () => l.Z.getRequests(s, a), [a, s]);
  return {
    guildJoinRequests: n.useMemo(() => i === r.Nw.TIMESTAMP_DESC ? [...o].reverse() : o, [i, o])
  }
}