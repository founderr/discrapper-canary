t(47120), t(653041);
var a = t(470079),
  l = t(442837),
  n = t(430824),
  i = t(496675),
  o = t(771845),
  r = t(99325),
  c = t(273387),
  d = t(981631);
s.Z = (e, s) => {
  let [t, u] = a.useState(!1), C = (0, l.e7)([c.Z], () => c.Z.getAdminGuildEntryIds(s)), m = (0, l.Wu)([o.ZP, n.Z, i.Z], () => {
    let s = o.ZP.getFlattenedGuildIds(),
      t = [];
    return s.forEach(s => {
      let a = n.Z.getGuild(s);
      null != a && i.Z.can(d.Plq.ADMINISTRATOR, a) && a.id !== e && t.push(a)
    }), t
  }, [e]), E = a.useCallback(async () => {
    u(!0), await r._Q(s, m.map(e => e.id)), u(!1)
  }, [s, m]);
  a.useEffect(() => {
    E()
  }, []);
  let _ = a.useMemo(() => m.filter(e => !(null == C ? void 0 : C.has(e.id))), [m, C]);
  return {
    availableGuilds: _,
    addedGuilds: a.useMemo(() => m.filter(e => null == C ? void 0 : C.has(e.id)), [m, C]),
    loading: t
  }
}