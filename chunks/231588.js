l.r(n);
var a = l(735250),
  i = l(470079),
  s = l(442837),
  r = l(749210),
  t = l(112724),
  d = l(923029),
  c = l(353926),
  o = l(931261),
  u = l(333323),
  h = l(430824);
let m = (0, t.Z)(u.Z);
n.default = function(e) {
  let {
    guildId: n
  } = e, l = (0, s.e7)([h.Z], () => h.Z.getGuild(n), [n]), t = (0, s.e7)([c.Z], () => c.Z.hasLoadedExperiments), u = (0, o.g)(n);
  return (i.useEffect(() => {
    if (!!t) {
      if (!u) {
        r.Z.escapeToDefaultChannel(n);
        return
      }
    }
  }, [n, t, u]), null != l && u) ? (0, a.jsx)(m, {
    guild: l
  }) : (0, a.jsx)(d.Z, {
    channelId: void 0
  })
}