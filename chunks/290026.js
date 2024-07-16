s.d(t, {
  P: function() {
return c;
  }
}), s(47120);
var n = s(470079),
  r = s(979554),
  a = s(442837),
  o = s(597688),
  i = s(365943),
  l = s(25251);
let c = () => {
  let e = (0, a.e7)([o.Z], () => o.Z.products);
  n.useEffect(() => {
let t = [...e.values()].filter(e => e.type === r.Z.PROFILE_EFFECT).some(e => {
  let t = e.items[0].id;
  return null != t && null == l.Z.getProfileEffectById(t);
});
(0, i.z)(t);
  }, [e]);
};