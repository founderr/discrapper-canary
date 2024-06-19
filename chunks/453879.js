n.d(t, {
  v: function() {
    return a
  }
}), n(47120), n(653041);
var l = n(975984),
  i = n(486527),
  s = n(689938);

function a(e, t) {
  if (t !== i.AR.ALL) return [{
    entries: (0, l.TR)(e),
    appendEndCard: !0
  }];
  let n = [],
    a = (0, l.Lz)(e),
    r = new Set(a.map(e => e.guildId));
  a.length > 0 && n.push({
    header: s.Z.Messages.SEARCH_NEWEST,
    entries: a,
    appendEndCard: !1
  });
  let o = e.filter(e => !r.has(e.guildId));
  return (o = (0, l.Th)(o)).length > 0 && n.push({
    header: s.Z.Messages.ALL_SERVERS,
    entries: o,
    appendEndCard: !0
  }), n
}