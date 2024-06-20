"use strict";
t.d(s, {
  P: function() {
    return c
  }
}), t(47120);
var n = t(470079),
  a = t(979554),
  r = t(442837),
  i = t(597688),
  l = t(365943),
  o = t(25251);
let c = () => {
  let e = (0, r.e7)([i.Z], () => i.Z.products);
  n.useEffect(() => {
    let s = [...e.values()].filter(e => e.type === a.Z.PROFILE_EFFECT).some(e => {
      let s = e.items[0].id;
      return null != s && null == o.Z.getProfileEffectById(s)
    });
    (0, l.z)(s)
  }, [e])
}