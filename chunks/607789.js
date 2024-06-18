"use strict";
n(47120), n(724458);
var i = n(470079),
  r = n(442837),
  s = n(25251),
  o = n(731896);
t.Z = e => {
  let [t, n] = i.useState(e), [a, l] = i.useState(s.Z.getProfileEffectById(e));
  (0, o.V)(e);
  let u = (0, r.e7)([s.Z], () => s.Z.profileEffects),
    _ = u.reduce((t, n, i) => (n.id === e && (t = i), t), 0),
    [, c] = i.useState(_),
    d = i.useRef(_);
  return i.useEffect(() => {
    n(e), l(s.Z.getProfileEffectById(e))
  }, [e, u]), {
    increment: () => {
      let e = (d.current + 1) % u.length;
      d.current = e, c(e), n(u[e].id), l(u[e])
    },
    decrement: () => {
      let e = 0 === d.current ? u.length - 1 : d.current - 1;
      d.current = e, c(e), n(u[e].id), l(u[e])
    },
    id: t,
    preset: a
  }
}