"use strict";
var i = n(470079),
  r = n(442837),
  s = n(224706),
  o = n(669764),
  a = n(539746);
t.Z = e => {
  let {
    location: t,
    applicationId: n = ""
  } = e, l = (0, a.x)(t);
  i.useEffect(() => {
    l && s.Z.getDetectableGamesSupplemental([n])
  }, [n, l]);
  let u = (0, r.e7)([o.Z], () => o.Z.getGame(n));
  return l && null != u && null != u.summary && u.summary.length > 0
}