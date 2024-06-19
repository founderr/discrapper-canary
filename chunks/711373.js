l.d(n, {
  Z: function() {
    return a
  }
}), l(724458), l(47120), l(653041);
var t = l(470079),
  i = l(442837),
  r = l(924301),
  s = l(765305);

function a(e, n) {
  let l = (0, i.Wu)([r.ZP], () => Object.values(r.ZP.getUsersForGuildEvent(e, null)), [e]),
    a = (0, i.Wu)([r.ZP], () => Object.values(r.ZP.getUsersForGuildEvent(e, n)), [e, n]);
  return (0, t.useMemo)(() => {
    let e = a.reduce((e, n) => (e[n.user_id] = n, e), {}),
      n = l.filter(n => {
        let l = e[n.user_id];
        return null == l || l.response === s.gv.INTERESTED
      }),
      t = a.filter(e => e.response === s.gv.INTERESTED),
      i = new Set,
      r = [],
      o = e => {
        !i.has(e.user_id) && (r.push(e), i.add(e.user_id))
      };
    return n.forEach(o), t.forEach(o), r
  }, [l, a])
}