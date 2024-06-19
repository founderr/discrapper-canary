r(47120);
var n = r(470079),
  u = r(442837),
  i = r(889161),
  l = r(984933),
  a = r(430824),
  c = r(496675),
  s = r(981631);
t.Z = (e, t) => {
  let r = (0, u.e7)([a.Z], () => a.Z.getGuild(e), [e]),
    {
      canCreateGuildEvent: p
    } = (0, i.XJ)(r),
    Z = (0, u.e7)([l.ZP], () => l.ZP.getChannels(e)[l.Zb], [e]),
    d = n.useMemo(() => null != t ? Z.filter(e => {
      let {
        channel: r
      } = e;
      return r.type === t
    }) : Z, [Z, t]);
  return (0, u.e7)([c.Z], () => {
    if (c.Z.can(s.Plq.ADMINISTRATOR, r) || p) return !0;
    for (let {
        channel: e
      }
      of d) {
      let {
        canCreateGuildEvent: t
      } = (0, i.Gw)(e);
      if (t) return !0
    }
    return !1
  }, [d, r, p])
}