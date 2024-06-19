t.d(n, {
  T: function() {
    return c
  },
  Z: function() {
    return _
  }
}), t(653041);
var i = t(470079),
  l = t(442837),
  o = t(734307),
  r = t(854444),
  E = t(131704),
  u = t(680089),
  a = t(888369),
  s = t(981631),
  d = t(647086);

function _(e, n, t) {
  return C(e === d._ || e === s.I_8 ? (0, r.t)() : o.Z.getGuildWithoutChangingCommunityRows(e).guildChannels, n, t)
}

function c(e, n, t, o, r) {
  let E = (0, l.e7)([a.default], () => a.default.getGuildChangeSentinel(e)),
    s = (0, l.e7)([u.Z], () => u.Z.version);
  return (0, i.useMemo)(() => C(n, o, r).map(e => e.id), [n, t, E, s])
}

function C(e, n, t) {
  let i = [];
  return e.forEachShownChannel(e => {
    ((0, E.r8)(e.type) || n && (0, E.bw)(e.type)) && i.push(e)
  }, t), i
}