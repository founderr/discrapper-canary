a(47120);
var n = a(470079),
  r = a(442837),
  l = a(889161),
  o = a(984933),
  i = a(430824),
  u = a(496675),
  p = a(981631);
t.Z = (e, t) => {
  let a = (0, r.e7)([i.Z], () => i.Z.getGuild(e), [e]),
    {
      canCreateGuildEvent: c
    } = (0, l.XJ)(a),
    d = (0, r.e7)([o.ZP], () => o.ZP.getChannels(e)[o.Zb], [e]),
    s = n.useMemo(() => null != t ? d.filter(e => {
      let {
        channel: a
      } = e;
      return a.type === t
    }) : d, [d, t]);
  return (0, r.e7)([u.Z], () => {
    if (u.Z.can(p.Plq.ADMINISTRATOR, a) || c) return !0;
    for (let {
        channel: e
      }
      of s) {
      let {
        canCreateGuildEvent: t
      } = (0, l.Gw)(e);
      if (t) return !0
    }
    return !1
  }, [s, a, c])
}