t(47120);
var n = t(470079),
  i = t(399606),
  a = t(230711),
  l = t(663389),
  r = t(981631),
  o = t(526761);
let c = new Set(Object.values(o.NB)),
  E = e => null != e && c.has(e);
s.Z = () => {
  let e = (0, i.e7)([l.Z], () => {
      let e = l.Z.getSubsection();
      return E(e) ? e : o.NB.USER_PROFILE
    }),
    s = n.useCallback(s => {
      if (e !== s) a.Z.setSection(r.oAB.PROFILE_CUSTOMIZATION, s)
    }, [e]);
  return {
    subsection: e,
    setSubsection: s
  }
}