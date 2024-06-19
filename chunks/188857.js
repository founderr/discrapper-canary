t.d(s, {
  Z: function() {
    return c
  }
}), t(47120), t(724458), t(653041);
var l = t(470079),
  n = t(442837),
  i = t(749210),
  a = t(911969),
  r = t(271383),
  o = t(594174),
  d = t(823379);

function c(e, s) {
  let [t, c] = (0, n.Wu)([r.ZP], () => null == s || null == e ? [
    [],
    []
  ] : Object.values(s).reduce((s, t) => {
    if (t.type !== a.BN.MEMBER) return s;
    let l = t.id;
    return r.ZP.isMember(e, l) ? s[0].push(l) : s[1].push(l), s
  }, [
    [],
    []
  ]), [e, s]);
  return l.useEffect(() => {
    c.length > 0 && null != e && i.Z.requestMembersById(e, c, !1)
  }, [c, e]), (0, n.Wu)([o.default], () => t.map(o.default.getUser).filter(d.lm), [t])
}