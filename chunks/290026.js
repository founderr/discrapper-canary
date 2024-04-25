"use strict";
a.r(t), a.d(t, {
  useReloadProfileEffectWhenConfigsAreMissing: function() {
    return u
  }
}), a("47120");
var l = a("470079"),
  s = a("979554"),
  r = a("442837"),
  i = a("597688"),
  n = a("365943"),
  o = a("25251");
let u = () => {
  let e = (0, r.useStateFromStores)([i.default], () => i.default.products);
  l.useEffect(() => {
    let t = [...e.values()].filter(e => e.type === s.CollectiblesItemType.PROFILE_EFFECT).some(e => {
      let t = e.items[0].id;
      return null != t && null == o.default.getProfileEffectById(t)
    });
    (0, n.fetchUserProfileEffects)(t)
  }, [e])
}