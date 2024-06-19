t.d(s, {
  C: function() {
    return d
  },
  V: function() {
    return E
  }
}), t(47120);
var n = t(470079),
  i = t(392711),
  a = t.n(i),
  l = t(442837),
  r = t(271383),
  o = t(430824),
  c = t(353093);

function E() {
  return (0, l.Wu)([o.Z, r.ZP], () => {
    let e = o.Z.getGuilds();
    return a()(e).values().filter(e => {
      var s;
      return (0, c.EJ)(e) && (null === (s = r.ZP.getSelfMember(e.id)) || void 0 === s ? void 0 : s.joinedAt) != null
    }).value()
  })
}

function d() {
  let e = E();
  return n.useMemo(() => new Set(e.map(e => {
    let {
      id: s
    } = e;
    return s
  })), [e])
}