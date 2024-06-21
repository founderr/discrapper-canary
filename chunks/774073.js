"use strict";
n.d(t, {
  z6: function() {
    return _
  }
});
var i = n(470079),
  r = n(683076),
  s = n(442837),
  o = n(224706),
  a = n(669764),
  l = n(539746);
let u = e => !1 === e.themes.includes(r.i.EROTIC) && null != e.summary && e.summary.length > 0,
  _ = e => {
    let t = a.Z.getGame(e);
    return null != t && !1 === t.themes.includes(r.i.EROTIC) && null != t.summary && t.summary.length > 0
  };
t.ZP = e => {
  let {
    location: t,
    applicationId: n = ""
  } = e, r = (0, l.x)(t);
  i.useEffect(() => {
    r && null != n && "" !== n && o.Z.getDetectableGamesSupplemental([n])
  }, [n, r]);
  let _ = (0, s.e7)([a.Z], () => a.Z.getGame(n)),
    c = i.useMemo(() => null != _ && u(_), [_]);
  return r && c
}