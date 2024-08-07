n(47120);
var i = n(470079),
  l = n(442837),
  r = n(889161),
  a = n(984933),
  s = n(430824),
  o = n(496675),
  c = n(981631);
t.Z = (e, t) => {
  let n = (0, l.e7)([s.Z], () => s.Z.getGuild(e), [e]),
{
  canCreateGuildEvent: u
} = (0, r.XJ)(n),
d = (0, l.e7)([a.ZP], () => a.ZP.getChannels(e)[a.Zb], [e]),
h = i.useMemo(() => null != t ? d.filter(e => {
  let {
    channel: n
  } = e;
  return n.type === t;
}) : d, [
  d,
  t
]);
  return (0, l.e7)([o.Z], () => {
if (o.Z.can(c.Plq.ADMINISTRATOR, n) || u)
  return !0;
for (let {
    channel: e
  }
  of h) {
  let {
    canCreateGuildEvent: t
  } = (0, r.Gw)(e);
  if (t)
    return !0;
}
return !1;
  }, [
h,
n,
u
  ]);
};