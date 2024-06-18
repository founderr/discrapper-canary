"use strict";
t.d(s, {
  P: function() {
    return c
  }
}), t(47120);
var n = t(470079),
  a = t(979554),
  r = t(442837),
  l = t(597688),
  i = t(365943),
  o = t(25251);
let c = () => {
  let e = (0, r.e7)([l.Z], () => l.Z.products);
  n.useEffect(() => {
    let s = [...e.values()].filter(e => e.type === a.Z.PROFILE_EFFECT).some(e => {
      let s = e.items[0].id;
      return null != s && null == o.Z.getProfileEffectById(s)
    });
    (0, i.z)(s)
  }, [e])
}